import React, { useContext } from 'react';
import { Image, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import learning from '../../asstes/Image/learning.jpg';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ToggleSwitch from '../../Pages/ToggleSwitch/ToggleSwitch ';
import { CTooltip } from '@coreui/react';

import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handlerLogOut = () => {
        logout();
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">

                <Container>
                    <img
                        style={{ height: '40px' }}
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
                            <Nav.Link ><Link to='/faq' className='fw-bold text-decoration-none text-secondary'>FAQ</Link></Nav.Link>
                            <Nav.Link ><Link to='/blog' className='fw-bold text-decoration-none text-secondary'>Blog</Link></Nav.Link>
                            <ToggleSwitch label=" " />
                            
                        </Nav>
                        <Nav>
                            <Nav.Link className='pt-3'>
                                {
                                    user?.displayName ?
                                        <>

                                            
                                        </>
                                        :
                                        <>
                                            <Link to='/login' className='fw-bold text-decoration-none text-secondary'>Login</Link>

                                        </>
                                }


                            </Nav.Link>
                            <Nav.Link>
                                {
                                    user?.photoURL ?
                                        <>
                                           <CTooltip content={user?.displayName} > 
                                                <Image

                                                    style={{ height: '30px' }} roundedCircle

                                                    src={user?.photoURL}
                                                ></Image>
                                            </CTooltip>
                                            <Button onClick={handlerLogOut} variant="outline-danger">Logout</Button>
                                        </>
                                        : <FaUser></FaUser>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;