import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Home.css';

import Info from '../../components/Info/Info';
import Header from "../../components/Header/Header";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import GallerySlider from '../../components/GallerySlider/GallerySlider';
import StatsSection from '../../components/Stats/Stats';
import TimingSection from '../../components/TimingSection/TimingSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import Footer from '../../components/Footer/Footer';
import BackToTop from "../../components/BackToTop/BackToTop";
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import about1 from '../../assets/images/about/banner-4.jpeg';
import p1 from '../../assets/images/popular/popular-1.png';
import p2 from '../../assets/images/popular/popular-2.png';
import p3 from '../../assets/images/popular/Snacks.png';
import p4 from '../../assets/images/popular/popular-4.png';

const Home = () => {
    const sectionIds = ['about', 'menu', 'gallery', 'contact'];
    const activeSection = useIntersectionObserver(sectionIds);
    const location = useLocation();

    // Handle smooth scroll when navigated with { state: { scrollTo } }
    useEffect(() => {
        if (location.state?.scrollTo) {
            const sectionId = location.state.scrollTo;
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 400);
        }
    }, [location]);

    useEffect(() => {
        if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
            const script = document.createElement("script");
            script.src = "https://elfsightcdn.com/platform.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    const dishes = [
        { name: "Soups", image: p1 },
        { name: "Veg Dum Biriyani", image: p2 },
        { name: "Starters", image: p3 },
        { name: "Desserts", image: p4 },
    ];

    return (
        <div>
            <Helmet>
                <title>Indian Vegetarian Restaurant in Plano, TX – Malgudi Garden</title>
                <meta name="description" content="Malgudi Garden Pure vegetarian Indian restaurant in Plano, Texas Serving South & North Indian dishes, dosa, tiffin, dhaba buffet, dine in, takeout, delivery & catering." />
                <link rel="canonical" href="https://malgudigardenplano.com/" />
                <meta property="og:title" content="Indian Vegetarian Restaurant in Plano, TX – Malgudi Garden" />
                <meta property="og:description" content="Malgudi Garden Pure vegetarian Indian restaurant in Plano, Texas Serving South & North Indian dishes, dosa, tiffin, dhaba buffet, dine in, takeout, delivery & catering." />
            </Helmet>
            <Info />
            <Header activePage={activeSection} />
            <HomeBanner />

            {/* About Section */}
            <section id="about" className="about-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-5 order-2 order-lg-1">
                            <div className="about-img">
                                <img src={about1} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-5 order-1 order-lg-2">
                            <div className="about-content">
                                <h2 className="section-title">Passion On Every Plate</h2>
                                <h6 className="section-subtitle mb-3">Malgudi Garden offers delicious dining and takeout to PLANO, TX.</h6>
                                <p className="about-description">
                                    The seed of "vegetarianism" for Malgudi Garden was sown when like-minded people discussed healthy conscious living, as stated by Gandhi. When the thought came to fruition, we decided to share it. Our difference starts in the kitchen, where utmost care is taken in choosing ingredients.
                                </p>
                                <p className="about-description mb-4">
                                    Nothing is left to chance as we prepare food with utmost care. We use low-fat oil and high-quality ingredients to keep your body happy and sate your appetite. Our artisan pizzas with organic ingredients baked in a brick oven are sure to keep you interested. Come, let us celebrate health!
                                </p>
                                <div className="about-ammenities">
                                    <div className="row">
                                        <div className="col-12 col-sm-6">
                                            <div className="about-ammenities-item">
                                                <i className="fas fa-leaf"></i>
                                                <p className='mb-0'>Premium Ingredients</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="about-ammenities-item">
                                                <i className="fas fa-star"></i>
                                                <p className='mb-0'>Experienced Chefs</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="about-ammenities-item">
                                                <i className="fas fa-heart"></i>
                                                <p className='mb-0'>Made with Love</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="about-ammenities-item">
                                                <i className="fas fa-clock"></i>
                                                <p className='mb-0'>On Time Delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <a href="#reach-us" className='btn'><i className="animation"></i><i class="fa-solid fa-calendar-check me-2"></i>Book Now<i className="animation"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* menu Section */}
            <section className="popular-wrapper py-4" id='menu'>
                <div className="container">
                    <div className="popular-container">
                        <h2 className="section-title">Signature Specialties</h2>
                        <h6 className="section-subtitle mb-4">A curated selection of our finest and most popular creations</h6>

                        <div className="row">
                            {dishes.map((dish, index) => (
                                <div
                                    className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4"
                                    key={index}
                                >
                                    <div className="card custom-card h-100">
                                        <img
                                            src={dish.image}
                                            alt={dish.name}
                                            className="card-img-top"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{dish.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='text-center mt-4'>
                            <Link to="/menu" className='btn'><i className="animation"></i><i className="fas fa-utensils"></i>View Menu<i className="animation"></i></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* parallex Section */}
            <div className="parallex-section">
                <div className="container text-center text-white">
                    <h2 className="promo-heading">Experience the True Taste of Tradition</h2>
                    <h4 className="promo-subheading mb-4">
                        Authentic South Indian Vegetarian Catering, Prepared with Passion and Purity
                    </h4>
                    <div className='position-relative'>
                        <a href="https://www.ezcater.com/catering/pvt/malgudi-garden-3?fcv=1" className='btn' target="_blank" rel="noopener noreferrer"><i className="animation"></i><i className="fa-solid fa-concierge-bell me-2"></i>Book Catering<i className="animation"></i></a>
                    </div>
                </div>
            </div>

            {/* timing Section */}
            <TimingSection />

            {/* Stats Section */}
            <StatsSection />

            {/* parallex Section */}
            <div className="parallex-section parallex-section-1">
                <div className="container text-center text-white">
                    <h2 className="promo-heading">Delight in Every Bite</h2>
                    <h4 className="promo-subheading mb-4">
                        Check out our menu filled with fresh flavors and traditional favorites.
                    </h4>
                    <div className='position-relative'>
                        <Link to="/menu" className='btn'><i className="animation"></i><i className="fas fa-utensils"></i>View Menu<i className="animation"></i></Link>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <GallerySlider />





            {/* Contact Section */}
            <ContactSection />

            {/* Instagram Section */}
            {/* <div className="insta-wrapper">
                <div className="container">
                    <h2 className="section-title">Follow Our Flavorful Moments</h2>
                    <h6 className="section-subtitle mb-5">Stay connected and explore our latest creations from the kitchen to your feed</h6>
                    <div class="elfsight-app-f9d173ea-7459-4d10-8f38-2e73a8b30b58"
                        data-elfsight-app-lazy>
                    </div>
                </div>
            </div> */}

            {/* Testimonial Section */}
            {/* <div className="testimonial-wrapper">
                <div className="container">
                    <h2 className="section-title">Loved by Our Guests</h2>
                    <h6 className="section-subtitle mb-5">See what our happy customers are saying about their dining experience</h6>
                    <div
                        className="elfsight-app-2a46b1a1-2728-424e-8fb7-659562ef303d"
                        data-elfsight-app-lazy
                    ></div>
                </div>
            </div> */}

            {/* footer */}
            <Footer />

            {/* Back to Top Button */}
            <BackToTop />
        </div>
    );
};

export default Home;
