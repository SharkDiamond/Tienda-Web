import React from 'react';
import './App.css';
import  Barra  from './Barra.js';
import  Mensaje  from './Mensaje.js';
import  GrupoCartas  from './GrupoCartas.js';
import Slider  from './Slider.js';
import  PiePagina  from './PiePagina.js';
import BarraResponsive from './BarraResponsive';








class Celulares extends React.Component {


constructor(){

super();

this.state={};



}




  render() {



  return(
<div className="">


<Barra/>


<GrupoCartas  titulo="Gama Alta" imagencarta1="" imagencarta2=""  imagencarta3=""  titulocarta1="" titulocarta2="" titulocarta3="" descripcioncarta1="" descripcioncarta2="" descripcioncarta3=""/>


<GrupoCartas  titulo="Gama Media" imagencarta1="" imagencarta2=""  imagencarta3=""  titulocarta1="" titulocarta2="" titulocarta3="" descripcioncarta1="" descripcioncarta2="" descripcioncarta3=""/>


<GrupoCartas  titulo="Gama Baja" imagencarta1="" imagencarta2=""  imagencarta3=""  titulocarta1="" titulocarta2="" titulocarta3="" descripcioncarta1="" descripcioncarta2="" descripcioncarta3=""/>


<PiePagina/>

    </div>
  );


}

}
export default  Celulares;




