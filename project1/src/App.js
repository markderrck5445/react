import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Blog from './pages/Blog';
import Services from './pages/Services';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
           <Route path="/admin" element={<Admin/>} />
           <Route path="/blog" element={<Blog/>} />
           <Route path="/services" element={<Services/>} />
           <Route path="/blog/:slug" element={<Blog/>} />
           <Route path="/about/:id" element={<About/>} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;