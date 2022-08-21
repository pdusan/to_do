import React from "react";
import AppNavbar from "./AppNavbar";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";

export default function Home() {
  return (
    <div>
      <AppNavbar />
      <Container fluid>
        <Button color="link">
          <Link to="/cards">Cards</Link>
        </Button>
      </Container>
    </div>
  );
}
