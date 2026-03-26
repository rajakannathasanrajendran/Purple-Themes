import houseOfBiryani from '../../assets/home/hbk.png';
import logo from '../../assets/home/maghil.png';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content footer-content--single">
                    {/* Quick Links Section */}
                    <div className="footer-links">
                        <h3 className="footer-section-title">Quick Link</h3>
                        <ul className="footer-links-list">
                            <li>
                                <Link to="/" className="footer-link">Home</Link>
                            </li>
                            <li>
                                <Link to="/our-story" className="footer-link">Our Story</Link>
                            </li>
                            <li>
                                <Link to="/location" className="footer-link">Our Location</Link>
                            </li>
                            <li>
                                <Link to="/eb5-program" className="footer-link">EB5 Program</Link>
                            </li>
                            <li>
                                <Link to="/our-brands" className="footer-link">Our Brands</Link>
                            </li>
                            <li>
                                <Link to="/franchise-enquires" className="footer-link">Franchise Enquires</Link>
                            </li>
                            <li>
                                <Link to="/event-catering" className="footer-link">Event Catering</Link>
                            </li>
                            <li>
                                <Link to="/contact-us" className="footer-link">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/careers" className="footer-link">Careers</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom footer-bottom--single">
                    <div className="footer-bottom-brand">
                        <img src={houseOfBiryani} alt="House of Biryanis & Kebabs Logo" />
                    </div>
                    <p className="footer-bottom-text-powered">
                        Powered by <a href="https://maghil.com/" target="_blank" rel="noopener noreferrer"><img src={logo} alt="Maghil Logo" /></a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
