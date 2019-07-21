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
<div className="container justify-content-center">


<Mensaje texto="Bienvenido A Lutius Tu Tienda De Confianza"/>
<GrupoCartas  titulo="Ofertas"  imagenCarta1="https://fscl01.fonpit.de/userfiles/7446224/image/xiaomi-redmi-7/AndroidPIT-xiaomi-redmi-7-hero-w810h462.jpg" imagenCarta2="https://i.blogs.es/559d1f/img_2834/1366_2000.jpg" imagenCarta3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKAa4nvopwwrEY6GsNc0_B9U9S4fZ-pWCZ8VU2v6R6NmGh0q_bQ"
tituloCarta1="Xiaomi Redmin 7" tituloCarta2="Iphone 9" tituloCarta3="Asuszone" precioanteriocarta1="600$" precioanteriocarta2="120$" precioanteriocarta3="700$"/>
<div className="m-5"><Slider/></div>
<PiePagina/>



</div>


    </div>
  );


}

}
export default  Principal;