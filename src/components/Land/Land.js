import React from 'react';
import "../page.css";

const Land = () => {
    return (
        <div className="container">
            <div className="page">

            <h2> Hello I'm Eric.  </h2>
            <h4> I’m a student at University of North Carolina at Chapel Hill majoring in Computer Science.</h4>
                <button>FOLLOW</button>
                <button>CONTACT</button>
            </div>

            <div className="page">

                I’ve always wanted to learn more about technology since 
                    I was a kid. I had to take a quick 6 year break between my 
                    colleges for serving in the US Army.
            </div>

            <div className="page">
                Summer of Code @ UNC [June - August 2020]

                This was in the beginning of the pandemic which caused many students to be out of their internship. 
                UNC orgnaized an internship-like experience to the computer science students who couldn't find an internship with a company. 
                I was part of a team of 8 who were in charge of creating a new database system for the UNC CS department. The program is to allow easier access for 
                companies who are partnered with UNC to review student's resume in one single location. 
                Some features of the web app is for students to upload their resume for the recruiters to see. 
                Reecruiters to see all of the stduents' resume in one location using different filters like graduation date, attended hackathon, skill set like CS languages. 
                UNC CS staff can manage recruiters' access to which students they can view regarding their "tier"

                Google Firebase, React,

            </div>

            <div>
                Final project for COMP 426
                restaurantQR

                Our final project will be a web application (hosted on Firebase) that supports local restaurants after COVID-19 by allowing customers 
                an easier way of requesting services while dining in and an easy to use management system for the employees. Dining in customers will 
                be able to scan the QR code which will be placed on each table that will link to the web app to request real-time service. The website 
                will have simple to use UI/UX to accommodate every customer’s technical experience. Our website will use a QR code 3rd party api (http://goqr.me/api/) 
                to generate links for each table to use. Additionally, we may use the Google Translate API to allow for the translation of menu items.

                Each restaurant will sign up through our website, then be able to modify the landing page. We will use Firebase’s Firestore NoSQL database 
                to store individual restaurant info, such as employees and menu items. On the restaurant’s home page, the manager will be able to edit the menu, 
                waiters/waitresses (add/remove), and what customers can request like food, drinks, napkins, refills, check, etc. Each employee will also sign up 
                and they will be able to choose which tables to manage for that shift. When customers request a service, the correlated employee will be notified 
                with the table number. The Customers’ view of the website will have buttons to request drinks/napkins/refills, order food, and request for the 
                check as well as their assigned waiter/waitress name. The customers can also navigate to see the restaurant’s menu with pictures and the price. 
                They will have the option to translate the menu in different languages via Google translate API. Customers will be able to search the menu using 
                the input box (with autocomplete).
            </div>
        </div>

    );
};

export default Land;