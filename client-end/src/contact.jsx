import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        Subject: '',
        message: ''
    });

    const [status,setStatus] =useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = assync (e) => {
        e.preventDefault();
        try {
            const response =async fetch(''), {
                method : 'POST',
                headers : {
                    'Content'
                }
                
            }
        } catch (error) {
            
        }
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="card">
                        <h3>Contact Us</h3>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>subject</label>
                                <input
                                    name="Subject"
                                    value={formData.Subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Message:</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;