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
      type: 'object',
      fields: [
        {
          name: 'telegram',
          title: 'Telegram',
          type: 'url',
        },
        {
          name: 'discord',
          title: 'Discord',
          type: 'url',
        },
        {
          name: 'x',
          title: 'X (Twitter)',
          type: 'url',
        },
        {
          name: 'github',
          title: 'GitHub',
          type: 'url',
        },
        {
          name: 'replit',
          title: 'Replit',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
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