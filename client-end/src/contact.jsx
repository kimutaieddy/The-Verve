import React, { useState } from 'react';
import './Contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-us-page">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send us a Message</h3>
        {['name', 'email', 'subject'].map((field) => (
          <div className="form-group" key={field}>
            <label htmlFor={field}>Your {field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Call us:</strong> +254 712 345 678</p>
        <p><strong>Office Address:</strong> Kenya School of Monetary Studies, Mathare North Road, Off Thika Highway</p>
      </div>
    </div>
  );
};

export default ContactUs;
