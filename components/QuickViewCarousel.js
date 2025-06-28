"use client"
import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import screen from '@/public/quick-view-2.png';
const screens = [screen, screen, screen, screen, screen, screen, screen, screen, screen, screen];

const QuickViewCarousel = () => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const x = useMotionValue(0);
    const [constraints, setConstraints] = useState({ left: 0, right: 0 });


    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;

        if (container && track) {
            const containerWidth = container.offsetWidth;
            const scrollWidth = track.scrollWidth;

            const maxDrag = scrollWidth - containerWidth;
            setConstraints({ left: -maxDrag, right: 0 });
        }
    }, []);

    const scrollTo = (direction) => {
        const container = containerRef.current;
        const track = trackRef.current;

        if (!container || !track) return;

        const containerWidth = container.offsetWidth;
        const scrollWidth = track.scrollWidth;
        const maxDrag = scrollWidth - containerWidth;

        const scrollAmount = containerWidth / 1.5;
        const currentX = x.get();
        let newX = direction === 'left' ? currentX + scrollAmount : currentX - scrollAmount;

        // Clamp
        newX = Math.max(-maxDrag, Math.min(0, newX));

        animate(x, newX, {
            type: 'spring',
            stiffness: 300,
            damping: 30,
        });
    };

    return (
        <div className="relative overflow-hidden w-full py-20" ref={containerRef}>
            {/* Arrows */}
            <button
                onClick={() => scrollTo('left')}
                className="absolute z-10 left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
                onClick={() => scrollTo('right')}
                className="absolute z-10 right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>

            {/* Carousel */}
            <motion.div
                ref={trackRef}
                className="flex gap-8 px-10 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={constraints}
                style={{ x }}
            >
                {screens.map((img, idx) => (
                    <motion.div
                        key={idx}
                        className="min-w-[150px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] rounded-xl overflow-hidden shadow-lg bg-white"
                        whileTap={{ scale: 0.98 }}
                    >
                        <Image
                            draggable={false}
                            src={img}
                            width={320}
                            height={574}
                            alt={`screen-${idx}`}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};


export default QuickViewCarousel
