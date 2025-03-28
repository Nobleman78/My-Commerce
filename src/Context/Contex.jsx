import React, { createContext, useEffect, useState } from 'react';
import { products } from '../assets/assets';
import { toast } from 'react-toastify';

export const Shopcontex = createContext();

const Contex = (props) => {

    const currency = `$`;
    const deliveryFee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({})
    console.log(cartItems);



    // Add to cart click Event handler
    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Please Select Product Size');
            return
        }
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData)


    }


    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]

                    }

                } catch {
                    console.log('Nothing is here ...')

                }
            }
        }

        return totalCount;

    }

    const updateQuantiy = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);


    }
    const getCartAmount = () => {
        let TotalAmount = 0;
        for (const itemId in cartItems) {
            const itemInfo = products.find(product=>product._id === itemId);
            for(const size in cartItems[itemId]){
                if(cartItems[itemId][size]>0){
                    TotalAmount = TotalAmount + itemInfo.price* cartItems[itemId][size]
                }
            }
        }
        return TotalAmount
    }
    const contextValue = {
        products, currency, deliveryFee, search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, getCartCount, updateQuantiy, getCartAmount
    }
    return (
        <Shopcontex.Provider value={contextValue}>
            {props.children}
        </Shopcontex.Provider>
    );
};

export default Contex;