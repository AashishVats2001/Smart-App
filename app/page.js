"use client"

import Image from "next/image";

import AmazingFeatures from "@/components/AmazingFeatures";
import HeaderPhone from '@/public/header-phone.png'
import FeaturePhone from "@/public/features-mobile1.png"
import About from "@/public/about`.png"
import DesignRightImage from "@/public/right-image11.png"
import DesignLeftImage from "@/public/left-image11.png";
import AccordionImage from "@/public/accordion-image.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLaptop, faLocation, faLocationPin, faMapLocationDot, faMobile, faMobileScreenButton, faPhone, faWind } from '@fortawesome/free-solid-svg-icons'
import { faFigma, faGooglePay, faGooglePlay, faTwitter, faWindows } from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";
import MoreFeatures from "@/components/MoreFeatures";
import HowItWorksCarousel from "@/components/HowItWorksCarousel";
import FAQs from "@/components/FAQs";
import TeamCards from "@/components/TeamCards";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import PriceCards from "@/components/PriceCards";
import BlogCards from "@/components/BlogCards";
import Form from "@/components/Form";
import SocialIcons from "@/components/SocialIcons";
import QuickViewCarousel from "@/components/QuickViewCarousel";
import Hero from "@/components/Hero";
import ParallaxBackgrounds from "@/components/ParallaxBackgrounds";


export default function Home() {
  return (
    <div className="flex flex-col items-center">

      {/* Hero */}
      <div id="home" className="w-screen flex justify-center items-center bg-brand-gradient h-dvh overflow-x-hidden">
        <Hero />
        <ParallaxBackgrounds />

      </div>

      {/* Amazing Features */}
      <div id="features" className="max-w-container w-full flex flex-col gap-16 items-center pt-20 justify-center">
        <h2 className="heading text-primary flex flex-col gap-2 items-center">
          Features
          <div className="w-10 h-1 bg-primary mt-2" />
        </h2>

        <AmazingFeatures />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            ease: [0, 0.71, 0.2, 1.01],
            duration: 1,
          }}
          className="w-full flex justify-center"
        >
          <Image src={FeaturePhone} alt="Features" width={400} height={200} className="w-3/5 -rotate-[20deg]" />
        </motion.div>
      </div>

      {/* About */}
      <div id="about" className="w-full flex items-center justify-center bg-bg-accent relative py-20 overflow-hidden">
        <div className="max-w-container w-full flex items-center px-2 justify-center lg:justify-start">

          <div id="about" className="w-11/12 lg:w-1/2 flex flex-col gap-10 items-center lg:items-start justify-center">
            <h2 className="heading text-primary flex flex-col gap-2 items-center lg:items-start">
              About YieldTap
              <div className="w-10 h-1 bg-primary mt-2" />
            </h2>
            <p className="leading-7">We built YieldTap to solve a simple problem: tracking and optimizing your crypto yields shouldn&apos;t be complicated. With protocols scattered across chains and APYs that shift hourly, staying on top of your passive income takes work — or it used to.</p>
            <p className="leading-7">YieldTap simplifies everything by unifying your yield farming, staking, and vault strategies into a single intuitive dashboard. Whether you&apos;re yield-maxi or just getting started, we give you the clarity and control to make smarter moves, faster.</p>
            {/* Download Buttons */}
            <div className="flex flex-col md:flex-row w-full justify-start gap-10 items-center">
              {/* App Store */}
              <div className="flex justify-center items-center gap-4 ring-1 ring-primary rounded-full px-10 py-5 cursor-pointer bg-white hover:shadow-2xl/50 transition-all duration-300">
                <FontAwesomeIcon icon={faMobileScreenButton} className="text-lg md:text-xl lg:text-2xl" />
                <div className="flex flex-col text-start">
                  <p className="text-xs leading-tight">Available on the</p>
                  <p className="text-lg font-medium tex-nowrap">iOS App Store</p>
                </div>
              </div>

              {/* Play Store */}
              <div className="flex justify-center items-center gap-4 bg-brand-button-gradient text-white rounded-full px-10 py-5 cursor-pointer shadow-2xl/50 ">
                <FontAwesomeIcon icon={faGooglePlay} className="text-lg md:text-xl lg:text-2xl" />
                <div className="flex flex-col text-start">
                  <p className="text-xs leading-tight">Available on the</p>
                  <p className="text-lg font-medium tex-nowrap">Play Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 500 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
          }}
          className=" absolute top-0 bottom-0 right-[5%] hidden lg:block w-2/5 max-h-[500px] h-full"
        >
          <Image
            src={About}
            width={945}
            height={975}
            alt="About Image"
            className="w-1/2 min-w-[600px]"

          />
        </motion.div>
      </div>

      {/* More Features */}
      <div id="more-features" className="w-full flex items-center justify-center bg-brand-gradient relative py-20">
        <div className="max-w-container w-full flex flex-col items-center justify-center gap-16 text-white">
          <h2 className=" heading text-white flex flex-col gap-2 items-center">
            More Features
            <div className="w-10 h-1 bg-white mt-2" />
          </h2>
          <p className="text-center w-3/4 text-sm md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting indus
            orem Ipsum has been the industry&apos;s standard dummy text ever since the when an own printer took a galley of type and scrambled it to make.</p>

          <MoreFeatures />

        </div>
      </div>

      {/* Designs */}
      <div id="design" className="max-w-container w-full flex flex-col items-center justify-center px-2">
        {/* <h2 className=" heading text-5xl text-primary">Amazing Features</h2> */}

        {/* Design 1 */}
        <div className="flex flex-col md:flex-row gap-2 items-center justify-center py-20">
          <div className="flex flex-col gap-10 items-start justify-between">
            {/* Icon */}
            <FontAwesomeIcon icon={faLaptop} className="text-7xl text-primary" />
            {/* Title */}
            <h2 className=" heading text-primary">Intuitive Interface, Designed for Clarity</h2>
            {/* Description */}
            <p className="text-sm/7 md:text-base/8 lg:text-lg/8">YieldTap&apos;s interface is crafted with one goal: to make DeFi yields understandable at a glance.
              No clutter. No noise. Just your assets, performance, and opportunities — cleanly visualized.
              We use a minimalist dark theme with bold contrast, glowing data points, and intuitive icons to help you navigate complex DeFi ecosystems without friction. Whether you&apos;re a pro or new to DeFi, you&apos;ll feel right at home.</p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className="flex justify-center items-center w-[300%] px-2"
          >
            <Image
              src={DesignRightImage}
              width={585}
              height={525}
              alt="Design Image"
              className="w-1/4 md:w-full md:h-full" />
          </motion.div>
        </div>

        {/* Design 2 */}
        <div className="flex flex-col md:flex-row gap-2 items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className="flex justify-center items-center w-[300%] px-2 order-2 md:order-1"
          >
            <Image
              src={DesignLeftImage}
              width={585}
              height={525}
              alt="Design Image"
              className="w-1/4 md:w-full md:h-full" />
          </motion.div>
          <div className="flex flex-col gap-10 items-start justify-between order-1 md:order-2">
            {/* Icon */}
            <FontAwesomeIcon icon={faWind} className="text-7xl text-primary" />
            {/* Title */}
            <h2 className=" heading text-5xl text-primary">Built for Speed and Simplicity</h2>
            {/* Description */}
            <p className="text-sm/7 md:text-base/8 lg:text-lg/8">Most dashboards feel like spreadsheets — YieldTap feels like a product.
              Built with lightweight components and real-time syncing, your data loads fast and updates instantly.
              One-tap wallet connections, actionable charts, and an experience optimized for mobile and desktop mean you spend less time clicking — and more time earning.
            </p>
          </div>


        </div>
      </div>

      {/* How it Works */}
      <div id="how-it-works" className="w-full flex items-center justify-center bg-bg-accent relative py-20 overflow-hidden">
        <div className="max-w-container w-full flex flex-col gap-10 items-center justify-center overflow-x-hidden">
          <h2 className=" heading text-5xl text-primary flex flex-col gap-2 items-center">
            How It Works
            <div className="w-10 h-1 bg-primary mt-2" />
          </h2>
          <HowItWorksCarousel />
        </div>
      </div>

      {/* Download */}
      <div id="download" className="w-full flex items-center justify-center bg-brand-gradient relative py-20">
        <div className="max-w-container w-full flex flex-col items-center justify-center gap-16 ">
          <h2 className=" heading text-5xl text-white flex flex-col gap-2 items-center">
            Smart Download
            <div className="w-10 h-1 bg-white mt-2" />
          </h2>
          <div className="flex flex-col md:flex-row justify-evenly w-3/4 gap-6">

            {/* App Store */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
              className='py-5 w-full flex items-center justify-center gap-2 bg-white rounded-full cursor-pointer relative'>
              <FontAwesomeIcon icon={faMobileScreenButton} className='text-4xl' fixedWidth />
              <div className="flex flex-col justify-around">
                <p className="text-xs leading-tight">Available on the</p>
                <p className="text-lg font-medium tex-nowrap">iOS App Store</p>
              </div>
              <div className='absolute py-5 w-full flex items-center justify-center gap-2 bg-white rounded-full cursor-pointer text-white inset-0 bg-brand-button-gradient opacity-0 shadow-2xl/50 hover:opacity-100 transition-all duration-300'>
                <FontAwesomeIcon icon={faMobileScreenButton} className='text-4xl' fixedWidth />
                <div className="flex flex-col justify-around">
                  <p className="text-xs leading-tight">Available on the</p>
                  <p className="text-lg font-medium tex-nowrap">iOS App Store</p>
                </div>
              </div>
            </motion.div>

            {/* Play Store */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
              className='py-5 w-full flex items-center justify-center gap-2 bg-white rounded-full cursor-pointer relative'>
              <FontAwesomeIcon icon={faGooglePlay} className='text-4xl' fixedWidth />
              <div className="flex flex-col justify-around">
                <p className="text-xs leading-tight">Available on the</p>
                <p className="text-lg font-medium tex-nowrap">Play Store</p>
              </div>
              <div className='absolute py-5 w-full flex items-center justify-center gap-2 bg-white rounded-full cursor-pointer text-white inset-0 bg-brand-button-gradient opacity-0 shadow-2xl/50 hover:opacity-100 transition-all duration-300'>
                <FontAwesomeIcon icon={faGooglePlay} className='text-4xl' fixedWidth />
                <div className="flex flex-col justify-around">
                  <p className="text-xs leading-tight">Available on the</p>
                  <p className="text-lg font-medium tex-nowrap">Play Store</p>
                </div>
              </div>
            </motion.div>


            {/* Windows Store */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
              className='py-5 w-full flex items-center justify-center gap-2 bg-white rounded-full cursor-pointer relative'>
              <FontAwesomeIcon icon={faWindows} className='text-4xl' fixedWidth />
              <div className="flex flex-col justify-around">
                <p className="text-xs leading-tight">Available on the</p>
                <p className="text-lg font-medium tex-nowrap">Windows Store</p>
              </div>
              <div className='absolute py-5 w-full flex items-center justify-center gap-2 bg-white rounded-full cursor-pointer text-white inset-0 bg-brand-button-gradient opacity-0 shadow-2xl/50 hover:opacity-100 transition-all duration-300'>
                <FontAwesomeIcon icon={faWindows} className='text-4xl' fixedWidth />
                <div className="flex flex-col justify-around">
                  <p className="text-xs leading-tight">Available on the</p>
                  <p className="text-lg font-medium tex-nowrap">Windows Store</p>
                </div>
              </div>
            </motion.div>



          </div>
        </div>
      </div>

      {/* Carousel 2 */}
      <div id="quickview" className="max-w-container w-full flex flex-col gap-16 items-center py-20 justify-center">
        <h2 className=" heading text-5xl text-primary flex flex-col gap-2 items-center">
          Quick View
          <div className="w-10 h-1 bg-primary mt-2" />
        </h2>

        <QuickViewCarousel />
      </div>

      {/* FAQ */}
      <div id="faq" className="w-full flex items-center justify-center bg-bg-accent py-20">
        <div className="max-w-container w-full flex flex-col md:flex-row items-center justify-center gap-5 px-2">
          <div className="w-full flex flex-col gap-10 items-center md:items-start justify-center">
            <h2 className="heading text-primary flex flex-col gap-2 items-center md:items-start">
              FAQ
              <div className="w-10 h-1 bg-primary mt-2" />
            </h2>
            <FAQs />
          </div>
          <Image src={DesignRightImage}
            width={585}
            height={800}
            alt="FAQ Image"
            className="w-1/2" />

        </div>
      </div>

      {/* Team */}
      <div id="team" className="max-w-container py-20 w-full flex flex-col gap-16 items-center justify-center">
        <h2 className=" heading text-5xl text-primary flex flex-col gap-2 items-center">
          Innovative Team
          <div className="w-10 h-1 bg-primary mt-2" />
        </h2>


        {/* <p className="text-center text-balance md:w-1/2">Lorem Ipsum is simply dummy text of the printing and
          typeseing industry Lorem Ipsum has been the industry&apos;s standard
          dummy text Lorem is simply dummy text of the printing and</p> */}
        <TeamCards />

      </div>

      {/* Statistics */}
      <section id="stats" className="w-full flex items-center justify-center py-36 bg-brand-gradient">
        <Stats />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full flex items-center justify-center bg-bg-accent py-20">
        <div className="max-w-container w-full flex flex-col items-center justify-center gap-15">
          <h2 className=" heading text-5xl text-primary flex flex-col gap-2 items-center">
            Trusted by 1000+ clients
            <div className="w-10 h-1 bg-primary mt-2" />
          </h2>


          <p className="w-full md:w-1/2 text-center text-sm md:text-base">Real feedback from our early adopters.
          </p>

          <Testimonials />
        </div>
      </section>


      {/* Pricing */}
      <section id="pricing" className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center pt-36 pb-44 bg-brand-gradient">
          <h2 className=" heading text-5xl text-white flex flex-col gap-2 items-center">
            Our Best Pricing
            <div className="w-10 h-1 bg-white mt-2" />
          </h2>

        </div>

        {/* Price Cards */}
        <div className="max-w-container w-full -mb-20">

          <PriceCards />
        </div>
      </section>

      {/* Blogs */}
      {/* <section id="blogs" className="w-full flex items-center justify-center bg-bg-accent py-20">
        <div className="max-w-container w-full flex flex-col items-center justify-center gap-15 px-2">
          <h2 className=" heading text-5xl text-primary flex flex-col gap-2 items-center">
            Latest Blogs
            <div className="w-10 h-1 bg-primary mt-2" />
          </h2>

          <p className="w-full md:w-1/2 text-center text-muted text-sm md:text-base">Lorem Ipsum is simply dummy text of the printing and
            typeseing industry Lorem Ipsum has been the industry&apos;s standard
            dummy text Lorem is simply dummy text of the printing and
          </p>


          <BlogCards />
        </div>

      </section> */}


      {/* Subscribe */}
      <section id="subscribe" className="w-full flex items-center justify-center pt-20">
        <div className="max-w-container w-full flex flex-col items-center justify-center gap-15 px-2">
          <h2 className=" heading text-5xl text-primary flex flex-col gap-2 items-center">
            Subscribe Now
            <div className="w-10 h-1 bg-primary mt-2" />
          </h2>

          <p className="w-full md:w-1/2 text-center -mb-20 text-muted">Lorem Ipsum is simply dummy text of the printing and
            typeseing industry Lorem Ipsum has been the industry&apos;s standard
            dummy text Lorem is simply dummy text of the printing and
          </p>


          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className="w-full flex flex-col md:flex-row bg-brand-gradient rounded-lg text-white translate-y-24 z-10">

            {/* Contact Info */}
            <div className="flex items-start justify-center pt-20 pb-10 px-16 md:w-2/5 border-r-[0.1px] border-gray-300">
              <div className="flex flex-col gap-10 items-start">

                <h3 className="text-2xl font-bold">Contact Info</h3>
                <p>Got questions, feedback, or partnership inquiries? We&apos;re here to help.</p>

                {/* Email Us */}
                <div className="flex items-start gap-4 text-white">
                  <div className="pt-2.5 px-2.5 pb-1 rounded-full border-[0.5px] border-white">
                    <FontAwesomeIcon icon={faEnvelope} className="w-5! h-5!" />
                  </div>
                  <div className="flex flex-col items-start font-medium">
                    <h4 className="text-xl">Email us</h4>
                    <p className="text-sm">support@yieldtap.xyz</p>
                  </div>
                </div>

                {/* twitter*/}
                <div className="flex items-start gap-4 text-white">
                  <div className="pt-2.5 px-2.5 pb-1 rounded-full border-[0.5px] border-white">
                    <FontAwesomeIcon icon={faTwitter} className="w-5! h-5!" />
                  </div>
                  <div className="flex flex-col items-start font-medium">
                    <h4 className="text-xl ">Twitter</h4>
                    <p className="text-sm">@YieldTap</p>
                  </div>
                </div>


                {/* Location */}
                <div className="flex items-start gap-4 text-white">
                  <div className="pt-2.5 px-2.5 pb-1 rounded-full border-[0.5px] border-white">
                    <FontAwesomeIcon icon={faMapLocationDot} className="w-5! h-5!" />
                  </div>
                  <div className="flex flex-col items-start font-medium">
                    <h4 className="text-xl">Location</h4>
                    <p className="text-sm">Remote-first, globally distributed team</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="flex items-center md:items-start justify-center w-full md:w-3/4 pt-20 pb-10 px-16">
              <Form />
            </div>
          </motion.div>
        </div>

      </section>

      {/* Footer */}
      <footer className="w-full flex items-center justify-center bg-dark relative pb-20 pt-40">
        <div className="max-w-container w-full flex flex-col items-center justify-center gap-16 ">
          <h2 className=" heading text-5xl text-white flex flex-col gap-2 items-center">
            Download Smart Now
            <div className="w-10 h-1 bg-white mt-2" />
          </h2>
          <div className="flex flex-col md:flex-row justify-stretch w-3/4 md:w-full lg:w-3/4 gap-6 px-2">

            {/* App Store */}
            <div className='py-5 w-full flex items-center justify-center gap-2 bg-white rounded-full cursor-pointer relative'>
              <FontAwesomeIcon icon={faMobileScreenButton} className='text-4xl' fixedWidth />
              <div className="flex flex-col justify-around">
                <p className="text-xs leading-tight">Available on the</p>
                <p className="text-lg font-medium tex-nowrap">iOS App Store</p>
              </div>
              <div className='absolute py-5 w-full flex items-center justify-center gap-2 bg-white rounded-full cursor-pointer text-white inset-0 bg-brand-button-gradient opacity-0 shadow-2xl/50 hover:opacity-100 transition-all duration-300'>
                <FontAwesomeIcon icon={faMobileScreenButton} className='text-4xl' fixedWidth />
                <div className="flex flex-col justify-around">
                  <p className="text-xs leading-tight">Available on the</p>
                  <p className="text-lg font-medium tex-nowrap">iOS App Store</p>
                </div>
              </div>
            </div>

            {/* Play Store */}
            <div className='py-5 w-full flex items-center justify-center gap-2 bg-white rounded-full cursor-pointer relative'>
              <FontAwesomeIcon icon={faGooglePlay} className='text-4xl' fixedWidth />
              <div className="flex flex-col justify-around">
                <p className="text-xs leading-tight">Available on the</p>
                <p className="text-lg font-medium tex-nowrap">Play Store</p>
              </div>
              <div className='absolute py-5 w-full flex items-center justify-center gap-2 bg-white rounded-full cursor-pointer text-white inset-0 bg-brand-button-gradient opacity-0 shadow-2xl/50 hover:opacity-100 transition-all duration-300'>
                <FontAwesomeIcon icon={faGooglePlay} className='text-4xl' fixedWidth />
                <div className="flex flex-col justify-around">
                  <p className="text-xs leading-tight">Available on the</p>
                  <p className="text-lg font-medium tex-nowrap">Play Store</p>
                </div>
              </div>
            </div>


            {/* Windows Store */}
            <div className='py-5 w-full flex items-center justify-center gap-2 bg-white rounded-full cursor-pointer relative'>
              <FontAwesomeIcon icon={faWindows} className='text-4xl' fixedWidth />
              <div className="flex flex-col justify-around">
                <p className="text-xs leading-tight">Available on the</p>
                <p className="text-lg font-medium tex-nowrap">Windows Store</p>
              </div>
              <div className='absolute py-5 w-full flex items-center justify-center gap-2 bg-white rounded-full cursor-pointer text-white inset-0 bg-brand-button-gradient opacity-0 shadow-2xl/50 hover:opacity-100 transition-all duration-300'>
                <FontAwesomeIcon icon={faWindows} className='text-4xl' fixedWidth />
                <div className="flex flex-col justify-around">
                  <p className="text-xs leading-tight">Available on the</p>
                  <p className="text-lg font-medium tex-nowrap">Windows Store</p>
                </div>
              </div>
            </div>



          </div>

          {/* Socials */}
          <SocialIcons />
          <p className="text-white text-sm">© Copyright 2025. Developed by <span className="text-blue-400">DA</span></p>
        </div>
      </footer>

    </div >
  );
}
