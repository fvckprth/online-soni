import React, { useState, useRef } from 'react';
import MuxPlayer from '@mux/mux-player-react';

type VideoDisplayProps = {
    isMinimized: boolean;
    onToggle: () => void;
};

function VideoDisplay({ isMinimized, onToggle }: VideoDisplayProps) {
  
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const containerStyles = isMinimized 
    ? 'top-2 right-2 w-28 h-48' 
    : 'top-0 left-0 w-full h-screen';

const toggleMute = () => {
    if (videoRef.current) {
            (videoRef.current as any).muted = !(videoRef.current as any).muted;
    }
    setIsMuted(!isMuted);
};
    
  return (
    <div className={`fixed ${containerStyles}`} onClick={onToggle}>
      <div className='flex justify-center items-center w-full h-full'>
        <MuxPlayer
            ref={videoRef}
            style={{ height: '100%', maxWidth: '100%' }}
            playbackId="DsWrR026AJqjOtlKB02HuCROgAPzwCP2ok0002HxsJy3pcY"
            streamType="on-demand"
            playsInline
            loop
            autoPlay="any"
            muted={isMuted}
        />
        {!isMinimized && <button 
            type="button"
            onClick={toggleMute} 
            className="absolute bottom-6 md:bottom-6 right-6 z-1000 text-xs md:text-base leading-4 tracking-tight text-white"
            >
            {isMuted ? 'UNMUTE' : 'MUTE'}
        </button>}
      </div>
    </div>
  );
}

export default VideoDisplay;
