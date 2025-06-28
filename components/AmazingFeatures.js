"use client"
import Image from 'next/image'
import React from 'react'
import feature1 from "@/public/feature1.png"
import feature2 from "@/public/feature2.png"
import feature3 from "@/public/feature3.png"
import { motion } from "motion/react";


const features = [
  {
    image: feature1,
    title: "Free Support",
    description: "Lorem Ipsum is simply dummy text the printing and typeseing industry Lorem Ipsum has been standard",
  },
  {
    image: feature2,
    title: "Quick Loading",
    description: "Lorem Ipsum is simply dummy text the printing and typeseing industry Lorem Ipsum has been standard",
  },
  {
    image: feature3,
    title: "Awesome Design",
    description: "Lorem Ipsum is simply dummy text the printing and typeseing industry Lorem Ipsum has been standard",
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
          <Image src={feature.image} alt={feature.title} />
          <h3 className="font-semibold text-2xl">{feature.title}</h3>
          <p className="">{feature.description}</p>
        </motion.div>
      ))
      }


    </div >
  )
}

export default AmazingFeatures
