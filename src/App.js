
import './App.css';
import Header from './components/Header';
import { Button } from 'reactstrap';
import HeroSection from './components/Hero';
import './components/custom.css';
import Footer from './components/Footer';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Services from './components/services';
import Career from './components/careers';
import Contact from './components/Contact';
import About from './components/About';
import Microsoft from './components/Microsoft';

function App() {
  return (<div>
    <Router>
    <Header></Header>
    <Routes>
    <Route path="*" element={<HeroSection/>}/>
    <Route path="/services" element={<Services/>} />
    <Route path="/careers" element={<Career/>} />
    <Route path="/contactus" element={<Contact/>} />
    <Route path="/aboutus" element={<About/>} />
    <Route path="/microsoft" element={<Microsoft/>} />
    </Routes>
    <Footer/>
    </Router>
  </div>);
}

export default App;
