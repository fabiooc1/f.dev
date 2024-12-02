import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type CarouselProps = {
    children: ReactNode;
};

export function Carousel({ children }: CarouselProps) {
    const carouselContainerRef = useRef<HTMLDivElement | null>(null);
    const [carouselWidth, setCarouselWidth] = useState<number>(0);

    function updateCarouselWidth() {
        const containerWidth = carouselContainerRef.current?.offsetWidth;
        const totalWidth = carouselContainerRef.current?.scrollWidth;

        if (containerWidth && totalWidth) {
            setCarouselWidth(totalWidth - containerWidth);
        }
    }

    useEffect(() => {
        updateCarouselWidth();
        window.addEventListener('resize', updateCarouselWidth);
    }, []);

    return (
        <div
            ref={carouselContainerRef}
            className="overflow-hidden py-4 cursor-grab"
        >
            <motion.div
                className="flex gap-8 mobile:gap-4"
                drag="x"
                dragConstraints={{
                    right: 0,
                    left: -carouselWidth,
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
