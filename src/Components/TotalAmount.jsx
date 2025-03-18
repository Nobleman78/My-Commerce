import React, { useContext } from 'react';
import { Shopcontex } from '../Context/Contex';

const TotalAmount = () => {
    const { currency, getCartAmount, deliveryFee } = useContext(Shopcontex);
    
    const cartAmount = getCartAmount() || 0;
    const fee = deliveryFee || 0;
    const totalAmount = cartAmount === 0 ? 0 :cartAmount + fee;

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
                    <p>{currency}{fee}</p>

                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total Amount</b>
                    <b>{currency}{totalAmount}</b>

                </div>

            </div>
        </div>
    );
};

export default TotalAmount;