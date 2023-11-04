import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Review from './components/Review';
import Contact from './components/Contact';
import './App.css'; // Import the CSS file here

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <nav style={{ background: '#bac34e', padding: '1rem', width: '200px' }}>
          <Link to="/" style={{ display: 'block', margin: '1rem 0' }}>Home</Link>
          <Link to="/shop" style={{ display: 'block', margin: '1rem 0' }}>Shop</Link>
          <Link to="/about" style={{ display: 'block', margin: '1rem 0' }}>About</Link>
          <Link to="/review" style={{ display: 'block', margin: '1rem 0' }}>Review</Link>
          <Link to="/contact" style={{ display: 'block', margin: '1rem 0' }}>Contact</Link>
        </nav>
        <main style={{ flex: 1, padding: '1rem' }}>
          <h1 style={{ textAlign: 'center' }}>Pantry Parcel</h1>
          {/* Content boxes can go here */}
          <div className="content-grid">
            {/* Example content box */}
            <div className="content-box">
              <img src="/img/logo.png" alt="Description" />
              <p>Description of the item</p>
            </div>
            {/* Repeat content boxes as needed */}
          </div>
        </main>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
