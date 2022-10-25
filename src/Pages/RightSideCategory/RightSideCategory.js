import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
const RightSideCategory = ({category}) => {
    const{name}=category;
    return (
        <div className='mt-4'>
            
            <Card style={{ width: '22rem' }}>
                <ListGroup variant="flush">
                <Link to={`/category/${category.id}`} className='text-decoration-none text-black fw-bold '> <ListGroup.Item >{name}</ListGroup.Item></Link>
                    
                </ListGroup>
            </Card>
                       
        </div>
    );
};

export default RightSideCategory;
