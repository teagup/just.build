var express = require('express');
var app = express();

app.use(express['static'](__dirname + '/public'));
app.set('port', process.env.PORT || 3000);

// Here's our healthcheck url that the load balancer will ping to
// determine our server's health
app.get('/healthcheck', function(req, res){
  res.status(200).end();
});

app.get('/', function(req, res){
  res.sendFile('/index.html');
});

app.listen(app.get('port'), function(){
  console.log('Server listening on port ' + app.get('port'));
});
