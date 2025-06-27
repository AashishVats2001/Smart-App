'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import background1 from "@/public/background-1.png"
import background2 from "@/public/background-2.png"
import background3 from "@/public/background-3.png"

const ParallaxBackgrounds = () => {
    const containerRef = useRef(null);
    const layer1Ref = useRef(null);
    const layer2Ref = useRef(null);
    const layer3Ref = useRef(null);

    useEffect(() => {
        let animationFrameId

        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window
            const offsetX = (e.clientX / innerWidth - 0.5) * 2
            const offsetY = (e.clientY / innerHeight - 0.5) * 2

            animationFrameId = requestAnimationFrame(() => {
                if (layer1Ref.current)
                    layer1Ref.current.style.transform = `translate3d(${offsetX * -80}px, ${offsetY * -40}px, 0)`
                if (layer2Ref.current)
                    layer2Ref.current.style.transform = `translate3d(${offsetX * -60}px, ${offsetY * -25}px, 0)`
                if (layer3Ref.current)
                    layer3Ref.current.style.transform = `translate3d(${offsetX * -40}px, ${offsetY * -20}px, 0)`
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div ref={containerRef} className="absolute bottom-0 lef-0 right-0 w-full h-auto pointer-events-none z-30 translate-y-10">
            <div className="absolute bottom-0 left-0 w-full transition-transform duration-200 ease-out parallax-layer scale-125" ref={layer1Ref}>
                <Image src={background1} alt="bg-1" width={3400} height={500} priority />
            </div>
            <div className="absolute bottom-0 left-0 w-full transition-transform duration-300 ease-out parallax-layer scale-125" ref={layer2Ref}>
                <Image src={background2} alt="bg-2" width={3400} height={500} priority />
            </div>
            <div className="absolute bottom-0 left-0 w-full transition-transform duration-500 ease-out parallax-layer scale-125" ref={layer3Ref}>
                <Image src={background3} alt="bg-3" width={3400} height={500} priority />
            </div>
        </div>
    );
};

export default ParallaxBackgrounds;