import React, { useContext, useEffect, useState } from 'react';
import { Shopcontex } from '../Context/Contex';
import ProductItem from './Productitem';

const RelatedProduct = ({ category, subCategory }) => {
    const { products } = useContext(Shopcontex);
    const [related, setRelated] = useState([]);
    useEffect(() => {
        if (products.length > 0) {
            let productCopy = products.slice();
            productCopy = productCopy.filter(item => category === item.category);
            productCopy = productCopy.filter(item => subCategory === item.subCategory)
            setRelated(productCopy.slice(0, 5))

        }
    }, [products])

    return (
        <div className='my-24'>
            <div className='text-3xl py-2'>
                <div className='flex items-center justify-center gap-2 '>
                    <p><span className='text-gray-600'>RELATED</span> PRODUCTS</p>
                    <p className='w-8 sm:w-11 bg-black h-[1px]'></p>


                </div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5'>
                {
                    related.map((item, index) => (
                        <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                    ))
                }

            </div>

        </div>
    
    );
};

export default RelatedProduct;
