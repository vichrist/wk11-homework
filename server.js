  
var express = require('express'); // importing express module

var app = express(); //using node module express to create a server 

var PORT = process.env.PORT || 8080;

app.use(express.json()); //middleware to handle data parsing 
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public')); // server serving static content & rendering both index and note HTMLs

require('./routes/apiRoutes')(app); // directing the routes for server
require('./routes/htmlRoutes')(app); 

app.listen(PORT, () => console.log('App Listening on PORT ' + PORT)); //set up PORT & listener


