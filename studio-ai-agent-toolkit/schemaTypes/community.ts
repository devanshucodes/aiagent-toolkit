export default {
  name: 'community',
  title: 'Community',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'members',
      title: 'Members',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
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
      name: 'socialLinks',
      title: 'Social Media Links',
      description: 'Add only the social links that are available. Empty links will not be displayed.',
      type: 'object',
      fields: [
        {
          name: 'website',
          title: 'Website',
          type: 'url',
          description: 'Optional: Leave empty if not available',
        },
        {
          name: 'telegram',
          title: 'Telegram',
          type: 'url',
          description: 'Optional: Leave empty if not available',
        },
        {
          name: 'discord',
          title: 'Discord',
          type: 'url',
          description: 'Optional: Leave empty if not available',
        },
        {
          name: 'x',
          title: 'X (Twitter)',
          type: 'url',
          description: 'Optional: Leave empty if not available',
        },
        {
          name: 'github',
          title: 'GitHub',
          type: 'url',
          description: 'Optional: Leave empty if not available',
        },
        {
          name: 'replit',
          title: 'Replit',
          type: 'url',
          description: 'Optional: Leave empty if not available',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
          description: 'Optional: Leave empty if not available',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
    prepare(value: Record<string, any>) {
      return {
        title: value.title,
        media: value.media,
      };
    },
  },
} 