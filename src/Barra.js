import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';
import './Barra.css';





class Barra extends React.Component {


constructor(){

super();

this.state={};



}




  render() {



  return(
<div className="nav  justify-content-center">

<Nav pills >


<NavItem>
<NavLink href="https://www.flaticon.es/"><img src="https://image.flaticon.com/icons/svg/41/41946.svg" width="50px" height="50px"/><span className="Letra"> Computadoras</span></NavLink>
</NavItem>


<NavItem>
<NavLink href="#" ClassName="Letra"><img src="https://image.flaticon.com/icons/svg/149/149379.svg" width="50px" height="50px"/><span className="Letra">Telefonos</span></NavLink>
</NavItem>


<NavItem>
<NavLink href="#"><span className="Letra"><img src="https://image.flaticon.com/icons/svg/27/27130.svg" width="50px" height="50px"/> Audiculares</span></NavLink>
</NavItem>


<NavItem>
<NavLink href="#"><span className="Letra"><img src="https://image.flaticon.com/icons/svg/1792/1792467.svg" width="50px" height="50px"/> Hardware</span></NavLink>
</NavItem>


</Nav>



    </div>
  );


}

}
export default  Barra;
