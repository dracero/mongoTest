import React from 'react';
var io = require("socket.io-client");
var $ = require('jquery');

export class ToggleIns extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
      
  }

handleClick() {
    var socket = io.connect('http://localhost:3000'); 
    var newNote = 'pepe@prueba.com'; 
    socket.emit('writer', {note: newNote})
}
render() {
    return (
      <button onClick={this.handleClick}>
        INSR
      </button>
    );
  }
}
