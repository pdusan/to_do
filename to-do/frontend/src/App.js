import "./static/App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import CardList from "./components/CardList";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/cards" exact={true} element={<CardList />} />
      </Routes>
    </Router>
  );
}
