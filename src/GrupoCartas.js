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
    <img src="https://elandroidelibre.elespanol.com/wp-content/uploads/2018/04/huawei-p20-pro-1.jpg" class="card-img-top border border-dark rounded-top" width="3000px" height="188px" alt="..."/>
    <div className="card-body text-center border-left border-right border-bottom border-dark  rounded-bottom">
      <h5 className="card-title text-center letra">huawei Mate20 Pro</h5>
      <p className="card-text text-center letra"><strike>500$</strike> ahora 400$</p>
     <Button color="success" ><span className="letra">Echar Un Vistazo</span></Button>
    </div>
  </div>



    );
    

    const carta2=(

      <div className="card tamaño_cartas m-3 ">
          <img src="http://mntech.es/wp-content/uploads/2019/04/3aed3844-3d92-11e9-9798-f85edb62de22.jpg" class="card-img-top border border-dark rounded-top" width="10px" height="200px" alt="..."/>
          <div className="card-body text-center border-left border-right border-bottom border-dark  rounded-bottom">
            <h5 className="card-title text-center letra">Xiaomi Redmi 7</h5>
            <p className="card-text text-center letra"><strike>150$</strike> ahora 90$</p>
           <Button color="success" ><span className="letra">Echar Un Vistazo</span></Button>
          </div>
        </div>
      
      
      
          );


          const carta3=(

            <div className="card tamaño_cartas m-3 ">
                <img src="https://assets.pcmag.com/media/images/546709-samsung-galaxy-s10.jpg?width=810&height=456" class="card-img-top border border-dark rounded-top" width="10px" height="200px" alt="..."/>
                <div className="card-body text-center border-left border-right border-bottom border-dark  rounded-bottom">
                  <h5 className="card-title text-center letra">Samsung Galaxy S10</h5>
                  <p className="card-text text-center letra"><strike>600$</strike> ahora 490$</p>
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
