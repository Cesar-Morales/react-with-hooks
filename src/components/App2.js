import React from 'react';
import Button from './Button'
import Header from './Header'
import Counter from './Counter'

/* Class Component */
class App2 extends React.Component{
    render(){
        return(
             <>
                <Header text="navbar"/>
                <Button text="Click me"/>
                <Counter/>
             </>
        );
    }
}

export default App2;