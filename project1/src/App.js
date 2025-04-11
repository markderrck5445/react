import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


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
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;