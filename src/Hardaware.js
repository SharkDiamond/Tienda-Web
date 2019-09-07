import React from 'react';
import './App.css';
import  Barra  from './Barra.js';
import  Mensaje  from './Mensaje.js';
import  GrupoCartas  from './GrupoCartas.js';
import Slider  from './Slider.js';
import  PiePagina  from './PiePagina.js';
import BarraResponsive from './BarraResponsive';





class Hardaware extends React.Component {


constructor(){

super();

this.state={};



}




  render() {



  return(
<div className="">



<div className="container justify-contend-center">

<Mensaje texto="Hardware"/>



<div className="ml-3 mr-3 mt-4 mb-5">

<GrupoCartas  TITULO="Placas Madre" imagencarta1="https://images-na.ssl-images-amazon.com/images/I/91b9WRphHWL._SL1500_.jpg" imagencarta2="https://media.ldlc.com/r1600/ld/products/00/04/84/32/LD0004843258_2.jpg"  imagencarta3="https://www.xnet.com.mx/sitio/wp-content/uploads//productos_pch/media/xvdf/ImagenesPCHM/tm-393714-1.jpg"  titulocarta1="Ausus Strix" titulocarta2="Aorus B360" titulocarta3="Asus Rog X299-E" descripcioncarta1="150 $" descripcioncarta2="160 $" descripcioncarta3="170 $"/>
</div>
<div className="ml-3 mr-3 mt-4 mb-5">
<GrupoCartas  TITULO="Gabinetes" imagencarta1="http://www.acadia-info.com/15555-large_default/bt-cor-cs-spec-obr.jpg" imagencarta2="https://images-na.ssl-images-amazon.com/images/I/81PCvo9tb6L._SX466_.jpg"  imagencarta3="https://spotonpccases.co.uk/wp-content/uploads/2017/09/ttcscorep7tgblk.jpg"  titulocarta1="Corsair Carbide" titulocarta2="Phanteks ph" titulocarta3="Thermaltake Core P7" descripcioncarta1="60 $" descripcioncarta2="48 $" descripcioncarta3="80 $"/>
</div>
<div className="ml-3 mr-3 mt-4 mb-5">
<GrupoCartas  TITULO="Procesadores" imagencarta1="https://www.overclockers.co.uk/media/image/thumbnail/CP65JIN_193693_800x800.jpg" imagencarta2="https://media.ldlc.com/r1600/ld/products/00/05/04/91/LD0005049146_2.jpg"  imagencarta3="https://c1.neweggimages.com/ProductImage/19-117-981-V01.jpg"  titulocarta1="Intel Core I9" titulocarta2="Intel Core I7" titulocarta3="Intel Core I5" descripcioncarta1="500 $" descripcioncarta2="350 $" descripcioncarta3="250 $"/>
</div>



</div>


<PiePagina/>

    </div>
  );


}

}
export default  Hardaware;


