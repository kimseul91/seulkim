import React, {useEffect, useState} from 'react';
import { Redirect} from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    useEffect(()=> {
        let url = window.location.href.split('/');
        let target = url[url.length-1].toLowerCase();
        let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);
    function checkHome () {
        if(document.location.href !== "/")
                        window.location.replace("/");
    }

    const [directToBlog, setDirectToBlog] = useState(null);

    const toBlog = (e) => {
        e.preventDefault();
        console.log("in blog");
        setDirectToBlog(<Redirect to={"/blogs"} />);

    }
    if(directToBlog) {
        return directToBlog;
    } 
    return (
            <div className="nav">
                <a href="/" onClick={e => {
                    checkHome();
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
                <a href="javascript:void(0)" onClick={toBlog}>Blogs</a>

            </div>



    );
};

export default Nav;