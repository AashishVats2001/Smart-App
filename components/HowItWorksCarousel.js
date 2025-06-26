'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleUp, faAngleDown, faGear,
    faRotate,
    faCommentDots,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import HowItWorks from "@/public/how-it-works-device.png";


const carouselData = [
    {
        title: 'How to install ?',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typeseing industry Lorem Ipsum has been the industry\'s standard dummy text Lorem is simply dummy',
        points: [
            {
                icon: faGear,
                title: 'Config your mobile',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus.',
            },
            {
                icon: faRotate,
                title: 'Refresh setup',
                desc: 'Simply dummy text of the printing and typing indus try Lorem Ipsum has been the industry\'s standard.',
            },
            {
                icon: faCommentDots,
                title: 'Chat with your love',
                desc: 'Ipsum is simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus standard.',
            },
        ],
        image: '/how-it-works-slide1.png',
    },
    {
        title: 'How to install ?',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typeseing industry Lorem Ipsum has been the industry\'s standard dummy text Lorem is simply dummy',
        points: [
            {
                icon: faGear,
                title: 'Config your mobile',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus.',
            },
            {
                icon: faRotate,
                title: 'Refresh setup',
                desc: 'Simply dummy text of the printing and typing indus try Lorem Ipsum has been the industry\'s standard.',
            },
            {
                icon: faCommentDots,
                title: 'Chat with your love',
                desc: 'Ipsum is simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus standard.',
            },
        ],
        image: '/how-it-works-slide1.png',
    },
    {
        title: 'How to install ?',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typeseing industry Lorem Ipsum has been the industry\'s standard dummy text Lorem is simply dummy',
        points: [
            {
                icon: faGear,
                title: 'Config your mobile',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus.',
            },
            {
                icon: faRotate,
                title: 'Refresh setup',
                desc: 'Simply dummy text of the printing and typing indus try Lorem Ipsum has been the industry\'s standard.',
            },
            {
                icon: faCommentDots,
                title: 'Chat with your love',
                desc: 'Ipsum is simply dummy text of the printing and typing indus try Lorem Ipsum has been the indus standard.',
            },
        ],
        image: '/how-it-works-slide1.png',
    },
];



const HowItWorksCarousel = () => {
    return (
        <>

            <motion.div
                drag="x"
                dragConstraints={{ left: -300, right: 0 }}
                className="flex gap-10 cursor-grab active:cursor-grabbing"
            >
                {carouselData.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-[100%] flex justify-between items-center gap-10 px-4"
                    >
                        {/* Text Column */}
                        <div className="max-w-xl flex flex-col gap-6">
                            <h3 className="text-2xl font-semibold text-primary">First tab title - {item.title}</h3>
                            <p className="text-gray-500">{item.description}</p>

                            <div className="flex flex-col gap-6 mt-4">
                                {item.points.map((point, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
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

                        {/* Image Column */}
                        <div>
                            <Image src={HowItWorks} alt="Slide" width={500} height={500} />
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Sidebar Nav Icons (Non-functional) */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
                <FontAwesomeIcon icon={faAngleUp} className="text-gray-400 hover:text-primary cursor-pointer" />
                {carouselData.map((_, i) => (
                    <span key={i} className="w-3 h-3 rounded-full border border-gray-300"></span>
                ))}
                <FontAwesomeIcon icon={faAngleDown} className="text-gray-400 hover:text-primary cursor-pointer" />
            </div>
        </>
    )
}

export default HowItWorksCarousel;
