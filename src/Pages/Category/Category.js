import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import course3 from '../../asstes/Image/course3.jpg'

import { HiDocument } from "react-icons/hi";
import jsPDF from 'jspdf';



const Category = () => {
    const Course= useLoaderData();
    
   
    const handlerPdf =()=>{
        const doc= jsPDF('landscape', 'px','a4', 'false');
        
        doc.addImage(Course.img, 65,20,500,400);
        
       

        doc.save('a.pdf')
    }
    
    return (
        <div className='bg-dark'>
            <div className='container pt-5'>
                <Card style={{  }}>
                    <Card.Body><HiDocument onClick={handlerPdf}></HiDocument>
                    
                        <Card.Title className='text-center'>{Course.name} </Card.Title>
                        <Card.Img variant="top" src={Course.img} />
                        <Card.Subtitle className="text-muted pt-3"><h2>{Course.title}</h2></Card.Subtitle>
                        <Card.Text className='pt-3'>
                            {Course.description}
                        </Card.Text>
                        <footer className="footer pb-5">
                            <h2>Prices:{Course.price}</h2>
                        </footer>
                       <Link to="/premium"><Button variant="primary">Get premium access.</Button></Link>
                    </Card.Body>
                </Card>
                
                </div>
       </div>
    );
};

export default Category;