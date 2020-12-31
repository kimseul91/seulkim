import React, {useEffect, useState} from 'react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import "./Blogs.css";


const Blogs = () => {
    const [content, setContent] = useState("");
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);
    
    useEffect(() => {
        function handleResized() {
            console.log(`resized to ${window.innerHeight}`);
            setInnerHeight(window.innerHeight);
        }
        window.addEventListener('resize',handleResized);
    })
    return (
        <div className="blog-container" style={{height: innerHeight}}>
            <div id="editor">
                <h3>Hello Working on Blogging</h3>
            </div>
            <div>
                <p dangerouslySetInnerHTML= {{ __html:  content}} />
            </div>
            <div className="CKEditor-input">
                <CKEditor
                        editor={ ClassicEditor }
                        data="<p>Hello from CKEditor 5!</p>"
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            // console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            // console.log( { event, editor, data } );
                            setContent(data);
                            console.log(content);

                        } }
                        onBlur={ ( event, editor ) => {
                            // console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            // console.log( 'Focus.', editor );
                        } }
                    />
            </div>
        </div>
    );
};

export default Blogs;