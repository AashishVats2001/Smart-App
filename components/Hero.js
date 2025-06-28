import Image from 'next/image'
import React from 'react'
import HeaderPhone from '@/public/header-phone.png'
import ParallaxBackgrounds from './ParallaxBackgrounds'

const Hero = () => {
    return (
        <div className="w-full h-full max-w-container flex flex-col md:flex-row gap-3 justify-between items-center px-[15px] pt-20 md:pt-0 overflow-hidden">

            {/* Left Side */}
            <div className="flex flex-col w-full md:w-1/2 h-full justify-center gap-10 items-center md:items-start text-white">

                {/* Brand Name and Slogan */}
                <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-start">
                    <h1 className="text-6xl md:text-7xl lg:text-[11rem]/40  font-semibold">Smart</h1>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">Best Showcash for you App</h2>
                </div>

                {/* Description */}
                <div className="md:text-lg text-balance">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolor et amet tempore sapiente laudantium. Similique distinctio natus consectetur qui cumque rem labore odit voluptatum vitae, modi itaque quos suscipit!</div>

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
                    className=''
                />
            </div>

        </div>
    )
}

export default Hero
