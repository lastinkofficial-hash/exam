import React from "react";
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cources from './pages/Cources';
import CourseDetail from './pages/Course-detail';
import Contact from './pages/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/fooret';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cources" element={<Cources/>}/>
      <Route path="/course-detail" element={<CourseDetail/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
