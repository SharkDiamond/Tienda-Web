import React from 'react';
import './App.css';
import  Principal  from './Principal';
import Celulares from './Celulares.js';
import Computadoras from './Computadoras';
import Audifonos from './Audifonos';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Barra from './Barra';



class App extends React.Component {


constructor(){

super();

this.state={};



}




  render() {



  return(
<div className="">
<Router>

<Barra/>


<Route path="/" exact component={Principal}/>
<Route path="/Computadoras" exact component={Computadoras}/>
<Route path="/Telefonos" exact component={Celulares}/>
<Route path="/Audiculares" exact component={Audifonos}/>
</Router>
    </div>

  );


}

}
export default  App;
