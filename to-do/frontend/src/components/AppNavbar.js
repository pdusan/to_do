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
      <Navbar className="mb-2 bg-dark" expand="md">
        <NavbarBrand tag={Link} to="/" className="text-white">
          Home
        </NavbarBrand>
      </Navbar>
    );
  }
}
export default AppNavbar;
