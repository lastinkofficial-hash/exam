import React from "react";
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/index/banner';
import Features from '../components/common/features';
import PopularCourses from '../components/common/popularcourses';
import Promo1 from '../components/common/promo1';
import Trainer from '../components/index/traniner';
import Events from '../components/index/events';
import Testimonial from '../components/common/testimonial';
import Footer from '../components/footer/fooret';
const Home = () => {
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
export default Home;