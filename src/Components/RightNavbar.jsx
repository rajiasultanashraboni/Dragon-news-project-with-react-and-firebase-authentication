import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";





const RightNavbar = () => {
    return (
        <div> 
            <h2 className='font-bold mb-2'>Login With</h2>
            <div className='flex flex-col space-y-2 '>
                <button className='btn bg-gray-200 px-3 py-2 rounded-lg flex gap-2 justify-center items-center cursor-pointer'><FcGoogle />Login with Google</button>
                <button className='btn bg-gray-200 px-3 py-2 rounded-lg flex gap-2 justify-center items-center cursor-pointer'><FaGithub />
                Login with Github</button>
            </div>
            <h2 className='font-bold my-5'>Find Us On</h2>
            <div>
                <div className="join flex join-vertical *:bg-base-100 *:hover:bg-gray-200">
                <button className="btn join-item px-3 py-2 justify-start w-full"><FaFacebook />facebook</button>
                <button className="btn join-item px-3 py-2 justify-start w-full"><FaTwitter />Twitter</button>
                <button className="btn join-item px-3 py-2 justify-start w-full"><FaInstagramSquare />Instagram</button>
            </div>
            </div>
        </div>
    );
};

export default RightNavbar;