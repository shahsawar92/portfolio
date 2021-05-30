import './style.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Services from './Components/Services';
import Aos from 'aos';
import Skills from './Components/Skills';
import Profile  from './Components/Profile';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
Aos.init();
function App() {
  return (
    <div>
      <Navbar/>
      <Main />
      <Services />
      <Skills />
      <Profile></Profile>
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;
