import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoriesNews = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            {data.length} is news found
        </div>
    );
};

export default CategoriesNews;