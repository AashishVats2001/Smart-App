'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDownload,
} from '@fortawesome/free-solid-svg-icons';

import {
    faThumbsUp,
    faUsers,
    faStar,
    faHandshake,
} from '@fortawesome/free-regular-svg-icons';

const statsData = [
    {
        icon: faDownload,
        value: 200,
        suffix: 'K',
        label: 'App Download',
    },
    {
        icon: faThumbsUp,
        value: 50,
        suffix: 'K',
        label: 'Free Download',
    },
    {
        icon: faHandshake,
        value: 95,
        suffix: '%',
        label: 'Return Customers',
    },
    {
        icon: faStar,
        value: 10,
        suffix: '+',
        label: 'Best Awards',
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
        <span ref={ref} className="text-6xl font-bold">
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
                    <FontAwesomeIcon icon={stat.icon} size='4x' fixedWidth />
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <p className="text-lg font-semibold">{stat.label}</p>
                </div>
            ))}

        </div>
    )
}

export default Stats
