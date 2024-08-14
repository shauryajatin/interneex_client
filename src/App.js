
import './App.css';
// import Navbar from './comopnents/navbar';
import HeroSection from './comopnents/hero';
import PlacementStats from './comopnents/placement';
import Skills from './comopnents/skills';
import WhyChoose from './comopnents/services';
import Pricing from './comopnents/plans';
import DynamicComponentApp from './comopnents/course';
import Mentor from './comopnents/mentor';
import Footer from './comopnents/footer';
import TestimonialSection from './comopnents/testimonials';
import AlumniCompanies from './comopnents/alumni';

function App() {
  return (
    <div className="App">
   {/* <Navbar /> */}
   <HeroSection />
   {/* <PlacementStats /> */}
   <Mentor id="about" />
   <DynamicComponentApp />
   <Pricing id="pricing" />
   {/* <Skills /> */}
   <WhyChoose id="services"/> 
   <TestimonialSection  id="testimonials"/>
   <AlumniCompanies />

 
   <Footer />

    </div>
  );
}

export default App;
