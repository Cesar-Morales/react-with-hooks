import React, {useState, useEffect} from "react";

/*class Seconds extends React.Component {
    
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
        return <span>You spent {this.state.counter} seconds</span>
    }
}*/

const Seconds = () => {
    const [ counter, setCounter] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(counter => counter+1)
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, [])

    // para lograr que se llame esto cuando se desmonta
    // agregar ,[] luego de la funcion flecha y hacer un
    // cambio en el js, guardar y ver 
    useEffect(() => {
        console.log("everytime")

        return () => {
            console.log("Called before the render of the next update")
        }
    })    

    return <span>You spent {counter} seconds</span>
}

export default Seconds