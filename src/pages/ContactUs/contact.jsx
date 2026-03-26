import './contact.css';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LocationSections from '../../components/Locations/LocationSections';
import bgContact from '../../assets/contact-us/bg-contact.png';
import textStyle from '../../assets/eb5-program/text-style.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this to your backend / email service
    console.log('Franchise enquiry submitted:', formData);
  };

  return (
    <div className="contact">
      {/* Hero Section with Background - Header is inside */}
      <section className="contact-hero" style={{ backgroundImage: `url(${bgContact})` }}>
        <Header />
      </section>

      {/* Map and Business Hours Section */}
      {/* Business Hours Section removed */}
{/* Contact Details and Franchise Enquiries Section */}
      <section className="contact-content-section">
        <div className="contact-container">
          <div className="contact-franchise-grid">
            {/* Left: Contact Details */}
            <div className="contact-franchise-left">
              <h2 className="contact-franchise-title">CONTACT DETAILS</h2>
              <p className="contact-franchise-subtitle">Reach out to us through any of these channels</p>

              <div className="contact-franchise-contact">
                <div className="contact-franchise-contact-row">
                  <div className="contact-franchise-icon-box" aria-hidden="true">
                    <svg className="contact-franchise-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 7h16v10H4V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="contact-franchise-contact-text">HBK19403@gmail.com</span>
                </div>

                <div className="contact-franchise-style-line" aria-hidden="true">
                  <img src={textStyle} alt="" className="contact-franchise-style-image" />
                </div>
              </div>

              <p className="contact-franchise-description">
                We would be with you in every step to make your House of Biryanis and Kebabs franchise a successful business. Join us in the flow of “House of Biryanis and Kebabs”!
              </p>
            </div>

            {/* Right: Form */}
            <div className="contact-franchise-right">
              <div className="contact-franchise-card">
                <h2 className="contact-franchise-title">FRANCHISE ENQUIRIES</h2>
                <p className="contact-franchise-subtitle">Fill the form below to join the HBK family</p>

                <form className="contact-franchise-form" onSubmit={handleSubmit}>
                  <div className="contact-franchise-field">
                    <svg className="contact-franchise-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-franchise-input"
                      required
                    />
                  </div>

                  <div className="contact-franchise-field">
                    <svg className="contact-franchise-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="contact-franchise-input"
                      required
                    />
                  </div>

                  <div className="contact-franchise-field">
                    <svg className="contact-franchise-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M4 7h16v10H4V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email ID"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-franchise-input"
                      required
                    />
                  </div>

                  <div className="contact-franchise-field">
                    <svg className="contact-franchise-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="contact-franchise-input contact-franchise-textarea"
                      rows="6"
                      required
                    />
                  </div>

                  <button type="submit" className="contact-franchise-submit">
                    <span>Send Message</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <LocationSections /> */}

      <Footer />
    </div>
  );
};

export default Contact;
