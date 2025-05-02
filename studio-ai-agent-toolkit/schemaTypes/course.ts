import { Rule } from '@sanity/types';

export default {
  name: 'course',
  title: 'Courses & Tutorials',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'The title of the course or tutorial'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
      description: 'A brief description of the course or tutorial'
    },
    {
      name: 'url',
      title: 'Link',
      type: 'url',
      validation: (Rule: Rule) => Rule.required(),
      description: 'Link to the course or tutorial'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (Rule: Rule) => Rule.required(),
      description: 'Logo or thumbnail for the course',
      options: {
        hotspot: true
      }
    },
    {
      name: 'author',
      title: 'By',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'Name of the course author or instructor'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      validation: (Rule: Rule) => Rule.required(),
      description: 'Tags for the course (e.g., "Beginner", "Python", "Web3")',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Beginner', value: 'beginner' },
              { title: 'Intermediate', value: 'intermediate' },
              { title: 'Advanced', value: 'advanced' },
              { title: 'Python', value: 'python' },
              { title: 'JavaScript', value: 'javascript' },
              { title: 'Web3', value: 'web3' },
              { title: 'AI', value: 'ai' },
              { title: 'Machine Learning', value: 'ml' },
              { title: 'Blockchain', value: 'blockchain' },
              { title: 'Smart Contracts', value: 'smart-contracts' },
              { title: 'Frontend', value: 'frontend' },
              { title: 'Backend', value: 'backend' },
              { title: 'Full Stack', value: 'full-stack' },
              { title: 'DevOps', value: 'devops' },
              { title: 'Security', value: 'security' }
            ]
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author',
      media: 'logo'
    }
  }
} 