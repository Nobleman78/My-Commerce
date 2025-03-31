import React from 'react';
import Newsletter from '../Components/Newsletter';
import contactImage from '../assets/5124556.jpg'
const Contact = () => {
    return (
        <div className='border-t'>
            <div className='flex items-center text-center my-10 gap-2 justify-center text-3xl '>
                <p><span className='text-gray-600'>CONTACT</span> <span className='font-semibold'>US</span></p>
                <p className='w-8 sm:w-11 h-[1px] bg-black'></p>

            </div>
            <div className='flex gap-5 md:gap-10 flex-col md:flex-row'>
                <img className=' md:w-1/2' src={contactImage} alt="" />
                <div className='text-gray-600 py-20'>
                    <p className='text-2xl mb-5 font-semibold mt-2'>Our Store</p>
                    <p className=' w-50 mb-5'>1201 - Dhaka - Farmagte
                    </p>
                    <p>Phone: +8801872345678</p>
                    <p className='mb-5'>Email: admin@ajeeb.com</p>
                    <p className='mb-5 font-semibold text-2xl'>Careers at Ajeeb</p>
                    <p className='mb-5'>Learn more about our teams and job openings.</p>
                    <button className='px-6 py-3 border hover:bg-black hover:text-white transition duration-300
                    '>Explore Jobs</button>
                </div>
            </div>
            <Newsletter />
        </div>
    );
};

export default Contact;