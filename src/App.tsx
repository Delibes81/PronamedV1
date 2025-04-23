import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Blog from './components/Blog';
import BlogPage from './pages/BlogPage';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <About />
            <Products />
            <Blog />
            <Contact />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;