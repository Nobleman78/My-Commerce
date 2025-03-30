import React from 'react';
import herologo from '../assets/hero-img.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* This is for left hero components */}
            <div className='w-full sm:w-1/2 flex  items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141] px-10'>
                    <div className='flex items-center gap-2 '>
                        <p className='font-medium text-2xl md:text-4xl'>Discover Your Next Favorite Look!"</p>
                    </div>
                    <h1 className='text-xl lg:text-xl leading-relaxed mt-5'>Elevate your wardrobe with the latest trends, handpicked just for you. Shop now and express yourself with fashion that speaks volumes.</h1>
                    <div className='flex items-center gap-2'>
                       <Link to='/collection'> <button className='font-semibold text-sm border text-white bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer px-4 py-3 rounded md:text-base mt-4 '>Explore The Collection</button></Link>
                       
                    </div>  
                </div>

            </div>
            {/* Hero Right Side */}
            <img className=' w-full sm:w-1/2 h-[600px] ' src={herologo} alt="Hero Image" />
        </div>
    );
};

export default Hero;