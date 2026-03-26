import React, { useEffect, useMemo, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
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
// import coming10 from '../../assets/home/coming-soon-10.png';


import '../Home/Home.css';
import './Location.css';

const Location = () => {
  const [locationSearch, setLocationSearch] = useState('');
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifySubmitted, setNotifySubmitted] = useState(false);
  const [notifyLocation, setNotifyLocation] = useState('');
  const [highlightCardId, setHighlightCardId] = useState('');
  const searchInputRef = useRef(null);
  const lastAutoScrollRef = useRef({ q: '', id: '' });

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

  useEffect(() => {
    if (notifyOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
    return undefined;
  }, [notifyOpen]);

  const comingSoonCards = [
    {
      image: coming1,
      city: 'Los Vegas, NV',
      address: 'Harmon Center Las Vegas\nBld Suite 325, Las Vegas, NV\n89109',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: coming2,
      city: 'Alpharetta, GA',
      address: '1030 Medlock Bridge Road,\nJohns Creek, GA 30097',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: coming3,
      city: 'Tampa, FL',
      address: '19430 Bruce B Downs Blvd,\nTampa, FL 33647',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    
    {
      image: coming5,
      city: 'Dallas, TX',
      address: 'Will notify shortly!',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: coming6,
      city: 'Ashburn VA',
      address: 'Will notify shortly!',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: coming7,
      city: 'Raleigh NC',
      address: 'Will notify shortly!',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: coming8,
      city: 'Jersey City NJ',
      address: 'Will notify shortly!',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: coming9,
      city: 'Kendall Park NJ',
      address: 'Will notify shortly!',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: coming10,
      city: 'Monroe NJ',
      address: 'Will notify shortly!',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
  ];

  const internationalCards = [
    {
      image: international1,
      city: 'Manchester UK',
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
      address: '440 Rayford Rd, Suite # 160,\nThe Woodlands, TX 77386',
      phone: '',
      email: '',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit2,
      city: 'Malvern PA',
      address: '309 Lancaster ave suite C#1\nMalvern PA 19355',
      phone: '484-568-4879',
      email: 'hbk19355@gmail.com',
      tags: ['Dine-In', 'Online Order', 'Free Wifi'],
    },
    {
      image: visit3,
      city: 'Northwales PA',
      address: '111 C Garden Golf blvd,\nNorthwales PA 19454',
      phone: '215-647-3133',
      email: 'hbknorthwales@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi', 'Online Order'],
    },
    {
      image: visit4,
      city: 'Philadelphia PA',
      address: '1726 chestnut st philadelphia\nPA 19103',
      phone: '484-568-4879',
      email: 'hbk19403@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit5,
      city: 'Cherry Hill NJ',
      address: '2091 Marlton Pike east,\ncherry hill NJ 08003',
      phone: '856-229-7160\n856-229-7148',
      email: 'hbk08003@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi', 'Online Order'],
    },
    {
      image: visit6,
      city: 'Dayton NJ',
      address: '484 Georges rd dayton NJ\n08810',
      phone: '732-230-3867',
      email: 'hbkdayton@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi', 'Online Order'],
    },
    {
      image: visit7,
      city: 'Parsippany NJ',
      address: '315 US-46, Denville, NJ\n07834',
      phone: '800-123-456',
      email: 'hbk07834@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit8,
      city: 'Piscataway NJ',
      address: '1372 centennial ave\nPiscataway NJ 08854',
      phone: '732-474-0463\n732-474-0464',
      email: 'hbk08854@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi', 'Online Order'],
    },
    {
      image: visit9,
      city: 'Columbus OH',
      address: '1047 polaris pkwy columbus\nOH 43240',
      phone: '614-505-1087\n614-505-1088',
      email: 'hbkcolumbus9@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi', 'Online Order'],
    },
    {
      image: visit10,
      city: 'Newark DE',
      address: '1126 Capitol Tr D, Newark, DE\n19711',
      phone: '302-725-3910',
      email: 'hbk19403@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit11,
      city: 'Princeton NJ',
      address: '3349 Brunswick Pike #66,\nLawrenceville, NJ 08648',
      phone: '609-212-2761',
      email: 'hbk19403@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit12,
      city: 'Royersford PA',
      address: '467 W Ridge Pike,\nRoyersford, PA 19468',
      phone: '484-369-8600',
      email: 'hbk19403@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit13,
      city: 'Pottstown PA',
      address: '1642 W High St, Stowe, PA\n19464',
      phone: '(484)300-4435',
      email: 'hbkcentral7@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit14,
      city: 'Hillsborough NJ',
      address: '340 S Branch Rd 424, #426,\nHillsborough Township, NJ\n08844',
      phone: '908-681-5053',
      email: 'hbk19403@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit15,
      city: 'Exton, PA',
      address: '8 E Welsh Pool Rd, Exton, PA\n19341',
      phone: '484-879-8070',
      email: 'hbk19403@gmail.com',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: visit16,
      city: 'Glassboro NJ',
      address: '222 Rowan Blvd, Glassboro,\nNJ 08028, United States',
      phone: '+18562432819',
      email: '',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
    {
      image: coming4,
      city: 'Oak Tree Road, NJ',
      address: '1163 Green St, Iselin, NJ\n08830',
      note: 'Will notify shortly!',
      tags: ['Dine-In', 'Free Parking', 'Free Wifi'],
    },
  ];

  const filteredVisitCards = useMemo(() => {
    const q = locationSearch.trim().toLowerCase();
    if (!q) return visitCards;

    return visitCards.filter((c) => {
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
  }, [locationSearch, visitCards]);

  const filteredInternationalCards = useMemo(() => {
    const q = locationSearch.trim().toLowerCase();
    if (!q) return internationalCards;

    return internationalCards.filter((c) => {
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
  }, [locationSearch, internationalCards]);

  const filteredComingSoonCards = useMemo(() => {
    const q = locationSearch.trim().toLowerCase();
    if (!q) return comingSoonCards;

    return comingSoonCards.filter((c) => {
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
  }, [locationSearch, comingSoonCards]);

  const hasSearch = Boolean(locationSearch.trim());
  const hasNoResults =
    hasSearch &&
    filteredVisitCards.length === 0 &&
    filteredInternationalCards.length === 0 &&
    filteredComingSoonCards.length === 0;

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

  return (
    <div className="location-page">
      <section className="location-hero">
        <Header />
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
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Filters
            </button>
            <div className="search-bar">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 19L14.65 14.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
          {hasNoResults ? <p className="visit-empty">No results found.</p> : null}
        </div>
      </section>

      {/* Visit Us */}
      <section className="visit-section" id="visit-us">
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
        style={locationSearch.trim() && filteredInternationalCards.length === 0 ? { display: 'none' } : undefined}
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
        style={locationSearch.trim() && filteredComingSoonCards.length === 0 ? { display: 'none' } : undefined}
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

     
      <Footer />
    </div>
  );
};

export default Location;
