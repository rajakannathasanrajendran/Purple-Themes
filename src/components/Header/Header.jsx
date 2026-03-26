import './Header.css';
import logo from '../../assets/home/hbk.png';
import halal from '../../assets/home/halal.png';
import location30 from '../../assets/home/30-plus.png';
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutUsActive, setIsAboutUsActive] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Handle About Us navigation - navigate to home and scroll to section
    const handleAboutUsClick = (e) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            // Navigate to home page first
            navigate('/#about-us');
            // Wait for navigation to complete, then scroll
            setTimeout(() => {
                const aboutUsSection = document.getElementById('about-us');
                if (aboutUsSection) {
                    aboutUsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 200);
        } else {
            // If already on home page, just scroll
            const aboutUsSection = document.getElementById('about-us');
            if (aboutUsSection) {
                aboutUsSection.scrollIntoView({ behavior: 'smooth' });
            }
            // Update URL hash
            window.history.pushState(null, '', '/#about-us');
        }
        closeMenu();
    };

    // Handle hash navigation and scroll to about-us section
    useEffect(() => {
        if (location.hash === '#about-us' && location.pathname === '/') {
            // Small delay to ensure the page has rendered
            setTimeout(() => {
                const aboutUsSection = document.getElementById('about-us');
                if (aboutUsSection) {
                    aboutUsSection.scrollIntoView({ behavior: 'smooth' });
                    // Set active state after scrolling
                    setIsAboutUsActive(true);
                }
            }, 200);
        }
    }, [location]);

    // Intersection Observer to detect when about-us section is in viewport
    useEffect(() => {
        // Only observe if we're on the home page
        if (location.pathname !== '/') {
            setIsAboutUsActive(false);
            return;
        }

        const aboutUsSection = document.getElementById('about-us');
        if (!aboutUsSection) {
            setIsAboutUsActive(false);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Check if the section is in the viewport
                    if (entry.isIntersecting) {
                        setIsAboutUsActive(true);
                    } else {
                        // Check if we've scrolled past the section
                        const rect = entry.boundingClientRect;
                        // If section is above viewport (scrolled past), deactivate
                        // If section is below viewport (not reached yet), keep inactive
                        if (rect.top < -100) {
                            setIsAboutUsActive(false);
                        } else if (rect.bottom > window.innerHeight) {
                            setIsAboutUsActive(false);
                        }
                    }
                });
            },
            {
                threshold: [0, 0.1, 0.3, 0.5, 0.7, 1.0], // Multiple thresholds for better detection
                rootMargin: '-150px 0px -40% 0px' // Account for header and trigger when section is prominently visible
            }
        );

        observer.observe(aboutUsSection);

        return () => {
            observer.disconnect();
        };
    }, [location.pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className="header">
                <div className="header-container">
                    <div className="logo-container location30-logo">
                        <img src={location30} alt="30+ Locations" />
                    </div>
                   
                    {/* Main logo */}
                    <Link to="/" className="logo-container" onClick={closeMenu}>
                        <img src={logo} alt="House of Biryanis and Kebabs" />
                    </Link>

                    
                    <div className="logo-container halal-logo">
                        <img src={halal} alt="halal" />
                    </div>

                    <div className="hamburger-menu" onClick={toggleMenu}>
                        <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}>
                    <div className="mobile-nav-content" onClick={(e) => e.stopPropagation()}>
                        <button className="mobile-nav-close" onClick={closeMenu}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <ul className="mobile-nav-list">
                            <li className="mobile-nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => `mobile-nav-link ${isActive && !isAboutUsActive ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="mobile-nav-item">
                                <NavLink to="/our-story" className="mobile-nav-link" onClick={closeMenu}>
                                    Our Story
                                </NavLink>
                            </li>
                            <li className="mobile-nav-item">
                                <NavLink to="/location" className="mobile-nav-link" onClick={closeMenu}>
                                    Our Location
                                </NavLink>
                            </li>
                            <li className="mobile-nav-item">
                                <NavLink to="/eb5-program" className="mobile-nav-link" onClick={closeMenu}>
                                    EB5 Program
                                </NavLink>
                            </li>
                            <li className="mobile-nav-item">
                                <NavLink to="/our-brands" className="mobile-nav-link" onClick={closeMenu}>
                                    Our Brands
                                </NavLink>
                            </li>
                            <li className="mobile-nav-item">
                                <NavLink to="/careers" className="mobile-nav-link" onClick={() => { closeMenu(); window.scrollTo(0, 0); }}>
                                    Careers
                                </NavLink>
                            </li>
                            <li className="mobile-nav-item">
                                <NavLink to="/franchise-enquires" className="mobile-nav-link" onClick={closeMenu}>
                                    Franchise Enquires
                                </NavLink>
                            </li>
                            <li className="mobile-nav-item">
                                <NavLink to="/event-catering" className="mobile-nav-link" onClick={closeMenu}>
                                    Event Catering
                                </NavLink>
                            </li>
                            <li className="mobile-nav-item">
                                <NavLink to="/contact-us" className="mobile-nav-link" onClick={() => { closeMenu(); window.scrollTo(0, 0); }}>
                                    Contact Us
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <div className="nav-menu-container">
                    <ul className="nav-menu-list">
                        <li className="nav-menu-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) => `nav-menu-link ${isActive && !isAboutUsActive ? 'active' : ''}`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-menu-item">
                            <NavLink to="/our-story" className="nav-menu-link">
                                Our Story
                            </NavLink>
                        </li>
                        <li className="nav-menu-item">
                            <NavLink to="/location" className="nav-menu-link">
                                Our Location
                            </NavLink>
                        </li>
                        <li className="nav-menu-item">
                            <NavLink to="/eb5-program" className="nav-menu-link">
                                EB5 Program
                            </NavLink>
                        </li>
                        <li className="nav-menu-item">
                            <NavLink to="/our-brands" className="nav-menu-link">
                                Our Brands
                            </NavLink>
                        </li>
                        <li className="nav-menu-item">
                            <NavLink to="/careers" className="nav-menu-link" onClick={() => window.scrollTo(0, 0)}>
                                Careers
                            </NavLink>
                        </li>
                        <li className="nav-menu-item">
                            <NavLink to="/franchise-enquires" className="nav-menu-link">
                                Franchise Enquires
                            </NavLink>
                        </li>
                        <li className="nav-menu-item">
                            <NavLink to="/event-catering" className="nav-menu-link">
                                Event Catering
                            </NavLink>
                        </li>
                        <li className="nav-menu-item">
                            <NavLink to="/contact-us" className="nav-menu-link" onClick={() => window.scrollTo(0, 0)}>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;
