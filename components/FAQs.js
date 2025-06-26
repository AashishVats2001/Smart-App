'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const faqData = [
    {
        question: 'What is the Start App ?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
        question: 'Where can I download this app ?',
        answer:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '.repeat(20),
    },
    {
        question: 'How to install this app ?',
        answer: 'You can install it by downloading it from the App Store or Google Play.',
    },
    {
        question: 'Is this app useful for business purpose ?',
        answer: 'Yes, it helps you manage communication and productivity efficiently.',
    },
    {
        question: 'Is this app useful for business purpose ?',
        answer: 'Yes, very useful for small businesses, freelancers, and enterprise teams.',
    },
];


const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleIndex = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="w-full space-y-4">


            {faqData.map((faq, index) => {
                const isOpen = index === activeIndex;

                return (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
                    >
                        {/* Header */}
                        <div
                            className={`flex justify-between items-center p-4 cursor-pointer transition-colors duration-300 ${isOpen ? 'bg-primary text-white' : 'text-gray-800'
                                }`}
                            onClick={() => toggleIndex(index)}
                        >
                            <span className="font-medium">{faq.question}</span>
                            <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
                        </div>

                        {/* Animated Body (Always in DOM) */}
                        <div style={{ height: isOpen ? '185px' : '0px' }}
                            className={`transition-all duration-500 ease-in-out  overflow-y-auto max-h-[185px] px-4`}
                        >
                            <div className="py-4 text-gray-700 text-sm pr-2">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};


export default FAQs
