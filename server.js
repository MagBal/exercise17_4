var express = require('express');
var app = express();
app.use(express.static('assets'));
app.get('/', function (req, res) {
    res.sendFile('/index.html');
});

app.get('/userform', function (req, res) {
    const response = {
        first_name: req.query.first_name,//klucz
        last_name: req.query.last_name//klucz
    };
    res.end(JSON.stringify(response));//obiekt przetworzony na typ string
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});

