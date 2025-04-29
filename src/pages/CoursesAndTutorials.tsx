import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Play } from 'lucide-react';
import { courseFilters } from '../data/filterData';
import { FilterGroup } from '../types';
import '../styles/courses-tutorials.css';

const CoursesAndTutorials: React.FC = () => {
  const [filters, setFilters] = useState<FilterGroup[]>(courseFilters);

  const handleToggleFilter = (category: string, id: string) => {
    setFilters(prevFilters =>
      prevFilters.map(group =>
        group.category === category
          ? {
              ...group,
              options: group.options.map(option =>
                option.id === id
                  ? { ...option, active: !option.active }
                  : option
              )
            }
          : group
      )
    );
  };

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
    <PageLayout 
      customFilters={filters} 
      onToggleFilter={handleToggleFilter}
      isToolsPage={true}
    >
      <div className="space-y-8">
        <div className="space-y-6">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-info">
                <h3 className="course-title">{course.title}</h3>
                <div className="mb-3">
                  {course.tags.map((tag, idx) => (
                    <span key={idx} className="course-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="course-desc">{course.description}</p>
                <div className="course-author">By {course.author}</div>
              </div>
              <div className="course-image-container">
                <img src={course.image} alt={course.title} className="course-image" />
                <div className="play-button-overlay">
                  <div className="play-button">
                    <Play size={24} />
                  </div>
                </div>
                <div className="course-lessons-badge">
                  <span>{course.lessons} LESSONS</span>
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