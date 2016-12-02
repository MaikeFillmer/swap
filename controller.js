var path = require('path');
var orm = require('./config/orm.js');

module.exports = function(app){
	app.get('/', function(req,res) {
        res.sendFile(path.join(__dirname + '/index.html'));
        
    });
    
}
