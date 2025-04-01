import React, { createContext, useEffect, useState } from 'react';
import { products } from '../assets/assets';
import { toast } from 'react-toastify';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../Utility/Firebase';
import { addToLocalStorage } from '../Utility/Localstorage';


export const Shopcontex = createContext();

const Contex = (props) => {

    const currency = `$`;
    const deliveryFee = 10;
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({})
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedin] = useState(false);
    const [method, setMethod] = useState(null);
    const [cartCount, setCartCount] = useState(0);
    console.log(cartCount);


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
        addToLocalStorage(cartData)
    }

    // Find the current user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser.email)
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }

    }, [])

    //Sign Out User
    const signOutUser = () => {
        signOut(auth);
    }
    
    
    const handleOrder = () =>{
        /*This is optinal Section if i want 0 cart count then could be excute*/
        setCartItems({})
        
        
    }
    
    const getCartCount = () => {
    
        let totalCount = 0;
        for (const id in cartItems) {
            for (const size in cartItems[id]) {
                try {
                    if (cartItems[id][size] > 0) {
                        totalCount += cartItems[id][size]

                    }
                    
                } catch {
                    console.log('Nothing is here ...')

                }
            }
        }
        setCartCount(totalCount)
        return totalCount

    }

    const updateQuantiy = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);


    }
    const getCartAmount = () => {
        let TotalAmount = 0;
        for (const itemId in cartItems) {
            const itemInfo = products.find(product => product._id === itemId);
            for (const size in cartItems[itemId]) {
                if (cartItems[itemId][size] > 0) {
                    TotalAmount = TotalAmount + itemInfo.price * cartItems[itemId][size]
                }
            }
        }
        return TotalAmount
    }
    const contextValue = {
        products, currency, deliveryFee, showSearch, setShowSearch,
        cartItems, addToCart, cartCount, setCartCount, updateQuantiy, getCartAmount, user, loading,
        loggedIn, setLoggedin, signOutUser, setUser, method, setMethod, getCartCount,handleOrder
    }
    return (
        <Shopcontex.Provider value={contextValue}>
            {props.children}
        </Shopcontex.Provider>
    );
};

export default Contex;