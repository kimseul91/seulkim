import React, {useEffect} from 'react';
import "./Footer.css";


const Footer = () => {
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
    return (
        <div className="container">
            <div className="footer">
                <div className="footer-logo">SeulKim.com</div>
                <div className="navigation">
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
                </div>
                <div className="copy-right">
                    <smaller>&copy; 2020 Seul Kim</smaller>
                </div>
            </div>
        </div>
    );
};

export default Footer;