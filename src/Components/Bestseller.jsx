import React, { useContext, useEffect, useState } from 'react';
import { Shopcontex } from '../Context/Contex';
import ProductItem from './Productitem';


const Bestseller = () => {
    const { products } = useContext(Shopcontex)
    const [bestSeller, setBestSeller] = useState([])


    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller))
        setBestSeller(bestProduct.slice(0, 5))
    }, [])
    return (
        <div className='my-10'>
            <div className='text-center text-3xl flex justify-center items-center gap-2'>
                <p><span className='text-gray-600'>BEST</span> <span className='text-semibold'>SELLERS</span></p>
                <p className='w-8 sm:w-11 h-[1px] bg-black'></p>
            </div>
            <p className='text-center text-xm sm:text-sm md:text-base text-gray-600 my-3'>Here are some brands which are selected as best seller.</p>
            <div className='grid gird-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item, index) => (
                        <ProductItem key={index} name={item.name} price={item.price} id={item._id} image={item.image}></ProductItem>
                    ))
                }
            </div>
        </div>
    );
};

export default Bestseller;