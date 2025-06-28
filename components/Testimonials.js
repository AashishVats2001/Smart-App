'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useAnimation } from 'framer-motion';
import Team1 from '@/public/team-1.png';
import Team2 from '@/public/team-2.png';
import Team3 from '@/public/team-3.png';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Devil Shohe',
        title: 'Founder at Smart Technologies',
        image: Team1,
        text: 'Lorem Ipsum is simply dummy text of the printing and typeseing industry Lorem Ipsum has been the industry standard dummy text.',
    },
    {
        name: 'Sarah Lin',
        title: 'Marketing Director at XYZ Corp',
        image: Team2,
        text: 'Fringilla sit amet nunc viverra aliquam. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.',
    },
    {
        name: 'John Martin',
        title: 'CTO at WebWorks',
        image: Team3,
        text: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.',
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const containerRef = useRef(null)
    const controls = useAnimation()
    const x = useMotionValue(0)

    // Slide on index change
    useEffect(() => {
        controls.start({ x: -index * 102 + '%' })
    }, [index, controls])

    // Autoplay
    useEffect(() => {
        if (!autoPlay) return
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [autoPlay])

    // Handle drag end to snap to nearest
    const handleDragEnd = (event, info) => {
        setAutoPlay(false)
        const offset = info.offset.x
        if (offset < -50 && index < testimonials.length - 1) {
            setIndex(index + 1)
        } else if (offset > 50 && index > 0) {
            setIndex(index - 1)
        }
    }

    return (
        <div className="max-w-3xl mx-auto rounded-lg overflow-hidden px-2">
            <motion.div
                className="flex w-full cursor-grab gap-4"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                animate={controls}
                style={{ x }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                {testimonials.map((testimonial, i) => (
                    <div
                        key={i}
                        className="min-w-full flex flex-col items-center justify-center"
                    >
                        <div className='w-full flex flex-col items-center justify-center text-center rounded-lg shadow-sm z-20 px-6 py-16 h-80 gap-2 box-border bg-white '>

                            <div className="w-20 h-20 rounded-full border-4 border-white shadow overflow-hidden">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={50}
                                    height={50}
                                    className="w-20 h-20 object-cover rounded-full -translate-y-5 mx-auto"
                                />
                            </div>
                            <h3 className="text-primary font-semibold text-lg">{testimonial.name}</h3>
                            <p className="text-gray-500 text-sm text-semibold mb-4">{testimonial.title}</p>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                                {testimonial.text}
                            </p>
                        </div>

                        <div className='bg-white rounded-b-lg h-4 w-5/6 z-10'></div>
                    </div>
                ))}
            </motion.div>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-3 pb-4">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setIndex(i)
                            setAutoPlay(false)
                        }}
                        className={`w-5 h-5 rounded-full transition cursor-pointer ${i === index
                            ? 'bg-primary'
                            : 'bg-white border border-primary'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
export default Testimonials
