'use client'

import React, { useState } from 'react';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';
import VideoDisplay from '@/components/VideoDisplay';

export default function Home() {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleToggle = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="flex flex-col justify-between md:justify-center h-full items-center mx-4 md:px-0">

    <div className={`w-full md:w-[860px] m-4 md:m-6 ${!isMinimized ? 'inverted-text on-top' : 'text-black'}`}>
        <Header />
    </div>

      <div className="w-full md:w-[860px]">
        <MainContent />
      </div>

      <div className={`w-full md:w-[860px] m-4 md:m-6 ${!isMinimized ? 'inverted-text on-top' : 'text-black'}`}>
        <Footer />
      </div>

      <VideoDisplay isMinimized={isMinimized} onToggle={handleToggle} />
    </div>
  );
}
