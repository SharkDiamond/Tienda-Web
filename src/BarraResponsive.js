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

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className="d-sm-block d-lg-none bg-dark">
        <Navbar color="faded">
          <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
            
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
          </Collapse>
        </Navbar>
      </div>
    );
  }
}


