#!/usr/bin/env python
# coding: utf-8

# ## Kautilya Assignment 3

# In[1]:


get_ipython().system('pip install selenium')


# In[2]:


import pandas as pd
from bs4 import BeautifulSoup
import selenium
import re
import time


# In[3]:


from selenium.webdriver import Chrome, Firefox
from selenium.webdriver.support.ui import Select
from selenium import webdriver


# In[4]:


# subject to change to your own driver
# browser = Firefox()
browser = webdriver.Firefox()
url='https://appsrv.pace.edu/ScheduleExplorerLive/'
browser.get(url)


# ## Interaction 

# In[5]:


term=Select(browser.find_element_by_id('checkterm'))
term.select_by_visible_text('Fall 2020')
time.sleep(1)


# In[6]:


level=Select(browser.find_element_by_id('level'))
level.select_by_visible_text('Graduate')
time.sleep(1)


# In[7]:


subject=Select(browser.find_element_by_id('subject'))
subjects= [subject.text for subject in subject.options]
time.sleep(1)


# In[8]:


IS_text=[subject for subject in subjects if 'IS' in subject][0]
subject.select_by_visible_text(IS_text)
search_button=browser.find_element_by_id('submitbutton')
search_button.click()


# In[9]:


time.sleep(3)
## Increase the table entries
display_entries=Select(browser.find_element_by_name('mainResultsTable_length'))
display_entries.select_by_value('100')


# ### 1. Extract the list from the page

# In[10]:


html=browser.page_source
courses=pd.read_html(html)[0]
soup=BeautifulSoup(html,'html.parser')
links=soup.find_all('a',{'href':True})

## Links for CRN numbers
links_selected=soup.find_all('a',{'data-toggle':'modal'})
crn_links_array=[link for link in links_selected  if link.next.strip().isnumeric()]


# ### 2. Browse the links 
# function to return one pop up message

# In[11]:


def read_crn_html(crn_link):
    link=browser.find_element_by_partial_link_text(crn_link.text.strip())
    time.sleep(1)
    link.click()
    popup_view=browser.find_element_by_id('modalBodyContentDiv')
    
    df=pd.read_html(popup_view.get_attribute('innerHTML'))[0].T
    df=pd.read_html(popup_view.get_attribute('innerHTML'))[0].T
    header=df.iloc[0]
    df=df[1:]
    df.columns=header
   
    popup_head=browser.find_element_by_class_name('modal-header')
    header_close_button=popup_head.find_element_by_tag_name('Button')
    time.sleep(2)
    header_close_button.click()
    return df


# In[12]:


dfs=[]
for crn_link in crn_links_array:
    try:
        df=read_crn_html(crn_link)
        dfs.append(df)
    except Exception:
        continue


# In[13]:


all_course_desc=pd.concat(dfs)


# In[14]:


all_course_desc.head()


# ## Combine datasets 

# In[15]:


all_course_desc['CRN:']=pd.to_numeric(all_course_desc['CRN:'])


# In[16]:


main_table=pd.read_html(html)[0]


# In[17]:


main_table.head()


# In[18]:


all_course_desc=all_course_desc.rename({'CRN:':'CRN'}, axis='columns')
all_course_desc.head()


# In[19]:


combined_IS=main_table.merge(all_course_desc, how='left', on='CRN')
combined_IS.columns


# In[20]:


combined_IS


# In[21]:


def clean_description(text,word='Course Description:'):
    if isinstance(text,str) and text.startswith(word):
        index = text.index(word) + len(word)
        return text[index:]
    else:
        return text


# In[22]:


combined_IS['DESCRIPTION:'] = combined_IS['DESCRIPTION:'].apply(clean_description)


# In[23]:


import nltk
nltk.download("stopwords")
nltk.download('wordnet')


# In[24]:


stopword = nltk.corpus.stopwords.words('english')
ps = nltk.PorterStemmer()
wn = nltk.WordNetLemmatizer()

def clean(text):
    ### Remove non-space alpha-num character
    text=re.sub(r'[^\w\s]',' ',text).lower()   
    ### Split with non-alphanumeric character 
    words=re.split(r'\W+', text)
    ### Remove stop words            
    non_stop_words=[word for word in words if word not in stopword]        
    ### Clean text
    lem_words= [wn.lemmatize(word) for word in non_stop_words]            
    clean_text= ' '.join(lem_words)
    return clean_text


# In[25]:


combined_IS.columns


# In[26]:


df_IS = combined_IS[['CRN', 'Subject', 'Course#', 'Title','DESCRIPTION:']]


# In[27]:


df_IS = df_IS.dropna()
df_IS


# In[28]:


df_IS['clean_text'] = df_IS['DESCRIPTION:'].apply(clean)
df_IS


# In[29]:


from sklearn.feature_extraction.text import CountVectorizer
count_vector=CountVectorizer()
X_counts = count_vector.fit_transform(df_IS['clean_text'])
vocab=count_vector.get_feature_names()
vs_model_data=pd.DataFrame(X_counts.toarray(), columns=vocab)
vs_model_data


# ### Top 20 words

# In[30]:


top_words = vs_model_data.sum().sort_values(ascending=False)
top_words.head(20)


# ### Longest Description

# In[31]:


top_len = df_IS['DESCRIPTION:'].agg(len).sort_values(ascending=False)


# In[32]:


# top_len.idxmax()
top_len


# In[33]:


top_index = top_len.idxmax()
top_index


# In[34]:


df_IS


# In[35]:


df_IS_index = df_IS.index
df_IS_index


# In[36]:


highest_word_course_index = df_IS_index.get_loc(top_index)
highest_word_course_index


# In[37]:


df_IS.iloc[highest_word_course_index]


# ### Number of words

# In[39]:


n_words = vs_model_data.iloc[highest_word_course_index].sum()
n_words

