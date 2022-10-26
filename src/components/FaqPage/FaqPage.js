import React from 'react';
import Card from 'react-bootstrap/Card';


const FaqPage = () => {
    return (
       <div style={{height:'100vh'}} className='bg-dark'>
            <div className='container pt-5'>
                
                <Card body><h1>1. what is cors?</h1></Card>;
                <Card body><h1>2.Why are you using firebase? What other options do you have to implement authentication?</h1></Card>;
                <Card body><h1>3. How does the private route work?</h1></Card>;
                <Card body><h1>4. What is Node? How does Node work?</h1></Card>;
            </div>
       </div>
    );
};

export default FaqPage;