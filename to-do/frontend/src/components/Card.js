import { Button } from "reactstrap";

export default function Card({ item, removeFunc }) {
  return (
    <li
      className="card"
      style={{ width: "20rem", height: "10rem", display: "inline-block" }}
    >
      <h5 className="card-header">To Do:</h5>
      <div
        className="card-text"
        style={{ whiteSpace: "nowrap", height: "50%" }}
      >
        {item.description}
      </div>
      <div>
        <Button size="sm" className="btn btn-success">
          Done
        </Button>
        <Button
          size="sm"
          className="btn btn-danger float-end"
          onClick={() => {
            removeFunc(item.id);
          }}
        >
          Delete
        </Button>
      </div>
    </li>
  );
}
