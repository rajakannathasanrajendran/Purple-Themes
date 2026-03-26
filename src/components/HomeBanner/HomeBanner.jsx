import './HomeBanner.css';
import banner from '../../assets/images/about/banner-3.jpg';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div className='home-banner-container'>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-lg-6 banner-text-content">
                        <p className='banner-text-1'><i className="fas fa-map-marker-alt me-2"></i>Welcome to Malgudi Garden, <strong className='highlight-text'>Plano,TX</strong></p>
                        <p className='banner-text-2'>Malgudi Garden’s Authentic South Indian Experience</p>
                        <p className='banner-text-3'>From Flavor to Festivity, We Serve It All!</p>
                        <p className='banner-text-4'>With years of culinary passion, Malgudi Garden has catered weddings, corporate events, festivals, and family gatherings across Texas.
                            We bring wholesome vegetarian dishes, warm hospitality, and unforgettable dining experiences to every occasion we serve.</p>
                        {/* <a href="#reach-us" className='btn'><i className="animation"></i><i class="fa-solid fa-utensils me-2"></i>View Menu<i className="animation"></i></a> */}
                        {/* <a href="" className='btn'><i className="animation"></i><i className="fa-solid fa-cart-shopping"></i>Order Online<i className="animation"></i></a> */}
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            <a href="https://www.ezcater.com/catering/pvt/malgudi-garden-3?fcv=1" className='btn' target="_blank" rel="noopener noreferrer"><i className="animation"></i><i className="fa-solid fa-concierge-bell me-2"></i>Book Catering<i className="animation"></i></a>
                            <Link to="/buffet" className='btn'><i className="animation"></i><i className="fa-solid fa-bowl-food me-2"></i>Buffet Details<i className="animation"></i></Link>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 banner-img-content">
                        <img src={banner} alt="banner" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner;