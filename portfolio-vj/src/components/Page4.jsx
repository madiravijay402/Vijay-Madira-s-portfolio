import React, { useState } from 'react';
import './Page4.css';

function Page4() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add email service integration here (like EmailJS)
    alert('Message sent! Thank you for contacting me.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-wrapper">
      <div className="container py-5">
        <h2 className="contact-title text-center mb-5">Get In Touch</h2>
        
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="contact-info">
              <h3 className="mb-4">Contact Information</h3>
              <p className="contact-description">
                Feel free to reach out! I'm always open to discussing new projects, 
                creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h5>Email</h5>
                  <a href="mailto:vijaymadira681@gmail.com">vijaymadira681@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="info-content">
                  <h5>Phone</h5>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <h5>Location</h5>
                  <p>Hyderabad, India</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links mt-4">
                <a href="https://github.com/madiravijay402" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="mailto:vijaymadira681@gmail.com" className="social-link">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-input"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      className="form-input form-textarea"
                      placeholder="Your Message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="submit-btn">
                      Send Message
                      <i className="fas fa-paper-plane ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;