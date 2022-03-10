import React from 'react';
import Form from './components/Form'
//import App2 from './components/App2'      ------> ESTA ES LA PRIMER APP

/* Class Component */
class App extends React.Component{
    render(){
        return(
             <>
                {/*<App2/>  ESTA ES LA PRIMER APP */}
                <Form/>
             </>
        );
    }
}

export default App;