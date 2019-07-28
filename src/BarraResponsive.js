import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';





export default class BarraResponsive extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
//sm md lg xl
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (       
      <div className="d-sm-block d-lg-none bg-white">
        <Navbar color="faded">
          <NavbarBrand href="/" className="mr-auto">Lutius</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2 bg-dark" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
            
<NavItem>
<NavLink href="https://www.flaticon.es/"><img src="https://image.flaticon.com/icons/svg/41/41946.svg" width="50px" height="50px"/><span className="Letra text-dark"> Computadoras</span></NavLink>
</NavItem>


<NavItem>
<NavLink href="#" ClassName="Letra"><img src="https://image.flaticon.com/icons/svg/149/149379.svg" width="50px" height="50px"/><span className="Letra text-dark">Telefonos</span></NavLink>
</NavItem>


<NavItem>
<NavLink href="#"><span className="Letra text-dark"><img src="https://image.flaticon.com/icons/svg/27/27130.svg" width="50px" height="50px"/> Audiculares</span></NavLink>
</NavItem>


<NavItem>
<NavLink href="#"><span className="Letra text-dark"><img src="https://image.flaticon.com/icons/svg/1792/1792467.svg" width="50px" height="50px"/> Hardware</span></NavLink>
</NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}


