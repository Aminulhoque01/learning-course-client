import React from 'react';
import { useLoaderData } from 'react-router-dom';

const GetPremium = () => {
    const premiums= useLoaderData();
    return (
        <div>
            <h2>this is GetPremium:</h2>
        </div>
    );
};

export default GetPremium;
