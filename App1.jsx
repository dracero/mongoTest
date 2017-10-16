import React from 'react';
 
 class Soluc2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: "soluc2.html"};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({message: "soluc2.html" }));
	window.open(this.state.message, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=50,width=50,height=40");
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Resultado
      </button>
    );
  }
}

export default Soluc2;