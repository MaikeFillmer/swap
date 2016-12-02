// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');
var mysql      = require('mysql');

//connection
var connection = require('./config/connection.js');


// EXPRESS CONFIGURATION
var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener
app.use('/static', express.static(path.join(__dirname, 'public')))

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//method override
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

//Start server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});

//ROUTES

require('./controller.js')(app); 


