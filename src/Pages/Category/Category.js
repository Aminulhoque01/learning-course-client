import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Category = () => {
    const Course= useLoaderData();
    // console.log(singleCourses);

    return (
        <div className='bg-dark'>
            <div className='container pt-5'>
                <Card style={{  }}>
                    <Card.Body>
                        <Card.Title className='text-center'>{Course.name}</Card.Title>
                        <Card.Img variant="top" src={Course.img} />
                        <Card.Subtitle className="text-muted pt-3"><h2>{Course.title}</h2></Card.Subtitle>
                        <Card.Text className='pt-3'>
                            {Course.description}
                        </Card.Text>
                        <footer className="footer pb-5">
                            <h2>Prices:{Course.price}</h2>
                        </footer>
                       <Link to="/premium"><Button variant="primary">Get premium access.</Button></Link>
                    </Card.Body>
                </Card>
                
                </div>
       </div>
    );
};

export default Category;