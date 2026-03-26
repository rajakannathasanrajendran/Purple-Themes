import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Menu.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Info from '../../components/Info/Info';
import BackToTop from '../../components/BackToTop/BackToTop';
import menuData from '../../data/menu.json';

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredItems, setFilteredItems] = useState(menuData.items);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredItems(menuData.items);
        } else {
            setFilteredItems(menuData.items.filter(item => item.category === selectedCategory));
        }
        setIsDropdownOpen(false);
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
        return category ? category.name : 'All';
    };

    return (
        <div className="menu-page">
            <Helmet>
                <title>Malgudi Garden Menu | Pure Vegetarian Indian Food Plano, TX</title>
                <meta name="description" content="Malgudi Garden Menu features South & North Indian veg food in Plano, TX. Explore dosa, tiffin, curries, sweets, and authentic pure vegetarian Indian menu options." />
                <link rel="canonical" href="https://malgudigardenplano.com/menu" />
                <meta property="og:title" content="Malgudi Garden Menu | Pure Vegetarian Indian Food Plano, TX" />
                <meta property="og:description" content="Malgudi Garden Menu features South & North Indian veg food in Plano, TX. Explore dosa, tiffin, curries, sweets, and authentic pure vegetarian Indian menu options." />
            </Helmet>
            <Info />
            <Header activePage="menu" />
            
            <div className="menu-hero">
                <div className="container">
                    <h1 className="menu-title">Our Menu</h1>
                    <p className="menu-subtitle">Explore our delicious vegetarian offerings</p>
                    <a
                        href="/Malgudi-menu.pdf"
                        download="Malgudi-menu.pdf"
                        className="menu-download-btn"
                    >
                        <i className="fa-solid fa-download" aria-hidden="true"></i>
                        Download full menu
                    </a>
                </div>
            </div>

            <div className="menu-container">
                <div className="container">
                    {/* Category Filters */}
                    <div className="menu-filters">
                        {/* Desktop: Button Filters */}
                        <div className="filter-buttons desktop-filters">
                            {menuData.categories.map((category) => (
                                <button
                                    key={category.id}
                                    className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category.id)}
                                >
                                    {category.name}
                                </button>
                            ))}
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
                                <i className="fa-solid fa-caret-down dropdown-chevron" aria-hidden="true"></i>
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
                                        {menuData.categories && menuData.categories.length > 0 ? (
                                            menuData.categories.map((category) => (
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
                                                    {category.name}
                                                </button>
                                            ))
                                        ) : (
                                            <div className="dropdown-item">No categories available</div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Menu content: by category when "All", or single category */}
                    {selectedCategory === 'all' ? (
                        <>
                            {menuData.categories
                                .filter((cat) => cat.id !== 'all')
                                .map((category) => {
                                    const categoryItems = menuData.items.filter(
                                        (item) => item.category === category.id
                                    );
                                    if (categoryItems.length === 0) return null;
                                    return (
                                        <div key={category.id} className="menu-category-section">
                                            <h2 className="category-title">{category.name}</h2>
                                            <div className="menu-items-grid">
                                                {categoryItems.map((item) => (
                                                    <div key={item.id} className="menu-item-card">
                                                        <div className="menu-item-image">
                                                            <img
                                                                src={item.image || '/images/menu/placeholder.jpg'}
                                                                alt={item.name}
                                                                onError={(e) => {
                                                                    e.target.style.display = 'none';
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="menu-item-content">
                                                            <h3 className="menu-item-name">{item.name}</h3>
                                                            <p className="menu-item-description">{item.description}</p>
                                                            <div className="menu-item-footer">
                                                                <span className="menu-item-price">${item.price.toFixed(2)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                        </>
                    ) : (
                        <>
                            <h2 className="category-title">{getCategoryName(selectedCategory)}</h2>
                            <div className="menu-items-grid">
                                {filteredItems.map((item) => (
                                    <div key={item.id} className="menu-item-card">
                                        <div className="menu-item-image">
                                            <img
                                                src={item.image || '/images/menu/placeholder.jpg'}
                                                alt={item.name}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                        <div className="menu-item-content">
                                            <h3 className="menu-item-name">{item.name}</h3>
                                            <p className="menu-item-description">{item.description}</p>
                                            <div className="menu-item-footer">
                                                <span className="menu-item-price">${item.price.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {filteredItems.length === 0 && (
                                <div className="no-items-message">
                                    <p>No items found in this category.</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            <Footer />
            <BackToTop />
        </div>
    );
};

export default Menu;

