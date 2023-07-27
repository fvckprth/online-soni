const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { 
        source: 'name' 
      }
    },
    {
      name: 'leftImage',
      title: 'Left Image',
      type: 'image',
      options: {
        hotspot: true 
      }
    },
    {
      name: 'rightImage',
      title: 'Right Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}

export default project;