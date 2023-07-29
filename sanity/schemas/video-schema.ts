const video = {
    name: 'video',
    title: 'Video',
    type: 'document',
    fields: [
        { 
            title: 'Name', 
            name: 'name', 
            type: 'string' },
        {
            title: 'Video file',
            name: 'video',
            type: 'mux.video',
        },
    ],
}

export default video;
