import { createClient, groq } from 'next-sanity';
import { Project } from '@/types/Project';
import { Video } from "@/types/Video"; 
import clientConfig from './config/client-config'; 

const client = createClient(clientConfig);

export async function getProjects(): Promise<Project[]> {
    return client.fetch(
        groq`*[_type == 'project'] | order(name asc) {
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            'leftImage': leftImage.asset->url,
            'rightImage': rightImage.asset->url
        }`
    );
}

export async function getVideos(): Promise<Video[]> {
    return client.fetch(
        groq`*[_type == 'video']{
            _createdAt,
            _id,
            _type,
            _updatedAt,
            assetId,
            data,
            "playbackID": data.playback_ids[0].id
        }`
    );
}


