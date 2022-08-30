import { Button } from "reactstrap";

export default function Card({ item, removeFunc, completeFunc }) {
  //TODO: Move remove function in here
  return (
    <li
      className="card"
      style={{
        width: "20rem",
        height: "10rem",
        display: "inline-block",
        margin: ".5rem",
      }}
    >
      <h5 className="card-header">To Do:</h5>
      <div
        className="card-text"
        style={{ whiteSpace: "nowrap", height: "50%", padding: ".5rem" }}
      >
        {item.description}
      </div>
      <div style={{ paddingLeft: ".5rem", paddingRight: ".5rem" }}>
        <Button
          size="sm"
          className="btn btn-success"
          onClick={() => {
            completeFunc(item);
          }}
        >
          Done
        </Button>
        <Button
          size="sm"
          className="btn btn-danger float-end"
          onClick={() => {
            removeFunc(item);
          }}
        >
          Delete
        </Button>
      </div>
    </li>
  );
}
