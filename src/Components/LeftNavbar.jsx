import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories,setcategories]= useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setcategories(data))
    },[])
    return (
        <div>
            <h1 className='font-bold'>All categories ({categories.length})</h1>
            <div className='flex flex-col gap-2 mt-2 text-left'>
            {
                categories.map((category,idx)=><NavLink to={`/category/${category.id}`} className='text-left px-3 py-2 rounded-lg btn hover:bg-gray-300 cursor-pointer' key={idx}>
                    {category.name}
                </NavLink>)
            }
            </div>
        </div>
    );
};

export default LeftNavbar;