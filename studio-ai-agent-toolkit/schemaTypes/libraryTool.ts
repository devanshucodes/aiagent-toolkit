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
          { title: 'Inference AP/s', value: 'inference-apis' },
          { title: 'RAG', value: 'rag' },
          { title: 'Data Processing', value: 'data-processing' },
          { title: 'Memory', value: 'memory' },
          { title: 'Compute', value: 'compute' },
          { title: 'Observability', value: 'observability' },
          { title: 'Web Scraping', value: 'web-scraping' },
          { title: 'Hosting', value: 'hosting' },
          { title: 'Sandboxing', value: 'sandboxing' },
          { title: 'Browser Automation', value: 'browser-automation' },
          { title: 'Workflow Automation', value: 'workflow-automation' },
          { title: 'Authentication', value: 'authentication' },
          { title: 'Payment', value: 'payment' },
          { title: 'Blockchain', value: 'blockchain' },
          { title: 'Reasoning', value: 'reasoning' },
          { title: 'MCP', value: 'mcp' }
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
    {
      name: 'filter_categories',
      title: 'Filter Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Data Processing', value: 'data-processing' },
          { title: 'RAG', value: 'rag' },
          { title: 'Memory', value: 'memory' },
          { title: 'Compute', value: 'compute' },
          { title: 'Vector Database', value: 'vector-database' },
          { title: 'Embeddings', value: 'embeddings' },
          { title: 'Web Scraping', value: 'web-scraping' },
          { title: 'Hosting', value: 'hosting' },
          { title: 'Sandboxing', value: 'sandboxing' },
          { title: 'Security', value: 'security' },
          { title: 'Monitoring', value: 'monitoring' },
          { title: 'Analytics', value: 'analytics' },
          { title: 'Browser Automation', value: 'browser-automation' },
          { title: 'Workflow', value: 'workflow' },
          { title: 'Authentication', value: 'authentication' },
          { title: 'Payment', value: 'payment' },
          { title: 'Task Automation', value: 'task-automation' }
        ]
      }
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      section: 'section',
    },
    prepare(value: Record<string, any>) {
      return {
        title: value.title,
        media: value.media,
        subtitle: value.section,
      };
    },
  },
} 