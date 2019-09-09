import React from 'react';
import './App.css';
import  Principal  from './Principal';
import Celulares from './Celulares.js';
import Computadoras from './Computadoras';
import Audiculares from './Audiculares';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Barra from './Barra';
import Hardaware from './Hardaware';
import BarraResponsive from './BarraResponsive';

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
<BarraResponsive/>

<Route path="/" exact component={Principal}/>
<Route path="/Computadoras" exact component={Computadoras}/>
<Route path="/Telefonos" exact component={Celulares}/>
<Route path="/Audiculares" exact component={Audiculares}/>
<Route path="/Hardware" exact component={Hardaware}/>
</Router>
    </div>

  );


}

}
export default  App;
