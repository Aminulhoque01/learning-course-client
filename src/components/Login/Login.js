import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub, } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const {googleLogin,emailLogin} = useContext(AuthContext);
    const [error, setError]= useState();
   

    const handlerLogin =(event)=>{
        event.preventDefault();
        const form= event.target;
        const email= form.email.value;
        const password= form.password.value;

        emailLogin(email,password)
        .then(result=>{
            const user= result.user;
            form.reset('');
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
            
        })
        console.log(email,password);

    }

     const googleProvider = new GoogleAuthProvider();

    const googleHadler =()=>{
        googleLogin(googleProvider)
        .then(result =>{
            const user= result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error(error);
            setError(error.message)
        })
    }

    return (
        <div className='container mt-5  w-50'>
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
                    <div>
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
                    <Button variant="outline-dark"><FaGithub></FaGithub> Login In Withe GitHub</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;