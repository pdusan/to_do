import { useState, useCallback } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function AddCard() {
  const [modal, isOpen] = useState(false);

  const toggle = useCallback(() => {
    isOpen((o) => !o);
  }, []);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add a new To Do Card</ModalHeader>
        <ModalBody>
          <input type="texxt"></input>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" toggle={toggle}>
            Cancel
          </Button>
          <Button className="btn-success" toggle={toggle}>
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
