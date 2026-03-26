import { useState, useEffect } from 'react';
import './BackToTop.css';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.pageYOffset > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`floating-buttons ${isVisible ? 'show' : ''}`}>
            <a
                href="https://www.ezcater.com/catering/pvt/malgudi-garden-3?fcv=1"
                className="floating-catering-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book Catering"
                title="Book Catering"
            >
                <i className="fa-solid fa-concierge-bell"></i>
            </a>
            <button
                className="back-to-top"
                onClick={scrollToTop}
                aria-label="Back to top"
                title="Back to top"
            >
                <i className="fas fa-chevron-up"></i>
            </button>
        </div>
    );
};

export default BackToTop;
