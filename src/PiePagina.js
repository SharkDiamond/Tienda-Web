import React from 'react';
import './Barra.css';
import './pie.css';
class PiePagina extends React.Component {


constructor(){

super();

this.state={};



}




  render() {



  return(
<div className="container-fluid bg-white">


<p className="tama  text-center letra_texto">Tu Tienda De Confianza</p>
<p className="tama2 text-center letra_texto">Redes Sociales</p>




<div className="row justify-content-center">

<div className="d-inline m-1">
<a><img src="https://image.flaticon.com/icons/svg/33/33702.svg" width="50px" height="50px"/> Facebook</a>


</div>

<div className="d-inline  m-1">
<a><img src="https://image.flaticon.com/icons/svg/1051/1051313.svg" width="50px" height="50px"/> Instagram</a>



</div>

<div className="d-inline  m-1">
<a><img src="https://image.flaticon.com/icons/svg/1051/1051331.svg" width="50px" height="50px"/> Twitter</a>

</div>

</div>


<br></br>

<div className="row justify-content-center">


<p className="letra h4 text-center">Todos Los Derechos Reservados</p>

</div>
    </div>
  );




}

}
export default  PiePagina;