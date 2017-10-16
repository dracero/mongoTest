import React from 'react';
 
export class Soluc4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {valor: ""};
    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
  }
  
  
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <select onChange={this.handleChange}>
        <option value=""> </option>
        <option value="8.38">8.38</option>
        <option value="9.45">9.45</option>
        <option value="4.27">4.27</option>
      </select>
	  
    );
  }
}

