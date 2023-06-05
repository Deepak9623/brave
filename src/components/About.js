import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, Button, CardBody, CardSubtitle, CardLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';

const About = () => {
    return (
        <div className='div-padd'>
        <div className="hero-section">
          <Container>
            
                <br/>
                <h1 className="display-4">About Us</h1>
                <br></br>
                <p className='lead'>Brave Fox is a highly professional IT services organisation with seasoned people from the industry with decades of experience. Our aim is to increase our customers vaule for money, experience of quality and sucess rate overall!.</p>
                <br/>
                <p className="lead"><h2>Our Core Team</h2>
                <br/>
                <h5>
                <li>
                Yogesh D Shewale - Founder & CEO</li>
                <li>
                Santosh P Kapse - Co-founder, Director & CFO
  </li>
  <li>
  Akash Rokade - Director
Advisory Board
  
  </li></h5>
  

     
                </p>
              <p/>



    
                
              
          </Container>
        </div>


        <div className="hero-section">
          <Container>
            
                <br/>
                
                <br></br>
                <br/>
                <p className="lead"><h2>Who We Are</h2>
                <p>Brave Fox is a IT services company focusing on executing turnkey IT projects in Microsoft and Oracle Technologies largely. Brave Fox also augments staffs to take care of the peak and turf's in staffing requiremetns of its clients as often time trades for money in most of the cases.<br/>Brave Fox key focus is in delivering the maximum return on investment for its clients globally.<br/></p>
                <br/>
                
                

     
                </p>
              <p/>



    
                
              
          </Container>
        </div>


        


        <div>
            <br/>
            <br/>
        
        <Row>
  <Col sm="4">
  <Card
  style={{
    width: '20rem'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
    Yogesh D Shewale
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Founder & CEO
    </CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    src={require('./9967.png')}
    width="100%"
  />
  <CardBody>
    <CardText>
    Yogesh has over 17 years of industry experience
and has worked for IT majors like Wipro, Microsoft,
and Oracle. His last assignment was
that as a regional Head in Microsoft Corporation
where he managed the Premier Support for
Developer Business across India and application
consulting business across southern region. In
addition Yogesh was also responsible for
managing IT majors across India which
included Wipro, TCS, CTS and MahindraSatyam.
    </CardText>
    
  </CardBody>
</Card>
  </Col>
  <Col sm="4">
  <Card
  style={{
    width: '20rem'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
    Santosh P Kapse
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Co-founder, Director & CFO
    </CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    src={require('./9868.png')}
    width="100%"
  />
  <CardBody>
    <CardText>
    Santosh has over a decade years of experience and most recently he
worked with Ram Solutions as Assistant Vice
President. Has deep knowledge and expertise in 
handling  entire gamut of product solutions. Over 7 years
of successful track record in handling leadership roles in
very large Programmes, with multi million $ budgets . Santosh
is based in Maharashtra, India.
    </CardText>
    
  </CardBody>
</Card>
  </Col>
  <Col sm="4">
  <Card
  style={{
    width: '20rem'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
    Akash Rokade
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Director Advisory Board
    </CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    src={require('./9954.png')}
    width="100%"
  />
  <CardBody>
    <CardText>
    Mr. A R has spent over 30 years in the financial industry
and he was  in the Top Executive grade of the State Bank
Group while he opted to take a voluntary retirement in the
general management cadre of the state bank group. He is
a pioneer in the field of forex advisory and was one of the
oldest leader in the state bank group to outshine in forex 
advisory. He till recently headed the complete northern
region  for the India Cements finance group. Mr. A R is
based in Maharashtra, India.
    </CardText>
    
  </CardBody>
</Card>
  </Col>
</Row>
<br/>
<br/>
        </div>

        </div>
    );
}
export default About;