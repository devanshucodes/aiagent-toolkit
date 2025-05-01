import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  token: 'your-sanity-token',
  apiVersion: '2023-05-03',
  useCdn: false
});

const ecosystemMap = {
  _type: 'ecosystemMap',
  title: 'Web3 AI Ecosystem Map',
  description: 'A curated collection of the best AI tools, frameworks, and resources for building intelligent agents',
  categories: [
    {
      title: 'Frameworks',
      items: [
        { name: 'LangChain', url: 'https://langchain.com' },
        { name: 'AutoGPT', url: 'https://autogpt.net' },
        { name: 'BabyAGI', url: 'https://github.com/yoheinakajima/babyagi' },
        { name: 'AgentGPT', url: 'https://agentgpt.reworkd.ai' }
      ]
    },
    {
      title: 'Infrastructure',
      items: [
        { name: 'OpenAI', url: 'https://openai.com' },
        { name: 'Anthropic', url: 'https://anthropic.com' },
        { name: 'Hugging Face', url: 'https://huggingface.co' }
      ]
    },
    {
      title: 'Development Tools',
      items: [
        { name: 'Cursor', url: 'https://cursor.sh' },
        { name: 'GitHub Copilot', url: 'https://github.com/features/copilot' },
        { name: 'Replit', url: 'https://replit.com' },
        { name: 'CodeSandbox', url: 'https://codesandbox.io' }
      ]
    },
    {
      title: 'Deployment',
      items: [
        { name: 'Vercel', url: 'https://vercel.com' },
        { name: 'Railway', url: 'https://railway.app' },
        { name: 'Render', url: 'https://render.com' }
      ]
    }
  ]
};

async function createEcosystemMap() {
  try {
    // First, check if an ecosystem map already exists
    const existingMaps = await client.fetch('*[_type == "ecosystemMap"]');
    
    if (existingMaps.length > 0) {
      console.log('Ecosystem map already exists. Updating...');
      await client
        .patch(existingMaps[0]._id)
        .set(ecosystemMap)
        .commit();
    } else {
      console.log('Creating new ecosystem map...');
      await client.create(ecosystemMap);
    }
    
    console.log('Ecosystem map created/updated successfully!');
  } catch (error) {
    console.error('Error creating ecosystem map:', error);
  }
}

createEcosystemMap(); 