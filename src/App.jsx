import React from 'react';
import Navbar from "./sections/Navbar.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <Experience></Experience>
            <Contact></Contact>
            <Footer></Footer>
        </main>
    )
}
export default App
