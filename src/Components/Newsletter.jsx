import React from 'react';

const Newsletter = () => {
    return (
        <div className='my-10 md:my-20 lg:my-10 '>
            <h1 className='text-center text-2xl font-semibold mb-3'>Subscribe now & get 20% off</h1>
            <p className='text-center text-md text-gray-600 mb-3'>Subscribe and find out best offer based on products.</p>
            <div className='flex w-full mx-auto sm:w-1/2 justify-center items-center  '>
                <input type="email" placeholder='Enter your email ' className='w-100 sm:w-1/2 border shadow-none outline-none px-4 py-2' />
                <button type='submit' className='bg-black cursor-pointer text-white px-4 py-2.5 '>Subscribe</button>

            </div>
            
        </div>
    );
};

export default Newsletter;