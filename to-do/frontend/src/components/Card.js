import { Button, ButtonGroup } from "reactstrap";

export default function Card({ item, removeFunc }) {
  return (
    <tr>
      <td style={{ whiteSpace: "nowrap" }}>{item.description}</td>
      <td>{item.status}</td>
      <td>
        <ButtonGroup>
          <Button size="sm" className="btn btn-primary">
            Edit
          </Button>
          <Button
            size="sm"
            className="btn btn-danger"
            onClick={() => {
              removeFunc(item.id);
            }}
          >
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
}
