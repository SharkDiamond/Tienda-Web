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
    <img src={this.props.imagenCarta1} class="card-img-top border border-dark rounded-top" width="3000px" height="188px" alt="..."/>
    <div className="card-body text-center border-left border-right border-bottom border-dark  rounded-bottom">
      <h5 className="card-title text-center letra">{this.props.tituloCarta1}</h5>
      <p className="card-text text-center letra"><strike>{this.props.precioanteriocarta1}</strike> ahora 400$</p>
     <Button color="success" ><span className="letra">Echar Un Vistazo</span></Button>
    </div>
  </div>



    );
    

    const carta2=(

      <div className="card tamaño_cartas m-3 ">
          <img src={this.props.imagenCarta2} class="card-img-top border border-dark rounded-top" width="10px" height="200px" alt="..."/>
          <div className="card-body text-center border-left border-right border-bottom border-dark  rounded-bottom">
            <h5 className="card-title text-center letra">{this.props.tituloCarta2}</h5>
            <p className="card-text text-center letra"><strike>{this.props.precioanteriocarta2}</strike> ahora 90$</p>
           <Button color="success" ><span className="letra">Echar Un Vistazo</span></Button>
          </div>
        </div>
      
      
      
          );


          const carta3=(

            <div className="card tamaño_cartas m-3 ">
                <img src={this.props.imagenCarta3} class="card-img-top border border-dark rounded-top" width="10px" height="200px" alt="..."/>
                <div className="card-body text-center border-left border-right border-bottom border-dark  rounded-bottom">
                  <h5 className="card-title text-center letra">{this.props.tituloCarta3}</h5>
                  <p className="card-text text-center letra"><strike>{this.props.precioanteriocarta3}</strike> ahora 490$</p>
                 <Button color="success" ><span className="letra">Echar Un Vistazo</span></Button>
                </div>
              </div>
            
            
            
                );



  return(
<div className="fondo_mensaje border rounded  border-dark m-1">



<h1 className="text-center letra_texto">Ofertas</h1>
<div className="container">
<div className="row">

<div className="cold-4">

{carta}

</div>


<div className="cold-4">

{carta2}

</div>

<div className="cold-4">

{carta3}

</div>


</div>

</div>




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
