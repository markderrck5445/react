import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Services from './pages/Services';
import Signup from './pages/signup';
import Login from './pages/login';


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
           <Route path="/services" element={<Services/>} />
           <Route path="/about/" element={<About/>} />
           <Route path="/signup" element={<Signup/>} />
           <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;