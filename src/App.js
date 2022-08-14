import './App.css';
import './custom.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar"
import Header from "./component/Header"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Gallery from "./pages/gallery"
import Policies from "./pages/policies"


function App() {
  return (
   <>
    <Header />
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/contact' exact element={<Contact/>} />
        <Route path='/gallery' exact element={<Gallery/>} />
        <Route path='/policies' exact element={<Policies/>} />
      </Routes>
    </Router>
  </>
  );
}

export default App;