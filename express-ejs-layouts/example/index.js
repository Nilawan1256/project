var path = require('path');
var express = require('express');
var expressLayouts = require('..');

var app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)

app.use(expressLayouts);

app.get('/', function(req, res) {
  res.locals = {
    name: 'name',
    id: 'id',
    address: 'address',
    
    
  };
  res.render('view', {
    // additional locals, a custom layout, or other options can be defined here
  });
});

app.post('/show', function(req, res) {
  var name = req.body.name,
      id = req.body.id,
      address = req.body.address;
      
  // ...
  res.render('show', {
    name : req.body.name,
    id : req.body.id,
    address : req.body.address,
  });
});

var port = 3000;
app.listen(port, function() {
  console.log('Listening on http://localhost:%s/', port);
});

