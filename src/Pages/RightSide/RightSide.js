import React, { useEffect, useState } from 'react';

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
                
            }
        </div>
    );
};

export default RightSide;