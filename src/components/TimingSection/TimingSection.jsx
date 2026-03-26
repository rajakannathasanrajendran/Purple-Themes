import React from 'react';
import './TimingSection.css';

const TimingSection = () => {
    return (
        <div className="timing-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 order-1">
                        <div className="timing-section__about">
                            <h2 className="timing-section__heading">
                                Tradition Served Fresh<span className="timing-section__heading--highlight"></span>
                            </h2>
                            <p className="timing-section__quote">
                                Whilst it is true that man cannot live without air and water, the thing that nourishes the body is food. Hence the saying, food is life.
                            </p>
                            <h3 className="timing-section__subheading">
                                Malgudi Garden offers delicious dining and takeout to PLANO, TX.
                            </h3>
                            <p className="timing-section__description">
                                Whether you want to become unknown you or simply feed your appetite, don't look further or farther than Malgudi Garden. A family oriented, classy, pure Vegetarian restaurant brought to you by MK Gandhi's group. Feel the difference the moment you walk in with a serene ambience and pleasing service. Our ingredients are carefully chosen and expertly made to whet your appetite and keep your body happy. Come, visit the difference!
                            </p>
                            <a href="https://customerappbeta.web.app/restaurant/malgudi-garden-plano/menu/Pickup" target="_blank" rel="noopener noreferrer" className='btn'><i className="animation"></i><i className="fa-solid fa-cart-shopping"></i>Order Online<i className="animation"></i></a>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 order-2">
                        <div className="timing-section__hours">
                            <h2 className="timing-section__hours-heading">
                                OPENING HOURS<span className="timing-section__hours-heading--highlight"></span>
                            </h2>

                            <div className="timing-section__day timing-section__day--closed">
                                <h4 className="timing-section__day-name">Monday</h4>
                                <p className="timing-section__time">
                                    <span className="timing-section__meal">Lunch -</span> 11:30am to 3:00pm,
                                    <span className="timing-section__break"></span>
                                    <span className="timing-section__meal"> Dinner -</span> 6:00pm to 9:30pm
                                </p>
                            </div>

                            <div className="timing-section__day">
                                <h4 className="timing-section__day-name">Tuesday - Thursday</h4>
                                <p className="timing-section__time">
                                    <span className="timing-section__meal">Lunch -</span> 11:30am to 3:00pm,
                                    <span className="timing-section__break"></span>
                                    <span className="timing-section__meal"> Dinner -</span> 6:00pm to 9:30pm
                                </p>
                            </div>

                            <div className="timing-section__day">
                                <h4 className="timing-section__day-name">Friday</h4>
                                <p className="timing-section__time">
                                    <span className="timing-section__meal">Lunch -</span> 11:30am to 3:00pm,
                                    <span className="timing-section__break"></span>
                                    <span className="timing-section__meal"> Dinner -</span> 6:00pm to 10:00pm
                                </p>
                            </div>

                            <div className="timing-section__day">
                                <h4 className="timing-section__day-name">Saturday</h4>
                                <p className="timing-section__time">
                                    <span className="timing-section__meal">Lunch -</span> 12:00pm to 3:30pm,
                                    <span className="timing-section__break"></span>
                                    <span className="timing-section__meal"> Dinner -</span> 6:00pm to 10:00pm
                                </p>
                            </div>

                            <div className="timing-section__day">
                                <h4 className="timing-section__day-name">Sunday</h4>
                                <p className="timing-section__time">
                                    <span className="timing-section__meal">Lunch -</span> 12:00pm to 3:30pm,
                                    <span className="timing-section__break"></span>
                                    <span className="timing-section__meal"> Dinner -</span> 6:00pm to 9:30pm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimingSection;