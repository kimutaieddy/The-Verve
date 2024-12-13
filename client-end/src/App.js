import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Home from './Home';
import Resources from './Resources';

function App() {
   return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link className="home-link" to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/credit">Credit Information Sharing</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/conference">Conference</Link></li>
            <li><Link to="/training">Training</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;