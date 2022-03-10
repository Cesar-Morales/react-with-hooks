import React, { Component } from 'react'

//minuto 2
//https://www.udemy.com/course/react-with-hooks-for-beginners/learn/lecture/28305280#contente

export default class Form extends Component {

  constructor(){
    super();
    this.state = { value: "Escrito antes "};
  }

  handlerFormSubmit = (event) => {
    event.preventDefault();
    // NO CONVENIENTE 
    //let value = document.querySelector("#name").value;
    //alert(value)
    
    // CONVIENE
    alert(this.state.value)
  };

  handleInputChange(event) {
    this.setState({ value: event.target.value })
  } 

  render() {
    return (
      <form onSubmit={this.handlerFormSubmit}> 
          <input id='name' type="text" value={this.state.value} onChange={(event) => this.handleInputChange(event)}/>
          <input type="submit"/> 
      </form>
    )
  }
}
