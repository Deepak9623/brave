import React, { useState } from 'react';
import './Form.css';
import { UncontrolledAlert } from 'reactstrap';

const Form = () => {
    const initialFormData = {
        name: '',
        email: '',
        message: ''
      };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitMessage, setSubmitMessage] = useState('');
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log(formData); // You can perform any further actions with the form data here
    setSubmitMessage('Form submitted successfully!');
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
