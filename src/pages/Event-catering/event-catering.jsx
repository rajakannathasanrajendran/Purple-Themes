import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import cateringBg from '../../assets/catering/catering-bg.png';
import chefImg from '../../assets/catering/chef.png';
import './event-catering.css';

const EventCatering = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    persons: '',
    date: '',
    email: '',
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
    console.log('Catering Form submitted:', formData);
  };

  return (
    <div className="event-catering">
      <section className="catering-hero" style={{ backgroundImage: `url(${cateringBg})` }}>
        <Header />
      </section>
      <main className="event-catering-content">
        <div className="catering-container">
          <h1 className="catering-main-heading">EVENT CATERING</h1>
          
          <div className="catering-grid">
            {/* Left Side - Form */}
            <div className="catering-form-section">
              <h2 className="catering-section-title">CATERING ENQUIRY</h2>
              <p className="catering-section-subtitle">
                Your email address will not be published. Required fields are marked *
              </p>

              <form className="catering-form" onSubmit={handleSubmit}>
                <div className="catering-form-group">
                  <svg className="catering-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className="catering-input"
                    required
                  />
                </div>

                <div className="catering-form-row">
                  <div className="catering-country-code">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>+1</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="catering-form-group mobile-group">
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number*"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="catering-input"
                      required
                    />
                  </div>
                </div>

                <div className="catering-form-group">
                  <svg className="catering-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="number"
                    name="persons"
                    placeholder="Number of Persons*"
                    value={formData.persons}
                    onChange={handleChange}
                    className="catering-input"
                    required
                  />
                </div>

                <div className="catering-form-group">
                  <svg className="catering-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="date"
                    name="date"
                    placeholder="Date*"
                    value={formData.date}
                    onChange={handleChange}
                    className="catering-input"
                    required
                  />
                </div>

                <div className="catering-form-group">
                  <svg className="catering-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7h16v10H4V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID*"
                    value={formData.email}
                    onChange={handleChange}
                    className="catering-input"
                    required
                  />
                </div>

                <div className="catering-form-group">
                  <svg className="catering-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="catering-input catering-textarea"
                    rows="4"
                  />
                </div>

                <div className="catering-submit-wrapper">
                  <button type="submit" className="catering-submit-btn">
                    <span>Send Message</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side - Image */}
            <div className="catering-image-section">
              <div className="catering-image-wrapper">
                <img src={chefImg} alt="HBK Catering Chef" className="catering-image" />
              </div>
            </div>
          </div>
          {/* Business Hours Section removed */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventCatering;
