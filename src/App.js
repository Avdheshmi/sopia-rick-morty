import React from "react"
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from "./Pages/Home/Home";
import About from "./Pages/about/About"
import Liked from "./Pages/Liked/Liked"

function App() {
  return (
    <>
    <Router>
    <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home/>} />
        
          <Route path="/about" element={<About/>} />
        
          <Route path="/likedCharacters" element={<Liked/>} />
        </Routes>
      </Router>
    </>
  
  );
}

export default App;
