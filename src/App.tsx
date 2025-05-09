import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ToolsLibraries from './pages/ToolsLibraries';
import Communities from './pages/Communities';
import Map from './pages/Map';
import CoursesAndTutorials from './pages/CoursesAndTutorials';
import Glossary from './pages/Glossary';
import ScreenSizeCheck from './components/ScreenSizeCheck';

function App() {
  return (
    <ScreenSizeCheck>
      <Router>
        <Routes>
          <Route path="/" element={<ToolsLibraries />} />
          <Route path="/agents" element={<MainLayout />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/map" element={<Map />} />
          <Route path="/courses-tutorials" element={<CoursesAndTutorials />} />
          <Route path="/glossary" element={<Glossary />} />
        </Routes>
      </Router>
    </ScreenSizeCheck>
  );
}

export default App;