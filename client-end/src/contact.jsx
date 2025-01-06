import React, { useState } from 'react';
import './Contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:8000/api/contact/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
            setStatus('Email sent successfully.');
        } else {
            setStatus(`Error: ${data.error}`);
        }
    } catch (error) {
        setStatus(`Error: ${error.message}`);
    }
};

  return (
    <div className="contact-us-page">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Call us:</strong> +254 712 345 678</p>
        <p><strong>Office Address:</strong> Kenya School of Monetary Studies, Mathare North Road, Off Thika Highway</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send us a Message</h3>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
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
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
