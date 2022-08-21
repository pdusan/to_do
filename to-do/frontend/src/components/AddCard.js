import { useState, useCallback } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function AddCard() {
  const [modal, isOpen] = useState(true);

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
          <Button color="primary">Cancel</Button>
          <Button className="btn-success">Add</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
