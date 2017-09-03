import React from 'react';
var express = require('express')
var app = express()
var $ = require('jquery');


export class ExpressDB extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
      
  }

  

handleClick() {
    // GET method route
app.get('http://localhost:3000/', function (req, res) {
  res.send('GET request to the homepage')
  var html = '';
    for (var i = 0; i < res.length; i++){
            // We store html as a var then add to DOM after for efficiency
            html += '<li>' + res[i].email + '</li>'
            
        }
        $('#notes').html(html)
        
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        EXDB
      </button>
    );
  }
}


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


