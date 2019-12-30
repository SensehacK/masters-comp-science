#!/usr/bin/env python
# coding: utf-8

# In[28]:


import numpy as np
import networkx as nx
# You should have networkx ver 2.1 and above
import matplotlib.pyplot as plt
# You should have matplotlib ver 2.2.3 and above
#
from IPython.display import Image


# In[29]:


G = nx.Graph()


# In[30]:


type(G)


# Determining the type

# In[31]:


H = nx.path_graph(30)


# In[32]:


G.add_nodes_from(H)


# Adding nodes

# In[33]:


print(G.nodes())


# Printing G nodes and Drawing using networkx, matlab plt show function

# In[34]:


nx.draw(G)
plt.show() # display


# In[35]:


G.add_weighted_edges_from([(0,1,2.02),(0,3,4.45),(0,10,6.2),(1,10,5.8),(1,4,1.7),
                 (4,5,3.28), (5,7,4.28), (5,12,3.3), (3,2,5.53), (3,9,5.02), 
                 (3,17,10.81), (2,6,3.41), (2,8,4.64), (6,17,11.6), (8,13,8.45), 
                 (9,10,2.32), (9,17,7.1), (10,11,1.67), (11,12,2.16), (13,14,4.61), 
                 (13,16,7.32), (14,15,4.07), (14,17,13.47), (15,16,1.24), (15,17,8.81), 
                 (16,17,9.01), (17,18,2.02), (17,23,11.76), (17,24,8.42), (18,19,1.54), 
                 (18,25,6.17), (19,20,1.54), (19,26,4.72), (20,21,6.17), (20,28,9.32), 
                 (21,22,4.66), (21,28,6.66), (22,7,16.43), (23,24,2.18), (24,27,4.67), 
                 (25,26,1.86), (25,27,3.51), (27,29,11.60), (28,29,4.24)])


# added weights

# In[36]:


print(G.edges())


# showing nodes

# In[37]:


nx.draw(G)
plt.show() # display


# In[38]:


nx.draw(G, pos=nx.kamada_kawai_layout(G), with_labels=True, scale=30)


# adding weights and showing it

# In[39]:



pos = nx.kamada_kawai_layout(G)
edge_labels=dict([((u,v,), d['weight'])
                 for u,v,d in G.edges(data=True)])
plt.figure()
nx.draw(G,pos,edge_color='black', width=1,linewidth=3,       node_size=500,node_color='green', alpha=0.9,        labels={node:node for node in G.nodes()})
nx.draw_networkx_edge_labels(G,pos,edge_labels=edge_labels,font_color='black')
plt.axis('off')
plt.show()


# Printing networkx and listing dfs_with edges

# In[40]:


nx.draw_networkx_edge_labels(G, pos=nx.nx.kamada_kawai_layout(G))


# doing DFS traversal

# In[41]:


list(nx.dfs_edges(G, source=0))


# Doing BFs traversal

# In[42]:


list(nx.bfs_edges(G, source=0))


#  showing Miniming spanning tree 

# In[43]:


T=nx.minimum_spanning_tree(G)


# In[44]:


print(sorted(T.edges(data=True)))


# In[45]:


[len(c) for c in sorted(nx.connected_components(G), key=len, reverse=True)]


# In[46]:


nx.number_connected_components(G)


# In[47]:


[len(c) for c in sorted(nx.strongly_connected_components(G),key=len, reverse=True)

