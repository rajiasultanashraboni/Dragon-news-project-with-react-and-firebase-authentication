import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4'>
            <p className='bg-pink-500 px-3 py-2 text-white'>latest</p>
            <Marquee className='bg-gray-200 px-2 py-2'>
            <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ea?</Link>
            <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ea?</Link>
            <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ea?</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;