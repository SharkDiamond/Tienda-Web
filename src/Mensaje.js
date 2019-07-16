import React from 'react';
import './Barra.css';

class Mensaje extends React.Component {


constructor(){

super();

this.state={};



}




  render() {

const mensaje=(<h1 className="letra_texto text-center" >{this.props.texto}</h1>);

  return(
<div className="border rounded fondo_mensaje m-5 border-dark">
{mensaje}
    </div>
  );




}

}
export default  Mensaje;
