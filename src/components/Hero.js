import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row>
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
          <Col md={6}>
            <img src={require('./367.png')} alt="Hero Image" style={{
          height: 600,
          width: 600
        }} />
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
