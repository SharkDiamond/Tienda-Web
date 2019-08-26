import React from 'react';
import './App.css';
import  Barra  from './Barra.js';
import  Mensaje  from './Mensaje.js';
import  GrupoCartas  from './GrupoCartas.js';
import Slider  from './Slider.js';
import  PiePagina  from './PiePagina.js';
import BarraResponsive from './BarraResponsive';








class Computadoras extends React.Component {


constructor(){

super();

this.state={};



}




  render() {



  return(
<div className="">


<Barra/>
<BarraResponsive/>

<div className="container justify-contend-center">

<Mensaje texto="Computadoras"/>



<div className="m-3">
<GrupoCartas  TITULO="Gama Alta" imagencarta1="https://www.altonivel.com.mx/assets/images/Estructura_V3/Tecnologia/Soluciones/alienware.jpg" imagencarta2="https://cdn4.cnet.com/img/Vl6L7zbwjgAfnTa__J8v8RnO49Y=/756x425/2018/05/21/ef7b1db6-d566-4359-88c3-c71d5a9134b1/25-razer-blade-2018.jpg"  imagencarta3="https://falabella.scene7.com/is/image/Falabella/6344612_1?$producto308$&wid=472&hei=472"  titulocarta1="Laptop Alienware I9" titulocarta2="Laptop Blade I7" titulocarta3="Pc Gamer I7" descripcioncarta1="1500 $" descripcioncarta2="1300 $" descripcioncarta3="1700 $"/>
</div>
<div className="m-3">
<GrupoCartas  TITULO="Gama Media" imagencarta1="http://gadgetstore.ec/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/h/p/hp-15-da0002dx_i5-8250u_128gb.jpg" imagencarta2="https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/192545511711_2.jpg"  imagencarta3="https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/24/00115214803312____6__640x640.jpg"  titulocarta1="Laptop Hp I5" titulocarta2="Laptop Hp I3 G8" titulocarta3="Laptop Asus I5" descripcioncarta1="650 $" descripcioncarta2="400 $" descripcioncarta3="550 $"/>
</div>
<div className="m-3">
<GrupoCartas  TITULO="Gama Baja" imagencarta1="https://www.carrefour.com.ar/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/9/193268740495_01.jpg" imagencarta2="https://cdn1.coppel.com/images/catalog/pm/2254673-1.jpg"  imagencarta3="https://img.pccomponentes.com/articles/19/195620/cvb.jpg"  titulocarta1="Lenovo AMD A6" titulocarta2="Asus AMD A6" titulocarta3="Pc Amd A9" descripcioncarta1="250 $" descripcioncarta2="300 $" descripcioncarta3="150 $"/>
</div>
</div>


<PiePagina/>

    </div>
  );


}

}
export default  Computadoras;




