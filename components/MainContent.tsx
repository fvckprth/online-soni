'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getProjects } from '@/sanity/sanity-utils';
import { Project } from '@/types/Project'; 

function MainContent() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoverLeft, setHoverLeft] = useState(false);
    const [hoverRight, setHoverRight] = useState(false);

    useEffect(() => {
        getProjects().then(setProjects).catch(err => console.error('Failed to fetch projects', err));

        // Add the event listener
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const updateIndex = (offset: number) => {
        setCurrentIndex((prevIndex) => (prevIndex + offset + projects.length) % projects.length);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
            updateIndex(-1);
        } else if (event.key === 'ArrowRight') {
            updateIndex(1);
        }
    };

    return (
        <div className='flex space-x-3 md:space-x-5 w-full md:w-full h-[30vh] md:h-[70vh] mx-auto'>
            <div 
                className={`relative flex-grow w-0 ${hoverLeft ? 'left-arrow-cursor' : ''}`} 
                onClick={() => updateIndex(-1)}
                onMouseEnter={() => setHoverLeft(true)}
                onMouseLeave={() => setHoverLeft(false)}
            >
                {projects.map((project, index) => (
                    <Image 
                        key={index}
                        priority
                        src={project.leftImage} 
                        layout='fill'
                        className={`object-cover ${currentIndex === index ? 'block' : 'hidden'}`}
                        alt={`Left image of ${project.name}`}
                    />
                ))}
            </div>
            <div 
                className={`relative flex-grow w-0 ${hoverRight ? 'right-arrow-cursor' : ''}`} 
                onClick={() => updateIndex(1)}
                onMouseEnter={() => setHoverRight(true)}
                onMouseLeave={() => setHoverRight(false)}
            >
                {projects.map((project, index) => (
                    <Image 
                        key={index}
                        priority
                        src={project.rightImage}
                        layout='fill'
                        className={`object-cover ${currentIndex === index ? 'block' : 'hidden'}`}
                        alt={`Right image of ${project.name}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default MainContent;
