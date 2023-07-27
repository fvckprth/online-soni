'use client'

// This is a Client Component that handles interactivity
import React, { useState } from 'react';
import Image from 'next/image';
import { getProjects } from '@/sanity/sanity-utils';

// This is a Server Component that fetches data
async function fetchData() {
    try {
        return await getProjects();
    } catch (err) {
        throw new Error('Failed to fetch projects');
    }
}

function MainContent(props: any) {
    const project = props.project;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex === 0 ? project.length - 1 : prevIndex - 1;
        });
    };

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex === project.length - 1 ? 0 : prevIndex + 1;
        });
    };

    return (
        <div className='flex space-x-3 md:space-x-5 w-full md:w-full h-[30vh] md:h-[70vh] mx-auto'>
            <div className='relative flex-grow w-0' onClick={handleLeftClick}>
                {project[currentIndex].leftImage && (
                    <Image 
                        src={project[currentIndex].leftImage} 
                        layout='fill'
                        className='object-cover'
                        alt={`Left image of ${project[currentIndex].name}`}
                    />
                )}
            </div>
            <div className='relative flex-grow w-0' onClick={handleRightClick}>
                {project[currentIndex].rightImage && (
                    <Image 
                        src={project[currentIndex].rightImage} 
                        layout='fill'
                        className='object-cover'
                        alt={`Right image of ${project[currentIndex].name}`}
                    />
                )}
            </div>
        </div>
    );
}

// This is the main export that fetches data and renders the Client Component
export default async function Page() {
    const project = await fetchData();
    return <MainContent project={project} />;
}