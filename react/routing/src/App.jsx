import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';



function App() {  return (
  <>
    <div style={{textAlign: 'center' }}>
      <h1>React router demo</h1>
      <nav style={{marginBottom: "20px"}}>
        <Link to="/" style={{margin:"10px"}}>Home</Link>
        <Link to="/about" style={{margin:"10px"}}>About</Link>
        <Link to="/contact" style={{margin:"10px"}}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
    </>
  )
}
export default App;