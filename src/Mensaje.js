import React from 'react';
import './Barra.css';

class Mensaje extends React.Component {


constructor(){

super();

this.state={};

this.handlecambiacolor1 = this.handlecambiacolor1.bind(this);

this.handlecambiacolor2 = this.handlecambiacolor2.bind(this);

}


 handlecambiacolor1(e) {
 
 e.target.className="border rounded border-primary color_df1 letra_texto text-center";

}

handlecambiacolor2(e) {

  e.target.className="fondo_mensaje  letra_texto text-center";
 

 }





  render() {

const mensaje=(<h1 className="letra_texto text-center">{this.props.texto}</h1>);

  return(
<div className="m-5 color_df " onMouseMove={this.handlecambiacolor1} onMouseOut={this.handlecambiacolor2}>


{mensaje}


    </div>
  );




}

}
export default  Mensaje;
