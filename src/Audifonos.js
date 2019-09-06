import React from 'react';
import './App.css';
import  Barra  from './Barra.js';
import  Mensaje  from './Mensaje.js';
import  GrupoCartas  from './GrupoCartas.js';

import  PiePagina  from './PiePagina.js';
import BarraResponsive from './BarraResponsive';








class Audifonos extends React.Component {


constructor(){

super();

this.state={

carta:"https://tiendadish.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/i/listen_wireless_verde_olivo.jpg"

};


this.CambiaEstadocarta=this.CambiaEstadocarta.bind(this);
}


CambiaEstadocarta(){

this.setState({

carta:"http://pcworld.com.mx/wp-content/uploads/2017/12/gama_alta.jpg"


})



}




  render() {



  return(
<div className="">





<div className="container justify-contend-center">

<Mensaje texto="Audifonos"/>


<div className="ml-3 mr-3 mt-4 mb-5">

<GrupoCartas  TITULO="Gama Alta" imagencarta1={this.state.carta} imagencarta2="https://ep01.epimg.net/elpais/imagenes/2017/08/11/escaparate/1502467800_891279_1504802735_sumario_normal.jpg"  imagencarta3="https://www.tecnogeekies.com/wp-content/uploads/2016/06/cascos-razer-manowar-global.jpghttps://www.tecnogeekies.com/wp-content/uploads/2016/06/cascos-razer-manowar-global.jpg"  titulocarta1="Audifonos Focal Wireless" titulocarta2="Audifonos Beast" titulocarta3="Audifonos Razer" descripcioncarta1="110 $" descripcioncarta2="120 $" descripcioncarta3="100 $"/>

</div>

<div className="ml-3 mr-3 mt-4 mb-5">

<GrupoCartas  TITULO="Gama Media" imagencarta1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0OTRqsVqeE9i665VTW_rPJyTpPYP-eUJM6tsMY7QUhC4SZje" imagencarta2="https://cdn2.cnet.com/img/Bb09Hd1FqXrsfTiI5IfZ8ANaz3w=/1092x0/2019/02/25/b28166dd-3e00-47f6-b3f0-b6d13ae226f7/galaxy-a30.jpg"  imagencarta3="https://blog.phonehouse.es/wp-content/uploads/2018/10/lg-g7-thinq-1-700x512.jpg"  titulocarta1="Samsumg a20" titulocarta2="Samsumg a30" titulocarta3="LG G40" descripcioncarta1="110 $" descripcioncarta2="130 $" descripcioncarta3="115 $"/>

</div>

<div className="ml-3 mr-3 mt-4 mb-5">

<GrupoCartas  TITULO="Gama Baja" imagencarta1="https://d34zlyc2cp9zm7.cloudfront.net/products/23b746ccc82f7c6bf65e0ef88f80fef5bf21715a8649de860ecb8950e86126ef.jpg_500" imagencarta2="http://static.techspot.com/images/products/2015/smartphones/org/2016-05-10-product-3.jpg"  imagencarta3="https://http2.mlstatic.com/lg-phoenix-4-nuevos-liberados-4g-lte-16-gb-memoria-ram-D_NQ_NP_833813-MLV29500837920_022019-Q.jpg"  titulocarta1="Samsumg J2" titulocarta2="Samsumg J3" titulocarta3="Lg Phoenix 4" descripcioncarta1="70 $" descripcioncarta2="80 $" descripcioncarta3="50 $"/>

</div>



</div>


<PiePagina/>

    </div>
  );


}

}
export default  Audifonos;




