import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import Card from "./Card";

export default function CardList() {
  const [cards, updateCards] = useState({
    _embedded: {
      cardList: [],
    },
    _links: {},
  });

  useEffect(() => {
    fetch("/cards")
      .then((response) => response.json())
      .then((data) => updateCards(data));
  }, []);

  const removeFunc = async function remove(id) {
    await fetch(`/cards/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    }).then(() => {
      let newCards = cards._embedded.cardList.filter((card) => {
        return id !== card.id;
      });
      updateCards({ _embedded: { cardList: newCards } });
    });
  };

  const {
    _embedded: { cardList },
  } = cards;

  return (
    <div>
      <AppNavbar />
      <Container fluid>
        <div className="float-end">
          <Link to="/cards-add">
            <Button className="btn btn-success">Add a Card</Button>
          </Link>
        </div>
        <h3>Cards</h3>
        <Table className="mt-4">
          <thead>
            <tr>
              <th width="30%">Description</th>
              <th width="30%">Status</th>
              <th width="40%">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cardList.map((card) => {
              return <Card item={card} key={card.id} removeFunc={removeFunc} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
