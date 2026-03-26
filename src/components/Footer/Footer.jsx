import logo from '../../assets/logo/malgudi-logo.png';
import maghilLogo from '../../assets/logo/maghil.png'
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <section className="footer-wrapper">
                <div className="container">
                    <div className="footer-content">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
                                <div className="footer-about">
                                    <Link to="/"><img src={logo} alt="logo" className='img-fluid' /></Link>
                                    <p>Whether you want to enjoy a delicious meal or satisfy your appetite, visit Malgudi Garden — a family-oriented, pure vegetarian restaurant by MK Gandhi’s group. Experience the serene ambience, warm service, and expertly crafted dishes made with carefully chosen ingredients. Visit and taste the difference!</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
                                <div className="footer-location">
                                    <h3 className="footer-location-title">Contact Info</h3>
                                    <div className="locations">
                                        <a href="https://maps.app.goo.gl/P6SZUqeAoj7qMSAf7" target='_blank'><i className="fas fa-map-marker-alt me-2"></i>5024 Tennyson Pkwy, Suite #200, Plano, TX-75024, USA</a>
                                        <a href="mailto:malgudigardentx@gmail.com"><i className="fa-solid fa-envelope me-2"></i>malgudigardentx@gmail.com</a>
                                        <a href="tel:+8008865253"><i className="fa-solid fa-phone me-2"></i>+1 (800) 886-5253</a>
                                        <a href="tel:9452897707"><i className="fa-solid fa-mobile-screen me-2"></i>+1 (945) 289-7707 / +1 (945) 289-7706</a>
                                    </div>
                                    <div className="social-links">
                                        <a href="https://www.facebook.com/malgudigarden/" target='_blank' className='fb'><i className="fab fa-facebook"></i></a>
                                        <a href="https://www.instagram.com/malgudigarden/" target='_blank' className='insta'><i className="fab fa-instagram"></i></a>
                                        {/* <a href="" target='_blank' className='utube'><i className="fab fa-youtube"></i></a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mb-5 mb-lg-0">
                                <div className="footer-contact">
                                    <h3 className="footer-hours-title">Location</h3>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20758.89736048759!2d-96.797621!3d33.063969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c232f3513fa35%3A0x7d6549ec56690deb!2sMalgudi%20Garden!5e1!3m2!1sen!2sus!4v1759743951071!5m2!1sen!2sus"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0, borderRadius: "10px" }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Malgudi Garden Location"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer bottom */}
            <section className="footer-bottom-wrapper">
                <div className="container">
                    <p>© {new Date().getFullYear()} Malgudi Garden. All rights reserved.</p>
                    <a href="https://maghil.com/" target='_blank'><img src={maghilLogo} alt="" className='img-fluid maghil-logo' /></a>
                </div>
            </section>
        </>
    )
}

export default Footer;