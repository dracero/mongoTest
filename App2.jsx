import React from 'react';
 
 class Soluc3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: "soluc3.html"};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({message: "soluc3.html" }));
	window.open(this.state.message, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=200,height=40");
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Resultado
      </button>
    );
  }
}

export default Soluc3;