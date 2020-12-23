import React, {useState, useEffect} from 'react';
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import "../page.css";
import "./Land.css";

const Land = () => {
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);
    
    useEffect(() => {
        function handleResized() {
            console.log(`resized to ${window.innerHeight}`);
            setInnerHeight(window.innerHeight);
        }
        window.addEventListener('resize',handleResized);
    })
    
    window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
            const dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                }
            }
        }
    }
    

    const showDropdown = (e) => {
        if(e.target.id !== null) {
            if(e.target.id ===  "btnFollow")
                document.getElementById("followDropdown").classList.toggle("show");
            if(e.target.id === "btnContact")
                document.getElementById("contactDropdown").classList.toggle("show");
        }
    }
    
    return (
        <>
            <Nav />
            <div className="container">
                <div id="home" className="page name" style={{height: innerHeight}}>
                    <h1> Eric Seul Kim </h1>
                </div>

                <div id="about" className="page biography" style={{height: innerHeight}}>
                    <img className="biography-img" alt="" src="https://i.pinimg.com/originals/29/a4/8c/29a48ccef7ad9d03b0182a63a860112d.jpg"/>
                    <div className="detail">
                        <h2 className="biography-title center"> Hello I'm Eric.  </h2>
                        <p className="biography-p"> I’m a student at University of North Carolina at Chapel Hill majoring in Computer Science.
                        I’ve always wanted to learn more about technology since 
                            I was a kid. I had to take a quick 6 year break between my 
                            colleges for serving in the US Army.</p>
                        <div className="biography-social center">
                            <button className="dropbtn" id="btnFollow" onClick={showDropdown}>FOLLOW</button>
                            <button className="dropbtn" id="btnContact" onClick={showDropdown}>CONTACT</button>
                            <div className="dropdown-content" id="followDropdown">
                                <a href="https://www.instagram.com/__ekphotos/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                {/* <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
                                <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a> */}
                                <a href="https://www.linkedin.com/in/eric-kim-5161ba13a/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                            </div>
                            <div className="dropdown-content" id="contactDropdown">
                                <a href="mailto:kimeric91@gmail.com" target="_blank" rel="noreferrer"><i className="far fa-envelope"></i></a>
                                {/* <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-messenger"></i></a> */}
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                



                <div id="projects" className="page" style={{height: innerHeight}}>
                    <img className="soc-img" alt="" src="https://mcusercontent.com/9cc1f78d70aa64ee0f1b17641/images/f616ed92-ffeb-4547-9ce8-23f22f0a209b.png" />
                    <div className="detail">

                        <h3 className="center">Summer of Code @ UNC [JUN 2020]</h3>
                        <p>
                            The UNC CS Department, through the UNC Summer of Code 2020 program has created a dynamic resume database website. Currently, 
                            resumes are available to recruiters via PDF and Handshake, however recruiters must manually search through these lists. This 
                            website allows recruiters to filter through students based on criteria such as graduation year and specific programming languages. 
                            Additionally, recruiters can organize students into lists to save qualified candidates and export these lists. This site is built 
                            with React and Firebase and will greatly help recruiting in a post-COVID-19 world
                        </p>
                        {/* <p>
                            This was in the beginning of the pandemic which caused many students to be out of their internship. 
                            UNC orgnaized an internship-like experience to the computer science students who couldn't find an internship with a company. 
                            I was part of a team of 8 who were in charge of creating a new database system for the UNC CS department. The program is to allow easier access for 
                            companies who are partnered with UNC to review student's resume in one single location. 
                            Some features of the web app is for students to upload their resume for the recruiters to see. 
                            Reecruiters to see all of the stduents' resume in one location using different filters like graduation date, attended hackathon, skill set like CS languages. 
                            UNC CS staff can manage recruiters' access to which students they can view regarding their "tier."

                            Google Firebase, React,
                        </p> */}
                        <div className="center">
                            <a href="https://resumedatabase.cs.unc.edu/" target="_blank" rel="noreferrer" className="a-button"> UNC Resume Database</a>
                            <a href="https://github.com/nikhil-vytla/unc-cs-resume-db" target="_blank" rel="noreferrer" className="a-button"> Github</a>
                        </div>
                    </div>

                </div>

                <div className="page" style={{height: innerHeight}}>
                    <img className="soc-img" alt="" src="https://mcusercontent.com/9cc1f78d70aa64ee0f1b17641/images/f616ed92-ffeb-4547-9ce8-23f22f0a209b.png" />
                    <div className="detail">

                        <h3 className="center">restaurantQR [NOV 2020]</h3>
                        <p>
                        Our final project will be a web application (hosted on Firebase) that supports local restaurants after COVID-19 by allowing customers 
                        an easier way of requesting services while dining in and an easy to use management system for the employees. Dining in customers will 
                        be able to scan the QR code which will be placed on each table that will link to the web app to request real-time service. The website 
                        will have simple to use UI/UX to accommodate every customer’s technical experience. Our website will use a QR code 3rd party api (http://goqr.me/api/) 
                        to generate links for each table to use. Additionally, we used the Google Translate API to allow for the translation of menu items.
                        Customers will be able to search the menu using the input box (with autocomplete).
                        </p>
                        <div className="center">
                            <a href="https://restaurantqr-73126.web.app/" target="_blank" rel="noreferrer" className="a-button"> restaurantQR</a>
                            <a href="https://github.com/kimseul91/restaurantQR" target="_blank" rel="noreferrer" className="a-button"> Github</a>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Land;