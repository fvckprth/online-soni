import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getProjects } from '@/sanity/sanity-utils';
import { Project } from '@/types/Project'; 
import { usePlausible } from 'next-plausible';

function MainContent() {
    const plausible = usePlausible();
    const [projects, setProjects] = useState<Project[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoverLeft, setHoverLeft] = useState(false);
    const [hoverRight, setHoverRight] = useState(false);
    const [showLeftArrow, setShowLeftArrow] = useState(true);
    const [showRightArrow, setShowRightArrow] = useState(true);

    useEffect(() => {
        getProjects().then(setProjects).catch(err => console.error('Failed to fetch projects', err));
    }, []);

    useEffect(() => {
        const hideArrows = () => {
            setShowLeftArrow(false);
            setShowRightArrow(false);
        };
    
        document.addEventListener('click', hideArrows);
    
        return () => {
            document.removeEventListener('click', hideArrows);
        };
    }, []);

    const updateIndex = (offset: number) => {
        setCurrentIndex((prevIndex) => (prevIndex + offset + projects.length) % projects.length);
    };

    const getProjectImage = (index: number, side: 'left' | 'right') => {
        if (projects.length === 0) {
            return '';  // Return a default image URL or an empty string
        }        
        
        const project = projects[(index + projects.length) % projects.length];
        return side === 'left' ? project.leftImage : project.rightImage;
    };

    return (
        <div className='flex space-x-3 md:space-x-5 w-full md:w-full h-[30vh] md:h-[70vh] mx-auto'>
            <div 
                className={`relative flex-grow w-0 ${hoverLeft ? 'left-arrow-cursor' : ''}`} 
                onClick={() => {
                    updateIndex(-1);
                    plausible('tap_image_left');
                    setShowLeftArrow(false);
                    setShowRightArrow(false);
                }}
                onMouseEnter={() => setHoverLeft(true)}
                onMouseLeave={() => setHoverLeft(false)}
            >
                {showLeftArrow && (
                    <div className="absolute top--1 left--1 p-2 z-10 bg-white">
                        <Image src="/left-arrow.svg" alt="left-arrow" width={8} height={8} />
                    </div>
                )}
                <Image 
                    priority
                    src={getProjectImage(currentIndex - 1, 'left')} 
                    layout='fill'
                    className='object-cover'
                    alt={`Left image of ${projects.length > 0 ? projects[currentIndex].name : 'default'}`}
                />
            </div>
            <div 
                className={`relative flex-grow w-0 ${hoverRight ? 'right-arrow-cursor' : ''}`} 
                onClick={() => {
                    updateIndex(1);
                    plausible('tap_image_right');
                    setShowRightArrow(false);
                    setShowLeftArrow(false);
                }}
                onMouseEnter={() => setHoverRight(true)}
                onMouseLeave={() => setHoverRight(false)}
            >
                {showRightArrow && (
                    <div className="absolute bottom-0 right-0 p-2 bg-white z-10">
                        <Image src="/right-arrow.svg" alt="right-mobile-arrow" width={8} height={8} />
                    </div>
                )}
                <Image 
                    priority
                    src={getProjectImage(currentIndex + 1, 'right')} 
                    layout='fill'
                    className='object-cover'
                    alt={`Right image of ${projects.length > 0 ? projects[currentIndex].name : 'default'}`}
                />
            </div>
        </div>
    );    
}

export default MainContent;