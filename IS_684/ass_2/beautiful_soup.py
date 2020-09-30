from bs4 import BeautifulSoup
import requests
import pandas as pd

nigerian_scam = "http://www.419scam.org/emails/"
webpage = requests.get(nigerian_scam)
print(webpage)


def sense(url):
    webpage = requests.get(url)
    print("Response of the url: " + url)
    print(webpage)


kautilya_save = "http://sensehack.github.io/"
sense(kautilya_save)


# Getting links of the mails
html_obj = webpage.text
start_index = html_obj.find(
    '<!-- EMAILS BY DATE -->') + len('<!-- EMAILS BY DATE -->')
end_index = html_obj.find('<!-- /EMAILS BY DATE -->')
# print(start_index)
# print(end_index)
beautify_webpage = BeautifulSoup(
    html_obj[start_index:end_index], 'html.parser')
# print(beautify_webpage)

# Appending the href + base URL
clean_link_lists = []
all_links = beautify_webpage.find_all('a')
for link in all_links:
    # print(link)
    # print(link.get('href'))
    # print(len(link.text.strip()))
    if len(link.text.strip()) == 2:
        clean_link_lists.append(nigerian_scam+str(link.get('href')))
        # print("Hello")

# print(clean_link_lists)


# Create a table of these list
def get_day_mail_list(url_mail):
    page_mail = requests.get(url_mail)
    base_url = url_mail[:-9]
    base_date = url_mail[-20:-10]

    html_obj = page_mail.text
    # print(html_obj)
    start_index = html_obj.find(
        '<!-- INSERTLIST -->') + len('<!-- INSERTLIST -->')
    end_index = html_obj.find('<!-- /INSERTLIST -->')
    # print(start_index)
    # print(end_index)
    mail_table_soup = BeautifulSoup(
        html_obj[start_index:end_index], 'html.parser')

    # Appending the href + base URL
    day_mails = []
    for mail in mail_table_soup.find_all('a'):
        link = str(base_url)+str(mail.get('href'))
        mail_subject = mail.text.strip()
        day_mails.append([link, mail_subject, base_date])

    return day_mails


# test = 'http://www.419scam.org/emails/2017-04/25/index.htm'
# print(get_day_mail_list(test))


# Download all mails
def download_mails(mail_list_url):
    i = 0
    mail_list = []
    while i < len(mail_list_url)/10:
        day_mails = get_day_mail_list(mail_list_url[i])
        mail_list.extend(day_mails)
        i += 1
    return mail_list


all_mail_list = download_mails(clean_link_lists)
# Panda visualize
mail_pd = pd.DataFrame(all_mail_list, columns=['URL', 'Date', 'Link Text'])
print(mail_pd)
