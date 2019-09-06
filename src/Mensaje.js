import React from 'react';
import './Barra.css';

class Mensaje extends React.Component {


constructor(){

super();

this.state={};

this.handlecambiacolor1 = this.handlecambiacolor1.bind(this);

this.handlecambiacolor2 = this.handlecambiacolor2.bind(this);

this.handlecambiacolor3 = this.handlecambiacolor3.bind(this);

this.handlecambiacolor4 = this.handlecambiacolor4.bind(this);





}


 handlecambiacolor1(e) {
 
 e.target.className="border rounded border-primary color_df1 letra_texto text-center display-3";

}

handlecambiacolor2(e) {

  e.target.className="fondo_mensaje  letra_texto text-center display-1";
 

 }



 handlecambiacolor3(e) {
 
  e.target.className="border rounded border-primary color_df1 letra_texto text-center h1";
 
 }
 
 handlecambiacolor4(e) {
 
   e.target.className="fondo_mensaje  letra_texto text-center h1";
  
 
  }



  render() {
//Mensajes
const mensaje=(<h1 className="letra_texto text-center display-1 ">{this.props.texto}</h1>);

const mensajePequeño=(<h1 className="letra_texto text-center">{this.props.texto}</h1>);

  return(
<div className="">

<div className="m-5 color_df d-none d-md-block" onMouseMove={this.handlecambiacolor1} onMouseOut={this.handlecambiacolor2}>
{mensaje}
</div>


<div className="m-5 color_df d-sm-none" onMouseMove={this.handlecambiacolor3} onMouseOut={this.handlecambiacolor4}>
{mensajePequeño}
</div>


    </div>
  );




}

}
export default  Mensaje;
