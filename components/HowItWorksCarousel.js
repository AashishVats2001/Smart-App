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
    faCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import HowItWorks from '@/public/how-it-works-device.png';

const carouselData = [
    {
        title: 'How to install?',
        description: 'Get started in under 60 seconds.',
        points: [
            { icon: faGear, title: 'Visit the Website', desc: 'Go to our website from your browser (desktop or mobile).' },
            { icon: faRotate, title: 'Connect Your Wallet', desc: 'Tap “Connect Wallet” and choose MetaMask, WalletConnect, or your preferred provider.' },
            { icon: faCommentDots, title: 'Grant Read-Only Permission', desc: 'YieldTap never asks for private keys or transactions. We only read balances.' },
            { icon: faCommentDots, title: 'Dashboard Loads Instantly', desc: 'Your assets, yields, and APYs auto-sync across all supported chains.' },
        ],
        image: '/how-it-works-slide1.png',
    },
    {
        title: 'Connect Seamlessly.',
        description: 'YieldTap simplifies yield tracking across DeFi with automation, analytics, and privacy-first design.',
        points: [
            { icon: faCircleArrowRight, title: 'Wallet First, No Accounts', desc: 'No email or signup required' },
            { icon: faGear, title: 'Wallet First, No Accounts', desc: 'Supports MetaMask, WalletConnect, Coinbase Wallet, and more' },
            { icon: faRotate, title: 'Multi-Chain Ready', desc: 'Ethereum, BSC, Polygon, Arbitrum, Avalanche, Optimism, and more' },
            { icon: faCommentDots, title: 'Multi-Chain Ready', desc: 'Auto-detects your active networks' },
        ],
        image: '/how-it-works-slide1.png',
    },
    {
        title: 'Track Everything Automatically',
        description: 'YieldTap simplifies yield tracking across DeFi with automation, analytics, and privacy-first design.',
        points: [
            { icon: faGear, title: 'Real-Time Yield Aggregation', desc: 'See staked, farmed, and idle assets' },
            { icon: faRotate, title: 'Real-Time Yield Aggregation', desc: 'Auto-fetches data from protocols like Aave, Curve, Lido, Yearn, etc.' },
            { icon: faRotate, title: 'Portfolio Overview', desc: 'Total value locked (TVL), grouped by protocol and chain' },
            { icon: faCommentDots, title: 'Portfolio Overview', desc: 'Clean charts with current balances, ROI, and projected APYs' },
        ],
        image: '/how-it-works-slide1.png',
    },
    {
        title: 'Optimize & Grow',
        description: 'YieldTap simplifies yield tracking across DeFi with automation, analytics, and privacy-first design.',
        points: [
            { icon: faGear, title: 'Smart Suggestions', desc: 'YieldTap highlights underperforming assets' },
            { icon: faGear, title: 'Smart Suggestions', desc: 'Recommends higher-yield alternatives based on your risk preference' },
            { icon: faRotate, title: 'Smart Suggestions', desc: 'APY drops or new farming opportunities? You get pinged' },
            { icon: faRotate, title: 'Smart Suggestions', desc: 'Custom notifications: “Claimable rewards,” “Better rates available,” etc.' },
        ],
        image: '/how-it-works-slide1.png',
    },
    {
        title: 'Stay Secure, Always',
        description: 'YieldTap simplifies yield tracking across DeFi with automation, analytics, and privacy-first design.',
        points: [
            { icon: faGear, title: '100% Non-Custodial', desc: 'You keep full control of your funds' },
            { icon: faGear, title: '100% Non-Custodial', desc: 'No transactions are ever triggered without your approval' },
            { icon: faRotate, title: 'Privacy-Friendly', desc: 'No tracking, no logins, no data selling' },
            { icon: faRotate, title: 'Privacy-Friendly', desc: "Read-only access ensures you're always in control" },
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
                        className="min-w-full px-6 flex flex-col md:flex-row justify-center items-center cursor-pointer"
                    >
                        {/* Text Content */}
                        <div className="max-w-xl flex flex-col gap-6 items-center">
                            <h3 className="text-2xl font-semibold text-primary text-center ">{item.title}</h3>
                            <p className="text-gray-500 text-sm md:text-base text-balance text-center ">{item.description}</p>

                            <div className="flex flex-col gap-6 mt-4">
                                {item.points.map((point, i) => (
                                    <div key={i} className="flex gap-4 items">
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
                        {/* <div>
                            <Image
                                src={HowItWorks}
                                width={500}
                                height={500}
                                alt="Slide"
                                className='w-10/12'
                            />
                        </div> */}
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
                                <FontAwesomeIcon icon={faGear} className="w-4 h-4" />
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
