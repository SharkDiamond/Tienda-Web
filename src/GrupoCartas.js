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
<div className="color_df">


<h1 className="display-2 text-center  letra_texto" onMouseMove={this.color1} onMouseOut={this.color2}>{this.props.TituloPrincipal}</h1>


<div className="container">

<div className="row justify-content-center">

<div className="col-sm-12 col-md-4 col-xl-4">


<Carta imagenCarta={this.props.imagencarta1}  tituloCarta={this.props.titulocarta1} descripcioncarta={this.props.descripcioncarta1}/>


</div>

<div className=" col-sm-12 col-md-4 col-xl-4">

<Carta imagenCarta={this.props.imagencarta2}  tituloCarta={this.props.titulocarta2} descripcioncarta={this.props.descripcioncarta2}/>
</div>

<div className="col-sm-12 col-md-4 col-xl-4">


<Carta imagenCarta={this.props.imagencarta3}  tituloCarta={this.props.titulocarta3} descripcioncarta={this.props.descripcioncarta3}/>

</div>



</div>


</div>
<br></br>
</div>

);

}
}


export default  GrupoCartas;
