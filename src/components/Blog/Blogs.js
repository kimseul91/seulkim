import React, {useEffect, useState} from 'react';
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
    // console.log("blogs")
    return (
        <div className="container">
            <div id="home" className="page name" style={{height: innerHeight}}>
                <h1> Blogs </h1>
                <a href="/">Home</a>
            </div>

        </div>
    );
};

export default Blogs;