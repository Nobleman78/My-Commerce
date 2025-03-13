import React, { createContext, useState } from 'react';
import { products } from '../assets/assets';

export const Shopcontex = createContext();

const Contex = (props) => {

    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);

    const currency = `$`;
    const deliveryFee = 10;

    const contextValue = {
        products,currency,deliveryFee,search,setSearch,showSearch,setShowSearch
    }
    return (
        <Shopcontex.Provider value={contextValue}>
            {props.children}
        </Shopcontex.Provider>
    );
};

export default Contex;