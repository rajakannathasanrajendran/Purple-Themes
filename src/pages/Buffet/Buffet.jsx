import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Info from '../../components/Info/Info';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Buffet.css';


const buffetCategories = [
    { id: 'all', name: 'All' },
    { id: 'south-indian-buffet', name: 'Live Counter' },
    { id: 'weekend-special', name: 'Sunday Grand Dinner' },
    { id: 'live-counter-buffet', name: 'Sunday Grand Lunch' },
];

const Buffet = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (selectedCategory !== 'all') {
            const sectionMap = {
                'south-indian-buffet': 'south-indian-buffet-section',
                'weekend-special': 'weekend-special-section',
                'live-counter-buffet': 'live-counter-buffet-section',
            };
            const sectionId = sectionMap[selectedCategory];
            if (sectionId) {
                setTimeout(() => {
                    const element = document.querySelector(`.${sectionId}`);
                    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [selectedCategory]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isDropdownOpen && !event.target.closest('.mobile-filter-dropdown')) {
                setIsDropdownOpen(false);
            }
        };
        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isDropdownOpen]);

    const getCategoryName = (id) => {
        const cat = buffetCategories.find(c => c.id === id);
        return cat ? cat.name : 'All';
    };

    return (
        <>
            <Helmet>
                <title>Indian Vegetarian Buffet in Plano, Texas | Malgudi Garden</title>
                <meta name="description" content="Malgudi Garden Indian veg restaurant franchise opportunity. Submit your franchise inquiry to partner with our pure vegetarian brand and start your restaurant business." />
                <link rel="canonical" href="https://malgudigardenplano.com/buffet" />
                <meta property="og:title" content="Indian Vegetarian Buffet in Plano, Texas | Malgudi Garden" />
                <meta property="og:description" content="Malgudi Garden Indian veg restaurant franchise opportunity. Submit your franchise inquiry to partner with our pure vegetarian brand and start your restaurant business." />
            </Helmet>
            <Info />
            <Header activePage="buffet" />

            {/* Hero Banner */}
            <div className="buffet-banner">
                <div className="container">
                    <div className="buffet-banner-content text-center">
                        <h2 className="buffet-promo-heading">Indulge in Our Authentic Buffet!</h2>
                        <h4 className="buffet-promo-subheading">
                            An Unlimited Spread of South Indian Flavors — Freshly Prepared, Served with Love
                        </h4>
                    </div>
                </div>
            </div>


            {/* Buffet Packages */}
            <section className="buffet-packages">
                <div className="container">
                    <h2 className="section-title">Our Buffet</h2>
                    <h6 className="section-subtitle mb-5">Choose the Perfect Spread for Your Event</h6>

                    {/* Category Filters */}
                    <div className="menu-filters">
                        {/* Desktop Buttons */}
                        <div className="filter-buttons desktop-filters">
                            {buffetCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(cat.id)}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Dropdown */}
                        <div className="mobile-filter-dropdown">
                            <button
                                type="button"
                                className="dropdown-toggle"
                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsDropdownOpen(!isDropdownOpen); }}
                                aria-expanded={isDropdownOpen}
                                aria-haspopup="true"
                            >
                                <span className="dropdown-toggle-text">{getCategoryName(selectedCategory)}</span>
                                <i className={`fa-solid fa-chevron-${isDropdownOpen ? 'up' : 'down'} dropdown-chevron`} aria-hidden="true"></i>
                            </button>
                            {isDropdownOpen && (
                                <>
                                    <div className="dropdown-overlay" onClick={() => setIsDropdownOpen(false)}></div>
                                    <div className="dropdown-menu" onClick={(e) => e.stopPropagation()} role="menu">
                                        {buffetCategories.map((cat) => (
                                            <button
                                                key={cat.id}
                                                type="button"
                                                className={`dropdown-item ${selectedCategory === cat.id ? 'active' : ''}`}
                                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedCategory(cat.id); setIsDropdownOpen(false); }}
                                                role="menuitem"
                                            >
                                                {cat.name}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Counter */}
            {(selectedCategory === 'all' || selectedCategory === 'south-indian-buffet') && (
                <section className="south-indian-buffet-section buffet-section">
                    <div className="container">
                        <h2 className="buffet-section-title">Weekend</h2>
                        <h4 className="buffet-section-subtitle">Grand Lunch and Dinner Buffet</h4>
                        <div className="buffet-menu-categories">
                            <div className="buffet-category-block">
                                <h5 className="buffet-cat-title">
    <i className="fa-solid fa-utensils buffet-cat-fa-icon"></i>
    Cuisines
</h5>
                                <ul className="buffet-cat-list">
                                    <li>North Indian</li>
                                    <li>South Indian</li>
                                    <li>Indo Chinese</li>
                                </ul>
                            </div>
                            <div className="buffet-category-block">
                                <h5 className="buffet-cat-title"><i className="fa-solid fa-fire buffet-cat-fa-icon"></i>Live Counters</h5>
                                <ul className="buffet-cat-list">
                                    <li>15 Types of Dosa</li>
                                    <li>5 Types of Appam</li>
                                    <li>3 Types of Chaat</li>
                                </ul>
                            </div>
                        </div>
                        <div className="salad-bar-block">
    {/* IMAGE PATH மாத்துங்க */}
    <img
        src="/src/assets/images/buffet/salad.jpg"
        alt="Fresh Salad Bar"
        className="salad-bar-image"
    />
    <p className="salad-bar-label">Fresh &amp; Flavorful</p>
    <h3 className="salad-bar-title">SALAD BAR</h3>
    <div className="salad-bar-pricing">
        <div className="salad-price-card">
            <span className="salad-category">ADULTS</span>
            <span className="salad-price">$17.99</span>
        </div>
        <div className="salad-price-card">
            <span className="salad-category">KIDS</span>
            <span className="salad-price">$10.99</span>
        </div>
    </div>
</div>
                    </div>
                </section>
            )}


            {/* Sunday Grand Dinner */}
            {(selectedCategory === 'all' || selectedCategory === 'weekend-special') && (
                <section className="weekend-special-section buffet-section alt-bg">
                    <div className="container">
                        <h2 className="buffet-section-title">Sunday</h2>
                        <h4 className="buffet-section-subtitle">Grand Dinner Buffet</h4>
                        <div className="buffet-menu-categories">
                            <div className="buffet-category-block">
                                <h5 className="buffet-cat-title"><i className="fa-solid fa-bowl-food buffet-cat-fa-icon"></i> Soups &amp; Starters</h5>
                                <ul className="buffet-cat-list">
                                    <li>Mushroom Spinach Soup (Chinese Style)</li>
                                    <li>Medhu Bonda</li>
                                    <li>Idly Manchurian</li>
                                    <li>Idly</li>
                                    <li>Kichdi</li>
                                    <li>Sambar</li>
                                </ul>
                                <h5 className="buffet-cat-title" style={{ marginTop: '24px' }}><i className="fa-solid fa-fire buffet-cat-fa-icon"></i> Live Counters</h5>
                                <ul className="buffet-cat-list">
                                    <li>Dosa – 15 Types</li>
                                    <li>Aappam – 5 Types</li>
                                    <li>Chaats – 3 Types (Self Service)</li>
                                </ul>
                                <h5 className="buffet-cat-title" style={{ marginTop: '24px' }}><i className="fa-solid fa-star buffet-cat-fa-icon"></i> Extras</h5>
                                <ul className="buffet-cat-list">
                                    <li>Sprouts Salad</li>
                                    <li>Masala Tea</li>
                                    <li>Fruit Custard</li>
                                </ul>
                            </div>
                            <div className="buffet-category-block">
                                <h5 className="buffet-cat-title"><i className="fa-solid fa-plate-wheat buffet-cat-fa-icon"></i> Main Course</h5>
                                <ul className="buffet-cat-list">
                                    <li>Gutti Vankaya Biryani</li>
                                    <li>Singapore Noodles</li>
                                    <li>Street Style Fried Rice</li>
                                    <li>Idiyappam</li>
                                    <li>Veg Kuruma</li>
                                    <li>Jeera Rice</li>
                                    <li>Dhaba Dal</li>
                                    <li>Malai Veg Masala</li>
                                    <li>Kadai Paneer Masala</li>
                                </ul>
                                <h5 className="buffet-cat-title" style={{ marginTop: '24px' }}><i className="fa-solid fa-ice-cream buffet-cat-fa-icon"></i> Desserts</h5>
                                <ul className="buffet-cat-list">
                                    <li>Ladoo</li>
                                    <li>Mysore Pak</li>
                                    <li>Tirunelveli Wheat Halwa</li>
                                    <li>Chocolate Cake</li>
                                    <li>Chef Special Dessert</li>
                                    <li>Honey Dew Payasam (Vegan)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="salad-bar-block">
                            <p className="salad-bar-label">Conditions Apply</p>
                            <div className="salad-bar-pricing">
                                <div className="salad-price-card">
                                    <span className="salad-category">ADULTS</span>
                                    <span className="salad-price">$17.99</span>
                                </div>
                                <div className="salad-price-card">
                                    <span className="salad-category">KIDS</span>
                                    <span className="salad-price">$10.99</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Sunday Grand Lunch */}
            {(selectedCategory === 'all' || selectedCategory === 'live-counter-buffet') && (
                <section className="live-counter-buffet-section buffet-section">
                    <div className="container">
                        <h2 className="buffet-section-title">Sunday</h2>
                        <h4 className="buffet-section-subtitle">Grand Lunch Buffet</h4>
                        <div className="buffet-menu-categories">
                            <div className="buffet-category-block">
                                <h5 className="buffet-cat-title"><i className="fa-solid fa-bowl-food buffet-cat-fa-icon"></i> Soups &amp; Starters</h5>
                                <ul className="buffet-cat-list">
                                    <li>Mushroom &amp; Spinach Soup (Chinese Style)</li>
                                    <li>Medhu Vada</li>
                                    <li>Idly</li>
                                    <li>Sambar</li>
                                </ul>
                                <h5 className="buffet-cat-title" style={{ marginTop: '24px' }}> <i className="fa-solid fa-fire buffet-cat-fa-icon"></i>Live Counters</h5>
                                <ul className="buffet-cat-list">
                                    <li>Aappam – 5 Types</li>
                                    <li>Chaats – 3 Types</li>
                                </ul>
                                <h5 className="buffet-cat-title" style={{ marginTop: '24px' }}><i className="fa-solid fa-ice-cream buffet-cat-fa-icon"></i> Desserts</h5>
                                <ul className="buffet-cat-list">
                                    <li>Sakkara Pongal</li>
                                    <li>Ladoo</li>
                                    <li>Mysorepak</li>
                                    <li>Honey Dew Payasam (Vegan)</li>
                                    <li>Tirunelveli Wheat Halwa</li>
                                    <li>Shahi Tukda</li>
                                    <li>Fruit Custard</li>
                                </ul>
                            </div>
                            <div className="buffet-category-block">
                                <h5 className="buffet-cat-title"><i className="fa-solid fa-plate-wheat buffet-cat-fa-icon"></i> Main Course</h5>
                                <ul className="buffet-cat-list">
                                    <li>Gutti Vankaya Biryani</li>
                                    <li>Pasta Alfredo</li>
                                    <li>Lemon Rice</li>
                                    <li>Mix Veg Poriyal</li>
                                    <li>Bottle Gourd Kootu</li>
                                    <li>White Rice</li>
                                    <li>Tomato Dal</li>
                                    <li>Tiruvarur Vathakulambu</li>
                                    <li>Kalyana Rasam</li>
                                    <li>Rajma</li>
                                    <li>Chilly Paneer</li>
                                    <li>Grilled Corn</li>
                                    <li>Curd Rice &amp; Lemon Pickle</li>
                                    <li>Curd Chilly</li>
                                    <li>Fryums</li>
                                </ul>
                                <h5 className="buffet-cat-title" style={{ marginTop: '24px' }}><i className="fa-solid fa-star buffet-cat-fa-icon"></i> Extras</h5>
                                <ul className="buffet-cat-list">
                                    <li>Sprouts Salad</li>
                                    <li>Masala Tea</li>
                                    <li>Fruit Custard</li>
                                </ul>
                            </div>
                        </div>
                        <div className="salad-bar-block">
                            <p className="salad-bar-label">Conditions Apply</p>
                            <div className="salad-bar-pricing">
                                <div className="salad-price-card">
                                    <span className="salad-category">ADULTS</span>
                                    <span className="salad-price">$17.99</span>
                                </div>
                                <div className="salad-price-card">
                                    <span className="salad-category">KIDS</span>
                                    <span className="salad-price">$10.99</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            
            <Footer />
        </>
    );
};

export default Buffet;
