import React, { useContext } from 'react';
import { Shopcontex } from '../Context/Contex';

const TotalAmount = () => {
    const { currency, getCartAmount, deliveryFee } = useContext(Shopcontex);

    return (
        <div className='w-full'>
            <div className='text-2xl flex items-center text-center'>
                <p><span className='text-gray-600 '>CART</span> TOTAL</p>

            </div>
            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>SubTotal</p>
                    <p>{currency}{getCartAmount()}.00</p>

                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>{currency}{deliveryFee}</p>

                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total Amount</b>
                    <b>{currency}{getCartAmount()===0?0:getCartAmount()+deliveryFee}</b>

                </div>

            </div>
        </div>
    );
};

export default TotalAmount;