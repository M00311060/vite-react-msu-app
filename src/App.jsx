import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <h1>Murray State University Campus</h1>
        </header>

        <div className="main-content">
          {/* Sidebar for navigation */}
          <nav className="sidebar">
            <ul>
              <li><Link to="/"><button>HOME</button></Link></li>
              <li><Link to="/page1"><button>PAGE1</button></Link></li>
              <li><Link to="/page2"><button>PAGE2</button></Link></li>
              <li><Link to="/page3"><button>PAGE3</button></Link></li>
              <li><Link to="/page4"><button>PAGE4</button></Link></li>
            </ul>
          </nav>

          {/* Content area */}
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
              <Route path="/page4" element={<Page4 />} />
            </Routes>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2024 Murray State University</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
