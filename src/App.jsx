import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import About from "./page/About";
import Service from "./page/Service";
import Project from "./page/Project";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;

// Don't forget you want to add description to your website and tags.
