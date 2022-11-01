import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FaGoogle, FaGithub, } from "react-icons/fa";
import { Link,useLocation,useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState();
    const { googleLogin, emailLogin, githubLogin } = useContext(AuthContext);
    

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname|| '/' ;


    const handlerLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        emailLogin(email, password)
            .then(result => {
                const user = result.user;
                form.reset('');
                setError('');
                console.log(user);
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error);
                
                setError(error.message);

            })
        console.log(email, password);

    }

    const googleProvider = new GoogleAuthProvider();

    const googleHadler = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // navigate(from,{replace:true});
                console.log(user);
              
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    const githubProvider = new GithubAuthProvider()

    const gitHubHadler = () => {
        githubLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                // navigate(from,{replace:true});
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div style={{height:"100vh"}} className='bg-dark pt-5'>
            <Card className='container pt-5  w-50'>
                <Card.Body>

                    <h2 className='mb-3 text-center '>Please Login now</h2>
                    <div>
                        <Form onSubmit={handlerLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" />
                            </Form.Group>
                            <div className='text-danger'>
                                {
                                   (error)

                                }
                            </div>

                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                            <p>You Have no account..? <Link to='/register'>Register</Link></p>
                        </Form>
                    </div>

                    <div>
                        <div className='mt-5'>
                            <Button onClick={googleHadler} variant="outline-warning"><FaGoogle></FaGoogle> Login In Withe Google</Button>
                        </div>
                        <div className='mt-2'>
                            <Button onClick={gitHubHadler} variant="outline-dark"><FaGithub></FaGithub> Login In Withe GitHub</Button>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;