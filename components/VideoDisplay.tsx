import React, { useState, useRef } from 'react';
import MuxPlayer from '@mux/mux-player-react';
import { usePlausible } from 'next-plausible';

type VideoDisplayProps = {
    isMinimized: boolean;
    onToggle: () => void;
};

function VideoDisplay({ isMinimized, onToggle }: VideoDisplayProps) {
    const plausible = usePlausible();
    const [isMuted, setIsMuted] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [showTapText, setShowTapText] = useState(true);
    const videoRef = useRef(null);
    const containerStyles = isMinimized 
      ? 'top-2 right-2 w-28 h-48 enter-fs-cursor' 
      : 'top-0 left-0 w-full h-screen exit-fs-cursor';

    const handleVideoTap = () => {
      setShowTapText(false);
      onToggle();
      if (isMinimized) {
        plausible('video_fullscreen');
      } else {
        plausible('video_minimize');
      }
    };

    return (
      <div className={`fixed ${containerStyles}`} onClick={handleVideoTap}>
        <div className='flex justify-center items-center w-full h-full'>
          {showTapText && (
            <div className="absolute z-10 md:bottom-6 text-xs md:text-base leading-4 tracking-tight text-white hover:opacity-25">
              TAP
            </div>
          )}
          <MuxPlayer
              ref={videoRef}
              thumbnailTime="0"
              style={{ height: '100%', maxWidth: '100%' }}
              playbackId="DsWrR026AJqjOtlKB02HuCROgAPzwCP2ok0002HxsJy3pcY"
              streamType="on-demand"
              playsInline
              loop
              autoPlay="any"
              muted={isMuted}
          />
          {!isMinimized && (
            <>
              <button 
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    const current = videoRef.current;
                    if (current) {
                      (current as any).muted = !(current as any).muted;
                      setIsMuted(!isMuted);
                      if (isMuted) {
                        plausible('video_unmute');
                      } else {
                        plausible('video_mute');
                      }
                    }
                  }} 
                  className="absolute left-4 md:left-6 md:bottom-6 way-up text-xs md:text-base leading-4 tracking-tight text-white hover:opacity-25"
              >
                  {isMuted ? 'UNMUTE' : 'MUTE'}
              </button>
              <button 
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    const current = videoRef.current;
                    if (current) {
                      if (isPaused) {
                        (current as any).play();
                        plausible('video_play');
                      } else {
                        (current as any).pause();
                        plausible('video_pause');
                      }
                      setIsPaused(!isPaused);
                    }
                  }} 
                  className="absolute right-4 md:right-6 md:bottom-6 way-up text-xs md:text-base leading-4 tracking-tight text-white hover:opacity-25"
              >
                  {isPaused ? 'PLAY' : 'PAUSE'}
              </button>
            </>
          )}
        </div>
      </div>
    );
}

export default VideoDisplay;

