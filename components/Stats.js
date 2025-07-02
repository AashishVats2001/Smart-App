'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBitcoinSign,
    faDownload,
    faMoneyBillTrendUp,
    faTerminal,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import {
    faThumbsUp,
    faUsers,
    faStar,
    faHandshake,
} from '@fortawesome/free-regular-svg-icons';

const statsData = [
    {
        icon: faMoneyBillTrendUp,
        value: 42,
        suffix: 'M+',
        label: 'Tracked Assets',
    },
    {
        icon: faBitcoinSign,
        value: 12,
        suffix: '+',
        label: 'Blockchain Supported',
    },
    {
        icon: faUser,
        value: 18,
        suffix: 'K+',
        label: 'Users Connected',
    },
    {
        icon: faTerminal,
        value: 300,
        suffix: '+',
        label: 'Protocols Indexed',
    },
];

const AnimatedCounter = ({ value, suffix }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const end = value;
        const duration = 1500;
        const increment = end / (duration / 16);

        const step = () => {
            start += increment;
            if (start < end) {
                setCount(Math.floor(start));
                requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };
        requestAnimationFrame(step);
    }, [isInView, value]);

    return (
        <span ref={ref} className="text-4xl md:text-5xl lg:ext-6xl font-bold">
            {count}
            {suffix}
        </span>
    );
};

const Stats = () => {
    return (
        <div className="max-w-container w-full grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-5">

            {statsData.map((stat, index) => (
                <div key={index} className="flex flex-col items-center gap-6 text-white">
                    <FontAwesomeIcon icon={stat.icon} size='' className='text-4xl md:text-5xl lg:text-6xl' fixedWidth />
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <p className="text-sm md:text-base lg:text-lg font-semibold">{stat.label}</p>
                </div>
            ))}

        </div>
    )
}

export default Stats
