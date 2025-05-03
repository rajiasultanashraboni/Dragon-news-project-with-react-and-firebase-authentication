import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';

const Home = () => {
    return (
        <>
            <Header></Header>
            <section className='w-[80%] mx-auto'>
                <LatestNews></LatestNews>
            </section>
        </>
        
    );
};

export default Home;