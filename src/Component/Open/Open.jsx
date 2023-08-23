import React from 'react';
import { FaClock,FaPhoneAlt } from 'react-icons/fa';

const Open = () => {
    return (
        <div className='hidden md:flex items-center mx-auto  left-1/2 justify-center gap-10 text-xl top-10 '>
            <div className='flex items-center gap-2'>
                <FaClock></FaClock>
                <p>9AM - 5PM</p>


            </div>
            <div className='flex items-center gap-2'>
                <FaPhoneAlt></FaPhoneAlt>
                <p>+880 1743-979765</p>

            </div>
        </div>
    );
};

export default Open;