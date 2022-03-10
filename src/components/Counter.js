import React, { Component } from 'react'

export default class Counter extends Component {
  
  constructor(){
      super();
      this.state = { counter: 0 };
      this.timer = null;
  }

  componentDidMount() {
      this.timer = setInterval(()=>{
          this.setState({ counter: this.state.counter+1})
      }, 1000);
  }

  componentWillUnmount() {
      clearInterval(this.timer);
  }

  render() {
    return (
      <span>{this.state.counter}</span>
    )
  }
}
