import React from 'react';
import './Barra.css';

class PiePagina extends React.Component {


constructor(){

super();

this.state={};



}




  render() {



  return(
<div className="container-fluid border border-dark">


<p className="display-1 text-center letra">Tu Tienda De Confianza</p>
<p className="display-4 text-center letra">Redes Sociales</p>


<div className="row justify-content-center">

<div className="cold-4">

<p>Facebook</p>

</div>
<div className="cold-4">

<p>Instagram</p>

</div>
<div className="cold-4">

<p>Twiter</p>

</div>

</div>

<div className="row justify-content-center">


<p className="letra">Todos Los Derechos Reservados</p>

</div>
    </div>
  );




}

}
export default  PiePagina;