import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CourseDetails from '../../Pages/courseDetails/CourseDetails';
import RightSide from '../../Pages/RightSide/RightSide';
import RightSideCategory from '../../Pages/RightSideCategory/RightSideCategory';



const Course = () => {
    const courses = useLoaderData();

    return (
        <div className='bg-dark'>
            <Container>
                <Row>
                    <Col sm={9} className="g-4">

                        <h2>this is course:{courses.length}</h2>
                        {
                            courses.map(course => <CourseDetails key={course.id} course={course}></CourseDetails>)
                        }

                    </Col>

                    <Col sm={2} className="mt-5">
                      
                        <RightSide></RightSide>
                       
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default Course;