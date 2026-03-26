import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import eb5Bg from '../../assets/eb5-program/eb5-bg.png';
import brand1 from '../../assets/eb5-program/brand-1.png';
import brand2 from '../../assets/eb5-program/brand-2.png';
import brand3 from '../../assets/eb5-program/brand-3.png';
import brand4 from '../../assets/eb5-program/brand-4.png';
import brand5 from '../../assets/eb5-program/brand-5.png';
import legalImage from '../../assets/eb5-program/legal.png';
import './EB5Program.css';

const EB5Program = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "WHAT IS THE EB-5 INVESTMENT PROGRAM?",
      answer: "We’re here to assist you."
    },
    {
      question: "WHO IS ELIGIBLE FOR AN EB-5 GREEN CARD?",
      answer: "Foreign investor with a minimum investment amount of $800,000 USD or equivalent Currency is required. These funds have to be validated and investors must be an accredited. There are no minimum educational or English knowledge requirements for the green card under the EB-5 Program. The minimum age of primary applicant is 21, with no criminal records."
    },
    {
      question: "WHY SHOULD I CHOOSE SSV HOSPITALITY FOR EB-5 PROGRAM",
      answer: "Setup an initial consultation with SSV HOSPITALITY EB5 to discuss your case"
    },
    {
      question: "WHERE CAN I INVEST EB-5",
      answer: "SSVG HOSPITALITY EB5’s current possibilitie are HBK, FULTOO and ASG  which will add layers of experiences to the area’s everyday offerings including chef-driven restaurants, a brewery, sportsbar."
    },
    {
      question: "CAN EB-5 INVESTMENT FUNDS COME FROM A GIFT?",
      answer: "Yes, Parents/Friends can gift $800,000 USD to their children for investment too."
    },
    {
      question: "WHAT IS A TEA (TARGET EMPLOYMENT AREA) FOR EB-5 INVESTMENT?",
      answer: "The EB-5 program requires a $1,050,000 for a standard (non-TEA investment) and $800,000 for a Targeted Employment Area investment (TEA)."
    },
    {
      question: "WHAT IS THE ACCREDITED INVESTOR REQUIREMENTS?",
      answer: "This is a general overview of the EB5 processing time for each of the required steps."
    },
    {
      question: "ADVANTAGES OF THE EB-5?",
      answer: "Direct route to a Green Card and permanent residency in the U.S. for the investor and his/her immediate family (spouse & unmarried children under age 21)."
    },
    {
      question: "Have questions on EB5 investment?",
      answer: "We’re here to assist you."
    }
  ];

  return (
    <div className="eb5-program-page">
      <Header />

      {/* Hero Section */}
      <section className="eb5-hero" style={{ backgroundImage: `url(${eb5Bg})` }}>
        <div className="eb5-hero-container">
          <div className="eb5-hero-content">
            {/* Left Side - Text Content */}
            <div className="eb5-hero-left">
              <div className="eb5-badge">
                <span className="eb5-badge-dot"></span>
                <span className="eb5-badge-text">Official EB-5 Regional Center</span>
              </div>
              
              <h1 className="eb5-hero-heading">
                <span className="eb5-hero-heading-white">YOUR PATHWAY TO</span>
                <span className="eb5-hero-heading-gold">THE AMERICAN DREAM</span>
              </h1>
              
              <p className="eb5-hero-description">
                Get your Green Card for your complete family with SSV Group EB-5 Program in approximately 5 years, based on USCIS timelines.
              </p>
              
              <button className="eb5-cta-button">
                Read More About EB5 Program
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* About SSV Hospitality Group Section */}
      <section className="eb5-about-ssv">
        <div className="eb5-about-container">
          <h2 className="eb5-about-title">ABOUT SSV HOSPITALITY GROUP</h2>
          
          <div className="eb5-about-content">
            <p className="eb5-about-paragraph">
              Are you dreaming of a new life in the USA and obtaining a green card? The House of Biryanis and Kebabs EB-5 Investment Program is a unique opportunity from SSV Hospitality Group, a powerhouse in authentic Indian cuisine, coupled with our expert legal team!
            </p>
            
            <p className="eb5-about-paragraph">
              SSV Hospitality Group is a renowned name in the restaurant and hospitality industry, specializing in authentic Indian casual dining, fine-dine experiences, trendy sports bars, and wholesale food product manufacturing. With an impressive portfolio of successful ventures, SSV has etched its name in the hearts of millions, both in the United States and beyond.
            </p>
          </div>

          <div className="eb5-brands-grid">
            <div className="eb5-brand-item">
              <img src={brand1} alt="HBK Foods USA" />
            </div>
            <div className="eb5-brand-item">
              <img src={brand2} alt="Ancient Spirits & Grille" />
            </div>
            <div className="eb5-brand-item">
              <img src={brand3} alt="SSV Group of Companies" />
            </div>
            <div className="eb5-brand-item">
              <img src={brand4} alt="Fultoo Biryani House" />
            </div>
            <div className="eb5-brand-item">
              <img src={brand5} alt="House of Biryanis & Kebabs" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Expert Legal Team Section */}
      <section className="eb5-legal-team">
        <div className="eb5-legal-container">
          <div className="eb5-legal-content">
            {/* Left Side - Text Content */}
            <div className="eb5-legal-text">
              <h2 className="eb5-legal-title">OUR EXPERT LEGAL TEAM</h2>
              
              <p className="eb5-legal-paragraph">
                At SSV Hospitality Group, we understand that navigating the EB-5 program can be complex and requires a high level of expertise. That's why we take pride in our exceptional legal team, with decades of experience in guiding investors through the intricacies of the EB-5 program. When you partner with us, you can expect:
              </p>

              <ul className="eb5-legal-list">
                <li className="eb5-legal-list-item">
                  <span className="eb5-checkmark"></span>
                  <span>Unparalleled Knowledge of EB-5 regulations and requirements</span>
                </li>
                <li className="eb5-legal-list-item">
                  <span className="eb5-checkmark"></span>
                  <span>Personalized Assistance tailored to your specific needs</span>
                </li>
                <li className="eb5-legal-list-item">
                  <span className="eb5-checkmark"></span>
                  <span>Thorough Due Diligence to safeguard your interests</span>
                </li>
                <li className="eb5-legal-list-item">
                  <span className="eb5-checkmark"></span>
                  <span>Complete compliance with program requirements</span>
                </li>
              </ul>
            </div>

            {/* Right Side - Image */}
            <div className="eb5-legal-image-wrapper">
              <img src={legalImage} alt="Legal Team Consultation" className="eb5-legal-image" />
            </div>
          </div>
        </div>
      </section>

      {/* A Green Card For Your Family Section */}
      <section className="eb5-green-card">
        <div className="eb5-green-card-container">
          <h2 className="eb5-green-card-title">A GREEN CARD FOR YOUR FAMILY</h2>
          
          <p className="eb5-green-card-intro">
            Investing in House of Biryanis and Kebabs through the EB-5 program offers you and your family an unmatched opportunity to obtain U.S. permanent residency. As a partner in this successful restaurant group, backed by the esteemed SSV Hospitality Group and supported by our expert legal team, you open doors to unparalleled benefits:
          </p>

          <div className="eb5-benefits-grid">
            <div className="eb5-benefit-box">
              <div className="eb5-benefit-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 5V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V5L12 2Z" stroke="#c89242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12L11 14L15 10" stroke="#c89242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="eb5-benefit-title">LIVE THE AMERICAN DREAM</h3>
              <p className="eb5-benefit-text">
                A green card grants you and your family the freedom to live, work, and study anywhere in the United States, unlocking a world of opportunities and a brighter future.
              </p>
            </div>

            <div className="eb5-benefit-box">
              <div className="eb5-benefit-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3V21H21" stroke="#c89242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 16L12 11L16 15L21 10" stroke="#c89242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 10V3H14" stroke="#c89242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="eb5-benefit-title">INVEST WITH CONFIDENCE</h3>
              <p className="eb5-benefit-text">
                With SSV Hospitality Group's proven track record and diversified portfolio of successful ventures, coupled with our legal team's expertise, you can invest with confidence, knowing your partnership is in capable hands.
              </p>
            </div>

            <div className="eb5-benefit-box">
              <div className="eb5-benefit-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21H21" stroke="#c89242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 21V7L13 2L21 7V21" stroke="#c89242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9V21" stroke="#c89242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 9V21" stroke="#c89242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="eb5-benefit-title">PROFITABLE VENTURES</h3>
              <p className="eb5-benefit-text">
                Your investment in House of Biryanis and Kebabs not only paves the way for a green card but also offers the potential for monthly income, turning this opportunity into a financially rewarding venture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seize The Opportunity Section */}
      <section className="eb5-seize-opportunity">
        <div className="eb5-seize-container">
          <h2 className="eb5-seize-title">SEIZE THE OPPORTUNITY TODAY!</h2>
          
          <div className="eb5-seize-content">
            <p className="eb5-seize-paragraph">
              Now is the time to embrace the American dream with SSV Hospitality Group and House of Biryanis and Kebabs. With a diverse portfolio of successful ventures, a thriving cuisine, and the chance to secure a green card for your family, this is a unique opportunity to invest in your future and create lasting memories in the land of opportunities.
            </p>
            
            <p className="eb5-seize-paragraph">
              To take the first step towards a life-changing journey, contact our team today to learn more about the House of Biryanis and Kebabs EB-5 Investment Program with SSV Hospitality Group and our expert legal team. Together, let's savor success and create a legacy in the heart of America!
            </p>
          </div>
        </div>
      </section>

      {/* Advantages of Partnering with SSV Group Section */}
      <section className="eb5-advantages">
        <div className="eb5-advantages-container">
          <h2 className="eb5-advantages-title">ADVANTAGES OF PARTNERING WITH SSV GROUP</h2>
          
          <p className="eb5-advantages-intro">
            Partnering and investing in SSV (SSV Hospitality Group) comes with a range of advantages that make it an attractive opportunity for individuals seeking to enter the culinary and hospitality industry or obtain permanent residency through the EB-5 program. Here are some key advantages.
          </p>

          <div className="eb5-advantages-grid">
            {/* Row 1 */}
            <div className="eb5-advantage-item">
              <div className="eb5-advantage-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="eb5-advantage-title">PROVEN SUCCESS AND REPUTATION</h3>
              <p className="eb5-advantage-text">
                SSV boasts a legacy of success in culinary and hospitality sectors with a diverse portfolio of ventures including House of Biryanis and Kebabs, Ancient Spirits and Grill, FULTOO - The Indian Sportsbar, and HBK Non-Veg Pickles and Masala Powders, known for delivering high-quality dining experiences and food products.
              </p>
            </div>

            <div className="eb5-advantage-item">
              <div className="eb5-advantage-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="eb5-advantage-title">EXPERIENCED MANAGEMENT AND CULINARY EXPERTISE</h3>
              <p className="eb5-advantage-text">
                The SSV team comprises seasoned restaurateurs, culinary experts, and business professionals. Their expertise ensures every venture is thoughtfully curated, providing a delightful and authentic experience for patrons.
              </p>
            </div>

            <div className="eb5-advantage-item">
              <div className="eb5-advantage-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="eb5-advantage-title">DIVERSE AND IN-DEMAND CUISINE</h3>
              <p className="eb5-advantage-text">
                SSV covers a broad spectrum of Indian cuisine, catering to a wide range of tastes and preferences, from casual dining to fine-dine experiences and sports bar offerings, designed to appeal to a diverse audience.
              </p>
            </div>

            {/* Row 2 */}
            <div className="eb5-advantage-item">
              <div className="eb5-advantage-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="eb5-advantage-title">RECOGNITION AND ACCLAIM</h3>
              <p className="eb5-advantage-text">
                SSV ventures, such as Ancient Spirits and Grill, have received multiple features in renowned publications like Forbes, attesting to the group's commitment to excellence and innovation.
              </p>
            </div>

            <div className="eb5-advantage-item">
              <div className="eb5-advantage-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="eb5-advantage-title">MARKET POTENTIAL AND EXPANSION OPPORTUNITIES</h3>
              <p className="eb5-advantage-text">
                With over 10 branches of House of Biryanis and Kebabs and a growing customer base, SSV has significant market potential. Investors can benefit from potential expansion opportunities and continued growth in the industry.
              </p>
            </div>

            <div className="eb5-advantage-item">
              <div className="eb5-advantage-icon">
                <i className="fas fa-file-contract"></i>
              </div>
              <h3 className="eb5-advantage-title">EXPERT LEGAL GUIDANCE FOR EB-5 PROGRAM</h3>
              <p className="eb5-advantage-text">
                For those seeking U.S. permanent residency through the EB-5 program, partnering with SSV offers expert legal guidance. The experienced legal team helps investors navigate complexities, ensure compliance, and maximize chances of success.
              </p>
            </div>

            {/* Row 3 */}
            <div className="eb5-advantage-item">
              <div className="eb5-advantage-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3 className="eb5-advantage-title">PROFIT POTENTIAL</h3>
              <p className="eb5-advantage-text">
                Investing in SSV ventures, such as House of Biryanis and Kebabs, not only opens the door to a green card but also offers potential for monthly income. Investors can benefit from the success and profitability of the restaurant group.
              </p>
            </div>

            <div className="eb5-advantage-item">
              <div className="eb5-advantage-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="eb5-advantage-title">DIVERSIFIED INVESTMENT</h3>
              <p className="eb5-advantage-text">
                Apart from restaurant ventures, SSV's foray into wholesale food product manufacturing with HBK Non-Veg Pickles and Masala Powders provides investors with a diversified investment opportunity in the food industry.
              </p>
            </div>

            <div className="eb5-advantage-item">
              <div className="eb5-advantage-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="eb5-advantage-title">PART OF A LEGACY</h3>
              <p className="eb5-advantage-text">
                By partnering with SSV, investors become part of a legacy of culinary excellence and cultural enrichment. Contributing to the growth and success of SSV ventures allows investors to leave a lasting impact on the culinary landscape.
              </p>
            </div>
          </div>

          {/* Bottom Section - Wider Single Box */}
          <div className="eb5-advantage-bottom">
            <div className="eb5-advantage-item-bottom">
              <div className="eb5-advantage-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="eb5-advantage-title">TRANSPARENT AND SUPPORTIVE PARTNERSHIP</h3>
              <p className="eb5-advantage-text">
                SSV places a premium on transparent communication and personalized support. Investors can expect a supportive partnership with the SSV team, working closely with them throughout the investment process and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SSV Stands Out Section */}
      <section className="eb5-why-ssv">
        <div className="eb5-why-ssv-container">
          <h2 className="eb5-why-ssv-title">WHY SSV STANDS OUT</h2>
          
          <p className="eb5-why-ssv-intro">
            The inclusion of 'Monthly Regular Income (Potential)' highlights the possibility for investors to receive a monthly income through their partnership with SSV Hospitality Group, making the investment not only a pathway to a green card or business success but also a source of steady revenue.
          </p>

          <div className="eb5-comparison-table">
            <div className="eb5-table-header">
              <div className="eb5-table-cell eb5-table-cell-comparison">COMPARISON</div>
              <div className="eb5-table-cell eb5-table-cell-other">OTHER EB-5 COMPANIES</div>
              <div className="eb5-table-gap"></div>
              <div className="eb5-table-cell eb5-table-cell-ssv">SSV HOSPITALITY GROUP</div>
            </div>

            <div className="eb5-table-row">
              <div className="eb5-table-cell eb5-table-cell-comparison">INVESTMENT IN NON-PARTICIPATING COMPANIES</div>
              <div className="eb5-table-cell eb5-table-cell-other">
                <i className="fas fa-times eb5-icon-red"></i>
                <span>INVESTORS MAY INVEST IN COMPANIES THAT ARE NOT DIRECTLY ASSOCIATED WITH THE EB-5 REGIONAL CENTER.</span>
              </div>
              <div className="eb5-table-gap"></div>
              <div className="eb5-table-cell eb5-table-cell-ssv">
                <i className="fas fa-check eb5-icon-green"></i>
                <span>YOU INVEST DIRECTLY IN SSV HOSPITALITY GROUP VENTURES.</span>
              </div>
            </div>

            <div className="eb5-table-row">
              <div className="eb5-table-cell eb5-table-cell-comparison">SECURITY OF FUNDS</div>
              <div className="eb5-table-cell eb5-table-cell-other">
                <i className="fas fa-times eb5-icon-red"></i>
                <span>MANY INVESTORS FACE INSECURITY WITH THEIR FUNDS, AND SOME MAY NOT GET THEIR MONEY BACK AFTER THE PROCESS.</span>
              </div>
              <div className="eb5-table-gap"></div>
              <div className="eb5-table-cell eb5-table-cell-ssv">
                <i className="fas fa-check eb5-icon-green"></i>
                <span>SSV PRIORITIZES THE SAFETY AND SECURITY OF INVESTORS' FUNDS.</span>
              </div>
            </div>

            <div className="eb5-table-row">
              <div className="eb5-table-cell eb5-table-cell-comparison">PARTNERSHIP STATUS</div>
              <div className="eb5-table-cell eb5-table-cell-other">
                <i className="fas fa-times eb5-icon-red"></i>
                <span>INVESTORS MAY NOT HAVE A TRUE PARTNERSHIP STATUS ON PAPER WITH THE COMPANY THEY INVEST IN.</span>
              </div>
              <div className="eb5-table-gap"></div>
              <div className="eb5-table-cell eb5-table-cell-ssv">
                <i className="fas fa-check eb5-icon-green"></i>
                <span>SSV OFFERS GENUINE PARTNERSHIP STATUS ON PAPER.</span>
              </div>
            </div>

            <div className="eb5-table-row">
              <div className="eb5-table-cell eb5-table-cell-comparison">TRANSPARENCY & BUSINESS CONTROL</div>
              <div className="eb5-table-cell eb5-table-cell-other">
                <i className="fas fa-times eb5-icon-red"></i>
                <span>SOME COMPANIES MAY LACK TRANSPARENCY, AND INVESTORS MAY HAVE LIMITED CONTROL OVER THE BUSINESS.</span>
              </div>
              <div className="eb5-table-gap"></div>
              <div className="eb5-table-cell eb5-table-cell-ssv">
                <i className="fas fa-check eb5-icon-green"></i>
                <span>SSV ENSURES TRANSPARENCY AND PROVIDES INVESTORS WITH CONTROL OVER THEIR INVESTMENT.</span>
              </div>
            </div>

            <div className="eb5-table-row">
              <div className="eb5-table-cell eb5-table-cell-comparison">MONTHLY RECURRING INCOME</div>
              <div className="eb5-table-cell eb5-table-cell-other">
                <i className="fas fa-times eb5-icon-red"></i>
                <span>NOT ALL EB-5 OPPORTUNITIES OFFER THE POTENTIAL FOR REGULAR MONTHLY INCOME.</span>
              </div>
              <div className="eb5-table-gap"></div>
              <div className="eb5-table-cell eb5-table-cell-ssv">
                <i className="fas fa-check eb5-icon-green"></i>
                <span>SSV OFFERS THE POSSIBILITY OF MONTHLY RECURRING INCOME.</span>
              </div>
            </div>

            <div className="eb5-table-row">
              <div className="eb5-table-cell eb5-table-cell-comparison">EXIT STRATEGY</div>
              <div className="eb5-table-cell eb5-table-cell-other">
                <i className="fas fa-times eb5-icon-red"></i>
                <span>SOME COMPANIES MAY NOT HAVE A CLEAR EXIT STRATEGY FOR INVESTORS.</span>
              </div>
              <div className="eb5-table-gap"></div>
              <div className="eb5-table-cell eb5-table-cell-ssv">
                <i className="fas fa-check eb5-icon-green"></i>
                <span>SSV PROVIDES A WELL-DEFINED AND FAVORABLE EXIT STRATEGY.</span>
              </div>
            </div>

            <div className="eb5-table-row">
              <div className="eb5-table-cell eb5-table-cell-comparison">EXPERT LEGAL TEAM SUPPORT</div>
              <div className="eb5-table-cell eb5-table-cell-other">
                <i className="fas fa-times eb5-icon-red"></i>
                <span>THE QUALITY AND EXPERTISE OF THE LEGAL TEAM MAY VARY AMONG COMPANIES.</span>
              </div>
              <div className="eb5-table-gap"></div>
              <div className="eb5-table-cell eb5-table-cell-ssv">
                <i className="fas fa-check eb5-icon-green"></i>
                <span>SSV BOASTS AN EXPERT LEGAL TEAM TO GUIDE INVESTORS THROUGHOUT THE PROCESS.</span>
              </div>
            </div>
          </div>

          <p className="eb5-why-ssv-conclusion">
            By investing with SSV Hospitality Group, you can experience a unique and investor-friendly approach that emphasizes transparency, genuine partnership status, security of funds, monthly recurring income potential, and a clear exit strategy. The expert legal team at SSV ensures that you are guided seamlessly through the EB-5 investment process, providing you with a truly rewarding and successful experience.
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="eb5-faq">
        <div className="eb5-faq-container">
          <h2 className="eb5-faq-title">FREQUENTLY ASKED QUESTIONS</h2>
          
          <div className="eb5-faq-list">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`eb5-faq-item ${openFaq === index ? 'open' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="eb5-faq-question">
                  <span>{faq.question}</span>
                  <i className={`fas fa-chevron-down eb5-faq-chevron ${openFaq === index ? 'open' : ''}`}></i>
                </div>
                {openFaq === index && (
                  <div className="eb5-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EB5Program;
