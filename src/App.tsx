import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import ToolsLibraries from './pages/ToolsLibraries';
import Communities from './pages/Communities';
import Map from './pages/Map';
import CoursesAndTutorials from './pages/CoursesAndTutorials';
import Glossary from './pages/Glossary';
import ScreenSizeCheck from './components/ScreenSizeCheck';
import Agents from './pages/Agents';

function App() {
  return (
    <ScreenSizeCheck>
      <Router>
        <Routes>
          <Route path="/" element={<ToolsLibraries />} />
          <Route path="/agents" element={<Agents />} />
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