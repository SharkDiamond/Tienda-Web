import React from 'react';
import './App.css';
import  Barra  from './Barra.js';
import  Mensaje  from './Mensaje.js';
import  GrupoCartas  from './GrupoCartas.js';
import Slider  from './Slider.js';
import  PiePagina  from './PiePagina.js';
import BarraResponsive from './BarraResponsive';



class Principal extends React.Component {


constructor(){

super();

this.state={};



}




  render() {



  return(
<div className="">

<BarraResponsive/>
<Barra/>
<hr/>
<div className=" container justify-content-center">


<Mensaje texto="Bienvenido A Lutius Tu Tienda De Confianza"/>
<GrupoCartas/>
<div className="m-5"><Slider/></div>
<PiePagina/>



</div>


    </div>
  );


}

}
export default  Principal;