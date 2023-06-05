
import './App.css';
import Header from './components/Header';
import { Button } from 'reactstrap';
import HeroSection from './components/Hero';
import './components/custom.css';
import Footer from './components/Footer';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Services from './components/services';

function App() {
  return (<div>
    <Router>
    <Header></Header>
    <Routes>
    <Route path="*" element={<HeroSection/>}/>
    <Route path="/services" element={<Services/>} />
    </Routes>
    <Footer/>
    </Router>
  </div>);
}

export default App;
