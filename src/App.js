import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Land from "./components/Land/Land"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Blogs from "./components/Blog/Blogs"

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          {/* <Nav /> */}
            <Route exact path="/" component={Land} />
            <Route exact path="/blogs" component={Blogs} />
          {/* <Footer /> */}
        </div>
        
      </Switch>

    </Router>

  );
}

export default App;
