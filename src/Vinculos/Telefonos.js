
import React from 'react';
import './App.css';
import  Barra  from './Barra.js';
import  Mensaje  from './Mensaje.js';
import  GrupoCartas  from './GrupoCartas.js';
import Slider  from './Slider.js';
import  PiePagina  from './PiePagina.js';
import BarraResponsive from './BarraResponsive';





class Telefonos extends React.Component {


constructor(){

super();

this.state={};



}




  render() {



  return(
<div className="">

<BarraResponsive/>
<Barra/>

<div className="container justify-content-center">






</div>
<PiePagina/>

    </div>
  );


}

}
export default  Telefonos;


