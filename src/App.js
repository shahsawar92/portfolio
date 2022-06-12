import './style.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Services from './Components/Services';
import Aos from 'aos';
import Skills from './Components/Skills';
import Profile  from './Components/Profile';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Divider from './Components/Divider';
Aos.init();
function App() {
  return (
    <div>
      <Navbar/>
      <Main />
      <Divider />
      <Services />
      <Divider to='to' fColor='green' first='right' />

      <Skills />
      <Profile/>

      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;
