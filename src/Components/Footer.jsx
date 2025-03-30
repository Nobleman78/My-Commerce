import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <div>
            <div className='my-10 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm'>
                <div>
                    <img className='w-32 mb-5' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, numquam! Fugit esse quaerat exercitationem ipsum?</p>

                </div>
                <div>
                    <h1 className='text-2xl font-medium mb-5'>COMPANY</h1>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div>
                    <h1 className='text-2xl font-medium mb-5'>GET IN TOUCH</h1>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+880158980996</li>
                        <li>someone@gmail.com</li>
                        <li>facebook.com</li>

                    </ul>
                </div>

            </div>
            <div>
                <hr />
                <p className='text-sm font-medium py-4 text-center'>
                    Copyright 2025@ - All Rights Resercved
                </p>

            </div>
        </div>

    );
};

export default Footer;