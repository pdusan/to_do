import { useState, useCallback, useEffect } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function AddCard({ shouldShow, switchShown }) {
  const [modal, isOpen] = useState(false);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    isOpen(shouldShow);
    setDesc("");
  }, [shouldShow]);

  const toggle = useCallback(() => {
    isOpen((o) => !o);
    switchShown(false);
  }, [switchShown]);

  async function add() {
    await fetch("/cards", {
      method: "POST",
      headers: {
        append: "application/json",
        "Content-type": "application/json",
      },
      body: desc,
    });
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add a new To Do Card</ModalHeader>
        <ModalBody>
          <input
            type="texxt"
            placeholder="Description"
            value={desc}
            onChange={(event) => {
              setDesc(event.target.value);
            }}
          ></input>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Cancel
          </Button>
          <Button
            className="btn-success"
            onClick={() => {
              add();
              toggle();
            }}
          >
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
