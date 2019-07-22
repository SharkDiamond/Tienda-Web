import React from 'react';
import './Barra.css';
import { Button } from "reactstrap";
import  Carta  from './Carta.js';






class GrupoCartas extends React.Component {


constructor(){

super();

this.state={};

this.color1=this.color1.bind(this);
this.color2=this.color2.bind(this);
}


color1(e){
e.target.className="border rounded border-dark color_df1 display-2 text-center  letra_texto";

}

color2(e){
  e.target.className=" display-2 text-center  letra_texto";

}


render() {
    
  return(
<div className="color_df" >


<h1 className="display-2 text-center  letra_texto" onMouseMove={this.color1} onMouseOut={this.color2}>Ofertas</h1>

<div className="container m-1">

<div className="row">

<div className="cold-4">

<Carta imagenCarta="https://cdn2.cnet.com/img/vHyu3R0p_9WoRK327bCMs58xBPU=/1600x900/2018/12/04/0e6c5e54-4454-442d-b7af-f508a8df3026/samsung-s9-3.jpg" tituloCarta="P20 Pro"  precio="200" precioanteriorcarta="600"/>

</div>

<div className="cold-4">


<Carta imagenCarta="https://cdn2.cnet.com/img/vHyu3R0p_9WoRK327bCMs58xBPU=/1600x900/2018/12/04/0e6c5e54-4454-442d-b7af-f508a8df3026/samsung-s9-3.jpg" tituloCarta="P20 Pro" precio="200" precioanteriorcarta="600"/>

</div>

<div className="cold-4">

<Carta imagenCarta="https://cdn2.cnet.com/img/vHyu3R0p_9WoRK327bCMs58xBPU=/1600x900/2018/12/04/0e6c5e54-4454-442d-b7af-f508a8df3026/samsung-s9-3.jpg" tituloCarta="P20 Pro"  precio="200"  precioanteriorcarta="600"/>

</div>



</div>


</div>
<br></br>
</div>

);

}
}


export default  GrupoCartas;
