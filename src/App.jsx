import Scrollable from './components/Scrollable';
import About from './sections/About';
import Community from './sections/Community';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import Project from './sections/Project';
import Testimonial from './sections/Testimonial';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <Community />
      <About />
      <Experience />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
      <Scrollable />
    </div>
  );
};

export default App;
