import React from "react";
import Banner from '../components/index/banner';
import Features from '../components/common/features';
import PopularCourses from '../components/common/popularcourses';
import Promo1 from '../components/common/promo1';
import Trainer from '../components/index/traniner';
import Events from '../components/index/events';
import Testimonial from '../components/common/testimonial';
const Home = () => {
  return (
    <>
    <Banner/>
    <Features/>
    <PopularCourses/>
    <Promo1/>
    <Trainer/>
    <Events/>
    <Testimonial/>
    </>
    );
}
export default Home;