import "./static/App.css";
import { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import CardList from "./components/CardList";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cards" exact={true} element={<CardList />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
