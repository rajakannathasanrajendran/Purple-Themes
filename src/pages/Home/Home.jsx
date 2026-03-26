import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import halal from '../../assets/home/halal.png';
import location30 from '../../assets/home/30-plus.png';
import visit1 from '../../assets/home/visit-1.webp';
import visit2 from '../../assets/home/visit-2.webp';
import visit3 from '../../assets/home/visit-3.webp';
import visit4 from '../../assets/home/visit-4.webp';
import visit5 from '../../assets/home/visit-5.webp';
import visit6 from '../../assets/home/visit-6.webp';
import visit7 from '../../assets/home/visit-7.webp';
import visit8 from '../../assets/home/visit-8.webp';
import visit9 from '../../assets/home/visit-9.webp';
import visit10 from '../../assets/home/visit-10.webp';
import visit11 from '../../assets/home/visit-11.webp';
import visit12 from '../../assets/home/c3.webp';
import visit13 from '../../assets/home/visit-13.webp';
import visit14 from '../../assets/home/visit-14.webp';
import visit15 from '../../assets/home/c2.webp';
import visit16 from '../../assets/home/visit-16.jpg';
import international1 from '../../assets/home/location.webp';
import coming1 from '../../assets/home/coming-soon-1.png';
import coming2 from '../../assets/home/coming-soon-2.png';
import coming3 from '../../assets/home/coming-soon-3.png';
import coming4 from '../../assets/home/c1.webp';
import coming5 from '../../assets/home/coming-soon-5.png';
import coming6 from '../../assets/home/coming-soon-6.png';
import coming7 from '../../assets/home/coming-soon-7.png';
import coming8 from '../../assets/home/coming-soon-8.png';
import coming9 from '../../assets/home/coming-soon-9.png';
import coming10 from '../../assets/home/coming-soon-10.png';
import biriyaniImg from '../../assets/home/biriyani.png';
import kebabImg from '../../assets/home/kebab.png';
import soupImg from '../../assets/home/soup.png';
import dessertsImg from '../../assets/home/desserts.png';
import gallery1 from '../../assets/home/gallery-1.png';
import gallery2 from '../../assets/home/gallery-2.png';
import gallery3 from '../../assets/home/gallery-3.png';
import gallery4 from '../../assets/home/gallery-4.png';
import gallery5 from '../../assets/home/gallery-5.png';
import gallery6 from '../../assets/home/gallery-6.png';
import gallery7 from '../../assets/home/gallery-7.png';
import brand1 from '../../assets/home/brand-1.png';
import brand2 from '../../assets/home/brand-2.png';
import brand3 from '../../assets/home/brand-3.png';
import brand4 from '../../assets/home/brand-4.png';
import brand5 from '../../assets/home/brand-5.png';
import brand6 from '../../assets/home/brand-6.png';

const Home = () => {
  const [locationSearch, setLocationSearch] = useState('');
  const [highlightCardId, setHighlightCardId] = useState('');
  const [stateFilter, setStateFilter] = useState('All Locations');
  const [filterScrollbar, setFilterScrollbar] = useState({
    show: false,
    left: 0,
    width: 32,
    canScrollLeft: false,
    canScrollRight: false,
  });
  const searchInputRef = useRef(null);
  const filterScrollRef = useRef(null);
  const lastAutoScrollRef = useRef({ q: '', id: '' });
  const navigate = useNavigate();

  const stateFilters = [
    'All Locations',
    'Texas',
    'Pennsylvania',
    'New Jersey',
    'Ohio',
    'Delaware',
    'Manchester',
    'Nevada',
    'Georgia',
    'Florida',
    'Virginia',
    'North Carolina',
  ];

  const toCardId = (city) =>
    `visit-card-${String(city)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')}`;

  const handleGetDirections = (address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

  const handleCall = (phoneNumber) => {
    if (!phoneNumber) return;
    const numberToCall = phoneNumber.split('\n')[0];
    window.location.href = `tel:${numberToCall}`;
  };

  const biriyaniKebabCards = [
    {
      type: 'text',
      title: 'Our Culinary Heritage!',
      body:
        "HBK stays true to its roots by preserving the traditional recipes and culinary heritage passed down through generations. Our experienced chefs expertly blend aromatic spices and handpicked ingredients to create biryanis and kebabs that transport you to the vibrant streets of India.",
    },
    { type: 'image', title: 'Signature HBK Biriyani', image: biriyaniImg },
    {
      type: 'text',
      title: 'Customer-Centric Approach',
      body:
        'Our unwavering commitment to customer satisfaction has been the driving force behind our success. We believe that every guest should leave our restaurant with a smile and the desire to return. With attentive service and attention to detail, we ensure that your dining experience at HBK is nothing short of delightful.',
    },
    {
      type: 'text',
      title: 'Continuous Growth',
      body:
        "HBK's success story continues to grow, with new locations opening regularly to meet the increasing demand for our mouthwatering biryanis and kebabs. We are dedicated to reaching even more corners of America, sharing our passion for Indian cuisine with an ever-widening audience.",
    },
    {
      type: 'text',
      title: 'Quality Ingredients',
      body:
        'At HBK, we never compromise on the quality of ingredients. We source the freshest produce, premium meats, and the finest long-grain basmati rice to maintain the authenticity and superior taste of our dishes.',
    },
    { type: 'image', title: 'Chef-Crafted Kebabs', image: kebabImg },
    { type: 'image', title: 'Diverse Menu for Every Taste', image: soupImg },
    {
      type: 'text',
      title: 'Join Our Journey',
      body:
        "As HBK expands its wings all over America, we invite you to be a part of our culinary journey. Whether you're a loyal patron or a newcomer eager to explore new tastes, we promise to deliver an exceptional dining experience that will keep you coming back for more.",
    },
    {
      type: 'text',
      title: 'Community Involvement',
      body:
        'As we expand our presence, we are committed to becoming an integral part of the communities we serve. Engaging with local initiatives, supporting charitable causes, and promoting cultural exchanges are essential elements of our community involvement.',
    },
    {
      type: 'text',
      title: 'Catering to Diverse Tastes',
      body:
        "From carnivores to vegetarians, HBK has a diverse menu that caters to different tastes and dietary preferences. Whether you're a fan of spicy flavors or prefer mild delicacies, our extensive menu has something to suit your cravings.",
    },
    { type: 'image', title: 'Classic Desserts with a Modern Twist', image: dessertsImg },
    {
      type: 'text',
      title: 'Innovation and Creativity',
      body:
        'While we cherish our traditional roots, we also embrace innovation and creativity. Our menu boasts a perfect blend of classic favorites and unique fusion creations, providing something for every palate.',
    },
  ];

  const comingSoonCards = [
    {
      image: coming1,
      city: 'Los Vegas, NV',
      state: 'Nevada',
      address: 'Harmon Center Las Vegas\nBld Suite 325, Las Vegas, NV\n89109',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: coming2,
      city: 'Alpharetta, GA',
      state: 'Georgia',
      address: '1030 Medlock Bridge Road,\nJohns Creek, GA 30097',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: coming3,
      city: 'Tampa, FL',
      state: 'Florida',
      address: '19430 Bruce B Downs Blvd,\nTampa, FL 33647',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: coming5,
      city: 'Dallas, TX',
      state: 'Texas',
      address: 'Will notify shortly!',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: coming6,
      city: 'Ashburn VA',
      state: 'Virginia',
      address: 'Will notify shortly!',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: coming7,
      city: 'Raleigh NC',
      state: 'North Carolina',
      address: 'Will notify shortly!',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: coming8,
      city: 'Jersey City NJ',
      state: 'New Jersey',
      address: 'Will notify shortly!',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: coming9,
      city: 'Kendall Park NJ',
      state: 'New Jersey',
      address: 'Will notify shortly!',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: coming10,
      city: 'Monroe NJ',
      state: 'New Jersey',
      address: 'Will notify shortly!',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
  ];

  const internationalCards = [
    {
      image: international1,
      city: 'Manchester UK',
      state: 'Manchester',
      address: '336 Manchester Rd, West Timperley, Altrincham WA14 5NH',
      phone: '0161 973 9222\n+44 7713 889145\n+44 7825 876534',
      email: 'hbkmanchester@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
  ];

  const visitCards = [
    {
      image: visit1,
      city: 'Houston TX',
      state: 'Texas',
      address: '440 Rayford Rd, Suite # 160,\nThe Woodlands, TX 77386',
      phone: '',
      email: '',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit2,
      city: 'Malvern PA',
      state: 'Pennsylvania',
      address: '309 Lancaster ave suite C#1\nMalvern PA 19355',
      phone: '484-568-4879',
      email: 'hbk19355@gmail.com',
      tags: ['Dine-In', 'Online Order', 'Free Wifi'],
    },
    {
      image: visit3,
      city: 'Northwales PA',
      state: 'Pennsylvania',
      address: '111 C Garden Golf blvd,\nNorthwales PA 19454',
      phone: '215-647-3133',
      email: 'hbknorthwales@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi', 'Online Order'],
    },
    {
      image: visit4,
      city: 'Philadelphia PA',
      state: 'Pennsylvania',
      address: '1726 chestnut st philadelphia\nPA 19103',
      phone: '484-568-4879',
      email: 'hbk19403@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit5,
      city: 'Cherry Hill NJ',
      state: 'New Jersey',
      address: '2091 Marlton Pike east,\ncherry hill NJ 08003',
      phone: '856-229-7160\n856-229-7148',
      email: 'hbk08003@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi', 'Online Order'],
    },
    {
      image: visit6,
      city: 'Dayton NJ',
      state: 'New Jersey',
      address: '484 Georges rd dayton NJ\n08810',
      phone: '732-230-3867',
      email: 'hbkdayton@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi', 'Online Order'],
    },
    {
      image: visit7,
      city: 'Parsippany NJ',
      state: 'New Jersey',
      address: '315 US-46, Denville, NJ\n07834',
      phone: '800-123-456',
      email: 'hbk07834@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit8,
      city: 'Piscataway NJ',
      state: 'New Jersey',
      address: '1372 centennial ave\nPiscataway NJ 08854',
      phone: '732-474-0463\n732-474-0464',
      email: 'hbk08854@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi', 'Online Order'],
    },
    {
      image: visit9,
      city: 'Columbus OH',
      state: 'Ohio',
      address: '1047 polaris pkwy columbus\nOH 43240',
      phone: '614-505-1087\n614-505-1088',
      email: 'hbkcolumbus9@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi', 'Online Order'],
    },
    {
      image: visit10,
      city: 'Newark DE',
      state: 'Delaware',
      address: '1126 Capitol Tr D, Newark, DE\n19711',
      phone: '302-725-3910',
      email: 'hbk19403@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit11,
      city: 'Princeton NJ',
      state: 'New Jersey',
      address: '3349 Brunswick Pike #66,\nLawrenceville, NJ 08648',
      phone: '609-212-2761',
      email: 'hbk19403@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit12,
      city: 'Royersford PA',
      state: 'Pennsylvania',
      address: '467 W Ridge Pike,\nRoyersford, PA 19468',
      phone: '484-369-8600',
      email: 'hbk19403@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit13,
      city: 'Pottstown PA',
      state: 'Pennsylvania',
      address: '1642 W High St, Stowe, PA\n19464',
      phone: '(484)300-4435',
      email: 'hbkcentral7@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit14,
      city: 'Hillsborough NJ',
      state: 'New Jersey',
      address: '340 S Branch Rd 424, #426,\nHillsborough Township, NJ\n08844',
      phone: '908-681-5053',
      email: 'hbk19403@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit15,
      city: 'Exton, PA',
      state: 'Pennsylvania',
      address: '8 E Welsh Pool Rd, Exton, PA\n19341',
      phone: '484-879-8070',
      email: 'hbk19403@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: coming4,
      city: 'Oak Tree Road, NJ',
      state: 'New Jersey',
      address: '1163 Green St, Iselin, NJ\n08830',
      phone: '',
      email: '',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit16,
      city: 'Glassboro NJ',
      state: 'New Jersey',
      address: '222 Rowan Blvd, Glassboro,\nNJ 08028, United States',
      mapUrl: 'https://maps.app.goo.gl/3BCBcxfdJADjWmYVA',
      phone: '+18562432819',
      email: '',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    
  ];

  const filteredVisitCards = useMemo(() => {
    let cards = visitCards;

    // Filter by state
    if (stateFilter !== 'All Locations') {
      cards = cards.filter((c) => c.state === stateFilter);
    }

    // Filter by search query
    const q = locationSearch.trim().toLowerCase();
    if (!q) return cards;

    return cards.filter((c) => {
      const haystack = [
        c.city,
        c.address,
        c.email ?? '',
        c.phone ?? '',
        c.note ?? '',
        ...(c.tags ?? []),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [locationSearch, stateFilter, visitCards]);

  const filteredInternationalCards = useMemo(() => {
    let cards = internationalCards;
    if (stateFilter !== 'All Locations') {
      cards = cards.filter((c) => c.state === stateFilter);
    }

    const q = locationSearch.trim().toLowerCase();
    if (!q) return cards;

    return cards.filter((c) => {
      const haystack = [
        c.city,
        c.address,
        c.email ?? '',
        c.phone ?? '',
        c.note ?? '',
        ...(c.tags ?? []),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [locationSearch, stateFilter, internationalCards]);

  const filteredComingSoonCards = useMemo(() => {
    let cards = comingSoonCards;
    if (stateFilter !== 'All Locations') {
      cards = cards.filter((c) => c.state === stateFilter);
    }

    const q = locationSearch.trim().toLowerCase();
    if (!q) return cards;

    return cards.filter((c) => {
      const haystack = [
        c.city,
        c.address,
        c.email ?? '',
        c.phone ?? '',
        c.note ?? '',
        ...(c.tags ?? []),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [locationSearch, stateFilter, comingSoonCards]);

  const hasSearchOrFilter = Boolean(locationSearch.trim()) || stateFilter !== 'All Locations';
  const hasNoResults =
    hasSearchOrFilter &&
    filteredVisitCards.length === 0 &&
    filteredInternationalCards.length === 0 &&
    filteredComingSoonCards.length === 0;
  const hideVisitSection = hasSearchOrFilter && filteredVisitCards.length === 0;

  useEffect(() => {
    const el = filterScrollRef.current;
    if (!el) return;

    let raf = null;
    const updateScrollbar = () => {
      const scrollWidth = el.scrollWidth;
      const clientWidth = el.clientWidth;
      const maxScroll = Math.max(scrollWidth - clientWidth, 0);
      const hasOverflow = scrollWidth - clientWidth > 1;

      if (!hasOverflow) {
        setFilterScrollbar((prev) =>
          prev.show || prev.canScrollLeft || prev.canScrollRight
            ? {
                show: false,
                left: 0,
                width: 32,
                canScrollLeft: false,
                canScrollRight: false,
              }
            : prev
        );
        return;
      }

      const width = Math.min(100, Math.max(20, (clientWidth / scrollWidth) * 100));
      const maxLeft = 100 - width;
      const left =
        maxScroll > 0 ? (el.scrollLeft / maxScroll) * maxLeft : 0;

      const canScrollLeft = el.scrollLeft > 2;
      const canScrollRight = el.scrollLeft < maxScroll - 2;

      setFilterScrollbar((prev) => {
        if (
          prev.show &&
          Math.abs(prev.width - width) < 0.2 &&
          Math.abs(prev.left - left) < 0.2 &&
          prev.canScrollLeft === canScrollLeft &&
          prev.canScrollRight === canScrollRight
        ) {
          return prev;
        }
        return { show: true, left, width, canScrollLeft, canScrollRight };
      });
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateScrollbar);
    };

    updateScrollbar();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateScrollbar);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateScrollbar);
    };
  }, [stateFilters.length]);

  // When searching, scroll to the first matching Visit Us card and highlight it
  useEffect(() => {
    const q = locationSearch.trim();
    if (!q) {
      setHighlightCardId('');
      lastAutoScrollRef.current = { q: '', id: '' };
      return;
    }
    if (filteredVisitCards.length === 0) return;

    const targetId = toCardId(filteredVisitCards[0].city);

    // Prevent repeated/jitter scroll to the same card for the same query
    if (
      lastAutoScrollRef.current.q === q.toLowerCase() &&
      lastAutoScrollRef.current.id === targetId
    ) {
      return;
    }
    lastAutoScrollRef.current = { q: q.toLowerCase(), id: targetId };

    setHighlightCardId(targetId);

    // Debounce + scroll with header offset so the card isn't hidden behind the header
    const t1 = setTimeout(() => {
      const el = document.getElementById(targetId);
      if (!el) return;

      const headerEl = document.querySelector('.header');
      const headerH = headerEl ? headerEl.getBoundingClientRect().height : 0;
      const y =
        window.scrollY + el.getBoundingClientRect().top - Math.min(headerH + 24, 220);

      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 250);

    const t2 = setTimeout(() => setHighlightCardId(''), 1600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [locationSearch, filteredVisitCards]);

  const [notifyOpen, setNotifyOpen] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifySubmitted, setNotifySubmitted] = useState(false);
  const [notifyLocation, setNotifyLocation] = useState('');

  useEffect(() => {
    if (notifyOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
    return undefined;
  }, [notifyOpen]);

  const openNotifyModal = (city) => {
    setNotifyLocation(city);
    setNotifyEmail('');
    setNotifySubmitted(false);
    setNotifyOpen(true);
  };

  const closeNotifyModal = () => {
    setNotifyOpen(false);
  };

  const handleNotifySubmit = (event) => {
    event.preventDefault();
    if (!notifyEmail.trim()) return;
    setNotifySubmitted(true);
  };

  return (
    <div className="home">
      <Header />

      {/* home Banner */}
      <section className="home-banner">
        <div className="container">
          <div className="home-banner-content">
            <div className="banner-image-container">
              <img src={halal} alt="halal" className='halal-logo-img' />
              <img src={location30} alt="location30" className='location30-logo-img' />
            </div>

            <h1 className='home-banner-title'>Welcome to <br />
              <span className='home-banner-title-span'> House of Biryanis & Kebabs</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Our Location Section */}
      <section className="location-section">
        <div className="location-container">
          <h2 className="location-heading">OUR LOCATION</h2>
          <p className="location-description">
            Explore the nearest HBK location and experience the magic of biryanis and kebabs.
            Check our website or app for the latest updates on new openings and exciting offers.
          </p>
          <div className="location-controls">
            <button className="filters-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Filters
            </button>
            <div className="search-bar">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 19L14.65 14.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
              />
              {locationSearch.trim() ? (
                <button
                  type="button"
                  className="search-clear"
                  aria-label="Clear search"
                  onClick={() => {
                    setLocationSearch('');
                    searchInputRef.current?.focus();
                  }}
                >
                  ×
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* State Filter Buttons — above Visit Us */}
      <section className="visit-filters-section">
        <div className="visit-filters-container">
          <div className="visit-filters" ref={filterScrollRef}>
            {stateFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`visit-filter-btn${stateFilter === filter ? ' visit-filter-btn--active' : ''}`}
                onClick={() => setStateFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="visit-filters-scroll-hint" aria-hidden="true">
            <span
              className={`visit-filters-scroll-symbol visit-filters-scroll-symbol--left${
                filterScrollbar.canScrollLeft ? ' is-visible' : ''
              }`}
            >
              ‹
            </span>
            <span
              className={`visit-filters-scroll-symbol visit-filters-scroll-symbol--right${
                filterScrollbar.canScrollRight ? ' is-visible' : ''
              }`}
            >
              ›
            </span>
          </div>
          <div
            className={`visit-filters-scrollbar${filterScrollbar.show ? ' is-visible' : ''}`}
            aria-hidden="true"
          >
            <span
              className="visit-filters-scrollbar-thumb"
              style={{
                width: `${filterScrollbar.width}%`,
                left: `${filterScrollbar.left}%`,
              }}
            />
          </div>
          {hasNoResults ? <p className="visit-empty">No results found.</p> : null}
        </div>
      </section>

      {/* Visit Us */}
      <section
        className="visit-section"
        id="visit-us"
        style={hideVisitSection ? { display: 'none' } : undefined}
      >
        <div className="visit-container">
          <h2 className="visit-heading">VISIT US</h2>

          <div className="visit-grid">
            {filteredVisitCards.map((card) => (
              <article
                key={card.city}
                id={toCardId(card.city)}
                className={`visit-card ${highlightCardId === toCardId(card.city) ? 'visit-card--highlight' : ''}`}
              >
                <div className="visit-card-imageWrap">
                  <img className="visit-card-image" src={card.image} alt={card.city} />
                </div>

                <div className="visit-card-body">
                  <h3 className="visit-card-title">{card.city}</h3>

                  <div className="visit-card-info">
                    <div className="visit-card-row">
                      <span className="visit-card-icon" aria-hidden="true">
                        <svg className="visit-iconSvg" viewBox="0 0 24 24">
                          <path d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </span>
                      <p className="visit-card-text">{card.address}</p>
                    </div>

                    {card.email ? (
                      <div className="visit-card-row">
                        <span className="visit-card-icon" aria-hidden="true">
                          <svg className="visit-iconSvg" viewBox="0 0 24 24">
                            <path d="M4 7h16v10H4V7Z" fill="none" stroke="currentColor" strokeWidth="2" />
                            <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <p className="visit-card-text">{card.email}</p>
                      </div>
                    ) : null}

                    {card.phone ? (
                      <div className="visit-card-row">
                        <span className="visit-card-icon" aria-hidden="true">
                          <svg className="visit-iconSvg" viewBox="0 0 24 24">
                            <path d="M22 16.9v3a2 2 0 0 1-2.2 2c-8.8-.6-15.8-7.6-16.4-16.4A2 2 0 0 1 5.4 3h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.8 3a2 2 0 0 1-.5 2.1L9.6 11c1.6 3 4 5.4 7 7l1.2-1.2a2 2 0 0 1 2.1-.5c.9.4 2 .7 3 .8a2 2 0 0 1 1.7 2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <p className="visit-card-text">{card.phone}</p>
                      </div>
                    ) : null}

                    {card.note ? (
                      <div className="visit-card-row">
                        <span className="visit-card-icon" aria-hidden="true">•</span>
                        <p className="visit-card-text">{card.note}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="visit-card-tags">
                    {card.tags.map((t) => (
                      <span key={`${card.city}-${t}`} className="visit-tag">{t}</span>
                    ))}
                  </div>

                  <div className="visit-card-actions">
                    <button
                      className="visit-directionsBtn"
                      type="button"
                      onClick={() => handleGetDirections(card.address)}
                    >
                      <span className="visit-directionsIcon" aria-hidden="true">
                        <svg className="visit-iconSvg visit-iconSvg--dark" viewBox="0 0 24 24">
                          <path d="M22 2 11 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M22 2 15 22l-4-9-9-4 20-7Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                      </span>
                      Get Directions
                    </button>

                    <div className="visit-actionIcons" aria-hidden="true">
                      <button
                        type="button"
                        className="visit-actionIcon"
                        onClick={() => handleCall(card.phone)}
                        style={{ cursor: 'pointer', border: '1px solid rgba(200, 146, 66, 0.35)' }}
                      >
                        <svg className="visit-iconSvg" viewBox="0 0 24 24">
                          <path d="M22 16.9v3a2 2 0 0 1-2.2 2c-8.8-.6-15.8-7.6-16.4-16.4A2 2 0 0 1 5.4 3h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.8 3a2 2 0 0 1-.5 2.1L9.6 11c1.6 3 4 5.4 7 7l1.2-1.2a2 2 0 0 1 2.1-.5c.9.4 2 .7 3 .8a2 2 0 0 1 1.7 2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {hasNoResults ? (
            <p className="visit-empty">No results found.</p>
          ) : null}
        </div>
      </section>

      {/* Our International Location */}
      <section
        className="international-section"
        style={
          (locationSearch.trim() || stateFilter !== 'All Locations') && filteredInternationalCards.length === 0
            ? { display: 'none' }
            : undefined
        }
      >
        <div className="international-container">
          <h2 className="international-heading">OUR INTERNATIONAL LOCATION</h2>

          <div className="international-cardWrap">
            {filteredInternationalCards.map((card) => (
              <article key={card.city} className="visit-card international-card">
              <div className="visit-card-imageWrap">
                  <img className="visit-card-image" src={card.image} alt={card.city} />
              </div>

              <div className="visit-card-body">
                  <h3 className="visit-card-title">{card.city}</h3>

                <div className="visit-card-info">
                  <div className="visit-card-row">
                    <span className="visit-card-icon" aria-hidden="true">
                      <svg className="visit-iconSvg" viewBox="0 0 24 24">
                        <path d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </span>
                      <p className="visit-card-text">{card.address}</p>
                  </div>

                  <div className="visit-card-row">
                    <span className="visit-card-icon" aria-hidden="true">
                      <svg className="visit-iconSvg" viewBox="0 0 24 24">
                        <path d="M4 7h16v10H4V7Z" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                    </span>
                      <p className="visit-card-text">{card.email}</p>
                  </div>

                  <div className="visit-card-row">
                    <span className="visit-card-icon" aria-hidden="true">
                      <svg className="visit-iconSvg" viewBox="0 0 24 24">
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2c-8.8-.6-15.8-7.6-16.4-16.4A2 2 0 0 1 5.4 3h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.8 3a2 2 0 0 1-.5 2.1L9.6 11c1.6 3 4 5.4 7 7l1.2-1.2a2 2 0 0 1 2.1-.5c.9.4 2 .7 3 .8a2 2 0 0 1 1.7 2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                    </span>
                      <p className="visit-card-text">{card.phone}</p>
                  </div>
                </div>

                <div className="visit-card-tags">
                    {card.tags.map((t) => (
                      <span key={`${card.city}-${t}`} className="visit-tag">{t}</span>
                    ))}
                </div>

                <div className="visit-card-actions">
                  <button
                    className="visit-directionsBtn"
                    type="button"
                      onClick={() => handleGetDirections(card.address)}
                  >
                    <span className="visit-directionsIcon" aria-hidden="true">
                      <svg className="visit-iconSvg visit-iconSvg--dark" viewBox="0 0 24 24">
                        <path d="M22 2 11 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M22 2 15 22l-4-9-9-4 20-7Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Get Directions
                  </button>

                  <div className="visit-actionIcons" aria-hidden="true">
                    <button
                      type="button"
                      className="visit-actionIcon"
                        onClick={() => handleCall(card.phone)}
                      style={{ cursor: 'pointer', border: '1px solid rgba(200, 146, 66, 0.35)' }}
                    >
                      <svg className="visit-iconSvg" viewBox="0 0 24 24">
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2c-8.8-.6-15.8-7.6-16.4-16.4A2 2 0 0 1 5.4 3h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.8 3a2 2 0 0 1-.5 2.1L9.6 11c1.6 3 4 5.4 7 7l1.2-1.2a2 2 0 0 1 2.1-.5c.9.4 2 .7 3 .8a2 2 0 0 1 1.7 2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section
        className="coming-section"
        style={
          (locationSearch.trim() || stateFilter !== 'All Locations') && filteredComingSoonCards.length === 0
            ? { display: 'none' }
            : undefined
        }
      >
        <div className="coming-container">
          <h2 className="coming-heading">COMING SOON</h2>

          <div className="visit-grid coming-grid">
            {filteredComingSoonCards.map((card) => (
              <article key={card.city} className="visit-card coming-card">
                <div className="visit-card-imageWrap coming-imageWrap">
                  <span className="coming-pill">COMING SOON</span>
                  <img className="visit-card-image" src={card.image} alt={card.city} />
                </div>

                <div className="visit-card-body">
                  <h3 className="visit-card-title">{card.city}</h3>

                  <div className="visit-card-info">
                    <div className="visit-card-row">
                      <span className="visit-card-icon" aria-hidden="true">
                        <svg className="visit-iconSvg" viewBox="0 0 24 24">
                          <path d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </span>
                      <p className="visit-card-text">{card.address}</p>
                    </div>

                    <div className="visit-card-row">
                      <span className="visit-card-icon" aria-hidden="true">
                        <svg className="visit-iconSvg" viewBox="0 0 24 24">
                          <path d="M22 16.9v3a2 2 0 0 1-2.2 2c-8.8-.6-15.8-7.6-16.4-16.4A2 2 0 0 1 5.4 3h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.8 3a2 2 0 0 1-.5 2.1L9.6 11c1.6 3 4 5.4 7 7l1.2-1.2a2 2 0 0 1 2.1-.5c.9.4 2 .7 3 .8a2 2 0 0 1 1.7 2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <p className="visit-card-text">{card.note}</p>
                    </div>
                  </div>

                  <div className="visit-card-tags">
                    {card.tags.map((t) => (
                      <span key={`${card.city}-${t}`} className="visit-tag">{t}</span>
                    ))}
                  </div>

                  <div className="visit-card-actions">
                    <button
                      className="coming-notifyBtn"
                      type="button"
                      onClick={() => openNotifyModal(card.city)}
                    >
                      <span className="visit-directionsIcon" aria-hidden="true">
                        <svg className="visit-iconSvg visit-iconSvg--dark" viewBox="0 0 24 24">
                          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M13.7 21a2 2 0 0 1-3.4 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </span>
                      Notify Me When Open
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {notifyOpen ? (
        <div className="notify-modal" role="dialog" aria-modal="true" aria-label="Notify me when open">
          <button className="notify-modal-backdrop" type="button" onClick={closeNotifyModal} aria-label="Close" />
          <div className="notify-modal-card">
            <button className="notify-modal-close" type="button" onClick={closeNotifyModal} aria-label="Close">
              ✕
            </button>
            <h3 className="notify-modal-title">Notify Me When Open</h3>
            <p className="notify-modal-subtitle">
              {notifyLocation ? `Get updates for ${notifyLocation}.` : 'Get updates for this location.'}
            </p>

            {!notifySubmitted ? (
              <form className="notify-modal-form" onSubmit={handleNotifySubmit}>
                <label className="notify-modal-label" htmlFor="notify-email">
                  Email
                </label>
                <input
                  id="notify-email"
                  className="notify-modal-input"
                  type="email"
                  placeholder="you@example.com"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  required
                />
                <button className="notify-modal-submit" type="submit">
                  Submit
                </button>
              </form>
            ) : (
              <div className="notify-modal-success">
                We will get email to you shortly!
              </div>
            )}
          </div>
        </div>
      ) : null}

      {/* Biriyani and Kebab */}
      <section className="bk-section">
        <div className="bk-container">


          <div className="bk-grid">
            {biriyaniKebabCards.map((c) => (
              <article key={c.title} className={`bk-card ${c.type === 'image' ? 'bk-card--image' : 'bk-card--text'}`}>
                {c.type === 'image' ? (
                  <>
                    <div className="bk-card-imageWrap">
                      <img className="bk-card-image" src={c.image} alt={c.title} />
                    </div>
                    <div className="bk-card-footer">
                      <div className="bk-card-footerTitle">{c.title}</div>
                    </div>
                  </>
                ) : (
                  <div className="bk-card-body">
                    <div className="bk-card-title">{c.title}</div>
                    <div className="bk-card-text">{c.body}</div>
                    <div className="bk-card-rule" aria-hidden="true" />
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="bk-ctaWrap">
            <button type="button" className="bk-ctaBtn">
              Discover Menu
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="gallery-container">
          <h2 className="gallery-heading">GALLERY</h2>

          <div className="gallery-grid">
            <div className="gallery-tile gallery-tile--1">
              <img src={gallery1} alt="Biryani" className="gallery-img" />
            </div>
            <div className="gallery-tile gallery-tile--2">
              <img src={gallery2} alt="Lamb Chops" className="gallery-img" />
            </div>
            <div className="gallery-tile gallery-tile--3">
              <img src={gallery3} alt="Kebabs" className="gallery-img" />
            </div>
            <div className="gallery-tile gallery-tile--4">
              <img src={gallery4} alt="Dining" className="gallery-img" />
            </div>
            <div className="gallery-tile gallery-tile--5">
              <img src={gallery5} alt="Chicken" className="gallery-img" />
            </div>
            <div className="gallery-tile gallery-tile--6">
              <img src={gallery6} alt="Dessert" className="gallery-img" />
            </div>
            <div className="gallery-tile gallery-tile--7">
              <img src={gallery7} alt="Fish" className="gallery-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands */}
      <section className="brands-section">
        <div className="brands-container">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 className="brands-heading" style={{ margin: 0, cursor: 'pointer' }} onClick={() => { navigate('/our-brands'); window.scrollTo(0, 0); }}>OUR BRANDS</h2>
          </div>

          <div className="brands-grid">
            <div className="brand-card" onClick={() => { navigate('/our-brands'); window.scrollTo(0, 0); }} style={{ cursor: 'pointer' }}>
              <img src={brand1} alt="Brand 1" className="brand-img" />
            </div>
            <div className="brand-card" onClick={() => { navigate('/our-brands'); window.scrollTo(0, 0); }} style={{ cursor: 'pointer' }}>
              <img src={brand2} alt="Brand 2" className="brand-img" />
            </div>
            <div className="brand-card" onClick={() => { navigate('/our-brands'); window.scrollTo(0, 0); }} style={{ cursor: 'pointer' }}>
              <img src={brand3} alt="Brand 3" className="brand-img" />
            </div>
            <div className="brand-card" onClick={() => { navigate('/our-brands'); window.scrollTo(0, 0); }} style={{ cursor: 'pointer' }}>
              <img src={brand4} alt="Brand 4" className="brand-img" />
            </div>
            <div className="brand-card" onClick={() => { navigate('/our-brands'); window.scrollTo(0, 0); }} style={{ cursor: 'pointer' }}>
              <img src={brand5} alt="Brand 5" className="brand-img" />
            </div>
            <div className="brand-card" onClick={() => { navigate('/our-brands'); window.scrollTo(0, 0); }} style={{ cursor: 'pointer' }}>
              <img src={brand6} alt="Brand 6" className="brand-img" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
