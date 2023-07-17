import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Overview/>
      <Services/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
