import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AboutUs = () => {
   const data = useLoaderData()
    return (
        <div>
            {
                data.map(item => <div key={item.price}>{item.price}</div>)
            }
        </div>
    );
};

export default AboutUs;