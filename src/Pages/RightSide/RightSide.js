import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RightSideCategory from '../RightSideCategory/RightSideCategory';

const RightSide = () => {
    const [categories, setCategories]= useState([]);

    useEffect(()=>{
        fetch('https://learning-course-server.vercel.app/course-categories')
        .then(res=>res.json())
        .then(data=> setCategories(data))
    },[])

    return (
        <div>
            <h4>Left NAVE:{categories.length}</h4>
            {
                categories.map(category=><RightSideCategory key={category.id} category={category}></RightSideCategory>)
                // categories.map(category=><p key={category.id}>
                //     <Link to={`/category/${category.id}`}>{category.name}</Link>
                // </p>)
            }
        </div>
    );
};

export default RightSide;