# Food_Order_Commuity
Commuity page that can help to decide what to eat and with whom

## Requirement

* Python 3

Used Package 
``` pip install flask
pip install pyodbc
pip install pandas
pip install sklearn
pip install scipy 
```

* Tibero

DBMS made by Tmax Soft <br>
Detail Link : [TmaxSoft](https://kr.tmaxsoft.com/product/productViewDB.do?prod_cd=tibero&detail_gubun=prod_main)

## Motive

It is quite difficult to find people to share meals at university or at work, and to choose restaurant.
So I want to make a commuity web page, which can help to find people to share meals and to choose restaurant.
In this page, You can make room for people to eat together. You have to choose the restaurant where you want.
Additionally, these days when calculating after a mealone person pays all and the others sends money to him.
So, this web page stores all the money you have to give and get! You won't feel awkward with your friends and money anymore. 

## How to Use

* Login Page

You can Sign in and Sign up in this page<br><br>
<img src="https://github.com/hiasince/Food_Order_Commuity/blob/master/images/3.png" width="400" height="200"><br>

* Main Page

After Login, You can see the remmomend food list on the left and the list that contain people who have to give money or get money from you.<br><br>
<img src="https://github.com/hiasince/Food_Order_Commuity/blob/master/images/4.png" width="400" height="200"><br>

* Create Room Page

You can search the restaurant for meal. You can see it's menu also. after you choose, you have to set the room name, password(optional), maximum people.<br><br>
<img src="https://github.com/hiasince/Food_Order_Commuity/blob/master/images/5.png" width="400" height="200"><img src="https://github.com/hiasince/Food_Order_Commuity/blob/master/images/6.png" width="400" height="200"><br>

* Join Room Page

You can choose the menu what you want. After you choose menu, you have to ready. If all the members of the room are ready, room creater can choose the person who will pay. It will store in database.<br><br>
choosing menu dialog and after choosing menu<br>
<img src="https://github.com/hiasince/Food_Order_Commuity/blob/master/images/8.png" width="400" height="200"><img src="https://github.com/hiasince/Food_Order_Commuity/blob/master/images/9.png" width="400" height="200"><br>
Ready state and after all member of the room are ready, choosing person who will pay<br><img src="https://github.com/hiasince/Food_Order_Commuity/blob/master/images/10.png" width="400" height="200"><img src="https://github.com/hiasince/Food_Order_Commuity/blob/master/images/11.png" width="400" height="200"><br>

## Used Algorithm for Recommender System

### K-means Algorithm

[K-means](https://en.wikipedia.org/wiki/K-means_clustering)
Clustering the person with K-means algorithm.

### Jaccard Similarity

I use Jaccard Similarity for setting the distance user each other. Make a Set with food that user eat. I use this table for K-means algorithm<br><br>
<img src="https://github.com/hiasince/Food_Order_Commuity/blob/master/images/1.png" width="400" height="200">
<img src="https://github.com/hiasince/Food_Order_Commuity/blob/master/images/2.png" width="400" height="200"><br>
