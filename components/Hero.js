import Image from 'next/image'
import React from 'react'
import HeaderPhone from '@/public/header-phone1.png'
import ParallaxBackgrounds from './ParallaxBackgrounds'

const Hero = () => {
    return (
        <div className="w-full h-full max-w-container flex flex-col md:flex-row gap-3 justify-between items-center px-[15px] pt-24 md:pt-0 overflow-hidden">

            {/* Left Side */}
            <div className="flex flex-col w-full md:w-1/2 h-full justify-center gap-10 items-center md:items-start text-white">

                {/* Brand Name and Slogan */}
                <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-start">
                    <h1 className="text-5xl md:text-7xl lg:text-9xl  font-semibold">YieldTap</h1>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">Track & Maximize Your DeFi Yields</h2>
                </div>

                {/* Description */}
                <div className="md:text-lg text-balance text-center md:text-start"><span className='font-semibold text-lg md:text-xl'>YieldTap</span> gives you real-time insights across all your DeFi investments — effortlessly manage, compare, and grow your yields from one sleek dashboard.</div>

                {/* Download Buttons */}
                <div className="flex flex-wrap gap-5 md:w-10/12">
                    <div className="flex justify-center items-center py-4 px-12 bg-brand-button-gradient rounded-full text-sm font-semibold shadow-2xl/60">Download</div>
                    <div className="flex justify-center items-center py-4 px-12 inset-ring-1 rounded-full text-sm font-semibold">Learn More</div>

                </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center">
                <Image
                    src={HeaderPhone}
                    width={470}
                    height={633}
                    alt='App Hero Photo'
                    className='bg-white scale-70 rounded-[4rem]'
                />
            </div>

        </div>
    )
}

export default Hero
