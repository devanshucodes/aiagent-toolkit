import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Play } from 'lucide-react';

const CoursesAndTutorials: React.FC = () => {
  const categories = [
    'Customer Service & Support',
    'Sales',
    'Back Office',
    'Operations',
    'Growth Marketing',
    'Writing & Editing',
    'Technology & IT',
    'Design & Creative',
    'Web3 AI Agent SDKs'
  ];

  const courses = [
    {
      title: 'AI for SEO Content',
      description: 'Learn to create SEO-friendly content using AI tools like ChatGPT, covering keyword research, content generation, and optimization strategies.',
      author: 'Andrew Gibbs',
      lessons: 16,
      tags: ['Business Intelligence', 'Map'],
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Google notebook LLM complete course',
      description: 'Unlock the potential of Google NotebookLM, an AI-powered tool for personalized research, analysis, and organization of your data.',
      author: 'Andrew Gibbs',
      lessons: 34,
      tags: ['Organization', 'Productivity'],
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: '14-Day AI Boot Camp',
      description: 'Intensive training covering the fundamentals of AI development, from basic concepts to advanced implementations.',
      author: 'Amanda Nielsen',
      lessons: 15,
      tags: ['Productivity', 'General AI'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <PageLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-mono text-white mb-4">Most Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.slice(0, 3).map((category, index) => (
              <div key={index} className="bg-gray-900/40 border border-gray-800 p-3">
                <span className="text-gray-400 font-mono text-sm">{category}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          {courses.map((course, index) => (
            <div key={index} className="flex gap-6 bg-gray-900/40 border border-gray-800 p-4">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {course.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-mono bg-gray-800 text-gray-400 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-mono text-white mb-2">{course.title}</h3>
                <p className="text-gray-400 font-mono text-sm mb-4">{course.description}</p>
                
                <div className="text-gray-500 font-mono text-sm">
                  By {course.author}
                </div>
              </div>
              
              <div className="relative w-64 h-36">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <div className="absolute top-2 right-2 bg-black/80 px-2 py-1">
                  <span className="text-white font-mono text-xs">{course.lessons} LESSONS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default CoursesAndTutorials;