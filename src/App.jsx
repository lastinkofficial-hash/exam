import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cources from './pages/Cources';
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
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
