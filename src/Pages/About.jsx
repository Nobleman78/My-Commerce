import React from 'react';
import Newsletter from '../Components/Newsletter';
import aboutImage from '../assets/about.avif'

const About = () => {
    return (
        <div className='border-t'>
            <div className='text-center flex text-3xl my-10 items-center gap-2 justify-center'>
                <p><span className='t text-gray-600'>ABOUT</span> US</p>
                <p className='w-8 sm:w-11 h-[1px] bg-black'></p>
            </div>
            <div className='flex flex-col lg:flex-row  sm:gap-10'>
                <img className=' lg:w-120  ' src={aboutImage} alt="" />
                <div className='my-10 text-justify flex-col lg:w-1/2 '>
                    <p>Ajeeb was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
                    <br /><br /> Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
                    <p className='my-4 text-xl font-semibold'>Our Mission</p>    
                    <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
                 </div>
            </div>
            <div className='my-20'>
                <div className='flex text-center items-center gap-2'>
                    <p><span className='text-2xl text-gray-600'>WHY</span> <span className='text-2xl font-semibold'>CHOOSE US</span></p>
                    <p className='w-8 sm:w-11 h-[1px] bg-black'></p>

                </div>

            </div>
            <div className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-3 '>
                <div className='flex flex-col gap-4 border px-10 py-20 rounded'>
                    <p className='font-semibold '>Quality Assurance</p>
                    <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>


                </div>
                <div className='flex flex-col gap-4 border px-10 py-20 rounded'>
                    <p className='font-semibold'>Convenience</p>
                    <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>


                </div>
                <div className='flex flex-col gap-4 border px-10 py-20 rounded'>
                    <p className='font-semibold'>Exceptional Customer Service</p>
                    <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>

                </div>

            </div>
            <Newsletter/>
        </div>
    );
};

export default About;