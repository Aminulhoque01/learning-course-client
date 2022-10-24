import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import learning from '../../asstes/Image/learning.jpg';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Container>
                        <img
                            style={{height:'40px'}}
                            className="d-block rounded"
                            src={learning}
                            alt="First slide"
                        /> 

                    <Navbar.Brand>
                       
                        <Link to='/' className='fw-bold text-decoration-none text-secondary'>
                            Learning-Course
                        </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/" className='fw-bold text-decoration-none text-secondary'>Home</Link></Nav.Link>
                            <Nav.Link ><Link to='/course' className='fw-bold text-decoration-none text-secondary'>Courses</Link></Nav.Link>
                            <Nav.Link ><Link to='' className='fw-bold text-decoration-none text-secondary'>FAQ</Link></Nav.Link>
                            <Nav.Link ><Link to='' className='fw-bold text-decoration-none text-secondary'>Blog</Link></Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link><Link to='/login' className='fw-bold text-decoration-none text-secondary'>Login</Link></Nav.Link>
                            <Nav.Link eventKey={2}>
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;