var express=require('express');
var mongo=require('mongoose');
var bodyparser = require('body-parser');
//middleware for getting form body values
var urlep=bodyparser.urlencoded({extended:false});
var app=express();
mongo.connect('mongodb://localhost:27017/register');
//creation of schema
var regSchema = new mongo.Schema({
	name:String,
	email:String,
	userid:String,
	password:String
});
//creating collection
var Register=mongo.model('Register',regSchema);
//saving a record
// var newregistration=Register({name:'insha',email:'insha.shousha@gmail.com',userid:'insha123',password:'xyz'}).save(function(error){
// 	if (error)
// 	{
// 		throw error;
// 	}
// 	console.log('datasaved');
// });
//routing
app.get('/',function(request,response)
{console.log("recieved request");//used to print on server side
response.sendFile(__dirname+'/home.html');

});

app.get('/login',function(request,response)
{console.log("login request");//used to print on server side
response.sendFile(__dirname+'/login.html');

});
app.get('/registration',function(request,response)
{console.log("registration request");//used to print on server side
response.sendFile(__dirname+'/registration.html');

});
app.get('/homepage',function(request,response)
{console.log("homepage request");//used to print on server side
response.sendFile(__dirname+'/homepage.html');

});

app.post('/registration',urlep,function(request,response)
{console.log("registration post request");//used to print on server side

var newregistration=Register({name:request.body.name,email:request.body.email,userid:request.body.userid,password:request.body.password}).save(function(error){
	if (error)
	{
		throw error;
	}
	console.log('datasaved');
	response.redirect('/');
});

});

app.post('/login',urlep,function(request,response)
{
	console.log("login post request");//used to print on server side
	Register.find({userid:request.body.userid},function(error,data){
		if(error)
		{
			throw error;
		}
		console.log(data);
		if(data.length>0)
		{
		 	if(request.body.password===data[0].password)
				response.redirect('/homepage');
		  	else
		        response.end('invalid password');
		}
		else 
			response.end('user not registered');
	

});


});
app.listen(3000);
console.log("server listening");

