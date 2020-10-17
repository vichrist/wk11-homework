var express = require('express'); // importing express module

var fs = require('fs'); // importing file modules 

var path = require('path');

var app = express(); //using node module express to create a server 

var PORT = process.env.PORT || 3000;

app.use(express.static('public'));  // server is serving static content & rendering both index and note HTMLs
app.use('/assets', express.static('./assets'));

app.use(express.json()); //middleware to handle data parsing 
app.use(express.urlencoded({ extended: true})); 

require("./routes/htmlRoutes")(app); // directing the route for the HTML to the server
require("./routes/apiRoutes")(app);

app.listen(PORT, () => console.log('Listening on PORT' + PORT)); //set up PORT & listener



