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
      name: 'genre',
      title: 'Genre',
      type: 'string',
      options: {
        list: [
          { title: 'Offchain', value: 'offchain' },
          { title: 'Onchain', value: 'onchain' }
        ],
      },
    },
    {
      name: 'hasGithub',
      title: 'Has GitHub',
      type: 'boolean',
      description: 'Whether the tool has a GitHub repository',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ document }: any) => document?.category === 'tech-stack',
      validation: (Rule: any) => Rule.custom((field: any, context: any) => {
        if (context.document.category !== 'tech-stack' && !field) {
          return 'Logo is required for non-tech-stack items';
        }
        return true;
      }),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      hidden: ({ document }: any) => document?.category === 'tech-stack',
      validation: (Rule: any) => Rule.custom((field: any, context: any) => {
        if (context.document.category !== 'tech-stack' && !field) {
          return 'Description is required for non-tech-stack items';
        }
        return true;
      }),
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
      hidden: ({ document }: any) => document?.category === 'tech-stack',
      validation: (Rule: any) => Rule.custom((field: any, context: any) => {
        if (context.document.category !== 'tech-stack' && !field) {
          return 'Type is required for non-tech-stack items';
        }
        return true;
      }),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      hidden: ({ document }: any) => document?.category === 'tech-stack',
      validation: (Rule: any) => Rule.custom((field: any, context: any) => {
        if (context.document.category !== 'tech-stack' && !field) {
          return 'Rating is required for non-tech-stack items';
        }
        return true;
      }).min(0).max(5),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      hidden: ({ document }: any) => document?.category === 'tech-stack',
      validation: (Rule: any) => Rule.custom((field: any, context: any) => {
        if (context.document.category !== 'tech-stack' && !field) {
          return 'URL is required for non-tech-stack items';
        }
        return true;
      }),
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      category: 'category'
    },
    prepare(value: Record<string, any>) {
      return {
        title: value.title,
        media: value.category === 'tech-stack' ? null : value.media,
      };
    },
  },
} 