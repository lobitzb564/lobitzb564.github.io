import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Project from "./pages/projects";
import Resume from "./pages/resume";
import About from "./pages/about";
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}
 
export default App;