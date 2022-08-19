import './App.css';

import Header from './containers/Header';
import About from './containers/About';
import Skills from './containers/Skills';
import Projects from './containers/Projects';
import Contact from './containers/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <About  />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
