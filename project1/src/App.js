import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'; // Add this missing import

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div>
          <Routes>
            {/* In React Router v6, "element" prop is used instead of children */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;