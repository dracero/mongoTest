import React from 'react';
var io = require("socket.io-client");
var $ = require('jquery');


export class ToggleDB extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
      
  }

  

handleClick() {
    var socket = io.connect('http://localhost:3000');  
    socket.on('notes', function(data){
        var html = '';
       
        for (var i = 0; i < data.length; i++){
            // We store html as a var then add to DOM after for efficiency
            html += '<li>' + data[i].email + '</li>'
            
        }
        $('#notes').html(html)
        
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        DBMY
      </button>
    );
  }
}

