import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar className="mb-2 bg-dark" expand="md">
      <NavbarBrand tag={Link} to="/" className="text-white">
        Home
      </NavbarBrand>
    </Navbar>
  );
}
