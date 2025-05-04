import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/LeftNavbar';
import MainContent from '../Components/MainContent';
import RightNavbar from '../Components/RightNavbar';


const Home = () => {
    return (
        <>
            <div >
            <Header></Header>
            <section className='w-[80%] mx-auto'>
                <LatestNews></LatestNews>
                
            </section>
            <section className='w-[80%] mx-auto'>
            <Navbar></Navbar>
            </section>

            <section className='w-[80%] mx-auto py-4'>
                <main className='grid grid-cols-12 gap-2 '>
                    <aside className='col-span-3'><LeftNavbar></LeftNavbar></aside>
                    <section className='col-span-6'><MainContent></MainContent></section>
                    <aside className='col-span-3'><RightNavbar></RightNavbar></aside>
                    

                </main>
            </section>

            </div>
        </>
        
    );
};

export default Home;