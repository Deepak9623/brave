import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import Form from './Form';

const Contact = () => {
    return (
        <div className='div-padd'>
        
        <div className="hero-section">
          <Container>
            
                <br/>
                <h1 className="display-4">Contact Us</h1>
                
                <br/>
                <p className="lead">Contact: <u>contact@bravefox.in</u> <br/>Other Enquiries: <u>info@bravefox.in</u>
                <br/>Careers: <u>careers@bravefox.in</u><p/>
                <br/>
                <p>Have questions that you need assistance with? Please fill in the below details and the right respresentative from Brave Fox will be in touch with you soon.</p>
                <br/>
                <br/>
                
                <Form />
<br/>
<br/>


<br/>
     
                </p>
              <p/>



    
                
              
          </Container>
        </div>
        </div>
    );
}
export default Contact;