import React from 'react';

import './Barra.css';
import { BrowserRouter as Router,Route } from "react-router-dom";
import Principal from './Principal';
import Computadoras from './Computadoras';
import Telefonos from './Telefonos';



class Barra extends React.Component {


constructor(){

super();

this.state={



};



}




  render() {



  return(
<div className="">

<Router>

<Route path="/" exact Component={Principal}/>

<Route path="/Telefonos" exact Component={Telefonos}/>

<Route path="/Computadoras" exact Component={Computadoras}/>

</Router>





    </div>
  );


}

}
export default  Enrutador;