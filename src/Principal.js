import React from 'react';
import './App.css';
import  Barra  from './Barra.js';
import  Mensaje  from './Mensaje.js';
import  GrupoCartas  from './GrupoCartas.js';
import Slider  from './Slider.js';
import  PiePagina  from './PiePagina.js';



class Principal extends React.Component {


constructor(){

super();

this.state={};



}




  render() {



  return(
<div className="">

<Barra/>
<hr/>
<div className=" container justify-content-center">


<Mensaje texto="Bienvenido A Lutius Tu Tienda De Confianza"/>
<GrupoCartas/>
<Slider/>
<PiePagina/>



</div>


    </div>
  );


}

}
export default  Principal;