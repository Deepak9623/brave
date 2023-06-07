import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
const HeroSection = () => {
  return (
    <div>
    <div className="hero-section">
      <br/>
      <Container>
        <Row>
        <Col md={6}>
            <img src={require('./367s.jpg')} className='img-fluid' alt="Hero Image" style={{
          height: 550,
          width: 550
        }} />
            
          </Col>
          <Col md={6}>
            <br/>
            <h1 className="display-4">Welcome to Brave Fox</h1>
            <br></br>
            <br/>
            <p className="lead">Brave Fox offers proven software development capabilities maximizing the use of the Microsoft and Oracle technologies and Business Solutions. We help clients achieve their goals by understanding their needs and delivering software solutions to meet those needs with speed and precision.
            <br/>
            <br/>
            <br/>
            <br/>
            
            Brave Fox today primarily focuses on delivering turnkey IT projects for its customers and handling complex IT requirements by providing wise solutions to its customers as time often trades for money while our customers have projects to deliver within a short notice.</p>
            
          </Col>
          
        </Row>
      </Container>
    </div>
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
    </div>
  );
}

export default HeroSection;
