import { Component } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import AppNavbar from "./AppNavbar";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: {
        _embedded: {
          cardList: [],
        },
        _links: [],
      },
    };
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    fetch("/cards")
      .then((response) => response.json())
      .then((data) => this.setState({ cards: data }));
  }

  async remove(id) {
    await fetch(`/cards/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    }).then(() => {
      let updatedCards = [...this.state.cards._embedded.cardList].filter(
        (i) => i.id !== id
      );
      this.setState({ cards: updatedCards });
    });
  }

  render() {
    const { cardList, isLoading } = this.state.cards._embedded;

    if (isLoading) return <p>Loading...</p>;

    const cardsList = cardList.map((card) => {
      return (
        <tr key={card.id}>
          <td style={{ whiteSpace: "nowrap" }}>{card.description}</td>
          <td>{card.status}</td>
          <td>
            <ButtonGroup>
              <Button
                size="sm"
                className="btn btn-primary"
                tag={Link}
                to={"/cards/" + card.id}
              >
                Edit
              </Button>
              <Button
                size="sm"
                className="btn btn-danger"
                onClick={() => this.remove(card.id)}
              >
                Delete
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });

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
            <tbody>{cardsList}</tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
export default CardList;
