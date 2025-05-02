export default {
  name: 'glossary',
  title: 'Glossary',
  type: 'document',
  fields: [
    {
      name: 'term',
      title: 'Term',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'definition',
      title: 'Definition',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'firstLetter',
      title: 'First Letter',
      type: 'string',
      description: 'The first letter of the term (used for alphabet navigation)',
      validation: (Rule: any) => Rule.required().max(1),
    },
  ],
  preview: {
    select: {
      title: 'term',
      subtitle: 'firstLetter',
    },
    prepare(value: Record<string, any>) {
      return {
        title: value.title,
        subtitle: `First Letter: ${value.subtitle}`,
      };
    },
  },
}; 