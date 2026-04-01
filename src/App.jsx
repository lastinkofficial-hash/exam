import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/index/banner';
import Features from './components/index/features';
import PopularCourses from './components/index/popularcourses';
import Promo1 from './components/index/promo1';
import Trainer from './components/index/traniner';
import Events from './components/index/events';
import Testimonial from './components/index/testimonial';
import Footer from './components/footer/fooret';

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Features/>
    <PopularCourses/>
    <Promo1/>
    <Trainer/>
    <Events/>
    <Testimonial/>
    <Footer/>
    </>
  );
}

export default App;
