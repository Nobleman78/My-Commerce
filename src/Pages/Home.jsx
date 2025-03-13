import React from 'react';
import Hero from '../Components/Hero';
import Latestcollection from '../Components/Latestcollection';
import Bestseller from '../Components/Bestseller';
import Policy from '../Components/Policy';
import Newsletter from '../Components/Newsletter';
const Home = () => {
    return (
        <div>
            <Hero/>
            <Latestcollection/>
            <Bestseller/>
            <Policy/>
            <Newsletter/>
          
        </div>
    );
};

export default Home;