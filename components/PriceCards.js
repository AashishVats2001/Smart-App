'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';




const plans = [
    {
        name: 'Basic Plan',
        price: 49,
        highlight: false,
        features: [
            { label: 'Limited Install', available: true },
            { label: 'Unlimited Download', available: true },
            { label: 'Free One Year Support', available: true },
            { label: 'Free 15GB Linux Hosting', available: false },
            { label: '30GB Storage', available: false },
        ],
    },
    {
        name: 'Premium Plan',
        price: 99,
        highlight: true, // active gradient
        features: [
            { label: 'Limited Install', available: true },
            { label: 'Unlimited Download', available: true },
            { label: 'Free One Year Support', available: true },
            { label: 'Free 15GB Linux Hosting', available: true },
            { label: '30GB Storage', available: false },
            { label: 'Unlimited Data', available: false },
        ],
    },
    {
        name: 'Premium Plan',
        price: 150,
        highlight: false,
        features: [
            { label: 'Limited Install', available: true },
            { label: 'Unlimited Download', available: true },
            { label: 'Free One Year Support', available: true },
            { label: 'Free 15GB Linux Hosting', available: true },
            { label: '30GB Storage', available: true },
        ],
    },
];


const PriceCards = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });


    return (
        <div
            ref={ref}
            className="w-full grid grid-cols-1 md:grid-cols-3 pb-20 -translate-y-32 items-center justify-center">
            {plans.map((plan, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`rounded-lg  text-center relative pb-16 bg-gray-100 
                        ${plan.highlight ? 'z-10 shadow-2xl/30' : 'z-0 shadow-lg'}`}
                >
                    {/* Header */}
                    <div
                        className={`py-6 px-4 font-semibold rounded-t-lg flex flex-col gap-4 ${plan.highlight
                            ? 'bg-brand-button-gradient text-white'
                            : 'bg-gray-100 '
                            }`}
                    >
                        <h3 className={`text-xl mb-1 ${plan.highlight && 'text-white'}`}>{plan.name}</h3>
                        <p className={`text-5xl font-bold space-x-[2px] ${plan.highlight ? 'text-white' : 'text-primary'}`}>
                            <span className='text-xl font-normal'>
                                $
                            </span>
                            <span>
                                {plan.price}
                            </span>
                            <span className={`text-xl font-normal`}>/pm</span>
                        </p>
                    </div>

                    {/* Features */}
                    <ul className="text-base bg-white">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="py-5 px-4 flex w-full justify-center border-b-[1px] border-b-gray-200 ">
                                <div className='w-1/2 flex items-center justify-start gap-3 text-nowrap'>

                                    <FontAwesomeIcon
                                        icon={feature.available ? faCheck : faTimes}
                                        className={feature.available ? 'text-green-500' : 'text-red-500'}
                                    />
                                    {feature.label}
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Footer */}
                    <div className="py-6 absolute bottom-0 right-0 left-0 translate-y-1/2 ">
                        <button
                            className={`px-6 py-3 rounded-full text-sm font-semibold transition cursor-pointer ${plan.highlight
                                ? 'bg-primary text-white hover:bg-primary'
                                : 'border border-primary bg-white text-primary hover:bg-primary hover:text-white'
                                }`}
                        >
                            ORDER NOW
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>

    );
};

export default PriceCards;