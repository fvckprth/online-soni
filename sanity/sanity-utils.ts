import { createClient, groq } from 'next-sanity';
import { Project } from '@/types/Project';
import clientConfig from './config/client-config'; 

const client = createClient(clientConfig);

export async function getProjects(): Promise<Project[]> {
    return client.fetch(
        groq`*[_type == 'project']{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            'leftImage': leftImage.asset->url,
            'rightImage': rightImage.asset->url
        }`
    );
}
