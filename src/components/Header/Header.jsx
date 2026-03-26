import './Header.css';
import logo from '../../assets/logo/malgudi-logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = ({ activePage }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileLocationDropdownOpen, setIsMobileLocationDropdownOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    // Smooth scroll to section (on same page)
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMobileMenuOpen(false);
    };

    // Unified click handler for both desktop & mobile
    const handleNavClick = (sectionId) => {
        if (location.pathname === '/') {
            scrollToSection(sectionId);
        } else {
            navigate('/', { state: { scrollTo: sectionId } });
        }
    };

    // Responsive check
    useEffect(() => {
        const checkScreenSize = () => {
            const mobile = window.innerWidth <= 991;
            setIsMobileScreen(mobile);
            setIsMobileMenuOpen(false);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Sticky header
    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => isMobileScreen && setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    // Location URLs mapping
    const locationUrls = {
        'Plano': 'https://malgudigardenplano.com/',
        'Richardson': 'https://malgudigardenrichardson.com/'
    };

    // Handle location selection
    const handleLocationClick = (isMobileContext = false) => {
        setIsMobileLocationDropdownOpen(false);
        if (isMobileContext) closeMobileMenu();
    };

    // Handle menu item click
    const handleMenuItemClick = (action, isMobile) => {
        if (action === 'home') {
            if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else if (action) {
            handleNavClick(action);
        }
        if (isMobile) closeMobileMenu();
    };

    // Render location dropdown
    const renderLocationDropdown = (isMobile) => {
        const locations = ['Plano', 'Richardson'];
        const menuClass = isMobile ? 'location-dropdown-menu-mobile' : 'location-dropdown-menu';
        const containerClass = isMobile ? 'location-dropdown-mobile' : 'location-dropdown';

        if (isMobile) {
            return (
                <div className={containerClass}>
                    <a
                        href="#"
                        className={`location-dropdown-toggle ${isMobileLocationDropdownOpen ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setIsMobileLocationDropdownOpen(!isMobileLocationDropdownOpen);
                        }}
                    >
                        Location
                        <i className={`fa-solid fa-chevron-${isMobileLocationDropdownOpen ? 'up' : 'down'}`}></i>
                    </a>
                    {isMobileLocationDropdownOpen && (
                        <ul className={menuClass}>
                            {locations.map((loc) => (
                                <li key={loc}>
                                    <a
                                        href={locationUrls[loc]}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={() => handleLocationClick(true)}
                                    >
                                        {loc}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            );
        }

        return (
            <div className={containerClass}>
                <a href="#" className="location-dropdown-toggle">
                    Location
                    <i className="fa-solid fa-chevron-down"></i>
                </a>
                <ul className={menuClass}>
                    {locations.map((loc) => (
                        <li key={loc}>
                            <a
                                href={locationUrls[loc]}
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => handleLocationClick(false)}
                            >
                                {loc}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    // Menu items configuration
    const menuItems = [
        { id: 'home', label: 'Home', to: '/', action: 'home', useActivePage: true },
        { id: 'about', label: 'About', to: '/', action: 'about', useActivePage: true },
        { id: 'catering', label: 'Catering', to: '/catering', action: null, usePathname: true },
        { id: 'menu', label: 'Menu', to: '/menu', action: null, usePathname: true },
        { id: 'gallery', label: 'Gallery', to: '/', action: 'gallery', useActivePage: true },
        { id: 'franchise', label: 'Franchise', to: '/franchise', action: null, usePathname: true },
        { id: 'buffet', label: 'Buffet', to: '/buffet', action: null, usePathname: true },
    ];

    const renderMenuItems = (isMobile = false) => (
        <ul>
            {menuItems.map((item) => {
                const isActive = item.useActivePage
                    ? activePage === item.id
                    : item.usePathname && location.pathname === item.to;

                return (
                    <li key={item.id}>
                        {item.external ? (
                            <a
                                href={item.href}
                                className={isActive ? 'active' : ''}
                                onClick={() => {
                                    if (isMobile) closeMobileMenu();
                                }}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <Link
                                to={item.to}
                                className={isActive ? 'active' : ''}
                                onClick={(e) => {
                                    if (item.action) {
                                        e.preventDefault();
                                        handleMenuItemClick(item.action, isMobile);
                                    } else if (isMobile) {
                                        closeMobileMenu();
                                    }
                                }}
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                );
            })}

           

            {/* Location dropdown */}
            <li className="location-dropdown-container">
                {renderLocationDropdown(isMobile)}
            </li>

            <li>
                <a
                    href="https://malgudigardenplano.com/blog/"
                    onClick={() => {
                        if (isMobile) closeMobileMenu();
                    }}
                >
                    Blog
                </a>
            </li>

            {/* Contact */}
            <li>
                <Link
                    to="/"
                    className={activePage === 'contact' ? 'active' : ''}
                    onClick={(e) => {
                        e.preventDefault();
                        handleMenuItemClick('contact', isMobile);
                    }}
                >
                    Contact
                </Link>
            </li>
        </ul>
    );

    return (
        <>
            <div className={`header-container ${isSticky ? 'active' : ''}`}>
                <div className="header-content">
                    <Link
                        to="/"
                        className="header-logo"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <img src={logo} alt="logo" />
                    </Link>

                    <div className="header-menu">{renderMenuItems()}</div>

                    <div className="header-mobile">
                        <a href="https://customerappbeta.web.app/restaurant/malgudi-garden-plano/menu/Pickup" target="_blank" rel="noopener noreferrer" className="btn">
                            <i className="animation"></i>
                            <i className="fa-solid fa-cart-shopping"></i>Order Online
                            <i className="animation"></i>
                        </a>
                    </div>

                    <div className="hamburger-container" onClick={toggleMobileMenu}>
                        <div className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileScreen && (
                <>
                    <div
                        className={`header-menu-mobile-overlay ${isMobileMenuOpen ? 'show' : ''}`}
                        onClick={closeMobileMenu}
                    ></div>

                    <div className={`header-menu-mobile ${isMobileMenuOpen ? 'show' : ''}`}>
                        <div className="header-menu-mobile-content">
                            <Link to="/" className="header-menu-mobile-logo" onClick={closeMobileMenu}>
                                <img src={logo} alt="logo" />
                            </Link>

                            <div className="header-menu-mobile-menu">
                                {renderMenuItems(true)}
                            </div>

                            <div className="mobile-social-media">
                                <a href="mailto:malgudigardentx@gmail.com" className="mail">
                                    malgudigardentx@gmail.com
                                </a>
                                <div className="space-5"></div>
                                <a href="tel:8008865253" className="mail">
                                    +1 (800) 886-5253
                                </a>
                                <div className="space-5"></div>
                                <a href="https://maps.app.goo.gl/P6SZUqeAoj7qMSAf7" target="_blank" rel="noreferrer" className="mail">
                                    5024 Tennyson Pkwy, Suite #200, Plano, TX-75024
                                </a>
                                <div className="mobile-social-media-icons">
                                    <a href="https://www.facebook.com/malgudigarden/" target="_blank" rel="noreferrer">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                    <a href="https://www.instagram.com/malgudigarden/" target="_blank" rel="noreferrer">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Header;
