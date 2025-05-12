import { Rule } from 'sanity'

interface PreviewProps {
  title: string;
  category: string;
}

export default {
  name: 'ecosystemMap',
  title: 'Ecosystem Map',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'AI x Crypto Map', value: 'AI x Crypto Map' },
          { title: 'AI Agent Market Map', value: 'AI Agent Market Map' },
          { title: 'AI Agent Infra Map', value: 'AI Agent Infra Map' },
          { title: 'MCP Market Map', value: 'MCP Market Map' }
        ]
      },
      validation: (rule: Rule) => rule.required()
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
              validation: (rule: Rule) => rule.required()
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
                      validation: (rule: Rule) => rule.required()
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
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category'
    },
    prepare({ title, category }: PreviewProps) {
      return {
        title: title,
        subtitle: category
      }
    }
  }
} 