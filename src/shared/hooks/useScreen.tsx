import { useState, useEffect } from 'react';

interface ScreenSize {
    isMobile: boolean;
    isTablet: boolean;
    isLaptop: boolean;
    isLarger: boolean;
}

const useScreenSize = (): ScreenSize => {
    const [screenSize, setScreenSize] = useState<ScreenSize>({
        isMobile: window.innerWidth <= 767,
        isTablet: window.innerWidth >= 768 && window.innerWidth <= 1023,
        isLaptop: window.innerWidth >= 1024 && window.innerWidth <= 1279,
        isLarger: window.innerWidth >= 1280,
    });

    useEffect(() => {
        const handleResize = () => {
            const { innerWidth } = window;
            setScreenSize({
                isMobile: innerWidth <= 767,
                isTablet: innerWidth >= 768 && innerWidth <= 1023,
                isLaptop: innerWidth >= 1024 && innerWidth <= 1279,
                isLarger: innerWidth >= 1280,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return screenSize;
};

export default useScreenSize;

