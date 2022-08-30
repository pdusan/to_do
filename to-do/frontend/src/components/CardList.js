import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import AddCard from "./AddCard";
import AppNavbar from "./AppNavbar";
import Card from "./Card";

export default function CardList() {
  const [cards, updateCards] = useState({
    _embedded: {
      cardList: [],
    },
    _links: {},
  });

  const [addShown, isAddShown] = useState(false);

  const [doneCount, updateDoneCount] = useState(
    cards._embedded.cardList.filter((card) => card.status === "DONE").length
  );

  useEffect(() => {
    fetch("/cards")
      .then((response) => response.json())
      .then((data) => {
        updateCards(data);
      });

    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, [addShown]);

  const removeFunc = async function remove(item) {
    await fetch(item._links.self.href, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    }).then(() => {
      let newCards = cards._embedded.cardList.filter((card) => {
        return item.id !== card.id;
      });
      updateCards({ _embedded: { cardList: newCards } });
    });
  };

  const completeFunc = async function complete(item) {
    await fetch(item._links.complete.href, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
      },
    }).then(() => {
      let newCards = cards._embedded.cardList.filter((card) => {
        return item.id !== card.id;
      });
      updateCards({ _embedded: { cardList: newCards } });
      updateDoneCount(doneCount + 1);
    });
  };

  const {
    _embedded: { cardList },
  } = cards;

  return (
    <div>
      <AppNavbar />
      <AddCard shouldShow={addShown} switchShown={isAddShown} />
      <Container fluid>
        <div className="float-end">
          <Button
            className="btn btn-primary"
            onClick={() => {
              isAddShown((s) => !s);
            }}
          >
            Add a Card
          </Button>
        </div>
        <div className="float-end" style={{ paddingTop: 7, paddingRight: 10 }}>
          <h5>Completed Tasks: {doneCount}</h5>
        </div>
        <h3>Cards</h3>
        <ul>
          {cardList
            .filter((card) => card.status === "NOT_DONE")
            .map((card) => {
              return (
                <Card
                  item={card}
                  key={card.id}
                  removeFunc={removeFunc}
                  completeFunc={completeFunc}
                />
              );
            })}
        </ul>
      </Container>
    </div>
  );
}
