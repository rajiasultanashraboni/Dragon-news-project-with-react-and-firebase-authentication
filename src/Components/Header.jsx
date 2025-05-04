import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className='w-[300px] mx-auto py-5 flex flex-col justify-center text-center'>
            <img src={logo} alt="" />
            <p className=' py-2 text-gray-500'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;