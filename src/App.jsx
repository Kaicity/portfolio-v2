import About from './sections/About';
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
      <About />
      <Experience />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
