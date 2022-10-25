import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CourseDetails from '../../Pages/courseDetails/CourseDetails';



const Course = () => {
    const courses = useLoaderData();

    return (
        <div>
            <Container>
                <Row>
                    <Col sm={9} className="g-4">

                        <h2>this is course:{courses.length}</h2>
                        {
                            courses.map(course=><CourseDetails key={course.id} course={course}></CourseDetails>)
                        }
                   
                    </Col>
                        
                    <Col sm={2}>
                        2 of 2
                    </Col>
                </Row>

             </Container>            
           
        </div>
    );
};

export default Course;