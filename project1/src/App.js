import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
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
           <Route path="/footer" element={<Footer/>} />
           <Route path="/admin" element={<Admin/>} />
           <Route path="/blog" element={<Blog/>} />
           <Route path="/services" element={<Services/>} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;