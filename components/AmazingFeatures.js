"use client"
import Image from 'next/image'
import React from 'react'
import feature1 from "@/public/feature1.png"
import feature2 from "@/public/feature2.png"
import feature3 from "@/public/feature3.png"
import { motion } from "motion/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartColumn, faCircle, faCoins, faWallet } from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core'


const features = [
  {
    image: feature1,
    icon: faWallet,
    title: "Connect Wallets",
    description: "Securely link your DeFi wallets with a single tap.",
  },
  {
    image: feature2,
    icon: faChartColumn,
    title: "Track Everything",
    description: "View your portfolio, APYs, and rewards in real-time across multiple chains.",
  },
  {
    image: feature3,
    icon: faCoins,
    title: "Optimize Yields",
    description: "Get insights, alerts, and optimization tips to move funds where they perform best.",
  },
];

const AmazingFeatures = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-10'>
      {features.map((feature, index) => (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: [0, 0.71, 0.2, 1.01],
            duration: 1,
            delay: index * 0.1,
          }}
          key={index}
          className="flex flex-col gap-10 items-center justify-center transition-shadow hover:shadow-2xl/50 p-10 rounded-lg text-center max-w-xs lg:shadow-none shadow-xl"
        >
          <div className='relative'>

            <Image src={feature.image} alt={feature.title} />

            <FontAwesomeIcon icon={feature.icon} className='absolute top-0 left-0 translate-x-3/5 translate-y-1/2 text-8xl z-20 text-secondary' />
            <FontAwesomeIcon icon={faCircle} size='10x' className='absolute top-0 left-0 translate-x-1/6 translate-y-1/7 text-8xl text-[#EFF1F5] z-10' />
          </div>
          <h3 className="font-semibold text-2xl">{feature.title}</h3>
          <p className="">{feature.description}</p>
        </motion.div>
      ))
      }


    </div >
  )
}

export default AmazingFeatures
