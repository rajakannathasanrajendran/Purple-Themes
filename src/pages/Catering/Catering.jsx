import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Info from '../../components/Info/Info';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import './Catering.css';
import menuData from '../../data/menu.json';

// Import catering package images
import poolaFestivalCatering from '../../assets/images/catering/poola-festival-catering.jpeg';
import cateringImage1 from '../../assets/images/catering/WhatsApp Image 2026-02-16 at 11.49.39 AM.jpeg';
import cateringImage2 from '../../assets/images/catering/WhatsApp Image 2026-02-16 at 11.49.40 AM (1).jpeg';
import cateringImage3 from '../../assets/images/catering/WhatsApp Image 2026-02-16 at 11.49.41 AM.jpeg';
import cateringImage4 from '../../assets/images/catering/WhatsApp Image 2026-02-16 at 11.49.42 AM (1).jpeg';
import cateringImage5 from '../../assets/images/catering/WhatsApp Image 2026-02-16 at 11.49.42 AM.jpeg';
import cateringImage6 from '../../assets/images/catering/WhatsApp Image 2026-02-16 at 11.49.43 AM.jpeg';
import cateringImage7 from '../../assets/images/catering/WhatsApp Image 2026-02-16 at 11.49.44 AM.jpeg';

// Original combos - commented out
// const combos = [
//     { name: "Mini Tiffin Combo", items: "Idly (2), Vada (1), Pongal or Khichdi or Upma, Mini Uthappam, Sambar, Chutneys" },
//     { name: "South Indian Tiffin Combo", items: "Idly (2), Vada (1), Pongal or Khichdi or Upma, Poori, Potato Masala or Chana Masala, Sambar, Chutneys, Kesari or Gulab Jamun" },
//     { name: "South Indian Meals Combo", items: "White Rice, Sambar/Dal, Rasam, Poriyal, Kootu, Vada, Curd Rice, Dessert, Appalam" },
//     { name: "South Indian Special Meals Combo", items: "1 Appetizer, Vada (1) Poriyal, Sambar/Dal, Rasam, Curd Rice, White Rice, Veg Biryani or Veg Pulav with Raita, Dessert, Appalam/Papad" },
//     { name: "North Indian Combo", items: "2 Appetizers, 2 Curries, Butter Naan/Roti/Chapathi, Veg Biryani or Veg Pulav with Raita, Dessert" },
//     { name: "Grand Combo", items: "2 Appetizers, 2 Curries, Butter Naan/Roti/Chapathi, Sambar/Dal, Rasam, Poriyal, White Rice, Veg Biryani or Veg Pulav, Curd Rice, Dessert" },
//     { name: "Pooja Combo", items: "Medu Vada or Paruppu Vada, Tamarind Rice, Bisi Bele Bath, Lemon Rice, Coconut Rice or Cilantro Rice, Curd Rice, Appalam/Fryums, Pickle" },
//     { name: "Chinese Combo", items: "Hot and Sour Soup, 1 Appetizer, Spring Rolls, Fried Rice, Noodles, Fruit Salad/Custard" },
//     { name: "Kids Party Combo", items: "French Fries, Cheese Sticks, White/Red Sauce Pasta, Pizza, Ice Cream/Fruit Custard" },
//     { name: "Banana Leaf Meals", items: "2 Appetizers, Vada (1), Butter Naan or Roti Chapati, 2 Curries, White Rice, Sambar/Dal, Rasam, 2 Poriyals or 1 Poriyal/1 Kootu, Veg Biryani or Veg Pulav, Tamarind Rice or Lemon Rice or Cilantro Rice, Curd Rice, 2 Desserts, Ice Cream or Mango Lassi, Appalam, Raita, Pickle, Tea/Coffee including Banana Leaf" }
// ];

// Catering package images
const cateringPackages = [
    {
        id: 'grand-wedding',
        name: 'Grand Wedding Veg Catering Package',
        image: cateringImage1
    },
    {
        id: 'tiffin-combo',
        name: 'Tiffin Combo Catering Package',
        image: cateringImage2
    },
    {
        id: 'pooja-festival',
        name: 'Pooja Festival Catering Package',
        image: poolaFestivalCatering
    },
    {
        id: 'breakfast',
        name: 'Breakfast Catering Package',
        image: cateringImage3
    },
    {
        id: 'budget-friendly',
        name: 'Budget Friendly Veg Catering Package',
        image: cateringImage4
    },
    {
        id: 'live-counters',
        name: 'Live Counters For Catering',
        image: cateringImage5
    },
    {
        id: 'south-indian-meals',
        name: 'South Indian Meals Package',
        image: cateringImage6
    },
    {
        id: 'grand-veg',
        name: 'Grand Veg Catering Package',
        image: cateringImage7
    }
];


const Catering = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Scroll to section when category is selected
    useEffect(() => {
        if (selectedCategory !== 'all') {
            const categoryMap = {
                'soups': 'live-counters-section',
                'finger-foods': 'pooja-festival-section',
                'appetizers': 'tiffin-combo-section',
                'dhal-rice': 'breakfast-section',
                'bread-basket': 'grand-veg-section',
                'entrees': 'grand-wedding-veg-section',
                'dosa-corner': 'budget-friendly-veg-section',
                'south-indian': 'south-indian-meals-section'
            };
            
            const sectionId = categoryMap[selectedCategory];
            if (sectionId) {
                setTimeout(() => {
                    const element = document.querySelector(`.${sectionId}`);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            }
        }
    }, [selectedCategory]);

    // Close dropdown when clicking outside
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

    const getCategoryName = (categoryId) => {
        const category = menuData.categories.find(cat => cat.id === categoryId);
        if (!category) return 'All';
        
        // Apply same name replacements as in the filter buttons
        if (category.id === 'soups') {
            return 'Live Counters';
        } else if (category.id === 'finger-foods') {
            return 'Pooja Festival';
        } else if (category.id === 'appetizers') {
            return 'Tiffin Combo';
        } else if (category.id === 'dosa-corner') {
            return 'Budget Friendly Veg';
        } else if (category.id === 'entrees') {
            return 'Grand Wedding Veg';
        } else if (category.id === 'dhal-rice') {
            return 'Breakfast';
        } else if (category.id === 'bread-basket') {
            return 'Grand Veg';
        }
        return category.name;
    };

    const getDisplayName = (category) => {
        if (category.id === 'soups') {
            return 'Live Counters';
        } else if (category.id === 'finger-foods') {
            return 'Pooja Festival';
        } else if (category.id === 'appetizers') {
            return 'Tiffin Combo';
        } else if (category.id === 'dosa-corner') {
            return 'Budget Friendly Veg';
        } else if (category.id === 'entrees') {
            return 'Grand Wedding Veg';
        } else if (category.id === 'dhal-rice') {
            return 'Breakfast';
        } else if (category.id === 'bread-basket') {
            return 'Grand Veg';
        }
        return category.name;
    };

    return (
        <>
            <Helmet>
                <title>Indian Event Catering Services in Plano TX – Malgudi Garden</title>
                <meta name="description" content="Malgudi Garden offers Indian event catering services in Plano TX for weddings, corporate events, birthday parties, engagements, baby showers, festivals & family gatherings." />
                <link rel="canonical" href="https://malgudigardenplano.com/catering" />
                <meta property="og:title" content="Indian Event Catering Services in Plano TX – Malgudi Garden" />
                <meta property="og:description" content="Malgudi Garden offers Indian event catering services in Plano TX for weddings, corporate events, birthday parties, engagements, baby showers, festivals & family gatherings." />
            </Helmet>
            <Info />
            <Header activePage="catering" />

            <div className="catering-banner">
                <div className="container">
                    <div className="catering-content text-center">
                        <h2 className="promo-heading">Make Every Occasion Delicious!</h2>
                        <h4 className="promo-subheading mb-4">
                            From Intimate Gatherings to Grand Events — We Bring Flavor, Freshness & Joy
                        </h4>
                    </div>
                </div>
            </div>

            {/* Events */}
            <section className="events-wrapper">
                <div className="container">
                    <h2 className="section-title">Events We Cater !</h2>
                    <h6 className="section-subtitle mb-3">Perfect for Every Occasion</h6>
                    <div className="events-content">
                        <div className="event-item primary">Wedding</div>
                        <div className="event-item white">Corporate</div>
                        <div className="event-item gray">Birthday</div>
                        <div className="event-item highlight">Engagements</div>
                        <div className="event-item primary">Family Gatherings</div>
                        <div className="event-item white">Clubs & Functions</div>
                        <div className="event-item gray">Baby Showers</div>
                        <div className="event-item highlight">Buffet Services</div>
                        <div className="event-item primary">Engagement</div>
                        <div className="event-item white">Sangeet</div>
                        <div className="event-item gray">Indoor Catering</div>
                        <div className="event-item highlight">Event Catering</div>
                        <div className="event-item primary">International Catering</div>
                        <div className="event-item white">Reunions</div>
                        <div className="event-item gray">Festivals</div>
                        <div className="event-item highlight">FarmHouse Parties</div>
                        <div className="event-item primary">Get Together</div>
                    </div>
                </div>
            </section>

            <section className="catering-packages">
                <div className="container">
                    <h2 className="section-title">Our Catering Packages</h2>
                    <h6 className="section-subtitle mb-5">The Perfect Package for Your Event</h6>

                    {/* Category Filters */}
                    <div className="menu-filters">
                        {/* Desktop: Button Filters */}
                        <div className="filter-buttons desktop-filters">
                            {menuData.categories
                                .filter((category) => category.id !== 'kids-corner' && category.id !== 'drinks-desserts')
                                .map((category) => {
                                    const displayName = getDisplayName(category);
                                    return (
                                        <button
                                            key={category.id}
                                            className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                                            onClick={() => setSelectedCategory(category.id)}
                                        >
                                            {displayName}
                                        </button>
                                    );
                                })}
                        </div>

                        {/* Mobile: Dropdown Filter */}
                        <div className="mobile-filter-dropdown">
                            <button
                                type="button"
                                className="dropdown-toggle"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setIsDropdownOpen(!isDropdownOpen);
                                }}
                                aria-expanded={isDropdownOpen}
                                aria-haspopup="true"
                            >
                                <span className="dropdown-toggle-text">{getCategoryName(selectedCategory)}</span>
                                <i className={`fa-solid fa-chevron-${isDropdownOpen ? 'up' : 'down'} dropdown-chevron`} aria-hidden="true"></i>
                            </button>
                            {isDropdownOpen && (
                                <>
                                    <div 
                                        className="dropdown-overlay"
                                        onClick={() => setIsDropdownOpen(false)}
                                    ></div>
                                    <div 
                                        className="dropdown-menu" 
                                        onClick={(e) => e.stopPropagation()}
                                        role="menu"
                                    >
                                        {menuData.categories
                                            .filter((category) => category.id !== 'kids-corner' && category.id !== 'drinks-desserts')
                                            .map((category) => {
                                                const displayName = getDisplayName(category);
                                                return (
                                                    <button
                                                        key={category.id}
                                                        type="button"
                                                        className={`dropdown-item ${selectedCategory === category.id ? 'active' : ''}`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            setSelectedCategory(category.id);
                                                            setIsDropdownOpen(false);
                                                        }}
                                                        role="menuitem"
                                                    >
                                                        {displayName}
                                                    </button>
                                                );
                                            })}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {(selectedCategory === 'all' || selectedCategory === 'soups') && (
                <section className="live-counters-section">
                    <div className="container">
                        <h2 className="live-counters-title">Live Counters</h2>
                        <div className="live-counters-grid">
                            <div className="live-counter-item">Dosa Live Counter</div>
                            <div className="live-counter-item">Appam Live Counter</div>
                            <div className="live-counter-item">Chaat Live Counter</div>
                        </div>
                    </div>
                </section>
            )}

            {(selectedCategory === 'all' || selectedCategory === 'finger-foods') && (
                <section className="pooja-festival-section">
                <div className="container">
                    <h2 className="pooja-festival-title">Pooja Festival</h2>
                    <p className="catering-package-price">$14 per person • Minimum 30 people</p>
                    <div className="pooja-festival-grid">
                        <div className="pooja-menu-item">Tamarind Rice</div>
                        <div className="pooja-menu-item">Lemon Rice</div>
                        <div className="pooja-menu-item">Coriander Rice or Veg Pulao</div>
                        <div className="pooja-menu-item">Curd Rice</div>
                        <div className="pooja-menu-item">White Rice + Sambar or Bisi Bele Bath</div>
                        <div className="pooja-menu-item">Medhu Vada or Pakora</div>
                        <div className="pooja-menu-item">1 Dry Vegetable (Poriyal)</div>
                        <div className="pooja-menu-item">1 Dessert</div>
                        <div className="pooja-menu-item">Papad/Pickle</div>
                    </div>
                </div>
            </section>
            )}

            {(selectedCategory === 'all' || selectedCategory === 'appetizers') && (
                <section className="tiffin-combo-section">
                <div className="container">
                    <h2 className="tiffin-combo-title">Tiffin Combo</h2>
                    <p className="catering-package-price">$10 per person • Minimum 30 people</p>
                    <div className="tiffin-combo-grid">
                        <div className="tiffin-menu-item">Idly</div>
                        <div className="tiffin-menu-item">Vada</div>
                        <div className="tiffin-menu-item">Pongal</div>
                        <div className="tiffin-menu-item">Mini Uthappam</div>
                        <div className="tiffin-menu-item">Kesari or Gulab Jamun</div>
                        <div className="tiffin-menu-item">Sambar</div>
                        <div className="tiffin-menu-item">Assorted Chutneys</div>
                    </div>
                </div>
            </section>
            )}

            {(selectedCategory === 'all' || selectedCategory === 'dhal-rice') && (
                <section className="breakfast-section">
                <div className="container">
                    <h2 className="breakfast-title">Breakfast</h2>
                    <p className="catering-package-price">$15 per person • Minimum 30 people</p>
                    <div className="breakfast-grid">
                        <div className="breakfast-menu-item">Idly</div>
                        <div className="breakfast-menu-item">Vada</div>
                        <div className="breakfast-menu-item">Pongal</div>
                        <div className="breakfast-menu-item">Khichdi (or) Upma</div>
                        <div className="breakfast-menu-item">Sambar</div>
                        <div className="breakfast-menu-item">Assorted Chutneys</div>
                        <div className="breakfast-menu-item">Kesari or Gulab Jamun</div>
                        <div className="breakfast-menu-item">Poori</div>
                        <div className="breakfast-menu-item">Aloo Bhaji or Chana Masala</div>
                    </div>
                </div>
            </section>
            )}

            {(selectedCategory === 'all' || selectedCategory === 'bread-basket') && (
                <section className="grand-veg-section">
                <div className="container">
                    <h2 className="grand-veg-title">Grand Veg</h2>
                    <p className="catering-package-price">$15 per person • Minimum 30 people</p>
                    <div className="grand-veg-grid">
                        <div className="grand-veg-menu-item">2 Appetizers</div>
                        <div className="grand-veg-menu-item">2 Curries</div>
                        <div className="grand-veg-menu-item">1 Rice (Biryani or Pulao)</div>
                        <div className="grand-veg-menu-item">1 Bread [Naan or Chapathi or Roti]</div>
                        <div className="grand-veg-menu-item">1 Dal or Sambar + White Rice</div>
                        <div className="grand-veg-menu-item">1 Dessert</div>
                        <div className="grand-veg-menu-item">Papad/Raita/Pickle/Chutney Included</div>
                    </div>
                </div>
            </section>
            )}

            {(selectedCategory === 'all' || selectedCategory === 'entrees') && (
                <section className="grand-wedding-veg-section">
                <div className="container">
                    <h2 className="grand-wedding-veg-title">Grand Wedding Veg</h2>
                    <p className="catering-package-price">$30 per person • Minimum 50 people</p>
                    <div className="grand-wedding-veg-grid">
                        <div className="grand-wedding-menu-item">1 Appetizer</div>
                        <div className="grand-wedding-menu-item">Payasam</div>
                        <div className="grand-wedding-menu-item">Kosambari</div>
                        <div className="grand-wedding-menu-item">Fruit Pachadi or Thayir Pachadi</div>
                        <div className="grand-wedding-menu-item">Vegetable Korma</div>
                        <div className="grand-wedding-menu-item">Chapathi or Poori</div>
                        <div className="grand-wedding-menu-item">2 Poriyal (Vepudu / Palya)</div>
                        <div className="grand-wedding-menu-item">Aviyal or Kootu</div>
                        <div className="grand-wedding-menu-item">Kara Kuzhambu or Mor Kuzhambu</div>
                        <div className="grand-wedding-menu-item">Biryani or Pulao or Variety Rice</div>
                        <div className="grand-wedding-menu-item">Arachuvitta Sambar or Bisi Bele Bath</div>
                        <div className="grand-wedding-menu-item">White Rice</div>
                        <div className="grand-wedding-menu-item">Rasam</div>
                        <div className="grand-wedding-menu-item">Curd Rice</div>
                        <div className="grand-wedding-menu-item">Dessert</div>
                        <div className="grand-wedding-menu-item">Pickle / Papad / Curd Chili, Raita, Pickle & Chutney Included</div>
                    </div>
                </div>
            </section>
            )}

            {(selectedCategory === 'all' || selectedCategory === 'dosa-corner') && (
                <section className="budget-friendly-veg-section">
                <div className="container">
                    <h2 className="budget-friendly-veg-title">Budget Friendly Veg</h2>
                    <p className="catering-package-price">$12 per person • Minimum 25 people</p>
                    <div className="budget-friendly-veg-grid">
                        <div className="budget-friendly-menu-item">1 Appetizer</div>
                        <div className="budget-friendly-menu-item">2 Curries</div>
                        <div className="budget-friendly-menu-item">1 Rice (Biryani or Pulao)</div>
                        <div className="budget-friendly-menu-item">1 Bread (Naan or Chapathi or Roti)</div>
                        <div className="budget-friendly-menu-item">1 Dessert</div>
                        <div className="budget-friendly-menu-item">Papad, Raita, Pickle & Chutney Included</div>
                    </div>
                </div>
            </section>
            )}

            {(selectedCategory === 'all' || selectedCategory === 'south-indian') && (
                <section className="south-indian-meals-section">
                <div className="container">
                    <h2 className="south-indian-meals-title">South Indian Meals</h2>
                    <p className="catering-package-price">$15 per person • Minimum 30 people</p>
                    <div className="south-indian-meals-grid">
                        <div className="south-indian-menu-item">Sambar</div>
                        <div className="south-indian-menu-item">Rasam</div>
                        <div className="south-indian-menu-item">Kootu or Avial</div>
                        <div className="south-indian-menu-item">Poriyal</div>
                        <div className="south-indian-menu-item">Paruppu or Kara Kuzhambu</div>
                        <div className="south-indian-menu-item">White Rice</div>
                        <div className="south-indian-menu-item">Variety Rice or Biryani</div>
                        <div className="south-indian-menu-item">Medhu Vada or Pakora</div>
                        <div className="south-indian-menu-item">Dessert</div>
                        <div className="south-indian-menu-item">Papad/ Pickle/ Curd</div>
                    </div>
                </div>
            </section>
            )}

            <section className="catering-download-section">
                <div className="container">
                    <div className="text-center">
                        <a
                            href="/Catering-Menu.pdf"
                            download="Catering-Menu.pdf"
                            className="menu-download-btn"
                        >
                            <i className="fa-solid fa-download" aria-hidden="true"></i>
                            Download Catering Menu
                        </a>
                    </div>
                </div>
            </section>

            <section className="catering-contact" id='catering'>
                <div className="container">
                    <h2 className="section-title">For Catering Enquiry</h2>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="contact-info-item">
                                <h3 className="contact-heading">Name</h3>
                                <p className="contact-details">Praveen Baskaran</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="contact-info-item">
                                <h3 className="contact-heading">Phone Number</h3>
                                                            </div><p className="contact-details"><a href="tel:+16019277390">+1 (601) 927-7390</a></p>

                        </div>
                    </div>
                </div>
            </section>


            {/* backyard & Live Counters */}
            {/* <section id='catering-ammenities' className='catering-ammenities-wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 order-2 order-lg-1">
                            <div className="catering-ammenities-content">
                                <h2 className="section-title">Special Catering Experiences</h2>
                                <h6 className="section-subtitle mb-3">Perfect for Backyard Events & Live Food Counters</h6>

                                <div className="about-description">
                                    <div className="amenity">
                                        <p className="amenity-title"><i class="fa-solid fa-champagne-glasses me-2"></i>Backyard Parties</p>
                                        <p className="amenity-desc">
                                            Make your celebrations memorable with our hassle-free backyard catering.
                                            From intimate family gatherings to festive occasions, we bring delicious
                                            food and seamless service right to your doorstep.
                                        </p>
                                    </div>
                                    <div className="amenity">
                                        <p className="amenity-title"><i class="fa-solid fa-fire me-2"></i>Live Counters</p>
                                        <p className="amenity-desc">
                                            Experience the magic of food cooked fresh in front of you! Our live
                                            counters—from sizzling dosas to vibrant chaats—add flavor, fun, and
                                            excitement to every event.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0 ">
                            <div className="row">
                                <div className="col-6 px-2">
                                    <div className="catering-ammenities-img-item">
                                        <img src={cateringAmenities1} alt="" className='img-fluid' />
                                        <div className="catering-ammenities-img-item-overlay"></div>
                                        <div className="catering-ammenities-img-item-content">
                                            <p>Backyard Parties</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 px-2">
                                    <div className="catering-ammenities-img-item">
                                        <img src={cateringAmenities7} alt="" className='img-fluid' />
                                        <div className="catering-ammenities-img-item-overlay"></div>
                                        <div className="catering-ammenities-img-item-content">
                                            <p>Food Stations</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 px-2">
                                    <div className="catering-ammenities-img-item">
                                        <img src={cateringAmenities5} alt="" className='img-fluid' />
                                        <div className="catering-ammenities-img-item-overlay"></div>
                                        <div className="catering-ammenities-img-item-content">
                                            <p>Live Counters</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 px-2">
                                    <div className="catering-ammenities-img-item">
                                        <img src={cateringAmenities3} alt="" className='img-fluid' />
                                        <div className="catering-ammenities-img-item-overlay"></div>
                                        <div className="catering-ammenities-img-item-content">
                                            <p>Kids' Parties</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <Footer />
        </>
    )
}

export default Catering;