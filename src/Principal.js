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
<div className="m-5 container justify-content-center">


<Mensaje texto="Bienvenido a tecnologic tu tienda de confianza"/>
<GrupoCartas/>
<Slider/>
<PiePagina/>



</div>


    </div>
  );


}

}
export default  Principal;