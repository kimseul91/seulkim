import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Land from "./components/Land/Land"
import Blogs from "./components/Blog/Blogs"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Land} />
          <Route exact path="/blogs" component={Blogs} />
        </Switch>

      </Router>
    </div>

  );
}

export default App;
