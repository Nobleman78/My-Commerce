import React, { useContext, useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import { Shopcontex } from '../Context/Contex';
import { assets } from '../assets/assets';
import RelatedProduct from '../Components/RelatedProduct';

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart} = useContext(Shopcontex);
    const [productData, setproductData] = useState(false)
    const [size, setSize] = useState()
    const [firstIndeximage, setFirstIndexImage] = useState('')
    
    const fetchData = async () => {
        products.map(product => {
            if (product._id === productId) {
                setproductData(product)
                setFirstIndexImage(product.image[0])
                return null;
            }
        })
    }
    useEffect(() => {
        fetchData()
    }, [productId])

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                    {
                        productData.image.map((image, index) => (
                            <img onClick={() => setFirstIndexImage(image)} src={image} key={index} className='w-[24%] sm:w-full sm:mb-3 flex shrink-0 cursor-pointer' alt="" />
                        ))
                    }

                </div>
                <div className='w-full sm:w-[30%]'>
                    <img className='w-full h-auto' src={firstIndeximage} alt="" />
                </div>
                {/* Product Information */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2' >{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} alt="" className="w-3.5" />
                        <img src={assets.star_icon} alt="" className="w-3.5" />
                        <img src={assets.star_icon} alt="" className="w-3.5" />
                        <img src={assets.star_icon} alt="" className="w-3.5" />
                        <img src={assets.star_icon} alt="" className="w-3.5" />

                    </div>
                    <p className='mt-2 text-2xl font-medium'>{currency}{productData.price}</p>
                    <p className='text-gray-600'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Selected Size</p>
                        <div className='flex gap-2'>
                            {
                                productData.sizes.map((item, index) => (
                                    <button onClick={() => setSize(item)} className={`border py-2 px-4 cursor-pointer`} key={index}>
                                        {item}
                                    </button>
                                ))
                            }

                        </div>
                    </div>
                    <button
                        onClick={() => { addToCart(productData._id, size)}} className='bg-black cursor-pointer text-white px-8 py-3 text-sm active:bg-gray-700'>
                        Add to Cart
                    </button>
                    <hr className='mt-8 sm:w-4/5' />
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% original products</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy Return Policy within 7 days</p>

                    </div>
                </div>

            </div>
            {/* Description and review section  */}
            <div className='mt-20'>
                <div className='flex gap-1'>
                    <b className='border px-5 py-3 text-sm'>
                        Description
                    </b>
                    <p className='border px-5 py-3 text-sm'>Reviews(10)</p>

                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm mt-3 text-gray-600'>

                    <p>Ecommerce or "electronic commerce" is the trading of goods and services online. The internet allows individuals and businesses to buy and sell an increasing amount of physical goods, digital goods, and services electronically.</p>
                    <p>E-Commerce or Electronic Commerce means buying and selling of goods, products, or services over the internet. E-commerce is also known as electronic commerce or internet commerce. </p>

                </div>
            </div>
            {/* Display related  Product */}
            <RelatedProduct category={productData.category} subCategory={productData.subCategory}></RelatedProduct>
        </div>
    ) : <div className='opacity-0'></div>
};

export default Product;