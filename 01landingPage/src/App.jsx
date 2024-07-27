import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element="" />
          <Route path="/about" element={<About/>} />
          <Route path="/store" element="" />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;