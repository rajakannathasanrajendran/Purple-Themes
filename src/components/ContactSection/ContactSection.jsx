import './ContactSection.css';

export default function ContactSection() {
    return (
        <div className="contact-section" id='contact'>
            <div className="container">

                <h2 className="section-title">Reach Out To Us</h2>
                <h6 className="section-subtitle mb-5">We’d love to hear from you — reach out for reservations, catering, or any delicious queries.</h6>

                <div className="row text-center">

                    {/* Phone */}
                    <div className="col-sm-6 col-lg-4 mb-4 mx-auto">
                        <a href="tel:+18008865253" className="contact-section-link">
                            <div className="contact-section-item">
                                <div className="contact-section-icon">
                                    <div className="contact-section-icon-circle">
                                        <svg
                                            className="contact-section-icon-svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="contact-section-title">
                                    PHONE
                                </h3>
                                <div className="contact-section-content">
                                    <p className="contact-section-text">+1 (800) 886-5253</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Mail */}
                    <div className="col-sm-6 col-lg-4 mb-4 mx-auto">
                        <div className="contact-section-item">
                            <div className="contact-section-icon">
                                <div className="contact-section-icon-circle">
                                    <svg
                                        className="contact-section-icon-svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="contact-section-title">
                                EMAIL
                            </h3>
                            <div className="contact-section-content">
                                <p className="contact-section-text"><a href="mailto:malgudigardentx@gmail.com">malgudigardentx@gmail.com</a></p>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="col-sm-6 col-lg-4 mx-auto">
                        <a href="https://www.google.com/maps/search/?api=1&query=5024+Tennyson+Pkwy+Suite+%23200+Plano%2C+TX-75024" target="_blank" rel="noopener noreferrer" className="contact-section-link">
                            <div className="contact-section-item">
                                <div className="contact-section-icon">
                                    <div className="contact-section-icon-circle">
                                        <svg
                                            className="contact-section-icon-svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="contact-section-title">
                                    LOCATION
                                </h3>
                                <div className="contact-section-content">
                                    <p className="contact-section-text">
                                        5024 Tennyson Pkwy, Suite #200, Plano, TX-75024
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}