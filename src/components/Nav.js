import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Blogs from "./Blog/Blogs"
import "./Nav.css"

const Nav = () => {
    useEffect(()=> {
        let url = window.location.href.split('/');
        let target = url[url.length-1].toLowerCase();
        let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    return (
        <Router>
            <div className="nav">
                <a href="/" onClick={e => {
                    let about = document.getElementById("home");
                    e.preventDefault();
                    about && about.scrollIntoView({behavior: "smooth", block: "start"});
                    window.history.pushState("home","home", "/")
                }}>Home</a>
                <a href="/" onClick={e => {
                    let about = document.getElementById("about");
                    e.preventDefault();
                    about && about.scrollIntoView({behavior: "smooth", block: "start"});
                    window.history.pushState("about","about", "/about")
                }}>About</a>
                <a href="/" onClick={e => {
                    let about = document.getElementById("projects");
                    e.preventDefault();
                    about && about.scrollIntoView({behavior: "smooth", block: "start"});
                    window.history.pushState("projects","projects", "/projects")
                }}>Projects</a>
                <a href="/blog">Blog</a>
            </div>

            <Switch>
                <Router path="/blog">
                    <Blogs />
                </Router>
            </Switch>
        </Router>

    );
};

export default Nav;