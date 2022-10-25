import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {

    const {createUser,updateUserProfile}= useContext(AuthContext);

    const handlerRegister =(event)=>{
        event.preventDefault();

        const form= event.target;
        const name= form.name.value;
        const email= form.email.value;
        const password= form.password.value;
        const photoURL= form.url.value;
        
        if(password.length < 6){
            alert('you input must 6 chart password');
        }

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            handleUpdateUserProfile(name, photoURL);
            form.reset('');

        })
        .catch(error=>{
            console.log(error);
        })

        console.log(name,email,password,photoURL);

    }

    const handleUpdateUserProfile = (name, photoURL )=>{
        const profile={
            displayName:name,

            photoURL: photoURL,
        };
        
        updateUserProfile(profile)
        .then(()=>{})
        .cath(error=>{
            console.error(error);
        })
    }

    return (
        <div className='container mt-5  w-50'>
            <h2 className='mb-3 text-center '>Please Register now</h2>
            <div>
                <Form onSubmit={handlerRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter full name" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="photo url" name="url" placeholder="Enter photo url" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <p>All You Have  account..? <Link to='/login'>login</Link></p>
                </Form>
            </div>

            
        </div>
    );
};

export default Register;