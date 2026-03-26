import { Helmet } from 'react-helmet-async';
import Info from '../../components/Info/Info';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BackToTop from '../../components/BackToTop/BackToTop';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-page">
            <Helmet>
                <title>Malgudi Garden Blog | Indian Veg Food & Restaurant Plano</title>
                <meta name="description" content="Malgudi Garden Blog shares latest trends and stories on Indian veg food & restaurant Plano, featuring South and North Indian dishes, culture, recipes, and dining tips." />
                <link rel="canonical" href="https://malgudigardenplano.com/blog/" />
                <meta property="og:title" content="Malgudi Garden Blog | Indian Veg Food & Restaurant Plano" />
                <meta property="og:description" content="Malgudi Garden Blog shares latest trends and stories on Indian veg food & restaurant Plano, featuring South and North Indian dishes, culture, recipes, and dining tips." />
            </Helmet>
            <Info />
            <Header activePage="blog" />

            <div className="blog-banner">
                <div className="container">
                    <h1 className="blog-title">Our Blog</h1>
                    <p className="blog-subtitle">Latest trends and stories on Indian veg food & restaurant Plano</p>
                </div>
            </div>

            <section className="blog-content">
                <div className="container">
                    <p>Coming soon...</p>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </div>
    );
};

export default Blog;