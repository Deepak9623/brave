
import './App.css';
import Header from './components/Header';
import { Button } from 'reactstrap';
import HeroSection from './components/Hero';
import './components/custom.css';
import Footer from './components/Footer';

function App() {
  return (<div>
    <Header></Header>
    <HeroSection></HeroSection>
    <div className='padd'>
      <p className='lead'>
      Brave Fox has assembled teams of exceptional people. We take pride in being able to offer clients the best intellectual capital available to help them solve complex problems. When you work with Brave Fox, you work with knowledgeable professionals who bring valuable strategic thinking to the table along with a collaborative working style.
      <br/>
      <br/>

Our agile processes combined with our focus on the Microsoft and Oracle connected enterprise allow us to use information technology to effectively address changing business requirements for the modern-day enterprise. With the advent of new technologies and the use of the internet to achieve tighter integration between an organization and its customers and business partners, the potential of IT has only grown. Successful organizations will be able to realize that potential by building a new generation of IT systems and teaming up with a new generation of business partners like Brave Fox.
<br/>
<br/>

Brave Fox key capabilities includes:
<br/>

Brave Fox offers services across the entire product engineering lifecycle – from architectural assessments to post production support. Our clients leverage us for following functions:
<br/>

  <li>
  IT Consulting
  </li>
  <li>
  Quality Consulting
  </li>
  <li>
  Software and Services Needs
  </li>
  <li>
  IT Outsourcing
  </li>
  <li>
  Architectural assessment
  </li>
  <li>
  Prototypes & Proof of Concepts
  </li>
  <li>
  Feature/Module/Product Development
  </li>
  <li>
  Software Architecture & Design
  </li>
  <li>
  Software Testing and Test Automation
  </li>
  <li>
  Performance Engineering
  </li>
  <li>
  Technology Migration to newer platforms
  </li>
  <li>
  Database Migrations
  </li>


 
      </p>
    </div>
    <Footer/>
  </div>);
}

export default App;
