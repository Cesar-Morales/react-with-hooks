import React, { useState } from 'react'


/* AHORA */
const Counter = () => {
  const [clicks, setClicks] = useState(0);

  function handleButtonCLick(){
    setClicks(clicks+1);
  }

  return (
    <>
      <span> You clicked {clicks} clicks </span>
      <br/>
      <button onClick={handleButtonCLick}>Click me!</button>
    </>
  )
}


export default Counter;



/*  ANTES
export default class Counter extends Component {
  {
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
*/

