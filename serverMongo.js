var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://admin:admin1234@localhost/admin';

MongoClient.connect(url, function(err, db) {
    app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");//allowing CORS
    db.collection('problemas').find().toArray((err, result) => {
        if (err) return console.log(err)
                   res.send(result);
    });
});
}); 


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});