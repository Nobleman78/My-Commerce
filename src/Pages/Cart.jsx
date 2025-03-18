import React, { useContext, useEffect, useState } from 'react';
import { Shopcontex } from '../Context/Contex';
import { assets } from '../assets/assets';
import TotalAmount from '../Components/TotalAmount';

const Cart = () => {
    const { currency, cartItems, products,updateQuantiy } = useContext(Shopcontex);

    const [cartData, setCartData] = useState([]);

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
        <div className='border-t pt-14'>
            <div className='text-2xl flex justify-center items-center gap-2'>
                <p><span className='text-gray-600'>YOUR</span> CART</p>
                <p className='w-8 sm:w-11 h-[1px] bg-black'></p>

            </div>
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
                                            <p className='border px-2 sm:px-3 sm:py-1 bg-slate-50'>{item.size}</p>


                                        </div>
                                    </div>
                                </div>
                                <input onChange={(e)=>e.target.value === '' || e.target.value === '0'?null:updateQuantiy(item._id,item.size, Number(e.target.value))} type="number" className= ' border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' defaultValue={item.quantity} />
                                <img onClick={()=>updateQuantiy(item._id, item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />

                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-end my-20'>
                <div className='w-full sm:w-[450px]'>
                    <TotalAmount/>

                </div>

            </div>


        </div>
    );
};

export default Cart;
