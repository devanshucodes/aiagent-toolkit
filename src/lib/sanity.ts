import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'my8eqdzc',
  dataset: 'production',
  apiVersion: '2024-03-01',
  useCdn: true,
}) 