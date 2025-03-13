import React, { createContext } from 'react';
import { products } from '../assets/assets';

export const Shopcontex = createContext();

const Contex = (props) => {
    const currency = `$`;
    const deliveryFee = 10;

    const contextValue = {
        products,currency,deliveryFee
    }
    return (
        <Shopcontex.Provider value={contextValue}>
            {props.children}
        </Shopcontex.Provider>
    );
};

export default Contex;