import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-3'>
            <div></div>
            <div className='flex space-x-5 items-center'>
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className='flex items-center gap-4'>
                <img src={userIcon} alt="" />
                <button className='btn bg-gray-500 border-none px-3 py-2 rounded-lg text-white'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;