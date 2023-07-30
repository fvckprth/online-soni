'use client'

import React, { useState } from 'react';
import MuxPlayer from '@mux/mux-player-react';

type VideoDisplayProps = {
    isMinimized: boolean;
    onToggle: () => void;
};

function VideoDisplay({ isMinimized, onToggle }: VideoDisplayProps) {
  
  const [isMuted, setIsMuted] = useState(true);

  // Define styles for fullscreen and minimized video player
  const containerStyles = isMinimized 
    ? 'top-2 right-2 w-28 h-48' 
    : 'top-0 left-0 w-full h-screen';

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className={`fixed ${containerStyles} z-0`} onClick={onToggle}>
      <div className='flex justify-center items-center w-full h-full'>
        <MuxPlayer
            streamType="on-demand"
            playbackId="BupGVIZC9RovvUVorKkYNrhNUjbW01q8Rc02ZwS019qWsw"
            preLoad="auto"
            autoPlay="any"
            loop
            maxResolution="1080p"
            muted={isMuted}
        />
        {!isMinimized && <button 
            type="button"
            onClick={toggleMute} 
            onTouchStart={(e) => {
                e.preventDefault();
                toggleMute();
            }}
            className="absolute top-6 right-6 z-50 text-xs md:text-base leading-4 tracking-tight text-white"
            >
            {isMuted ? 'UNMUTE' : 'MUTE'}
        </button>}
      </div>
    </div>
  );
}

export default VideoDisplay;
