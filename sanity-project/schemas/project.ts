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
        name: 'orderRank',
        type: 'string',
        title: 'Order Rank'
      },
      {
        name: 'subText',
        type: 'string',
        title: 'Sub Text'
      },
      {
        name: 'company',
        type: 'string',
        title: 'Project Company'
      },
      {
        name: 'sandboxUrl',
        type: 'url',
        title: 'Sandbox Demo Link'
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
        name: 'img',
        type: 'image',
        title: 'Image or gif from Sanity'
      },
      {
        title: 'Description',
        name: 'description',
        type: 'text'
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

    ]
  }