import React from 'react'
import MobileFeatures from "@/public/header-phone1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faComments, faLock, faMoon, faBuilding, faCheck } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import { motion } from 'motion/react';

const features = [
    {
        title: 'Real-Time Yield Tracking',
        description: 'Live APYs, rewards, and positions synced.',
        icon: faMicrophone,
        side: 'left',
    },
    {
        title: 'Multi-Chain Support',
        description: 'Track assets across all major chains.',
        icon: faBuilding,
        side: 'left',
    },
    {
        title: 'Smart Yield Insights',
        description: 'Optimize yield with data-backed suggestions.',
        icon: faComments,
        side: 'left',
    },
    {
        title: 'One-Tap Connect',
        description: 'Instant sync with your DeFi wallet',
        icon: faCheck,
        side: 'right',
    },
    {
        title: 'Custom Alerts',
        description: 'Get notified for better yield opportunities.',
        icon: faLock,
        side: 'right',
    },
    {
        title: 'Non-Custodial & Secure',
        description: 'Your funds, your keys — always safe.',
        icon: faMoon,
        side: 'right',
    },
]

const FeatureCard = ({
    title,
    description,
    icon,
    iconPosition = 'left' }) => {
    const iconElement = (
        <div className='p-6 flex items-center inset-ring-[0.5px] aspect-square inset-ring-white rounded-full relative cursor-pointer'>
            <FontAwesomeIcon icon={icon} className='text-xl md:text-2xl lg:text-3xl' fixedWidth />
            <div className='absolute flex justify-center aspect-square items-center inset-0 bg-brand-button-gradient rounded-full opacity-0 shadow-2xl/50 hover:opacity-100 transition-all duration-300'>
                <FontAwesomeIcon icon={icon} className='text-xl md:text-2xl lg:text-3xl' fixedWidth />
            </div>
        </div>
    );

    const text = (
        <div className={`flex flex-col gap-4 ${iconPosition === 'left' ? 'text-start' : 'text-end'}`}>
            <h3 className='font-semibold text-lg lg:text-xl'>{title}</h3>
            <p className='text-sm lg:text-base'>{description}</p>
        </div>
    );

    return (
        <div className='flex gap-4 items-start justify-center'>
            {iconPosition === 'left' ? (
                <>
                    {iconElement}
                    {text}
                </>
            ) : (
                <>
                    {text}
                    {iconElement}
                </>
            )}
        </div>
    );
};


const MoreFeatures = () => {
    const leftFeatures = features.filter((f) => f.side === 'left')
    const rightFeatures = features.filter((f) => f.side === 'right')

    return (
        <div className="flex flex-col md:flex-row items-center w-full justify-center  gap-16 text-white px-2">
            {/* Left Column */}
            <div className='flex flex-col gap-6 justify-evenly'>
                {leftFeatures.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        iconPosition="right"
                    />
                ))}
            </div>

            {/* Center Image */}
            <motion.div
                initial={{ opacity: 0, y: -300 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                }}
            >
                {/* <Image src={FeaturePhone} alt="Feautes" /> */}
                <Image
                    src={MobileFeatures}
                    width={470}
                    height={633}
                    alt='App Hero Photo'
                    className='bg-white scale-70 rounded-[4rem]'
                />
            </motion.div>


            {/* Right Column */}
            <div className='flex flex-col gap-6 justify-evenly'>
                {rightFeatures.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        iconPosition="left"
                    />
                ))}
            </div>
        </div>
    )
}

export default MoreFeatures