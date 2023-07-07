import React from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Project from './components/projects/Project'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route exact path='/' element={<Header />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/experience' element={<Experience />} />
                    <Route exact path='/projects' element={<Project />} />
                    <Route exact path='/contact' element={<Contact />} />
                </Routes>
            </Router>
        </>
    )
}

export default App