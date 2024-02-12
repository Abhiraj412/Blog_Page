import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogPost from './components/BlogPost';
import AboutPage from './components/AboutPage';
import BlogInfoPage from './components/BlogInfoPage';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <Link to="/" className="text-white font-bold text-lg">My Blog</Link>
            </div>
            <div>
              <Link to="/" className="text-white font-bold mx-3">Home</Link>
              <Link to="/about" className="text-white font-bold mx-3">About</Link>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto flex-grow p-4">
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/:id/about" element={<BlogInfoPage />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
