import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2'

import { useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const GetPremium = () => {
    const premiums = useLoaderData();
    // const {logout}= useContext(AuthContext);

    const handleCancel=()=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
    }
    const handleBuy =()=>{
        // alert("congratulations your premium success");
        Swal.fire(
            'Good job!',
            'congratulations your premium success!',
            'success'
        )
    }
    return (
        <div style={{ height: '100vh' }} className='bg-dark'>
            <div className='pt-5'>

                <Card style={{ width: '22rem' }} className='container pt-5'>
                    <h2 className='text-center'>Now Premium access</h2>
                    <Card.Body>
                        <h6>{premiums.name}</h6>
                        <h6>{premiums.price}</h6>
                        <br />
                        <div className='justify-contain-between'>
                            <Row>
                                <Col><Button onClick={handleBuy} variant="primary">confirm</Button> </Col>
                                
                                <Col><Button onClick={handleCancel} variant="primary">cancel</Button></Col>
                            </Row>
                              
                        </div>
                    </Card.Body>
                </Card>

            </div>
        </div>
    );
};

export default GetPremium;
