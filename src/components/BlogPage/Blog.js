import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div style={{height:'100%'}} className='bg-dark'>
            <div className='container pt-5'>
                
                <Card body>
                    <h1>1. what is cors?</h1>
                    <h3>Ans:CORS is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options.</h3>
                </Card>;
                <Card body>
                    <h1>2.Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <h3>Ans:Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                        <br />
                        <br />
                        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    </h3>
                </Card>;
                <Card body>
                    <h1>3. How does the private route work?</h1>
                    <br />
                    <h3>Ans:The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</h3>
                   
                    
                </Card>;
                <Card body>
                    <h1>4. What is Node? How does Node work?</h1>
                    <br />
                    <h3>Learn about Node.js, a JavaScript runtime for building server-side or desktop applications.
                        <br />
                        <br />
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </h3>
                    

                </Card>;
            </div>
       </div>
    );
};

export default Blog;