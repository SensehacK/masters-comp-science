#!/usr/bin/env python
# coding: utf-8

# In[11]:


from IPython.display import display
from sklearn import metrics
import graphviz
import os
from ipywidgets import interactive
from graphviz import Source
from IPython.display import SVG
from sklearn.datasets import load_wine
from sklearn import preprocessing
from sklearn import tree
from sklearn.tree import DecisionTreeClassifier, export_graphviz
import matplotlib.pyplot as plt
import pandas as pd
headers = ['Age', 'Workclass', 'Fnlwgt', 'Education', 'Education-num', 'Marital-status', 'Occupation',
           'Relationship', 'Race', 'Sex', 'Capital-gain', 'Capital-loss', 'Hours-per-week', 'Native_country', 'Salary_range']
traindata = pd.read_csv(
    "/Users/SensehacK/Documents/GitHub/Masters_Comp_Science/CS_608/Project_1/DataSets/Training.csv", header=None, names=headers)
traindata.head()


# In[38]:


traindata['Sex'].value_counts()


# # Sex
#

# In[39]:


traindata.groupby('Sex').Age.mean()


# # Sex Age

# In[40]:


count_countries = traindata['Native_country'].value_counts()
count_countries


# In[41]:


Total = traindata.Native_country.count()
Total


# In[42]:


count_Germany = count_countries[' Germany']
count_Germany
perGer = (count_Germany/Total)*100
perGer


# In[43]:


plt.hist(traindata['Education-num'])


# In[44]:


traindata.groupby('Salary_range').Salary_range.count()


# In[9]:


traindata.Age.count()


# In[10]:


traindata.groupby('Salary_range').mean()


# In[11]:


traindata.groupby('Salary_range').std()


# In[12]:


os.environ["PATH"] += os.pathsep + 'C:/Python/graphviz-2.38/release/bin/'


# In[13]:


d = graphviz.Digraph()
d.edge('Vöila', 'World')
d


# In[14]:


traindata.info()


# In[15]:


traindata.head()
traindata


# In[16]:


clean1 = {"Salary_range": {" <=50K": 0, " >50K": 1},
          "Sex": {" Female": 0, " Male": 1},
          "Native_country": {" United-States": 1, " Cambodia": 0, " England": 0, " Puerto-Rico": 0, " Canada": 0, " Germany": 0, " Outlying-US(Guam-USVI-etc)": 0, " India": 0, " Japan": 0, " Greece": 0, " South": 0, " China": 0, " Cuba": 0, " Iran": 0, " Honduras": 0, " Philippines": 0, " Italy": 0, " Poland": 0, " Jamaica": 0, " Vietnam": 0, " Mexico": 0, " Portugal": 0, " Ireland": 0, " France": 0, " Dominican-Republic": 0, " Laos": 0, " Ecuador": 0, " Taiwan": 0, " Haiti": 0, " Columbia": 0, " Hungary": 0, " Guatemala": 0, " Nicaragua": 0, " Scotland": 0, " Thailand": 0, " Yugoslavia": 0, " El-Salvador": 0, " Trinadad&Tobago": 0, " Peru": 0, " Hong": 0, " Holand-Netherlands": 0, " ?": 0},
          "Race": {" White": 1, " Asian-Pac-Islander": 0, " Amer-Indian-Eskimo": 0, " Other": 0, " Black": 0}}


# In[17]:


traindata.replace(clean1, inplace=True)
traindata


# In[10]:


testdata = pd.read_csv(
    "/Users/SensehacK/Documents/GitHub/Masters_Comp_Science/CS_608/Project_1/DataSets/Test.csv", header=None, names=headers)
testdata


# In[5]:


clean1 = {"Salary_range": {" <=50K.": 0, " >50K.": 1},
          "Sex": {" Female": 0, " Male": 1},
          "Native_country": {" United-States": 1, " Cambodia": 0, " England": 0, " Puerto-Rico": 0, " Canada": 0, " Germany": 0, " Outlying-US(Guam-USVI-etc)": 0, " India": 0, " Japan": 0, " Greece": 0, " South": 0, " China": 0, " Cuba": 0, " Iran": 0, " Honduras": 0, " Philippines": 0, " Italy": 0, " Poland": 0, " Jamaica": 0, " Vietnam": 0, " Mexico": 0, " Portugal": 0, " Ireland": 0, " France": 0, " Dominican-Republic": 0, " Laos": 0, " Ecuador": 0, " Taiwan": 0, " Haiti": 0, " Columbia": 0, " Hungary": 0, " Guatemala": 0, " Nicaragua": 0, " Scotland": 0, " Thailand": 0, " Yugoslavia": 0, " El-Salvador": 0, " Trinadad&Tobago": 0, " Peru": 0, " Hong": 0, " Holand-Netherlands": 0, " ?": 0},
          "Race": {" White": 1, " Asian-Pac-Islander": 0, " Amer-Indian-Eskimo": 0, " Other": 0, " Black": 0}}
testdata.replace(clean1, inplace=True)
testdata


# In[20]:


x_train = traindata.drop(['Salary_range', 'Workclass', 'Education',
                          'Marital-status', 'Occupation', 'Relationship'], axis=1)
x_train


# In[21]:


y_train = traindata['Salary_range']
y_train


# In[22]:


x_test = testdata.drop(['Salary_range', 'Workclass', 'Education',
                        'Marital-status', 'Occupation', 'Relationship'], axis=1)
x_test


# In[23]:


y_test = testdata['Salary_range']
y_test


# In[24]:


labels = ['Age', 'Fnlwgt', 'Education-num', 'Race', 'Sex',
          'Capital-gain', 'Capital-loss', 'Hours-per-week', 'Native_country']
labels


# In[25]:


estimator = DecisionTreeClassifier()
estimator.fit(x_train, y_train)


# In[26]:


graph = Source(tree.export_graphviz(estimator, out_file=None,
                                    feature_names=labels, class_names=['0', '1'], filled=True))
display(SVG(graph.pipe(format='svg')))


# In[27]:


y_pred = estimator.predict(x_test)


# In[28]:


print("Accuracy:", metrics.accuracy_score(y_test, y_pred))


# In[29]:


estimator1 = DecisionTreeClassifier(criterion="entropy")
estimator1.fit(x_train, y_train)


# In[30]:


graph1 = Source(tree.export_graphviz(estimator1, out_file=None,
                                     feature_names=labels, class_names=['0', '1'], filled=True))
display(SVG(graph1.pipe(format='svg')))


# In[31]:


y_pred = estimator1.predict(x_test)
print("Accuracy:", metrics.accuracy_score(y_test, y_pred))


# In[9]:


preddata = pd.read_csv(
    "/Users/SensehacK/Documents/GitHub/Masters_Comp_Science/CS_608/Project_1/DataSets/prediction.csv")
preddata


# In[33]:


preddata.replace(clean1, inplace=True)
preddata


# In[34]:


x_pred = preddata.drop(['Workclass', 'Education',
                        'Marital-status', 'Occupation', 'Relationship'], axis=1)
x_pred


# In[35]:


y1_pred = estimator.predict(x_pred)
y1_pred


# In[36]:


y2_pred = estimator1.predict(x_pred)
y2_pred
