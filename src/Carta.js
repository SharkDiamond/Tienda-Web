import React from 'react';
import './Barra.css';
import { Button } from "reactstrap";



class Carta extends React.Component {


constructor(){

super();

this.state={};

this.color6=this.color6.bind(this);
this.color7=this.color7.bind(this);



this.color8=this.color8.bind(this);
this.color9=this.color9.bind(this);


}



color6(e){
    e.target.className="card-title text-center  letra h5 color_df1";
    
    }
    
    color7(e){
      e.target.className="card-title text-center  letra h5";
    
    }
    

    color8(e){
        e.target.className="card-text texto text-dark letra text-center color_df1";
        
        }
        
        color9(e){
          e.target.className="card-text texto text-dark letra text-center";
        
        }




  render() {

  
const carta=(
<div className="card m-1 border-dark rounded color_df">
<img src={this.props.imagenCarta} class="card-img-top" alt="..."  height="200px" width="200px"/>
<div className="card-body border text-center color_df">
<div className="card-title text-center  letra h5" onMouseMove={this.color6} onMouseOut={this.color7}>{this.props.tituloCarta}</div>
<div className="card-text texto text-dark letra text-center"   onMouseMove={this.color8} onMouseOut={this.color9}>{this.props.descripcioncarta}</div>
<br></br>
<button className="btn btn bg-success letra text-white">Hechar un vistazo</button>
</div>
</div>
  
  );
 



  return(
<div className="">

    {carta}

    </div>
  );




}

}
export default  Carta;
