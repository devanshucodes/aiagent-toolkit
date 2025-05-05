export default {
  name: 'tool',
  title: 'Tool',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'AI Agent Tools', value: 'ai-agent-tools' },
          { title: 'Top AI Agent Apps', value: 'top-ai-agent-apps' },
          { title: 'Top LLMs', value: 'top-llms' },
          { title: 'Web3 AI Agent SDKs', value: 'web3-ai-agent-sdks' },
          { title: 'AI Agent Framework', value: 'ai-agent-framework' },
          { title: 'AI Agent Infrastructure', value: 'ai-agent-infrastructure' },
          { title: 'AI Agent Launchpads', value: 'ai-agent-launchpads' },
          { title: 'Automation', value: 'automation' },
          { title: 'Tech Stack', value: 'tech-stack' }
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
    },
    prepare(value: Record<string, any>) {
      return {
        title: value.title,
        media: value.media,
      };
    },
  },
} 