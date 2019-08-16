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

<div className="container justify-content-center">

<Mensaje texto="Bienvenido A Lutius"/>

<GrupoCartas  TituloPrincipal="Ofertas" imagencarta1="https://cdn4.cnet.com/img/kONg4IUDeq5EEHwczPhZonIWDo0=/2018/03/23/c44fa164-d20c-4640-a609-e8ebe7e22b3a/huawei-p20-pro-hero-promo-4.jpg " imagencarta2="https://assets.pcmag.com/media/images/547224-samsung-galaxy-smartphones.jpg?width=810&height=456" imagencarta3="https://cdn3.cnet.com/img/HvuNEudjVWeEVzsvE5JkUpqYMpM=/868x488/2019/05/01/d3441f9c-2ab5-4e51-920e-8196cc565623/honor-10-lite-analisis.jpg " 
titulocarta1="Huawei p20 Pro" titulocarta2=" Galaxy S10" titulocarta3="Honor" 
descripcioncarta1="Antes 600$ ahora 450$" descripcioncarta2="Antes 800$ ahora 650$" descripcioncarta3="Antes 550$ ahora 420$"/>


<div className="m-5"><Slider/></div>




</div>
<PiePagina/>

    </div>
  );


}

}
export default  Principal;
