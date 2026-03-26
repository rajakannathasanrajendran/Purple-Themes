import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (sectionIds) => {
    const [activeSection, setActiveSection] = useState('home');
    const observerRef = useRef(null);

    useEffect(() => {
        // Create intersection observer
        observerRef.current = new IntersectionObserver(
            (entries) => {
                // Find the section that's most visible
                let mostVisible = null;
                let maxRatio = 0;

                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                        maxRatio = entry.intersectionRatio;
                        mostVisible = entry.target.id;
                    }
                });

                if (mostVisible) {
                    setActiveSection(mostVisible);
                }
            },
            {
                root: null,
                rootMargin: '-10% 0px -10% 0px', // Trigger when section is 10% from top and bottom
                threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9] // More granular thresholds
            }
        );

        // Observe all sections
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element && observerRef.current) {
                observerRef.current.observe(element);
            }
        });

        // Handle scroll to detect when user is at top (home section)
        const handleScroll = () => {
            if (window.scrollY < 100) {
                setActiveSection('home');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionIds]);

    return activeSection;
};

export default useIntersectionObserver;
