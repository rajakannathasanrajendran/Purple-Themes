import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Info from '../../components/Info/Info';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BackToTop from '../../components/BackToTop/BackToTop';
import './Franchise.css';

const Franchise = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        streetAddress: '',
        unit: '',
        city: '',
        state: '',
        zipCode: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here (e.g. send to API or email)
        console.log('Franchise inquiry:', formData);
    };

    return (
        <div className="franchise-page">
            <Helmet>
                <title>Indian Veg Restaurant Franchise | Malgudi Garden</title>
                <meta name="description" content="Malgudi Garden Indian veg restaurant franchise opportunity. Submit your franchise inquiry to partner with our pure vegetarian brand and start your restaurant business." />
                <link rel="canonical" href="https://malgudigardenplano.com/franchise" />
                <meta property="og:title" content="Indian Veg Restaurant Franchise | Malgudi Garden" />
                <meta property="og:description" content="Malgudi Garden Indian veg restaurant franchise opportunity. Submit your franchise inquiry to partner with our pure vegetarian brand and start your restaurant business." />
            </Helmet>
            <Info />
            <Header activePage="franchise" />

            <div className="franchise-banner">
                <div className="container">
                    <h1 className="franchise-banner-title">Franchise Inquiry</h1>
                    <p className="franchise-banner-subtitle">
                        Ready to take the leap? Join our thriving franchise family!
                    </p>
                </div>
            </div>

            <section className="franchise-form-section">
                <div className="container">
                    <div className="franchise-form-wrapper">
                        <div className="franchise-intro">
                            <h2 className="franchise-heading">Franchise Inquiry</h2>
                            <p className="franchise-description">
                                Ready to take the leap? Fill out the form and join our thriving franchise family! We're excited to help you build a successful business with our proven system and support.
                            </p>
                        </div>
                        <form className="franchise-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name <span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone <span className="required">*</span></label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email <span className="required">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-section-label">Preferred Franchise Location <span className="required">*</span></div>
                            <div className="form-group">
                                <label htmlFor="streetAddress">Street Address</label>
                                <input
                                    type="text"
                                    id="streetAddress"
                                    name="streetAddress"
                                    placeholder="Street Address"
                                    value={formData.streetAddress}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="unit">Unit (optional)</label>
                                <input
                                    type="text"
                                    id="unit"
                                    name="unit"
                                    placeholder="Unit (optional)"
                                    value={formData.unit}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">State</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        placeholder="State"
                                        value={formData.state}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="zipCode">Zip Code</label>
                                <input
                                    type="text"
                                    id="zipCode"
                                    name="zipCode"
                                    placeholder="Zip Code"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message <span className="required">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your message..."
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="franchise-submit-btn">SEND</button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </div>
    );
};

export default Franchise;
