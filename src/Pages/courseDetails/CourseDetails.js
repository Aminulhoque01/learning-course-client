import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseDetails = ({course}) => {
   
    const{title, img,description}= course;
 

    return (
        <div>
             
                        
                        
            <Row>
                
            
                <Card className="g-4">
                    <Card.Img src={img} className='pt-2 rounded' />
                    <Card.Body>
                        <Card.Title><h3>{title}</h3></Card.Title>
                        <Card.Text>
                           {description.slice(0,250)+'......'}<Link to={`/course/${course.id}`}><small>show details</small></Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
                    
                
                
            
            </Row>
        </div>
    );
};

export default CourseDetails;