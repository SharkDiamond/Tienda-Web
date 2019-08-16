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
<BarraResponsive/>



<Mensaje texto="Celulares"/>

<GrupoCartas  TituloPrincipal="Gama Alta" imagencarta1="https://images.curved.de/article_detail_curved_xl/2019/03/huawei-p30-pro-01.jpg" imagencarta2="https://www.profesionalreview.com/wp-content/uploads/2019/05/Black-Shark-2-review22.jpg"  imagencarta3="https://cdn.mos.cms.futurecdn.net/BezgeTppr32wovgyJTwbeH-768-80.jpg"  titulocarta1="Huawei P30 Pro" titulocarta2="Asus Blackshark" titulocarta3="Samsumg Fold" descripcioncarta1="650 $" descripcioncarta2="500 $" descripcioncarta3="800 $"/>


<GrupoCartas  TituloPrincipal="Gama Media" imagencarta1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0OTRqsVqeE9i665VTW_rPJyTpPYP-eUJM6tsMY7QUhC4SZje" imagencarta2="https://cdn2.cnet.com/img/Bb09Hd1FqXrsfTiI5IfZ8ANaz3w=/1092x0/2019/02/25/b28166dd-3e00-47f6-b3f0-b6d13ae226f7/galaxy-a30.jpg"  imagencarta3="https://blog.phonehouse.es/wp-content/uploads/2018/10/lg-g7-thinq-1-700x512.jpg"  titulocarta1="Samsumg a20" titulocarta2="Samsumg a30" titulocarta3="LG G40" descripcioncarta1="110 $" descripcioncarta2="130 $" descripcioncarta3="115 $"/>


<GrupoCartas  TituloPrincipal="Gama Baja" imagencarta1="https://d34zlyc2cp9zm7.cloudfront.net/products/23b746ccc82f7c6bf65e0ef88f80fef5bf21715a8649de860ecb8950e86126ef.jpg_500" imagencarta2="http://static.techspot.com/images/products/2015/smartphones/org/2016-05-10-product-3.jpg"  imagencarta3="https://http2.mlstatic.com/lg-phoenix-4-nuevos-liberados-4g-lte-16-gb-memoria-ram-D_NQ_NP_833813-MLV29500837920_022019-Q.jpg"  titulocarta1="Samsumg J2" titulocarta2="Samsumg J3" titulocarta3="Lg Phoenix 4" descripcioncarta1="70 $" descripcioncarta2="80 $" descripcioncarta3="50 $"/>


<PiePagina/>

    </div>
  );


}

}
export default  Celulares;




