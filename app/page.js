"use client"

import Image from "next/image";

import AmazingFeatures from "@/components/AmazingFeatures";
import HeaderPhone from '@/public/header-phone.png'
import FeaturePhone from "@/public/features-mobile.png"
import About from "@/public/about.png"
import DesignRightImage from "@/public/right-image1.png"
import DesignLeftImage from "@/public/left-image1.png";
import AccordionImage from "@/public/accordion-image.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocation, faLocationPin, faMapLocationDot, faMobile, faMobileScreenButton, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFigma, faGooglePay, faGooglePlay, faWindows } from "@fortawesome/free-brands-svg-icons";
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
        <h2 className="text-5xl text-primary flex flex-col gap-2 items-center">
          Amazing Features
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
          className="w-full"
        >
          <Image src={FeaturePhone} alt="Feautes" />
        </motion.div>
      </div>

      {/* About */}
      <div id="about" className="w-full flex items-center justify-center bg-bg-accent relative py-20 overflow-hidden">
        <div className="max-w-container w-full flex items-center justify-start">

          <div id="about" className="w-1/2 flex flex-col gap-10 items-start justify-center">
            <h2 className="text-5xl text-primary flex flex-col gap-2 items-start">
              About Smart
              <div className="w-10 h-1 bg-primary mt-2" />
            </h2>
            <p className="leading-7">Lorem Ipsum is simply dummy text of the printing and typeseing indury Lorem Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply dummy text of the dummy text of the printing anprinting Amazing Smart app landing page Lorem Ipsum has been the industry's standard dummy text ever since the when.Lorem Ipsum is simply text of the y Lorem Ipsum has been the industry's standard dndustry's standard dumummy text ever since the when an Lorem Ipsum.</p>
            <p className="leading-7">Lorem Ipsum is simply dummy text of the printing and typeseing indury Lorem Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply dummy text mmy text of tof the dummy text of the printing anprinting and typeseing.</p>
            {/* Download Buttons */}
            <div className="flex w-full justify-start gap-10 items-center">
              {/* App Store */}
              <div className="flex justify-center items-center gap-4 ring-1 ring-primary rounded-full px-10 py-5 cursor-pointer bg-white hover:shadow-2xl/50 transition-all duration-300">
                <FontAwesomeIcon icon={faMobileScreenButton} className="w-8" />
                <div className="flex flex-col text-start">
                  <p className="text-xs leading-tight">Available on the</p>
                  <p className="text-lg font-medium tex-nowrap">iOS App Store</p>
                </div>
              </div>

              {/* Play Store */}
              <div className="flex justify-center items-center gap-4 bg-brand-button-gradient text-white rounded-full px-10 py-5 cursor-pointer shadow-2xl/50 ">
                <FontAwesomeIcon icon={faGooglePlay} className="w-8" />
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
          className=" absolute top-0 right-50"
        >
          <Image
            src={About}
          />
        </motion.div>
      </div>

      {/* More Features */}
      <div id="more-features" className="w-full flex items-center justify-center bg-brand-gradient relative py-20">
        <div className="max-w-container w-full flex flex-col items-center justify-center gap-16 text-white">
          <h2 className="text-5xl text-white flex flex-col gap-2 items-center">
            More Features
            <div className="w-10 h-1 bg-white mt-2" />
          </h2>
          <p className="text-center w-3/4">Lorem Ipsum is simply dummy text of the printing and typesetting indus
            orem Ipsum has been the industry's standard dummy text ever since the when an own printer took a galley of type and scrambled it to make.</p>

          <MoreFeatures />

        </div>
      </div>

      {/* Designs */}
      <div id="design" className="max-w-container w-full flex flex-col items-center justify-center">
        {/* <h2 className="text-5xl text-primary">Amazing Features</h2> */}

        {/* Design 1 */}
        <div className="flex gap-2 items-center justify-center py-20">
          <div className="flex flex-col gap-10 items-start justify-between">
            {/* Icon */}
            <FontAwesomeIcon icon={faFigma} className="text-7xl text-primary" />
            {/* Title */}
            <h2 className="text-5xl text-primary">Beautiful, Unique, Vibrant & Modern Design</h2>
            {/* Description */}
            <p className="text-lg/8">Lorem Ipsum is simply dummy text of the printing and typeseing indury Lorem Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply dummy text of the dummy text of the printing anprinting Amazing Smart app landing page Lorem Ipsum has been the industry's standard dummy text ever since the when.Lorem Ipsum is simply text of the y Lorem Ipsum has been the indushe industry's stry's standard dummy text ever since the when an Lorem Ipsum.</p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className="flex justify-center items-center w-[300%]"
          >
            <Image src={DesignRightImage} className="w-full h-full" />
          </motion.div>
        </div>

        {/* Design 2 */}
        <div className="flex gap-2 items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className="flex justify-center items-center w-[300%]"
          >
            <Image src={DesignLeftImage} />
          </motion.div>
          <div className="flex flex-col gap-10 items-start justify-between">
            {/* Icon */}
            <FontAwesomeIcon icon={faFigma} className="text-7xl text-primary" />
            {/* Title */}
            <h2 className="text-5xl text-primary">Beautiful, Unique, Vibrant & Modern Design</h2>
            {/* Description */}
            <p className="text-lg/8">Lorem Ipsum is simply dummy text of the printing and typeseing indury Lorem Ipsum has been the industry's standard dummy text ever since the when an Lorem Ipsum is simply dummy text of the dummy text of the printing anprinting Amazing Smart app landing page Lorem Ipsum has been the industry's standard dummy text ever since the when.Lorem Ipsum is simply text of the y Lorem Ipsum has been the indushe industry's stry's standard dummy text ever since the when an Lorem Ipsum.</p>
          </div>


        </div>
      </div>

      {/* How it Works */}
      <div id="how-it-works" className="w-full flex items-center justify-center bg-bg-accent relative py-20 overflow-hidden">
        <div className="max-w-container w-full flex flex-col gap-10 items-center justify-center overflow-x-hidden">
          <h2 className="text-5xl text-primary flex flex-col gap-2 items-center">
            How It Works
            <div className="w-10 h-1 bg-primary mt-2" />
          </h2>
          <HowItWorksCarousel />
        </div>
      </div>

      {/* Download */}
      <div id="download" className="w-full flex items-center justify-center bg-brand-gradient relative py-20">
        <div className="max-w-container w-full flex flex-col items-center justify-center gap-16 ">
          <h2 className="text-5xl text-white flex flex-col gap-2 items-center">
            Smart Download
            <div className="w-10 h-1 bg-white mt-2" />
          </h2>
          <div className="flex justify-evenly w-3/4 gap-6">

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
        <h2 className="text-5xl text-primary flex flex-col gap-2 items-center">
          Quick View
          <div className="w-10 h-1 bg-primary mt-2" />
        </h2>

        <QuickViewCarousel />
      </div>

      {/* FAQ */}
      <div id="faq" className="w-full flex items-center justify-center bg-bg-accent">
        <div className="max-w-container w-full flex items-center justify-center gap-5">
          <div className="w-full flex flex-col gap-10 items-start  justify-center">
            <h2 className="text-5xl text-primary flex flex-col gap-2 items-start">
              FAQ
              <div className="w-10 h-1 bg-primary mt-2" />
            </h2>
            <FAQs />
          </div>
          <Image src={AccordionImage} />

        </div>
      </div>

      {/* Team */}
      <div id="team" className="max-w-container py-20 w-full flex flex-col gap-16 items-center justify-center">
        <h2 className="text-5xl text-primary flex flex-col gap-2 items-center">
          Innovative Team
          <div className="w-10 h-1 bg-primary mt-2" />
        </h2>


        <p className="text-center text-balance w-1/2">Lorem Ipsum is simply dummy text of the printing and
          typeseing industry Lorem Ipsum has been the industry's standard
          dummy text Lorem is simply dummy text of the printing and</p>
        <TeamCards />

      </div>

      {/* Statistics */}
      <section id="stats" className="w-full flex items-center justify-center py-36 bg-brand-gradient">
        <Stats />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full flex items-center justify-center bg-bg-accent py-20">
        <div className="max-w-container w-full flex flex-col items-center justify-center gap-15">
          <h2 className="text-5xl text-primary flex flex-col gap-2 items-center">
            Trusted by 1000+ clients
            <div className="w-10 h-1 bg-primary mt-2" />
          </h2>


          <p className="w-1/2 text-center">Lorem Ipsum is simply dummy text of the printing and
            typeseing industry Lorem Ipsum has been the industry's standard
            dummy text Lorem is simply dummy text of the printing and
          </p>

          <Testimonials />
        </div>
      </section>


      {/* Pricing */}
      <section id="pricing" className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center pt-36 pb-44 bg-brand-gradient">
          <h2 className="text-5xl text-white flex flex-col gap-2 items-center">
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
      <section id="blogs" className="w-full flex items-center justify-center bg-bg-accent py-20">
        <div className="max-w-container w-full flex flex-col items-center justify-center gap-15">
          <h2 className="text-5xl text-primary flex flex-col gap-2 items-center">
            Latest Blogs
            <div className="w-10 h-1 bg-primary mt-2" />
          </h2>

          <p className="w-1/2 text-center text-muted">Lorem Ipsum is simply dummy text of the printing and
            typeseing industry Lorem Ipsum has been the industry's standard
            dummy text Lorem is simply dummy text of the printing and
          </p>


          <BlogCards />
        </div>

      </section>


      {/* Subscribe */}
      <section id="subscribe" className="w-full flex items-center justify-center pt-20">
        <div className="max-w-container w-full flex flex-col items-center justify-center gap-15">
          <h2 className="text-5xl text-primary flex flex-col gap-2 items-center">
            Subscribe Now
            <div className="w-10 h-1 bg-primary mt-2" />
          </h2>

          <p className="w-1/2 text-center -mb-20 text-muted">Lorem Ipsum is simply dummy text of the printing and
            typeseing industry Lorem Ipsum has been the industry's standard
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
            className="w-full flex bg-brand-gradient rounded-lg text-white translate-y-24 z-10">

            {/* Contact Info */}
            <div className="flex items-start justify-center pt-20 pb-10 px-16 w-2/5 border-r-[0.1px] border-gray-300">
              <div className="flex flex-col gap-10 items-start">

                <h3 className="text-2xl font-bold">Contact Info</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting indus orem Ipsum has been the industrys.</p>

                {/* Call Us */}
                <div className="flex items-start gap-4 text-white">
                  <div className="pt-2.5 px-2.5 pb-1 rounded-full border-[0.5px] border-white">
                    <FontAwesomeIcon icon={faPhone} className="w-5! h-5!" />
                  </div>
                  <div className="flex flex-col items-start font-medium">
                    <h4 className="text-xl ">Call us</h4>
                    <p className="text-sm">+91 123 456 7890</p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-start gap-4 text-white">
                  <div className="pt-2.5 px-2.5 pb-1 rounded-full border-[0.5px] border-white">
                    <FontAwesomeIcon icon={faEnvelope} className="w-5! h-5!" />
                  </div>
                  <div className="flex flex-col items-start font-medium">
                    <h4 className="text-xl">Email us</h4>
                    <p className="text-sm">@support@gmail.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 text-white">
                  <div className="pt-2.5 px-2.5 pb-1 rounded-full border-[0.5px] border-white">
                    <FontAwesomeIcon icon={faMapLocationDot} className="w-5! h-5!" />
                  </div>
                  <div className="flex flex-col items-start font-medium">
                    <h4 className="text-xl">Location</h4>
                    <p className="text-sm">125 Business Evenua, Huston USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="flex items-start justify-center w-3/4 pt-20 pb-10 px-16">
              <Form />
            </div>
          </motion.div>
        </div>

      </section>

      {/* Footer */}
      <footer className="w-full flex items-center justify-center bg-dark relative pb-20 pt-40">
        <div className="max-w-container w-full flex flex-col items-center justify-center gap-16 ">
          <h2 className="text-5xl text-white flex flex-col gap-2 items-center">
            Download Smart Now
            <div className="w-10 h-1 bg-white mt-2" />
          </h2>
          <div className="flex justify-evenly w-3/4 gap-6">

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
