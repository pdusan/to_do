import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar color="dark" expand="md">
        <NavbarBrand tag={Link} to="/">
          Home
        </NavbarBrand>
      </Navbar>
    );
  }
}
export default AppNavbar;
