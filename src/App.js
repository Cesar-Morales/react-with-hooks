import React from 'react';
//import axios from 'axios';
import Search from './components/Search';
//import Seconds from './components/Seconds'; quinta
//import Form from './components/Form' SEC
//import App2 from './components/App2'      ------> ESTA ES LA PRIMER APP
//import Counter from './components/Counter' TERCERA
//import Test from './components/Test'  cuarta

/* Class Component */
class App extends React.Component{
    render(){
        return(
             <>
                {/*<App2/>  ESTA ES LA PRIMER APP */}
                {/*<Form/>  ESTA EN LA SEGUNDA*/}
                {/*<Counter/>  ESTA EN LA TERCERA*/}
                {/*<Test/> cuarta*/}
                {/*<Seconds/> quinta*/}
                <div className="ui grid conteiner center aligned">
                    <div className='column eight wide'>
                        <Search/>
                    </div>
                </div>
             </>
        );
    }
}

export default App;