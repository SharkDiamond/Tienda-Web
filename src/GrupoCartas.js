import React from 'react';
import './Barra.css';
import { Button } from "reactstrap";
class GrupoCartas extends React.Component {


constructor(){

super();

this.state={};



}




  render() {

    const carta=(

<div className="card tamaño_cartas m-3 ">
    <img src="https://omicrono.elespanol.com/wp-content/uploads/2019/05/iPhone-XI-dise%C3%B1o-9.jpg" class="card-img-top border border-dark rounded-top" width="10px" height="200px" alt="..."/>
    <div className="card-body text-center border-left border-right border-bottom border-dark  rounded-bottom">
      <h5 className="card-title text-center letra">iPhone 9</h5>
      <p className="card-text text-center letra"><strike>900$</strike> ahora 450$</p>
     <Button color="success" ><span className="letra">Echar Un Vistazo</span></Button>
    </div>
  </div>



    );
    

  return(
<div className="fondo_mensaje border rounded  border-dark m-1">



<h1 className="text-center letra_texto">Ofertas</h1>
{carta}
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

    </div>
  );




}

}
export default  GrupoCartas;
