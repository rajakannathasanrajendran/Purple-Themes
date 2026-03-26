import { useEffect, useRef } from 'react';
import './Stats.css';

export default function StatsSection() {
    const countersRef = useRef([]);
    const observerRef = useRef(null);

    const statsData = [
        { icon: "fas fa-users", target: 1000, label: "Happy Clients" },
        { icon: "fas fa-utensils", target: 90, label: "No Of Foods" },
        { icon: "fas fa-concierge-bell", target: 20, label: "Expert Chefs" },
        { icon: "fas fa-trophy", target: 3, label: "Awards" },
    ];

    useEffect(() => {
        const updateCounter = (counter) => {
            const target = +counter.getAttribute("data-target");
            const increment = Math.max(target / 50, 1);
            let count = 0;

            const update = () => {
                count += increment;
                if (count < target) {
                    counter.innerText = Math.min(Math.ceil(count), target);
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = `${target}+`;
                }
            };
            update();
        };

        observerRef.current = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const counter = entry.target;
                        updateCounter(counter);
                        observer.unobserve(counter);
                    }
                });
            },
            { threshold: 0.5 }
        );

        countersRef.current.forEach((counter) => {
            if (counter) observerRef.current.observe(counter);
        });

        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <section className="stats-wrapper">
            <div className="container">
                <div className="stats-container">
                    <h2 className="section-title">Signature Specialties</h2>
                    <h6 className="section-subtitle mb-4">
                        A curated selection of our finest and most popular creations
                    </h6>
                    <div className="row justify-content-center">
                        {statsData.map((item, index) => (
                            <div
                                key={index}
                                className="col-12 col-sm-6 col-xl-3 text-center mb-4 px-2"
                            >
                                <div className="stats-box">
                                    <div className="icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="stats">
                                        <h3
                                            className="stats-count"
                                            data-target={item.target}
                                            ref={(el) => (countersRef.current[index] = el)}
                                        >
                                            0
                                        </h3>
                                        <p>{item.label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
