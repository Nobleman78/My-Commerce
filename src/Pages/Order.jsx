import React, { useContext } from 'react';
import { Shopcontex } from '../Context/Contex';

const Order = () => {
    const { products, currency } = useContext(Shopcontex);
    return (
        <div className='border-t pt-16'>
            <div className='text-2xl flex items-center gap-2'>
                <p><span className='text-gray-600'>MY</span> ORDERS</p>
                <p className='w-8 sm:w-11 h-[1px] bg-black'></p>

            </div>
            <div>
                {
                    products.slice(0, 4).map((item, index) => (
                        <div key={index} className='py-4 border-t border-t-gray-300 border-b border-b-gray-300  text-gray-700 flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                            <div className='flex items-start gap-6  text-sm '>
                                <img className='w-16 sm:w-20' src={item.image[0]} alt="product-image" />
                                <div>
                                    <p className='font-semibold text-lg'>{item.name}</p>
                                    <div className='flex gap-2 items-center font-semibold '>
                                        <p>{currency}{item.price}</p>
                                        <p >Quantity : {1}</p>
                                        <p>Size : {'M'}</p>

                                    </div>
                                    <p>Date : <span className='text-gray-600 text-sm'> {' Tue Mar 18 2025'}</span> </p>
                                    <p>Payment : <span className='text-gray-600 text-sm'>{'COD'}</span> </p>
                                </div>
                            </div>
                            <div className='md:w-1/2 flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                                    <p>Ready to ship</p>
                                </div>
                                <button className='border border-gray-300 cursor-pointer px-4 py-2 text-sm  rounded '>Track Order</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Order;