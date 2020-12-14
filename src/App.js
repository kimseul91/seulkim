import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Land from "./components/Land/Land"
import Nav from "./components/Nav"
import Blogs from "./components/Blog/Blogs"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Land />
      </div>

    </Router>

  );
}

export default App;
