# ScandiWeb - Junior Developer Test Task!



## Who am I?

- Junior Front-end React developer :atom:
- Googling Specialist :white_check_mark:
- Capricorn :capricorn:

**[My portfolio ](https://timponarenko.netlify.app/)**


## About Project


This is small full stack Project [Go to see live](https://productlistcrud.netlify.app)

I use several technologies:

:green_circle: ReactJS as FrontEnd<br/>:green_circle: NodeJS as BackEnd<br/>:green_circle: mySQL as Database

And according [Instruction](https://www.notion.so/Junior-Developer-Test-Task-1b2184e40dea47df840b7c0cc638e61e) provided by [ScandiWeb](https://scandiweb.com/) 
I tried to create working application.

I belive, I did't it! :tada:



## Technical Side



### :green_circle: Front-End 

React JS version: 18.2.0

- In React logic I using [Hooks](https://reactjs.org/docs/hooks-intro.html) 
- For visual side - [sass](https://sass-lang.com/) module. 
- Request generated with [Axios](https://axios-http.com/docs/intro) HTTP client and sending to NODE server(Back-End).
- React App uploaded on [Netlify](https://productlistcrud.netlify.app/) hosting.


### :green_circle: Back-End

NODE JS version: v16.14.0

This is small API CRUD server and can receive request from Front-End Side. <br/>:arrow_right: (Create - Read - Update - Delete) 	:arrow_left:

Node Server uploaded on [Heroku](https://nodeapicrud.herokuapp.com/) hosting.

Also you can check git Repository [Here](https://github.com/bladwing/nodecrudapi).

---

Why I choose Netlify and Heroku? :bulb: 

- Easy to use and free
- Connected to Git Repositories
- Auto Deploy & Bilding projects
- Checking Errors and Dependencies
- Good online "show room"
- Free SSL certificate


### :green_circle: DataBase 

mySQL version: 5.7.39

In Database I create product table with product indexes 

And structure seems like: 

![](https://i.imgur.com/foQcFtg.png)

![](https://i.imgur.com/U1j1f8d.png)




mySQL server installed on [public hosting](https://www.cloud9.ge/) 



Requests map seems like: 

React App (requests) :arrow_right: NODE server (requests) :arrow_right: mySQL database <br/>React App (requests):arrow_left: NODE server (requests) :arrow_left: mySQL database


## :green_circle: How to use? 


If you need to start my project on your computer, you need to done several steps:

React App :atom:

Run in [Git bush](https://git-scm.com/downloads):

```
git clone git@github.com:bladwing/productsflow.git
cd productsflow/FrontEnd
npm i
npm start

localhost:3000
```


Node Server :electron:

Run in another Git bush window:

```

cd nproductsflow/BackEnd
npm i
npx nodemon

localhost:5000
```

- **Create mySQL server**

I using [XAMPP ](https://www.apachefriends.org/index.html) development environment

- **If you use outside or another mySql server -> Check connection parametrs in NODE server**

```
BackEnd/config/database.js
```

- **Create in phpMyAdmin panel table with name - productflow**
- **Import database from file product_flow.sql to your table -> productflow** 
- **Enjoy Life.**



--- 

### Thank you for your attention! :high_brightness: 

![](https://i.imgur.com/1xEdYDY.gif)



