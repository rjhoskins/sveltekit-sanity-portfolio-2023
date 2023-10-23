export default {
    name: 'project',
    type: 'document',
      title: 'Project',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Project Name'
      },
      {
        name: 'subText',
        type: 'string',
        title: 'Sub Text'
      },
      {
        name: 'img',
        type: 'image',
        title: 'Image or gif from Sanity'
      },
      {
        title: 'Short Description',
        name: 'shortDescription',
        type: 'string'
      },
      {
        title: 'Description',
        name: 'description',
        type: 'text'
      },
      {
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        name: 'company',
        type: 'string',
        title: 'Project Company'
      },
      {
        name: 'sandboxUrl',
        type: 'url',
        title: 'Sandbox/Staging/Test Demo Link'
      },
      {
        name: 'loomDemoUrl',
        type: 'url',
        title: 'Loom Demo Link'
      },
      {
        name: 'designUrl',
        type: 'url',
        title: 'Design Link'
      },
      {
        name: 'liveUrl',
        type: 'url',
        title: 'Live Link'
      },

      {
        title: 'Tech Tags',
        name: 'techTags',
        type: 'array',
        of: [{type: 'string'}],
        // options: {
        //   layout: 'tags'
        // }
      },
      {
        name: 'orderRank',
        type: 'string',
        title: 'Order Rank'
      },

    ]
  }