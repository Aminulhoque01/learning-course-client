import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Error from "../../components/Error/Error/Error";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from '../../components/register/Register/Register';
import Course from "../../Course/Course/Course";
import Main from "../../layout/layout/Main";

export const routes= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            
            {
                path:'/course',
                element:<Course></Course>,
                loader:()=>fetch('https://learning-course-server.vercel.app/course')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },

        ]
    }
])