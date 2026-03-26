import React, { useState } from 'react';
import './our brands.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import bgBrand from '../../assets/our-brands/bg-brand.png';
import brand1 from '../../assets/story/brand-1.png';
import brand2 from '../../assets/story/brand-2.png';
import brand3 from '../../assets/story/brand-3.png';
import brand4 from '../../assets/story/brand-4.png';
import brand5 from '../../assets/story/brand-5.png';
import brand6 from '../../assets/story/brand-6.png';

const OurBrands = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);
  const [isExpanded6, setIsExpanded6] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleExpand2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const toggleExpand3 = () => {
    setIsExpanded3(!isExpanded3);
  };

  const toggleExpand4 = () => {
    setIsExpanded4(!isExpanded4);
  };

  const toggleExpand5 = () => {
    setIsExpanded5(!isExpanded5);
  };

  const toggleExpand6 = () => {
    setIsExpanded6(!isExpanded6);
  };

  const fullContent = `Established on June 16th, 2017, by Syam Namballa and Mahi Reddy, The House of Biryanis and Kebabs (HBK) has rapidly risen to become a culinary sensation, adored by food aficionados all across the United States. The triumph of HBK underscores their deep passion for genuine flavors and outstanding service, START SERVING "Authenticity".

At the heart of HBK's success lies their unwavering commitment to delivering the authentic essence of biryanis and kebabs. Remaining loyal to their origins, HBK reverently preserves time-honored recipes and the culinary legacy handed down over generations. The authenticity of their biryanis is meticulously maintained through the skillful blend of aromatic spices, handpicked ingredients, and traditional cooking techniques. Each dish encapsulates the rich cultural tapestry of India, transporting you to the bustling streets and vibrant flavors of the subcontinent.

Seasoned chefs adeptly meld fragrant spices and carefully selected components to craft biryanis and kebabs that mentally transport you to the lively avenues of India. The biryanis, in particular, stand as a testament to HBK's dedication to authenticity, capturing the very essence of this celebrated dish as it's prepared in its place of origin.

Our unswerving dedication to customer contentment has been the impetus behind our achievements. We hold the belief that each patron should depart from our eatery with a smile and a longing to revisit. With considerate attentiveness and meticulousness, we guarantee that your dining sojourn at HBK is nothing less than a delightful experience.`;

  const fullContent2 = `Ancient Spirits & Grille aspires to establish itself as the pioneering herbal cocktail lounge in the United States, seamlessly blending the essence of Ayurveda with a contemporary Western dining experience. Our establishment will offer an extraordinary culinary journey, harmonizing herbal cocktails and drinks with a meticulously curated menu that artfully combines Ayurvedic principles and flavors with modern cuisine. We possess unwavering confidence that our distinctive concept will captivate the discerning palates of Frisco's residents and visitors alike.

In Ayurveda, the ancient Indian system of medicine, there exist three primary body types referred to as doshas: Vata, Pitta, and Kapha. Each dosha is intricately connected to specific elements:
Vata: Vata is associated with the air or ether element. Individuals with a dominant Vata dosha often exhibit a slender frame, dry skin, and possess a creative and energetic nature.
Pitta: Pitta is associated with the fire element. Individuals with a dominant Pitta dosha typically possess a medium build, a warm complexion, and exude a determined and ambitious nature.
Kapha: Kapha is associated with the earth or water element. Individuals with a dominant Kapha dosha often possess a sturdy build, soft skin, and radiate a calm and nurturing nature.

Distinguishing Ancient Spirits & Grille is our unwavering commitment to a personalized approach to food and drinks. We firmly believe that each individual possesses unique nutritional needs and preferences. To cater to these requirements, we have meticulously developed a bespoke questionnaire, accessible through a QR code. This questionnaire consists of five thoughtfully crafted questions relating to guests' physiological, psychological, and emotional quotients. By gathering this information, our aim is to determine their specific body type, as per Ayurvedic principles.
Once we identify a guest's body type, we meticulously curate their food and drink recommendations, customizing them to meet their distinct needs. This personalized approach guarantees that each guest receives a dining experience meticulously tailored to their well-being and preferences. By seamlessly integrating the wisdom of Ayurveda into our menu customization process, our ultimate goal is to provide a holistic and nourishing experience that leaves an indelible mark on our patrons.`;

  const fullContent3 = `Introducing HBK Fultoo: Where Sports and Indian Cuisine Unite

HBK Fultoo marks a revolutionary fusion of sports and Indian culinary excellence. As the pioneering Indian sports bar franchise in the US, it seamlessly combines the fervor of sports entertainment with the delectable flavors of biryanis, kebabs, and more. With multiple screens broadcasting global sporting events, it offers an electrifying atmosphere for enthusiasts to cheer for their teams while savoring signature Indian dishes. HBK Fultoo is a unique convergence of thrilling sports and exquisite cuisine, creating an unmatched experience that lingers long after the final whistle.

The Perfect Blend of Sports and Gastronomy

HBK Fultoo, the inaugural Indian sports bar franchise in the US, redefines the concept of dining while enjoying sports. By harmonizing the excitement of sports culture with the captivating flavors of authentic Indian fare, it transcends the ordinary and embodies the extraordinary. With an array of biryanis, kebabs, and other delectable dishes, the culinary journey at HBK Fultoo takes patrons on a virtual tour of India's rich gastronomic heritage.

Elevated Sporting Experience and Culinary Delights

At HBK Fultoo, patrons immerse themselves in the thrill of live sporting events from around the world. Multiple screens create an electrifying ambiance where sports enthusiasts cheer for their favorite teams while relishing signature Indian tastes. This fusion of the sports and culinary worlds forms an unparalleled experience that celebrates the passion for sports and the indulgence of Indian cuisine. HBK Fultoo is where the excitement of sports meets the joy of savoring authentic Indian dishes, creating a harmonious blend that leaves a lasting impression.`;

  const fullContent4 = `HBK Food USA takes pride in being a locally based company that produces a wide range of Indian pickles, masalas, and spice rubs. Their commitment to using only locally sourced fresh ingredients sets them apart and emphasizes their dedication to quality and sustainability.

By manufacturing their products in the USA, HBK Food ensures that they adhere to strict food safety and quality standards, providing customers with products they can trust. This approach also allows them to support local farmers and suppliers, contributing to the growth of the community.

The use of locally sourced fresh ingredients not only ensures the products' freshness and flavor but also reduces the carbon footprint associated with transportation and storage. Supporting local agriculture and sourcing fresh ingredients directly from nearby farms also helps maintain a close relationship with suppliers and promotes ethical and responsible practices in the food industry.

With all these aspects combined, HBK Food USA has carved a unique niche for itself in the market, appealing to both Indian cuisine enthusiasts and those seeking high-quality, locally made products. Their dedication to authenticity, quality, and sustainability makes them a standout brand in the industry.`;

  const fullContent5 = `Excellence in Hospitality: SSV Hospitality Group's Enduring Legacy

SSV Hospitality Group stands as a beacon of distinction within the ever-evolving landscape of the restaurant and hospitality industry. Renowned for its unwavering commitment to delivering unparalleled experiences, SSV has garnered widespread acclaim for its multifaceted offerings, which span across authentic Indian casual dining, sophisticated fine-dine experiences, vibrant sports bars, and the precision-driven realm of wholesale food product manufacturing.

Mastering the Craft of Culinary Artistry and Hospitality

At the heart of SSV's success lies an impeccable blend of culinary artistry and hospitality acumen. With a portfolio that boasts authentic Indian casual dining, patrons are immersed in a journey of flavors that showcase the rich tapestry of India's diverse gastronomic heritage. This culinary voyage extends to the realm of fine-dine experiences, where SSV creates opulent settings that celebrate the art of dining, elevating occasions into memorable milestones.

A Global Journey, An Enduring Impression

From trendy sports bars resonating with the cheers of fervent sports enthusiasts to the precision-driven world of wholesale food product manufacturing, SSV's prowess knows no boundaries. Its excellence transcends borders, resonating not only with customers within the United States but also leaving an indelible mark on international patrons. SSV's legacy is etched in its remarkable track record, punctuated by ventures that have not only succeeded but also created lasting memories and meaningful connections.

In an industry where excellence is the benchmark, SSV Hospitality Group stands tall, a testament to innovation, dedication, and the art of crafting unforgettable experiences. As SSV continues to redefine the contours of hospitality, its reputation as a trailblazer remains steadfast, a symbol of its ongoing commitment to excellence and its unwavering dedication to leaving an indelible mark on the global hospitality landscape.`;

  const fullContent6 = `Welcome to Ameri Spice – your ultimate destination for authentic and traditional Indian spices in the United States. At Ameri Spice, we bring the rich heritage of Indian culinary culture right to your kitchen. Whether you're a home cook or a professional chef, our wide range of premium-quality spices ensures that every dish you prepare bursts with flavor, aroma, and tradition. With a strong presence in 40+ Indian restaurants across the U.S.

With a strong presence in 40+ Indian restaurants across the U.S., our spices are trusted by chefs and food lovers alike. We are passionate about preserving India's time-honored spice legacy while making it easily accessible across America.`;

  return (
    <div className="our-brands">
      {/* Hero Section with Background Collage - Header is inside */}
      <section className="our-brands-hero" style={{ backgroundImage: `url(${bgBrand})` }}>
        <Header />
      </section>

      {/* Brands Grid Section */}
      <section className="our-brands-grid-section">
        <div className="our-brands-container">
          <div className="our-brands-grid">
            <div className="our-brands-panel panel-1">
              <img src={brand1} alt="House of Biryanis and Kebabs" className="brand-logo" />
            </div>
            <div className="our-brands-panel panel-2">
              <img src={brand2} alt="Fultoo Biryani House" className="brand-logo" />
            </div>
            <div className="our-brands-panel panel-3">
              <img src={brand3} alt="HBK Foods USA" className="brand-logo" />
            </div>
            <div className="our-brands-panel panel-4">
              <img src={brand4} alt="Ameri-Spice" className="brand-logo" />
            </div>
            <div className="our-brands-panel panel-5">
              <img src={brand5} alt="Ancient Spirits & Grille" className="brand-logo" />
            </div>
            <div className="our-brands-panel panel-6">
              <img src={brand6} alt="SSV Group of Companies" className="brand-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Culinary Brands Section */}
      <section className="culinary-brands-section">
        <div className="culinary-brands-container">
          <h2 className="culinary-brands-heading">OUR CULINARY BRANDS</h2>
          
          <div className="culinary-brands-list">
            {/* Brand 1 - House of Biryanis and Kebabs */}
            <div className="culinary-brand-item">
              <div className="culinary-brand-content">
                <div className="culinary-brand-logo-wrapper">
                  <div className="culinary-brand-logo">
                    <img src={brand6} alt="House of Biryanis and Kebabs" />
                  </div>
                  <span className="culinary-brand-label">HOUSE OF BIRYANIS AND KEBABS</span>
                </div>
                <div className="culinary-brand-text">
                  <p className={`culinary-brand-description ${isExpanded ? 'expanded' : 'truncated'}`}>
                    {fullContent}
                  </p>
                </div>
              </div>
              <div className={`culinary-brand-arrow ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Brand 2 - Ancient Spirits & Grille */}
            <div className="culinary-brand-item">
              <div className="culinary-brand-content">
                <div className="culinary-brand-logo-wrapper">
                  <div className="culinary-brand-logo">
                    <img src={brand1} alt="Ancient Spirits & Grille" />
                  </div>
                  <span className="culinary-brand-label">ANCIENT SPIRITS AND GRILLE</span>
                </div>
                <div className="culinary-brand-text">
                  <p className={`culinary-brand-description ${isExpanded2 ? 'expanded' : 'truncated'}`}>
                    {fullContent2}
                  </p>
                </div>
              </div>
              <div className={`culinary-brand-arrow ${isExpanded2 ? 'expanded' : ''}`} onClick={toggleExpand2}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Brand 3 - HBK Fultoo */}
            <div className="culinary-brand-item">
              <div className="culinary-brand-content">
                <div className="culinary-brand-logo-wrapper">
                  <div className="culinary-brand-logo">
                    <img src={brand3} alt="HBK Fultoo" />
                  </div>
                  <span className="culinary-brand-label">HBK FULTOO: 1ST INDIAN SPORTS BAR FRANCHISE IN THE US</span>
                </div>
                <div className="culinary-brand-text">
                  <p className={`culinary-brand-description ${isExpanded3 ? 'expanded' : 'truncated'}`}>
                    {fullContent3}
                  </p>
                </div>
              </div>
              <div className={`culinary-brand-arrow ${isExpanded3 ? 'expanded' : ''}`} onClick={toggleExpand3}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Brand 4 - HBK Foods USA */}
            <div className="culinary-brand-item">
              <div className="culinary-brand-content">
                <div className="culinary-brand-logo-wrapper">
                  <div className="culinary-brand-logo">
                    <img src={brand4} alt="HBK Foods USA" />
                  </div>
                  <span className="culinary-brand-label">HBK FOODS MANUFACTURING</span>
                </div>
                <div className="culinary-brand-text">
                  <p className={`culinary-brand-description ${isExpanded4 ? 'expanded' : 'truncated'}`}>
                    {fullContent4}
                  </p>
                </div>
              </div>
              <div className={`culinary-brand-arrow ${isExpanded4 ? 'expanded' : ''}`} onClick={toggleExpand4}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Brand 5 - SSV Hospitality Group */}
            <div className="culinary-brand-item">
              <div className="culinary-brand-content">
                <div className="culinary-brand-logo-wrapper">
                  <div className="culinary-brand-logo">
                    <img src={brand5} alt="SSV Hospitality Group" />
                  </div>
                  <span className="culinary-brand-label">SSV HOSPITALITY GROUP OF COMPANIES</span>
                </div>
                <div className="culinary-brand-text">
                  <p className={`culinary-brand-description ${isExpanded5 ? 'expanded' : 'truncated'}`}>
                    {fullContent5}
                  </p>
                </div>
              </div>
              <div className={`culinary-brand-arrow ${isExpanded5 ? 'expanded' : ''}`} onClick={toggleExpand5}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Brand 6 - Ameri Spice */}
            <div className="culinary-brand-item">
              <div className="culinary-brand-content">
                <div className="culinary-brand-logo-wrapper">
                  <div className="culinary-brand-logo">
                    <img src={brand2} alt="Ameri Spice" />
                  </div>
                  <span className="culinary-brand-label">AMERI SPICE BE SPICES. TRUE FLAVOR.</span>
                </div>
                <div className="culinary-brand-text">
                  <p className={`culinary-brand-description ${isExpanded6 ? 'expanded' : 'truncated'}`}>
                    {fullContent6}
                  </p>
                </div>
              </div>
              <div className={`culinary-brand-arrow ${isExpanded6 ? 'expanded' : ''}`} onClick={toggleExpand6}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="three-column-section">
        <div className="three-column-container">
          <div className="three-column-grid">
            {/* Column 1 - Growing Together */}
            <div className="three-column-item">
              <h3 className="three-column-title">GROWING TOGETHER</h3>
              <p className="three-column-text">
                At HBK Casual Restaurants, we take you on a culinary expedition through the rich tapestry of Indian biryanis 
                and kebabs. With a warm and inviting ambiance, our casual dining outlets provide the perfect setting to indulge 
                in authentic Indian flavors. Each HBK Casual Restaurant embodies the essence of traditional Indian hospitality, 
                offering a menu that showcases the best biryanis, kebabs, and mouthwatering Indian delicacies. Whether you're 
                dining with friends, family, or colleagues, our casual restaurants promise a delightful experience that will 
                leave you craving for more.
              </p>
            </div>

            {/* Divider */}
            <div className="three-column-divider"></div>

            {/* Column 2 - Ancient Spirits and Grille */}
            <div className="three-column-item">
              <h3 className="three-column-title">ANCIENT SPIRITS AND GRILLE</h3>
              <p className="three-column-text">
                Step into the world of Ancient Spirits and Grille, where time-honored recipes meet modern culinary expertise. 
                This exclusive dining concept celebrates the glorious culinary heritage of India, presenting a curated selection 
                of dishes that reflect the essence of different eras and dynasties. With a sophisticated and elegant ambiance, 
                Ancient Spirits and Grille is the perfect destination for those seeking a refined and unforgettable dining 
                experience. Embark on a gastronomic journey that intertwines history and flavors, indulging in dishes that have 
                stood the test of time and continue to captivate the discerning palate.
              </p>
            </div>

            {/* Divider */}
            <div className="three-column-divider"></div>

            {/* Column 3 - Experience The Magic & Visit Us */}
            <div className="three-column-item">
              <div className="three-column-subsection">
                <h3 className="three-column-title">EXPERIENCE THE MAGIC</h3>
                <p className="three-column-text">
                  Come and experience the unique offerings of each of our brands – HBK Casual Restaurants, Ancient Spirits and 
                  Grille, and HBK Fultoo – and allow your taste buds to savor the extraordinary flavors we have to offer.
                </p>
              </div>
              
              <div className="three-column-subsection">
                <h3 className="three-column-title">VISIT US</h3>
                <p className="three-column-text">
                  Keep an eye on our website and social media channels for updates on new openings, special events, and promotions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurBrands;

