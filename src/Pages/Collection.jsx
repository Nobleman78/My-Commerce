import React, { useContext, useEffect, useState } from 'react';
import { Shopcontex } from '../Context/Contex';
import { assets } from '../assets/assets';
import ProductItem from '../Components/ProductItem';

const Collection = () => {
    const { products } = useContext(Shopcontex)
    const [showFilter, setShowFilter] = useState(false)
    const [filterProducts,setFilterProducts] = useState([])


    useEffect(()=>{
        setFilterProducts(products)

    },[])

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* Filter Options */}
            <div className='min-w-60 '>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-2xl flex items-center cursor-pointer '>Filters</p>

                {/* Category Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Categories</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <div className='flex  gap-2'>
                            <input type="checkbox" value={'Men'} />
                            <p>Men</p>

                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" value={'Women'} />
                            <p>Women</p>

                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" value={'Kids'} />
                            <p>Kids</p>

                        </div>
                    </div>
                </div>

                {/* Type Category */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Type</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <div className='flex  gap-2'>
                            <input type="checkbox" value={'Men'} />
                            <p>Topwear</p>

                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" value={'Women'} />
                            <p>Bottomwear</p>

                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" value={'Kids'} />
                            <p>Winterwear</p>

                        </div>
                    </div>
                </div>
            </div>
            {/* Right side  */}

            <div className='flex-1 sm:my-2 my-3'>
                <div className='flex justify-between items-center text-base sm:text-2xl mb-4'>
                    <div className='flex gap-2 items-center justify-center'>
                        <p><span className='text-gray-600'>All</span> COLLECTIONS</p>
                        <p className='w-8 sm:w-11 h-[1px] bg-black'></p>
                    </div>
                    {/* Product Sortlist */}
                    <select className='border-2 outline-none shadow-none py-2 rounded  text-sm px-2'>
                        <option value="relavent">Sort By : Relavent</option>
                        <option value="low-high">Sort By : Low To High</option>
                        <option value="high-low">Sort By : High To Low</option>
                    </select>

                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {
                        filterProducts.map((item,index)=>(
                            <ProductItem key={index} name={item.name} image={item.image} id={item._id} price={item.price}></ProductItem>
                        ))
                    }
                </div>


            </div>

        </div>
    );
};

export default Collection;