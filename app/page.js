import Image from "next/image";
import AmazingFeatures from "@/components/AmazingFeatures";

import HeaderPhone from '@/public/header-phone.png'
import FeaturePhone from "@/public/features-mobile.png"
import About from "@/public/about.png"
import DesignRightImage from "@/public/right-image1.png"
import DesignLeftImage from "@/public/left-image1.png";
import AccordionImage from "@/public/accordion-image.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faFigma, faGooglePay, faGooglePlay, faWindows } from "@fortawesome/free-brands-svg-icons";
import MoreFeatures from "@/components/MoreFeatures";
import HowItWorksCarousel from "@/components/HowItWorksCarousel";
import FAQs from "@/components/FAQs";
import TeamCards from "@/components/TeamCards";


export default function Home() {
  return (
    <div className="flex flex-col items-center">

      {/* Hero */}
      <div id="home" className="w-full flex justify-center items-center bg-brand-gradient h-dvh">
        <div className="w-full h-full max-w-container flex flex-col md:flex-row gap-3 justify-between items-center px-[15px]">

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
      </div>

      {/* Amazing Features */}
      <div id="features" className="max-w-container w-full flex flex-col gap-16 items-center pt-20 justify-center">
        <h2 className="text-5xl text-primary">Amazing Features</h2>

        <AmazingFeatures />

        <Image src={FeaturePhone} />
      </div>

      {/* About */}
      <div className="w-full flex items-center justify-center bg-bg-accent relative py-20 overflow-hidden">
        <div className="max-w-container w-full flex items-center justify-start">

          <div id="about" className="w-1/2 flex flex-col gap-10 items-start justify-center">
            <h2 className="text-5xl text-primary">About Smart</h2>
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

        <Image
          src={About}
          className=" absolute top-0 right-80"
        />
      </div>

      {/* More Features */}
      <div className="w-full flex items-center justify-center bg-brand-gradient relative py-20">
        <div className="max-w-container w-full flex flex-col items-center justify-center gap-16 text-white">
          <h2 className="text-5xl">More Features</h2>

          <p className="text-center w-3/4">Lorem Ipsum is simply dummy text of the printing and typesetting indus
            orem Ipsum has been the industry's standard dummy text ever since the when an own printer took a galley of type and scrambled it to make.</p>

          <MoreFeatures />

        </div>
      </div>

      {/* Designs */}
      <div id="designs" className="max-w-container w-full flex flex-col items-center justify-center">
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

          <Image src={DesignRightImage} />
        </div>

        {/* Design 2 */}
        <div className="flex gap-2 items-center justify-center py-20">

          <Image src={DesignLeftImage} />

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
      <div className="w-full flex items-center justify-center bg-bg-accent relative py-20 overflow-hidden">
        <div className="max-w-container w-full flex flex-col gap-10 items-center justify-center overflow-x-hidden">
          <h2 className="text-5xl text-primary">How it Works?</h2>
          <HowItWorksCarousel />
        </div>
      </div>

      {/* Download */}
      <div className="w-full flex items-center justify-center bg-brand-gradient relative py-20">
        <div className="max-w-container w-full flex flex-col items-center justify-center gap-16 ">
          <h2 className="text-5xl text-white">Smart Download</h2>
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
        </div>
      </div>

      {/* Carousel 2 */}
      <div id="quickview" className="max-w-container w-full flex flex-col gap-16 items-center py-20 justify-center">
        <h2 className="text-5xl text-primary">Quick View</h2>
      </div>

      {/* FAQ */}
      <div id="faq" className="w-full flex items-center justify-center bg-bg-accent">
        <div className="max-w-container w-full flex items-center justify-center gap-5">
          <div className="w-full flex flex-col gap-10 items-start  justify-center">
            <h2 className="text-5xl text-primary font-semibold flex flex-col gap-2 items-start">
              FAQ
              <div className="w-10 h-[2px] bg-primary " />
            </h2>
            <FAQs />
          </div>
          <Image src={AccordionImage} />

        </div>
      </div>

      {/* Team */}
      <div id="team" className="max-w-container py-20 w-full flex flex-col gap-16 items-center justify-center">
        <h2 className="text-5xl text-primary font-semibold flex flex-col gap-2 items-center">
          Innovative Team
          <div className="w-10 h-[2px] bg-primary " />
        </h2>
        <p className="text-center text-balance w-1/2">Lorem Ipsum is simply dummy text of the printing and
          typeseing industry Lorem Ipsum has been the industry's standard
          dummy text Lorem is simply dummy text of the printing and</p>
        <TeamCards />

      </div>








    </div>
  );
}
