import React, { useContext, useEffect, useState } from 'react';
import { Shopcontex } from '../Context/Contex';
import ProductItem from './Productitem';


const Latestcollection = () => {
    const {products} = useContext(Shopcontex);
    const [latestProducts,setLatestProducts] = useState([])
  

    useEffect(()=>{
        setLatestProducts(products.slice(0,10))
    },[products])
    return (
        <div className='my-10 '>
            <div className='flex text-center items-center text-3xl gap-2 justify-center'>
                <p><span className='text-gray-600 '>LATEST</span> <span className='font-semibold'>COLLECTION</span></p>
            </div>
            <p className=' text-center py-4 w-3/4 m-auto text-xs sm:text-sm md:text-base'>The latest collections are showcasing a bold shift towards sustainable materials and ethical production practices.</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item,index)=>(<ProductItem key={index} name={item.name} image={item.image} id={item._id} price={item.price}></ProductItem>))
                }
            </div>
        </div>
    );
};

export default Latestcollection;