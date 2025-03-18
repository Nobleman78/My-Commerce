import React, { useState } from 'react';
import TotalAmount from '../Components/TotalAmount';
import { assets } from '../assets/assets';
import visaCard from '../../src/assets/visa.webp';
import masterCard from '../../src/assets/MASTER.png'
import { useNavigate } from 'react-router-dom';

const Placeorder = () => {
    const navigate = useNavigate();
    const [method,setMethod] = useState('cod')
    console.log(method);
    return (
        <div>
            <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
                {/* Left side div */}
                <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                    <div className='text-xl flex items-center sm:text-2xl my-3'>
                        <p><span className='text-gray-600'>DELIVERY</span> INFORMATION</p>
                        <p className='w-8 sm:w-[11] bg-black h-[1px]'></p>
                    </div>
                    <div className='flex gap-3'>
                        <input type="text" placeholder='First Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
                        <input type="text" placeholder='Second Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
                    </div>
                    <input type="email" placeholder='Enter Your Email' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
                    <input type="text" placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
                    <div className='flex gap-3'>
                        <input type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
                        <input type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
                    </div>
                    <div className='flex gap-3'>
                        <input type="number" placeholder='Zip Code' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
                        <input type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
                    </div>
                    <input type="number" placeholder='Phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
                </div>
                {/* Right side div */}
                <div className='mt-8 '>
                    <div className='mt-8 min-w-80'>
                        <TotalAmount />

                    </div>
                    <div className='mt-12'>
                        <div className='flex text-xl items-center gap-2 text-center'>
                            <p><span className='text-gray-600'>Payment</span> Method</p>
                            <p className='w-8 sm:w-11 h-[1px] bg-black'></p>
                        </div>
                        <div className='flex gap-1 flex-col lg:flex-row'>
                            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-1 border p-2 px-3 cursor-pointer'>
                                {/* <p className={`min-w-3.5 h-3.5 border rounded-full`}></p> */}
                                <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                            </div>
                            <div onClick={()=>setMethod('visa-card')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                                <img className='h-7 mx-4  w-10 ' src={visaCard} alt="" />
                            </div>
                            <div onClick={()=>setMethod('master-card')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                                <img  className='h-7 mx-4  w-10 ' src={masterCard} alt="" />
                            </div>
                            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                                <p>Cash on delivery</p>
                            </div>
                        </div>
                        <div className='w-full text-end mt-8'>
                            <button onClick={() => navigate('/orders')} className='bg-black  text-white px-16 py-3 cursor-pointer text-sm'>Please Order</button>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Placeorder;