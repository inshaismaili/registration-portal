# registration-portal
a registration  portal for people to sign in and sign up
![home](https://user-images.githubusercontent.com/44523159/47640413-9022c380-db89-11e8-8c57-1eec1b4fc86d.PNG)
![homepage](https://user-images.githubusercontent.com/44523159/47640416-90bb5a00-db89-11e8-9f9b-d74137e6d34c.PNG)
![invalidpass](https://user-images.githubusercontent.com/44523159/47640417-9153f080-db89-11e8-959d-fe1cfddf4ab8.PNG)
![invaliduser](https://user-images.githubusercontent.com/44523159/47640419-91ec8700-db89-11e8-9a28-61d7cbf8d5d1.PNG)
![login](https://user-images.githubusercontent.com/44523159/47640421-91ec8700-db89-11e8-869b-db1b829c2220.PNG)
![registration](https://user-images.githubusercontent.com/44523159/47640422-931db400-db89-11e8-82be-dd118f12ed68.PNG)
![signin](https://user-images.githubusercontent.com/44523159/47640429-95800e00-db89-11e8-9a0a-f42f37c562b1.PNG)
![validuser](https://user-images.githubusercontent.com/44523159/47640432-96b13b00-db89-11e8-843c-e3460f7b2da7.PNG)
steps frontend step1:created a homepage which gives the option of signingin and singningup if user has already registered he will opt for the option signin,for signing in the user will have to fill in his userid and password. if the userid and password matches the user will be redirected to home that will display WELCOME, else an error message, "user not registered" or "invalid password" will be displayed. For new users there is an option of signing up. The user will have to enter all details,once he has entered,he can then sign in to the portal as now he has been registered. 

Backend: For backend i have used nodejs and mongodb nodejs is a webserver that is handled by the user mongodb is a databaseserver that is handled by the machine I have used express for framework. Routing is being done by get and post request mongo is a variable,mongoose is being used to establish a connection between datasrver and webserver. Bodyparser is a middleware which works between request and response. Bodyparser is used so that so that the data that is recieved by the post request is converted into readable form . urlep used is the object of bodyparser. var app=express()is the object of the express. mongo.connect is used to establish a connection to the database.
