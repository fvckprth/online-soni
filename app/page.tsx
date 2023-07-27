import React from 'react';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';


function Home() {
  return (
    <div className= 'flex flex-col justify-between md:justify-center h-full items-center mx-4 md:px-0'>
      <div className= 'w-full md:w-[860px] m-4 md:m-6'>
          <Header />
      </div>
      <div className='w-full md:w-[860px]'>
          <MainContent />
      </div>
      <div className={`w-full md:w-[860px] m-4 md:m-6'}`}>
        <Footer />
      </div>
    </div>
  );  
}

export default Home;