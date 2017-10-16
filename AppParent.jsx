import React from 'react';
import {Soluc4} from './App3.jsx';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pepe: "" };
    this.changeName = this.changeName.bind(this);
  }
 
  componentDidUpdate(){
	  if (this.state.pepe==8.38){
	                              alert("Muy bien!!! "+this.state.pepe);
	  } else alert("Revisá tus cálculos");	  
	 
	}//este método se llama inmediatamente después de hacer el update
  
  changeName(newName) {
    this.setState({
      pepe: newName
	  
    });
	 
  }

  render() {
    return <Soluc4  onChange={this.changeName} />
  }
}
 
export default Parent;