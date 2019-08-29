import React from 'react';
import './App.css';
import  Barra  from './Barra.js';
import  Mensaje  from './Mensaje.js';
import  GrupoCartas  from './GrupoCartas.js';
import Slider  from './Slider.js';
import  PiePagina  from './PiePagina.js';
import BarraResponsive from './BarraResponsive';








class Audiculares extends React.Component {


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

<Mensaje texto="Audiculares"/>



<div className="ml-3 mr-3 mt-4 mb-5">

<GrupoCartas  TITULO="Gama Alta" imagencarta1="https://i.blogs.es/3f5cde/sony-mdr-1rbt/450_1000.jpg" imagencarta2="https://iphonea2.com/wp-content/uploads/2018/02/Auriculares-Apple.jpg"  imagencarta3="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MV8W2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1559340831364"  titulocarta1="Sony AKG 701" titulocarta2="Apple A2" titulocarta3="Beast Wireless" descripcioncarta1="140 $" descripcioncarta2="150 $" descripcioncarta3="110 $"/>

</div>


<div className="ml-3 mr-3 mt-4 mb-5">

<GrupoCartas  TITULO="Gama Media" imagencarta1="https://media.energysistem.com/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/4/4/44579_2000_47.jpg" imagencarta2="https://www.4djmusic.com/wp-content/uploads/2017/07/Mixars_Headphones.jpg"  imagencarta3="https://storage.googleapis.com/nilh-pasionmovil.appspot.com/1/2018/10/Razer-Nari.jpg"  titulocarta1="Energy System Headphone" titulocarta2="Mixars Mxh-22" titulocarta3="Razer Nari Ultimate" descripcioncarta1="80 $" descripcioncarta2="70 $" descripcioncarta3="90 $"/>

</div>

<div className="ml-3 mr-3 mt-4 mb-5">

<GrupoCartas  TITULO="Gama Baja" imagencarta1="https://http2.mlstatic.com/auricular-gaming-g433-logitech-camuflado-azul-71-D_NQ_NP_859903-MLA26493011022_122017-F.jpg" imagencarta2="https://i.blogs.es/b1f355/skullcandy/450_1000.jpg"  imagencarta3="https://images-na.ssl-images-amazon.com/images/I/71Xg1XeSisL._SX466_.jpg"  titulocarta1="Logitech" titulocarta2="Skels 6" titulocarta3="SkullCandy Hesh 3" descripcioncarta1="40 $" descripcioncarta2="35 $" descripcioncarta3="30 $"/>

</div>



</div>


<PiePagina/>

    </div>
  );


}

}
export default  Audiculares;

