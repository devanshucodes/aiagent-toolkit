export default {
  name: 'libraryTool',
  title: 'Library Tool',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          { title: 'Inference & Data Processing', value: 'inference' },
          { title: 'Observability & Monitoring', value: 'observability' },
          { title: 'Automation Tools', value: 'automation' }
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Free', value: 'Free' },
          { title: 'Paid', value: 'Paid' },
          { title: 'Freemium', value: 'Freemium' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0).max(5),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      section: 'section',
    },
    prepare({ title, media, section }: { title: string; media: any; section: string }) {
      return {
        title,
        media,
        subtitle: section,
      };
    },
  },
} 