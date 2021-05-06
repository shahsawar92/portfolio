import './style.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Services from './Components/Services';
import Aos from 'aos';
Aos.init();
function App() {
  return (
    <div>
      <Navbar/>
      <Main />
      <Services />
    </div>
    
  );
}

export default App;
