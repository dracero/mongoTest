import React from 'react';
var $ = require('jquery');

export class ExpressDB extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
      
  }

  

handleClick() {
    // GET method route
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var res = xhttp.responseText;
    }
};
xhttp.open("GET", 'http://localhost:3000', true);
xhttp.send();
    
  var html = '';
    for (var i = 0; i < res.length; i++){
            // We store html as a var then add to DOM after for efficiency
            html += '<li>' + res[i].email + '</li>'
            
        }
        $('#notes').html(html)
        
    
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        EXDB
      </button>
    );
  }
}




