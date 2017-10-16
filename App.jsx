import React from 'react';
 
 class Soluc1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: "soluc1.html"};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({message: "soluc1.html" }));
	window.open(this.state.message, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=430,height=400");
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Resultado
      </button>
    );
  }
}

export default Soluc1;

