import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';
import './Barra.css';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import Principal from './Principal';
import Computadoras from './Computadoras';
import Celulares from './Celulares';





class Barra extends React.Component {


constructor(){

super();

this.state={

rutas:"/Principal"


};



}




  render() {



  return(
<div className="nav justify-content-center color_df">

<div className="d-none d-lg-block">


<Router>


<Nav pills >


<NavItem>
<NavLink ><img src="https://image.flaticon.com/icons/svg/41/41946.svg" width="50px" height="50px"/><span className="Letra letra_texto"><Link to="/Computadoras">Computadoras</Link></span></NavLink>
</NavItem>

       

<NavItem>
<NavLink href="#" ClassName="Letra"><img src="https://image.flaticon.com/icons/svg/149/149379.svg" width="50px" height="50px"/><span className="Letra letra_texto">Telefonos</span></NavLink>
</NavItem>


<NavItem>
<NavLink href="#"><span className="Letra  letra_texto"><img src="https://image.flaticon.com/icons/svg/27/27130.svg" width="50px" height="50px"/> Audiculares</span></NavLink>
</NavItem>


<NavItem>
<NavLink href="#"><span className="Letra letra_texto"><img src="https://image.flaticon.com/icons/svg/1792/1792467.svg" width="50px" height="50px"/> Hardware</span></NavLink>
</NavItem>


</Nav>


<Route path="/"  component={Principal}/>

<Route path="/Celulares"  component={Celulares}/>


<Route path="/Computadoras"  component={Computadoras}/>




</Router>
</div>
    </div>
  );


}

}
export default  Barra;
