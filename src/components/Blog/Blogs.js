import React, {useEffect, useState} from 'react';
import "../Blog/Blogs.css";
// import "../page.css";


const Blogs = () => {
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);
    
    useEffect(() => {
        function handleResized() {
            console.log(`resized to ${window.innerHeight}`);
            setInnerHeight(window.innerHeight);
        }
        window.addEventListener('resize',handleResized);
    })
    return (
        <div className="container">
            <div id="home" className="page name blog-pending" style={{height: innerHeight}}>
                <div className="pending">

                    <h1> Blogs </h1>
                    <h2> Currently in the process of making.</h2>
                    <a href="/">Go back Home</a>
                </div>
            </div>

        </div>
    );
};

export default Blogs;