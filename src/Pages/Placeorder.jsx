import React, { useState } from 'react';
import TotalAmount from '../Components/TotalAmount';
import { assets } from '../assets/assets';
import visaCard from '../../src/assets/visa.webp';
import masterCard from '../../src/assets/MASTER.png';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const Placeorder = () => {
    const navigate = useNavigate();
    const [method, setMethod] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        secondName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    })
    const isFormValid = () => {
        return (
            /*-----Checking that is there any whitespace and name key-value can't be null---*/

            formData.firstName.trim() !== '' &&
            formData.secondName.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.street.trim() !== '' &&
            formData.city.trim() !== '' &&
            formData.state.trim() !== '' &&
            formData.country.trim() !== '' &&
            formData.phone.trim() !== '' &&
            method !== null
        );
    }

    const handleInputChange = (event) => {
        /*--Since formdata is an object and the key-value fairs will be object--*/
        const { name, value } = event.target;
        setFormData({
            /*A shallow copy of formdata*/
            ...formData,
            /*Forming like the Form data key-value pair */
            [name]: value
        })
    }

    return (
        <div>
            <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
                {/* Left side (Delivery Information) */}
                <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                    <div className='text-xl flex items-center sm:text-2xl my-3'>
                        <p><span className='text-gray-600'>DELIVERY</span> INFORMATION</p>
                        <p className='w-8 sm:w-[11] bg-black h-[1px]'></p>
                    </div>
                    <div className='flex gap-3'>
                        <input type="text" name="firstName" placeholder='First Name' required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value={formData.firstName} onChange={handleInputChange} />
                        <input type="text" name="secondName" placeholder='Second Name' required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value={formData.secondName} onChange={handleInputChange} />
                    </div>
                    <input type="email" name="email" placeholder='Enter Your Email' required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value={formData.email} onChange={handleInputChange} />
                    <input type="text" name="street" placeholder='Street' required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value={formData.street} onChange={handleInputChange} />
                    <div className='flex gap-3'>
                        <input type="text" name="city" placeholder='City' required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value={formData.city} onChange={handleInputChange} />
                        <input type="text" name="state" placeholder='State' required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value={formData.state} onChange={handleInputChange} />
                    </div>
                    <div className='flex gap-3'>
                        <input type="number" name="zipCode" placeholder='Zip Code' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value={formData.zipcode} onChange={handleInputChange} />
                        <input type="text" name="country" placeholder='Country' required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value={formData.country} onChange={handleInputChange} />
                    </div>
                    <input type="number" name="phone" placeholder='Phone' required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value={formData.phone} onChange={handleInputChange} />
                </div>

                {/* Right side (Payment & Total) */}
                <div className='mt-8'>
                    <div className='mt-8 min-w-80'>
                        <TotalAmount />
                    </div>
                    <div className='mt-12'>
                        <div className='flex text-xl items-center gap-2 text-center'>
                            <p><span className='text-gray-600'>Payment</span> Method</p>
                            <p className='w-8 sm:w-11 h-[1px] bg-black'></p>
                        </div>
                        <div className='flex gap-1 flex-col lg:flex-row'>
                            <div onClick={() => setMethod('stripe')} className={`border rounded-lg p-3 cursor-pointer transition-all ${method === 'stripe' ? 'border-2 border-black bg-gray-50' : 'border-gray-300 hover:border-gray-400'}`}>
                                <div className='flex items-center justify-between'>
                                    <img className='h-6' src={assets.stripe_logo} alt="Stripe" />
                                    {method === 'stripe' && (
                                        <span className='text-green-500'>
                                            <FaCheck />
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div
                                onClick={() => setMethod('visa-card')} className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'visa-card' ? 'border-black' : ''}`}>
                                <div className='flex items-center justify-between'>
                                    <img className='h-7 mx-4 w-10' src={visaCard} alt="" />
                                    {
                                        method === 'visa-card' && (
                                            <span className='text-green-500'>
                                                <FaCheck />
                                            </span>
                                        )
                                    }

                                </div>
                            </div>
                            <div onClick={() => setMethod('master-card')} className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'master-card' ? 'border-black' : ''}`}>
                                <div className='flex items-center justify-between'>
                                    <img className='h-7 mx-4 w-10' src={masterCard} alt="" />
                                    {
                                        method === 'master-card' && (
                                            <span className='text-green-500'>
                                                <FaCheck />

                                            </span>
                                        )
                                    }
                                </div>
                            </div>
                            <div onClick={() => setMethod('cod')} className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'cod' ? 'border-black' : ''}`}>
                                <div className='flex items-center justify-center'>
                                    <p>Cash on delivery</p>
                                    {
                                        method === 'cod' && (
                                            <span className='text-green-500'>
                                                <FaCheck />
                                            </span>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='w-full text-end mt-8'>
                            <button onClick={() => isFormValid() && navigate('/orders')} className={`bg-black text-white px-16 py-3 text-sm ${isFormValid() ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                                disabled={!isFormValid()}>
                                Place Order

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Placeorder;