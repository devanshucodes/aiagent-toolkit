import { Rule } from '@sanity/types';

export default {
  name: 'ecosystemMap',
  title: 'Ecosystem Map',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Map Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'The main title of the ecosystem map (e.g., "Web3 AI Ecosystem Map")'
    },
    {
      name: 'description',
      title: 'Map Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
      description: 'A brief description of the ecosystem map'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      description: 'Add different categories of products/tools',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Category Title',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
              description: 'Name of the category (e.g., "Frameworks", "Infrastructure")'
            },
            {
              name: 'items',
              title: 'Products',
              type: 'array',
              description: 'Add products/tools in this category',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'name',
                      title: 'Product Name',
                      type: 'string',
                      validation: (Rule: Rule) => Rule.required(),
                      description: 'Name of the product/tool'
                    },
                    {
                      name: 'url',
                      title: 'Product URL',
                      type: 'url',
                      description: 'Link to the product/tool website'
                    }
                  ],
                  preview: {
                    select: {
                      title: 'name',
                      subtitle: 'url'
                    }
                  }
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'items',
              media: 'items.0.name'
            },
            prepare({ title, subtitle }) {
              return {
                title: title,
                subtitle: `${subtitle?.length || 0} products`
              }
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    }
  }
} 