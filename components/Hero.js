import Image from 'next/image'
import React from 'react'
import HeaderPhone from '@/public/header-phone.png'
import ParallaxBackgrounds from './ParallaxBackgrounds'

const Hero = () => {
    return (
        <div className="w-full h-full max-w-container flex flex-col md:flex-row gap-3 justify-between items-center px-[15px] overflow-x-hidden">

            {/* Left Side */}
            <div className="flex flex-col w-full md:w-1/2 h-full justify-center gap-10 items-start text-white">

                {/* Brand Name and Slogan */}
                <div className="flex flex-col gap-1 items-start">
                    <h1 className="text-[11rem]/40 font-semibold">Smart</h1>
                    <h2 className="text-4xl font-medium">Best Showcash for you App</h2>
                </div>

                {/* Description */}
                <div className="text-lg text-balance">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolor et amet tempore sapiente laudantium. Similique distinctio natus consectetur qui cumque rem labore odit voluptatum vitae, modi itaque quos suscipit!</div>

                {/* Download Buttons */}
                <div className="flex flex-wrap gap-5 w-10/12">
                    <div className="flex justify-center items-center py-4 px-12 bg-brand-button-gradient rounded-full text-sm font-semibold shadow-2xl/60">Download</div>
                    <div className="flex justify-center items-center py-4 px-12 inset-ring-1 rounded-full text-sm font-semibold">Learn More</div>

                </div>
            </div>

            {/* Right Side */}
            <div className="flex">
                <Image
                    src={HeaderPhone}
                />
            </div>

        </div>
    )
}

export default Hero
