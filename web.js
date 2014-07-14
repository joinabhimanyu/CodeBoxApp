var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.logger());

app.get('/', function(request, response) {
   response.sendfile(__dirname + '/public/index.html'); 
});

app.get('/windows',function(request, response) {
   response.sendfile(__dirname + '/public/windows.html'); 
});

app.get('/Hello', function(request, response) {
    response.send('Hello World from CodeBox');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});