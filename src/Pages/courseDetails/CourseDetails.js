import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
const CourseDetails = () => {
    return (
        <div>
             
                        
                        
            <Row>
                
            
                <Card className="g-4">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                    
                
                
            
            </Row>
        </div>
    );
};

export default CourseDetails;