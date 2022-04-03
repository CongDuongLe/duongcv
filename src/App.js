import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Academic from "./components/Academic";
import Contact from "./components/Contact";
//react router dom import element
import {Routes, Route, } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes 
        // set initial route is Home
        
      >
        <Route path="/" element ={<Home/>} />
        <Route path="/about" element ={<About/>} />
        <Route path="/skill" element ={<Skill/>} />
        <Route path="/academic" element ={<Academic/>} />
        <Route path="/contact" element ={<Contact/>} />
      </Routes>
      {/* <Home/>
      <About/>
      <Skill/>
      <Academic/>
      <Contact/> */}
    </div>
  );
}

export default App;
