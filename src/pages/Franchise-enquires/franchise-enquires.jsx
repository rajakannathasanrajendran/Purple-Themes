import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import textStyle from '../../assets/eb5-program/text-style.png';
import franchiseBg from '../../assets/franchise-enquires/franchise-bg.png';
import './franchise-enquires.css';

const FranchiseEnquires = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
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
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="franchise-enquires">
      <section className="franchise-hero" style={{ backgroundImage: `url(${franchiseBg})` }}>
        <Header />
      </section>
      <main className="franchise-enquires-content">
        <div className="franchise-container">
          {/* Main Heading */}
          <h1 className="franchise-main-heading">FRANCHISE ENQUIRIES</h1>

          {/* Two Column Layout */}
          <div className="franchise-sections">
            {/* Left Section - Contact Details */}
            <div className="franchise-contact-section">
              <h2 className="franchise-section-title">CONTACT DETAILS</h2>
              <p className="franchise-section-subtitle">
                Reach out to us through any of these channels
              </p>
              
              <div className="franchise-contact-info">
                <div className="franchise-contact-item">
                  <div className="franchise-icon-box">
                    <svg className="franchise-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 7h16v10H4V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="franchise-contact-text">HBK19403@gmail.com</span>
                </div>
                <div className="franchise-style-line">
                  <img src={textStyle} alt="Style decoration" className="franchise-style-image" />
                </div>
              </div>

              <p className="franchise-description">
                We would be with you in every step to make your House of Biryanis and Kebabs franchise a successful business. Join us in the flow of "House of Biryanis and Kebabs"!
              </p>
            </div>

            {/* Right Section - Form */}
            <div className="franchise-form-section">
              <div className="franchise-form-card">
                <h2 className="franchise-section-title">FRANCHISE ENQUIRIES</h2>
                <p className="franchise-section-subtitle">
                  Fill the form below to join the HBK family
                </p>

                <form className="franchise-form" onSubmit={handleSubmit}>
                <div className="franchise-form-group">
                  <svg className="franchise-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="franchise-input"
                    required
                  />
                </div>

                <div className="franchise-form-group">
                  <svg className="franchise-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="franchise-input"
                    required
                  />
                </div>

                <div className="franchise-form-group">
                  <svg className="franchise-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7h16v10H4V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID"
                    value={formData.email}
                    onChange={handleChange}
                    className="franchise-input"
                    required
                  />
                </div>

                <div className="franchise-form-group">
                  <svg className="franchise-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="franchise-input franchise-textarea"
                    rows="4"
                    required
                  />
                </div>

                <button type="submit" className="franchise-submit-btn">
                  <span>Send Message</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
              </div>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <section className="franchise-steps-section">
          <div className="franchise-steps-container">
            <div className="franchise-steps-grid">
              {/* Step 1 */}
              <div className="franchise-step-card">
                <div className="franchise-step-header">
                  <h3 className="franchise-step-title">PICK YOUR CITY</h3>
                  <div className="franchise-step-badge">01</div>
                </div>
                <p className="franchise-step-content">
                  If your passion lies in serving authentic Indian food, begin by selecting the city where you envision starting your House of Biryanis and Kebabs franchise. In case your preferred city or town is not currently available, we will gladly provide you with alternative options that are open for your desired concept.
                </p>
              </div>

              {/* Step 2 */}
              <div className="franchise-step-card">
                <div className="franchise-step-header">
                  <h3 className="franchise-step-title">IDENTIFY THE LOCATION</h3>
                  <div className="franchise-step-badge">02</div>
                </div>
                <p className="franchise-step-content">
                  After selecting the city, we will collaborate to find the perfect location for "House of Biryanis and Kebabs," ensuring convenience for our target audience and attracting walk-in customers. It's essential for all of us to recognize that the key to success lies in identifying the "Right Location."
                </p>
              </div>

              {/* Step 3 */}
              <div className="franchise-step-card">
                <div className="franchise-step-header">
                  <h3 className="franchise-step-title">START SERVING "AUTHENTICITY"</h3>
                  <div className="franchise-step-badge">03</div>
                </div>
                <p className="franchise-step-content">
                  After finalizing the location, we will come together as a cohesive "Team" to set up the restaurant and devise effective marketing strategies to spread the enticing aroma of House of Biryanis and Kebabs throughout the town. The entire process will be an enjoyable journey with "Team" House of Biryanis and Kebabs, akin to a celebration.
                </p>
              </div>
            </div>

            {/* Style Line */}
            <div className="franchise-steps-style-line">
              <img src={textStyle} alt="Style decoration" className="franchise-steps-style-image" />
            </div>
          </div>
        </section>

        {/* Why Be A Part Of HBK Family Section */}
        <section className="franchise-why-section">
          <div className="franchise-why-container">
            <h2 className="franchise-why-heading">WHY BE A PART OF HBK FAMILY ?</h2>
            
            <p className="franchise-why-intro">
              Getting a House of Biryanis and Kebabs franchise can offer several advantages and benefits, which might make it an attractive business opportunity for potential entrepreneurs. Here are some reasons why someone might consider investing in a franchise:
            </p>

            <div className="franchise-advantages-grid">
              {/* Advantage 1 */}
              <div className="franchise-advantage-card">
                <div className="franchise-advantage-header">
                  <i className="fas fa-shield-alt franchise-advantage-icon"></i>
                  <h3 className="franchise-advantage-title">ESTABLISHED BRAND</h3>
                </div>
                <p className="franchise-advantage-text">
                  Franchises come with an established brand name and reputation, which can give you a head start in the market. People are often more willing to trust and try a well-known brand they are familiar with.
                </p>
              </div>

              {/* Advantage 2 */}
              <div className="franchise-advantage-card">
                <div className="franchise-advantage-header">
                  <i className="fas fa-chart-line franchise-advantage-icon"></i>
                  <h3 className="franchise-advantage-title">PROVEN BUSINESS MODEL</h3>
                </div>
                <p className="franchise-advantage-text">
                  The franchisor has already developed and tested a successful business model. This can save you time, effort, and resources that would otherwise be needed to build a business from scratch.
                </p>
              </div>

              {/* Advantage 3 */}
              <div className="franchise-advantage-card">
                <div className="franchise-advantage-header">
                  <i className="fas fa-graduation-cap franchise-advantage-icon"></i>
                  <h3 className="franchise-advantage-title">TRAINING AND SUPPORT</h3>
                </div>
                <p className="franchise-advantage-text">
                  Franchisors usually provide training and ongoing support to franchisees. This support can include assistance with site selection, staff training, marketing, and operational guidance, helping you run the business more effectively.
                </p>
              </div>

              {/* Advantage 4 */}
              <div className="franchise-advantage-card">
                <div className="franchise-advantage-header">
                  <i className="fas fa-truck franchise-advantage-icon"></i>
                  <h3 className="franchise-advantage-title">ACCESS TO SUPPLIERS AND VENDORS</h3>
                </div>
                <p className="franchise-advantage-text">
                  Being part of a franchise network may grant you access to exclusive suppliers and vendors, ensuring a consistent supply of quality ingredients and materials.
                </p>
              </div>

              {/* Advantage 5 */}
              <div className="franchise-advantage-card">
                <div className="franchise-advantage-header">
                  <i className="fas fa-bullhorn franchise-advantage-icon"></i>
                  <h3 className="franchise-advantage-title">MARKETING AND ADVERTISING</h3>
                </div>
                <p className="franchise-advantage-text">
                  Franchisors often conduct regional or national marketing campaigns, which can increase brand awareness and foot traffic to your franchise location.
                </p>
              </div>

              {/* Advantage 6 */}
              <div className="franchise-advantage-card">
                <div className="franchise-advantage-header">
                  <i className="fas fa-shield-alt franchise-advantage-icon"></i>
                  <h3 className="franchise-advantage-title">REDUCED RISK</h3>
                </div>
                <p className="franchise-advantage-text">
                  As a franchisee, you'll be operating a business model that has already proven successful in other locations, reducing the risk compared to starting a completely new venture.
                </p>
              </div>

              {/* Advantage 7 */}
              <div className="franchise-advantage-card">
                <div className="franchise-advantage-header">
                  <i className="fas fa-balance-scale franchise-advantage-icon"></i>
                  <h3 className="franchise-advantage-title">ECONOMIES OF SCALE</h3>
                </div>
                <p className="franchise-advantage-text">
                  Due to the larger scale of a franchise network, there may be cost advantages in purchasing supplies and equipment, potentially leading to better profit margins.
                </p>
              </div>

              {/* Advantage 8 */}
              <div className="franchise-advantage-card">
                <div className="franchise-advantage-header">
                  <i className="fas fa-heart franchise-advantage-icon"></i>
                  <h3 className="franchise-advantage-title">COMMUNITY SUPPORT</h3>
                </div>
                <p className="franchise-advantage-text">
                  Some customers prefer to support local franchises, contributing to a sense of community and customer loyalty.
                </p>
              </div>

              {/* Advantage 9 */}
              <div className="franchise-advantage-card">
                <div className="franchise-advantage-header">
                  <i className="fas fa-lightbulb franchise-advantage-icon"></i>
                  <h3 className="franchise-advantage-title">CONTINUOUS INNOVATION</h3>
                </div>
                <p className="franchise-advantage-text">
                  Franchisors often invest in research and development to stay competitive, meaning you may benefit from new menu items, technology, or operational improvements.
                </p>
              </div>

              {/* Advantage 10 */}
              <div className="franchise-advantage-card">
                <div className="franchise-advantage-header">
                  <i className="fas fa-flag franchise-advantage-icon"></i>
                  <h3 className="franchise-advantage-title">TRACK RECORD OF SUCCESS</h3>
                </div>
                <p className="franchise-advantage-text">
                  A reputable franchise will have a track record of successful franchisees, providing you with some level of reassurance regarding the business's potential for profitability.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FranchiseEnquires;

