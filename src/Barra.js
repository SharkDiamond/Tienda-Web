import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';
import './Barra.css';



import Celulares from './Celulares';

import Principal from './Principal';
import Computadoras from './Computadoras';

import {Link} from 'react-router-dom';




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


<div className="d-none d-lg-block m-2">




<Nav pills className="mt-2">


<NavItem>
<Link to="/Computadoras"><img src="https://image.flaticon.com/icons/svg/41/41946.svg" width="50px" height="50px" className="mr-2"/>
<span className="Letra letra_texto mr-2">Computadoras</span></Link>
</NavItem>



       

<NavItem>
<Link to="/Telefonos">
<img src="https://image.flaticon.com/icons/svg/149/149379.svg" width="50px" height="50px"/>
<span className="Letra letra_texto mr-3">Telefonos</span>
</Link>
</NavItem>


<NavItem>
<Link to="/Audiculares">
<span className="Letra  letra_texto">
<img src="https://image.flaticon.com/icons/svg/27/27130.svg" width="50px" height="50px" className="mr-1"/> Audiculares</span>
</Link>
</NavItem>


<NavItem>
<NavLink href="#">
<span className="Letra letra_texto"><img src="https://image.flaticon.com/icons/svg/1792/1792467.svg" width="50px" height="50px"/> Hardware</span>
</NavLink>
</NavItem>


</Nav>


</div>

   </div>

  );


}

}
export default  Barra;
