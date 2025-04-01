import React, { useContext, useEffect, useState } from 'react';
import { Shopcontex } from '../Context/Contex';

const Order = () => {
    const { products, currency, cartItems,method } = useContext(Shopcontex);
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        const tempData = [];
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item]
                    })
                }
            }
        }
        setCartData(tempData)

    }, [cartItems])

    return (
        <div className='border-t pt-16'>
            <div className='text-2xl flex items-center gap-2'>
                <p><span className='text-gray-600'>MY</span> ORDERS</p>
                <p className='w-8 sm:w-11 h-[1px] bg-black'></p>

            </div>
            <div>
                <div>
                    {
                        cartData.map((item, index) => {
                            const productData = products.find(product => product._id === item._id);
                            return (
                                <div key={index} className='border-t py-7 my-2 border-b text-gray-600 grid grid-cols-[4fr_2fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                                    <div className='flex items-start gap-6'>
                                        <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                                        <div>
                                            <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                                            <div className='flex items-center gap-5 mt-2'>
                                                <p>{currency}{productData.price}</p>
                                                <p className='border px-2 sm:px-3 sm:py-1 text-lg text-white bg-blue-600'>Size : {item.size}</p>
                                                <p className='border py-1 px-2 bg-blue-600 text-white'>Method : <span className='text-lg'> {method}</span> </p>
                                            </div>
                                            
                                        </div>
                                    </div>
                            
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Order;