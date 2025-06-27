'use client';

import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleUp,
    faAngleDown,
    faGear,
    faRotate,
    faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import HowItWorks from '@/public/how-it-works-device.png';

const carouselData = [
    {
        title: 'How to install ?',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        points: [
            { icon: faGear, title: 'Config your mobile', desc: 'Config description...' },
            { icon: faRotate, title: 'Refresh setup', desc: 'Refresh description...' },
            { icon: faCommentDots, title: 'Chat with your love', desc: 'Chat description...' },
        ],
        image: '/how-it-works-slide1.png',
    },
    {
        title: 'How to install ?',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        points: [
            { icon: faGear, title: 'Config your mobile', desc: 'Config description...' },
            { icon: faRotate, title: 'Refresh setup', desc: 'Refresh description...' },
            { icon: faCommentDots, title: 'Chat with your love', desc: 'Chat description...' },
        ],
        image: '/how-it-works-slide1.png',
    },
    {
        title: 'How to install ?',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        points: [
            { icon: faGear, title: 'Config your mobile', desc: 'Config description...' },
            { icon: faRotate, title: 'Refresh setup', desc: 'Refresh description...' },
            { icon: faCommentDots, title: 'Chat with your love', desc: 'Chat description...' },
        ],
        image: '/how-it-works-slide1.png',
    },
    {
        title: 'How to install ?',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        points: [
            { icon: faGear, title: 'Config your mobile', desc: 'Config description...' },
            { icon: faRotate, title: 'Refresh setup', desc: 'Refresh description...' },
            { icon: faCommentDots, title: 'Chat with your love', desc: 'Chat description...' },
        ],
        image: '/how-it-works-slide1.png',
    },
    // Add more slides if needed
];

const HowItWorksCarousel = () => {
    const x = useMotionValue(0);
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);

    // Dynamically get slide width
    useLayoutEffect(() => {
        if (containerRef.current) {
            setSlideWidth(containerRef.current.offsetWidth);
        }
    }, []);

    const handleDragEnd = (event, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        let newIndex = activeIndex;

        if (offset < -50 || velocity < -300) {
            newIndex = Math.min(activeIndex + 1, carouselData.length - 1);
        } else if (offset > 50 || velocity > 300) {
            newIndex = Math.max(activeIndex - 1, 0);
        }

        const newPosition = -newIndex * slideWidth;
        animate(x, newPosition, {
            type: 'spring', stiffness: 120,
            damping: 20,
        });
        setActiveIndex(newIndex);
    };

    return (
        <div className="relative w-full overflow-x-hidden" ref={containerRef}>
            <motion.div
                className="flex"
                drag="x"
                style={{ x }}
                onDragEnd={handleDragEnd}
                dragConstraints={{ left: -(slideWidth * (carouselData.length - 1)), right: 0 }}
            >
                {carouselData.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-full px-6 flex justify-between items-center gap-10 cursor-pointer"
                    >
                        {/* Text Content */}
                        <div className="max-w-xl flex flex-col gap-6">
                            <h3 className="text-2xl font-semibold text-primary">{item.title}</h3>
                            <p className="text-gray-500">{item.description}</p>

                            <div className="flex flex-col gap-6 mt-4">
                                {item.points.map((point, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="bg-primary text-white p-4 rounded-lg">
                                            <FontAwesomeIcon icon={point.icon} className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg">{point.title}</h4>
                                            <p className="text-sm text-gray-500">{point.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image Content */}
                        <div>
                            <Image src={HowItWorks} alt="Slide" width={500} height={500} />
                        </div>
                    </div>
                ))}
            </motion.div>

            {/*  vertical pagination */}
            <div className="absolute right-0 top-0 overflow-hidden flex flex-col items-center justify-center gap-4 z-20 bg-bg-accent h-full min-w-16">
                <div className='flex flex-col gap-2 items-center min-w-12'>

                    <FontAwesomeIcon
                        icon={faAngleUp}
                        className="text-gray-400 hover:text-primary cursor-pointer"
                        onClick={() => setActiveIndex((i) => Math.max(i - 1, 0))}
                    />
                    {carouselData.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                const newPosition = -i * slideWidth;
                                animate(x, newPosition, {
                                    type: 'spring', stiffness: 120,
                                    damping: 20,
                                });
                                setActiveIndex(i);
                            }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer border transition-all duration-300
                        ${i === activeIndex
                                    ? 'bg-brand-button-gradient w-12 h-12 text-white border-transparent'
                                    : 'border-gray-300 bg-transparent'
                                }`}
                        >
                            {i === activeIndex ? (
                                <FontAwesomeIcon icon={item.points[0].icon} className="w-4 h-4" />
                            ) : (
                                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                            )}
                        </div>
                    ))}
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        className="text-gray-400 hover:text-primary cursor-pointer"
                        onClick={() =>
                            setActiveIndex((i) => Math.min(i + 1, carouselData.length - 1))
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default HowItWorksCarousel;
