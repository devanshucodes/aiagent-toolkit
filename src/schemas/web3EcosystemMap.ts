export default {
  name: 'web3EcosystemMap',
  title: 'Web3 Ecosystem Map',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'name',
                      title: 'Name',
                      type: 'string',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'logo',
                      title: 'Logo',
                      type: 'image',
                      options: {
                        hotspot: true
                      }
                    },
                    {
                      name: 'url',
                      title: 'URL',
                      type: 'url'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
} 