'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const faqData = [
    {
        question: 'Is YieldTap safe to use?',
        answer: 'Yes. YieldTap is fully non-custodial. We never access or move your funds.',
    },
    {
        question: 'How does YieldTap actually track my DeFi yields across protocols and chains?',
        answer:
            "YieldTap uses read-only access to your connected wallet address to scan and aggregate data from multiple DeFi protocols across supported blockchains. When you connect your wallet, YieldTap doesn't request any private keys or permissions to move funds — it simply reads your wallet's public positions. Behind the scenes, YieldTap integrates with smart contract APIs and on- chain indexing services like The Graph and custom node infrastructure to fetch live data.This includes your liquidity pool balances, staking positions, pending rewards, and farming stats.We unify this across chains like Ethereum, BSC, Polygon, Arbitrum, and others — so you can see it all in one place.The result? A real-time, unified yield dashboard showing your current ROI, APYs, rewards to claim, and asset performance — all while keeping your wallet and funds fully secure.",
    },
{
    question: 'Which wallets are supported?',
        answer: 'We support MetaMask, WalletConnect, Coinbase Wallet, Trust Wallet, and others.',
    },
{
    question: 'Do I need to create an account?',
        answer: 'No accounts or emails required. Just connect your wallet to get started.'
},
{
    question: ' Which blockchains can I track?',
        answer: 'You can track assets on Ethereum, BSC, Polygon, Arbitrum, Avalanche, Optimism, and more.',
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
