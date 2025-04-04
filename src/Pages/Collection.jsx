import React, { useContext, useEffect, useState } from 'react';
import { Shopcontex } from '../Context/Contex';
import ProductItem from '../Components/Productitem';
import { useParams } from 'react-router-dom';

const Collection = () => {
    const { products } = useContext(Shopcontex)
    const [showFilter, setShowFilter] = useState(false)
    const [filterProducts, setFilterProducts] = useState([])
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [filterPrice, setFilterPrice] = useState([])
    const [sortType, setSortType] = useState([]);
    const {input} = useParams();

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setCategory(prev => ([...prev, e.target.value]))

        }

    }

    const toggleSubCatagory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setSubCategory(prev => [...prev, e.target.value])
        }
    }
    const togglePrice = (e) => {
        if (filterPrice.includes(e.target.value)) {
            setFilterPrice(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setFilterPrice(prev => [...prev, e.target.value])
        }

    }

    const applyFilter = () => {

        let productsCopy = products.slice();
    
        if (input) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
        }
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category))
        }
        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
        }
        if (filterPrice.length > 0) {
            productsCopy = productsCopy.filter(item =>{
                return filterPrice.some(range=>{
                    const [min,max] = range.split('-').map(Number);
                    return item.price >=min && item.price <= max;
                })
            })
        }
        setFilterProducts(productsCopy)
    }
    const sortItem = () => {
        let fpcopy = filterProducts.slice();
        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpcopy.sort((a, b) => (a.price - b.price)))
                break;
            case 'high-low':
                setFilterProducts(fpcopy.sort((a, b) => (b.price - a.price)))
                break;
            default:
                applyFilter();
                break;

        }
    }



    useEffect(() => {
        applyFilter();

    }, [category, subCategory, input, filterPrice])

    useEffect(() => {
        sortItem()
    }, [sortType,])


    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* Filter Options */}
            <div className='min-w-60 '>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-2xl flex items-center cursor-pointer '>Filters</p>

                {/* Category Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Categories</p>
                    <div className='flex flex-col gap-2 text-sm'>
                        <p className='flex  gap-2'>
                            <input type="checkbox" value={'Men'} onChange={toggleCategory} />
                            Men

                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" value={'Women'} onChange={toggleCategory} />
                            Women

                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" value={'Kids'} onChange={toggleCategory} />
                            Kids

                        </p>
                    </div>
                </div>

                {/* Type Category */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Type</p>
                    <div className='flex flex-col gap-2 text-sm '>
                        <p className='flex  gap-2'>
                            <input type="checkbox" value={'Topwear'} onChange={toggleSubCatagory} />
                            Topwear

                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" value={'Bottomwear'} onChange={toggleSubCatagory} />
                            Bottomwear

                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" value={'Winterwear'} onChange={toggleSubCatagory} />
                            Winterwear

                        </p>
                    </div>
                </div>
                {/* Filter By Price */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3'>Filter By Price</p>
                    <div className='flex flex-col gap-2 text-sm '>
                        <p className='flex gap-2'>
                            <input type="checkbox" value="0-10" onChange={togglePrice} />
                            Price $0 - $10
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" value="11-50" onChange={togglePrice} />
                            Price $11 - $50
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" value="51-100" onChange={togglePrice} />
                            Price $51 - $100
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" value="101-200" onChange={togglePrice} />
                            Price $101 - $200
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" value="201-500" onChange={togglePrice} />
                            Price $201 - $500
                        </p>
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
                    <select onChange={(e) => setSortType(e.target.value)} className='border-2 outline-none shadow-none py-2 rounded  text-sm px-2'>
                        <option value="relavent">Sort By : Relavent</option>
                        <option value="low-high">Sort By : Low To High</option>
                        <option value="high-low">Sort By : High To Low</option>
                    </select>

                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {
                        filterProducts.map((item, index) => (
                            <ProductItem key={index} name={item.name} image={item.image} id={item._id} price={item.price}></ProductItem>
                        ))
                    }
                </div>


            </div>

        </div>
    );
};

export default Collection;