import React, { useEffect, useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Play } from 'lucide-react';
import { getCourses, Course } from '../lib/sanityQueries';
import '../styles/courses-tutorials.css';

const CoursesAndTutorials: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
        setError(null);
      } catch (err) {
        setError('Failed to load courses');
        console.error('Error fetching courses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <PageLayout showSidebar={false}>
      <div className="space-y-8">
        <div className="space-y-6">
          {loading ? (
            // Loading skeleton
            [...Array(4)].map((_, index) => (
              <div key={index} className="course-card">
                <div className="course-info">
                  <h3 className="course-title">Loading...</h3>
                  <div className="mb-3">
                    {[...Array(2)].map((_, idx) => (
                      <span key={idx} className="course-tag">Loading...</span>
                    ))}
                  </div>
                  <p className="course-desc">Loading...</p>
                  <div className="course-author">By Loading...</div>
                </div>
                <div className="course-image-container">
                  <div className="course-image" />
                  <div className="play-button-overlay">
                    <div className="play-button">
                      <Play size={24} />
                    </div>
                  </div>
                  <div className="course-lessons-badge">
                    <span>Loading...</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            courses.map((course) => (
              <div key={course._id} className="course-card">
                <div className="course-info">
                  <h3 className="course-title">{course.title}</h3>
                  <div className="mb-3">
                    {course.tags.map((tag, idx) => (
                      <span key={idx} className="course-tag">{tag}</span>
                    ))}
                  </div>
                  <p className="course-desc">{course.description}</p>
                  <div className="course-author">By {course.author}</div>
                </div>
                <div className="course-image-container">
                  <img src={course.logo} alt={course.title} className="course-image" />
                  <a 
                    href={course.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="play-button-overlay"
                  >
                    <div className="play-button">
                      <Play size={24} />
                    </div>
                  </a>
                  <div className="course-lessons-badge">
                    <a 
                      href={course.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="course-link"
                    >
                      View Course
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default CoursesAndTutorials;