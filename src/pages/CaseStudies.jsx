import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Section2 from "../components/About/Section2";
import Section from "../components/Home/Section";
import LazyImage from "../components/Common/LazyImage";
import LazySection from "../components/Common/LazySection";
import { usePageMeta } from "../hooks/usePageMeta";

const CaseStudies = () => {
  usePageMeta(
    'Case Studies | Silo Creative - Our Work & Results',
    'See how Silo Creative has helped brands achieve incredible results with UGC and content creation. Explore our portfolio of successful campaigns.'
  )

  const [showVideoSection, setShowVideoSection] = useState(true);
  const [showVimeoModal, setShowVimeoModal] = useState(false);
  // Vimeo video URL from Hero.jsx
  const vimeoUrl = "https://player.vimeo.com/video/76979871";
  return (
    <div className="max-w-[1280px] mx-auto h-auto flex flex-col justify-start items-center mt-16 xl:mt-12 lg:mt-40 md:mt-40">
      <section
        className="mt-10 mb-10 flex items-start w-full justify-start px-4 md:px-0 pb-6 md:pb-12 lg:pb-16 overflow-hidden"
        aria-label="About Silo - Company introduction"
      >
        <div className="flex flex-col justify-between xl:grid xl:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 max-w-full mx-auto w-full items-start md:items-center mt-0 xl:mt-16 lg:mt-0 md:mt-0">
          {/* Text Content Area */}
          <div
            className="flex flex-col h-full justify-start xl:justify-between space-y-4 sm:space-y-6 md:space-y-8 order-1 xl:order-1 xl:pr-6 items-start w-[90%] md:-ml-16 xl:ml-0 "
            role="main"
          >
            {/* Main Heading - Zoom & Small Laptop Optimized */}
            <h1
              className="font-bold text-black text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[56px] leading-3 text-left px-2 sm:px-0 mt-6 sm:mt-0"
              style={{
                opacity: 1,
                fontFamily: "Epilogue, sans-serif",
                fontWeight: 700,
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              You're going to want to see these.
            </h1>
            {/* Text and Buttons Container */}
            <div className="flex flex-col gap-3 sm:gap-4 items-start w-full px-2 sm:px-0">
              {/* Brand Statement - Zoom & Small Laptop Optimized */}
              <div>
                <p
                  className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] leading-relaxed text-left max-w-full xl:max-w-lg px-2 sm:px-0 font-epilogue"
                  style={{
                    opacity: 1,
                    fontWeight: 400,
                    fontFamily: "Epilogue, sans-serif",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                >
                  The Silo was built on the belief that content should be more
                  than just constant output, it should be intentional,
                  strategic, and deeply rooted in a brand's purpose.
                </p>
              </div>
              {/* Buttons - Zoom & Small Laptop Optimized */}
              <div className="flex flex-row gap-3 sm:gap-4 items-start w-full sm:w-auto xl:mx-0">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF322E] h-[55px] px-6 py-3 text-xs font-bold tracking-wide text-white border-transparent relative overflow-hidden group"
                >
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                    <FaChevronRight className="text-white w-5 h-5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-3 group-hover:scale-[140%]" />
                  </div>
                  <span className="block transition-all whitespace-nowrap duration-300 ease-in-out text-base group-hover:translate-x-40">
                    Let's chat
                  </span>
                </a>

                <a
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-[1px] border-brand h-[55px] px-6 py-3 text-xs font-bold tracking-wide text-brand relative overflow-hidden group"
                >
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                    <FaChevronRight className="text-brand w-5 h-5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-3 group-hover:scale-[140%]" />
                  </div>
                  <span className="block transition-all whitespace-nowrap duration-300 ease-in-out text-base group-hover:translate-x-40">
                    Our services
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Visual Content Area - Responsive Layout */}
          <div className="order-2 xl:order-2 w-full mt-10 md:mt-0">
            {/* Mobile Layout: Large image first, small image + video section below */}
            <div className="flex flex-col md:hidden gap-4">
              {/* Large Image */}
              <div className="w-full">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717301/studies1_lzgldj.png"
                  alt="Silo team member showcasing brand identity"
                  className="w-full h-auto object-cover max-h-[350px]"
                  loading="lazy"
                />
              </div>
              {/* Small Image + Video Section in same row */}
              <div className="flex flex-row items-center justify-center gap-3 w-full">
                {/* Small Image */}
                <div className="hidden sm:flex justify-center">
                  <img
                    src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717296/studies2_a4olwb.png"
                    alt="The Silo brand representation"
                    className="w-32 h-auto object-cover max-h-[120px]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* MD Layout: Large image left, small image + video section right */}
            <div className="hidden md:flex xl:hidden gap-6">
              {/* Large Image */}
              <div className="flex-1">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717301/studies1_lzgldj.png"
                  alt="Silo team member showcasing brand identity"
                  className="w-full h-auto object-cover max-h-[500px] lg:max-h-[550px]"
                  loading="lazy"
                />
              </div>
              {/* Right Column: Small image + video section */}
              <div className="flex flex-col gap-4 justify-between items-end">
                {/* Small Image */}
                <div>
                  <img
                    src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717296/studies2_a4olwb.png"
                    alt="The Silo brand representation"
                    className="w-48 lg:w-56 h-auto object-cover max-h-[300px] lg:max-h-[350px]"
                    loading="lazy"
                  />
                </div>
                {/* Video Section - Bottom of small image (conditionally rendered) */}
                {showVideoSection && (
                  <div className="flex items-center w-full justify-end">
                    {/* Vertical Text Outside */}
                    <div className="flex flex-col items-center mr-2 max-w-[12px]">
                      <span className="text-black font-bold text-xs tracking-wide rotate-[-90deg] whitespace-nowrap">
                        Cut through the noise
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* XL Layout: Large image left, small image + video section right */}
            <div className="hidden xl:flex gap-6">
              {/* Large Image */}
              <div className="flex-1 max-w-[460px]">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717301/studies1_lzgldj.png"
                  alt="Silo team member showcasing brand identity"
                  className="w-full h-auto object-cover max-h-[550px] 2xl:max-h-none"
                  loading="lazy"
                />
              </div>
              {/* Right Column: Small image + video section */}
              <div className="flex flex-col justify-between items-end">
                {/* Small Image */}
                <div className="mb-4">
                  <img
                    src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717296/studies2_a4olwb.png"
                    alt="The Silo brand representation"
                    className="w-64 2xl:w-[328px] h-auto object-cover xl:min-h-[200px] 2xl:max-h-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative left-1/2 -translate-x-1/2 w-screen mx-auto h-[1px] bg-black" />
      <LazySection>
        <div
          id="done"
          className="max-w-[1280px] pb-0 px-4 md:px-10 lg:px-0 mx-auto"
        >
          <div className="mx-auto ">
            <div
              className="hidden lg:flex items-center justify-around space-x-20 py-16 border-b border-b-black group relative cursor-pointer"
              onClick={() => (window.location.href = "/case-study/1")}
            >
              <div className="w-1/3 h-96  transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/Smoothie_dhwlm0.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-white overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:rotate-0 lg:group-hover:pointer-events-auto">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717289/smoothie-hover_znf5gc.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-[30%] flex flex-col justify-center items-start gap-4 text-left">
                <h3 className="text-4xl font-bold text-black">
                  Smoothie Smash
                </h3>
                <p className="text-xl text-black font-bold">Food & Drink</p>
                <p className="text-lg font-semibold text-black">
                  We built a TikTok-first launch campaign for this food
                  start-up. Fast cuts, bold graphics, and creator-led taste
                  tests turned into millions of views and a sell-out first week.
                </p>
                <div className="flex space-x-2 mt-2">
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    UGC
                  </span>
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    TikTok
                  </span>
                </div>
                <a
                  href="/case-study/1"
                  className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                >
                  <span>View Project</span>
                  <span
                    aria-hidden
                    className="inline-block ml-1 transform transition-transform duration-300 ease-in-out lg:group-hover:translate-x-2"
                  >
                    <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                  </span>
                </a>
              </div>
            </div>

            <div
              className="block md:flex lg:hidden items-center w-full mx-auto justify-center md:space-x-10 space-y-3 md:space-y-0 border-b border-b-black py-12 group relative mt-0 cursor-pointer"
              onClick={() => (window.location.href = "/case-study/1")}
            >
              {/* Text content first */}
              <div className="w-full md:w-[80%] flex flex-col justify-center items-start gap-4 text-left">
                <h3 className="text-4xl font-bold text-black">
                  Smoothie Smash
                </h3>
                <p className="text-xl text-black font-bold">Food & Drink</p>
                <p className="text-lg font-semibold text-black">
                  We built a TikTok-first launch campaign for this food
                  start-up. Fast cuts, bold graphics, and creator-led taste
                  tests turned into millions of views and a sell-out first week.
                </p>
                <div className="flex space-x-2 mt-2">
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    UGC
                  </span>
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    TikTok
                  </span>
                </div>
                <a
                  href="/case-study/1"
                  className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Project</span>
                  <span
                    aria-hidden
                    className="inline-block ml-1 transform transition-transform duration-300 ease-in-out lg:group-hover:translate-x-2"
                  >
                    <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                  </span>
                </a>
              </div>
              {/* Image second */}
              <div className="w-full md:w-1/2 h-80  relative">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/Smoothie_dhwlm0.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Hover image placeholder */}
                <div className="absolute -right-80 top-0 w-[70%] h-80 bg-white  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:scale-100 overflow-hidden lg:group-hover:rotate-0">
                  <img
                    src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717289/smoothie-hover_znf5gc.png"
                    alt="smoothie"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Second project */}
            <div
              className="hidden lg:flex items-center justify-around space-x-20 border-b py-16 border-b-black group relative cursor-pointer"
              onClick={() => (window.location.href = "/case-study/2")}
            >
              <div className="w-1/3 h-80 xl:h-96 transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717249/Lumen_w2q5zm.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-white overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:rotate-0 lg:group-hover:pointer-events-auto">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717251/lumer-hover_vxhyvl.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-[30%] flex flex-col justify-center items-start gap-4 text-left">
                <h3 className="text-4xl font-bold text-black">Lumin Solar</h3>
                <p className="text-xl text-black font-bold">Energy</p>
                <p className="text-lg font-semibold text-black">
                  For this clean-tech brand we stripped out the jargon and made
                  solar feel simple. Scroll-stopping motion and sharp messaging
                  powered record inbound leads.
                </p>
                <div className="flex space-x-2 mt-2">
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    Motion Design
                  </span>
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    Strategy
                  </span>
                </div>
                <a
                  href="/case-study/2"
                  className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Project</span>
                  <span
                    aria-hidden
                    className="inline-block ml-1 transform transition-transform duration-300 ease-in-out lg:group-hover:translate-x-2"
                  >
                    <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                  </span>
                </a>
              </div>
            </div>

            <div
              className="block md:flex lg:hidden items-center w-full mx-auto justify-center md:space-x-10 space-y-3 md:space-y-0 border-b border-b-black py-12 group relative mt-0 cursor-pointer"
              onClick={() => (window.location.href = "/case-study/2")}
            >
              {/* Text content first */}
              <div className="w-full md:w-[80%] flex flex-col justify-center items-start gap-4 text-left">
                <h3 className="text-4xl font-bold text-black">Lumin Solar</h3>
                <p className="text-xl text-black font-bold">Energy</p>
                <p className="text-lg font-semibold text-black">
                  For this clean-tech brand we stripped out the jargon and made
                  solar feel simple. Scroll-stopping motion and sharp messaging
                  powered record inbound leads.
                </p>
                <div className="flex space-x-2 mt-2">
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    Motion Design
                  </span>
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    Strategy
                  </span>
                </div>
                <a
                  href="/case-study/2"
                  className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Project</span>
                  <span
                    aria-hidden
                    className="inline-block ml-1 transform transition-transform duration-300 ease-in-out lg:group-hover:translate-x-2"
                  >
                    <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                  </span>
                </a>
              </div>
              {/* Image second */}
              <div className="w-full md:w-1/2 h-80  relative">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717249/Lumen_w2q5zm.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Hover image placeholder */}
                <div className="absolute -right-80 top-0 w-[70%] h-64 xl:h-80 bg-white  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:scale-100 overflow-hidden lg:group-hover:rotate-0">
                  <img
                    src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717251/lumer-hover_vxhyvl.png"
                    alt="smoothie"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Third project */}
            <div
              className="hidden lg:flex items-center justify-around space-x-20 py-16 group relative cursor-pointer"
              onClick={() => (window.location.href = "/case-study/3")}
            >
              <div className="w-full lg:w-1/4 h-80  transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/SMART_h3lxc7.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-white overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:rotate-0 lg:group-hover:pointer-events-auto">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717298/stats-hover_hbm23m.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-[30%] flex flex-col justify-center items-start gap-4 text-left">
                <h3 className="text-4xl font-bold text-black">Smart Stats</h3>
                <p className="text-xl text-black font-bold">SaaS</p>
                <p className="text-lg font-semibold text-black">
                  We gave this data platform a face, not just numbers. From
                  explainer animations to punchy LinkedIn posts, we built a
                  visual system that made analytics unmissable.
                </p>
                <div className="flex space-x-2 mt-2">
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    Design
                  </span>
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    B2B
                  </span>
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    LinkedIn Content
                  </span>
                </div>
                <a
                  href="/case-study/3"
                  className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Project</span>
                  <span
                    aria-hidden
                    className="inline-block ml-1 transform transition-transform duration-300 ease-in-out lg:group-hover:translate-x-2"
                  >
                    <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                  </span>
                </a>
              </div>
            </div>

            <div
              className="block md:flex lg:hidden items-center w-full mx-auto justify-center md:space-x-10 space-y-3 md:space-y-0 border-b border-b-black py-12 group relative mt-0 cursor-pointer"
              onClick={() => (window.location.href = "/case-study/3")}
            >
              {/* Text content first */}
              <div className="w-full md:w-[80%] flex flex-col justify-center items-start gap-4 text-left">
                <h3 className="text-4xl font-bold text-black">Smart Stats</h3>
                <p className="text-xl text-black font-bold">SaaS</p>
                <p className="text-lg font-semibold text-black">
                  We gave this data platform a face, not just numbers. From
                  explainer animations to punchy LinkedIn posts, we built a
                  visual system that made analytics unmissable.
                </p>
                <div className="flex space-x-2 mt-2">
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    Design
                  </span>
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    B2B
                  </span>
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    LinkedIn Content
                  </span>
                </div>
                <a
                  href="/case-study/3"
                  className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Project</span>
                  <span
                    aria-hidden
                    className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                  >
                    <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                  </span>
                </a>
              </div>
              {/* Image second */}
              <div className="w-full md:w-1/2 h-72  relative">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/SMART_h3lxc7.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Hover image placeholder */}
                <div className="absolute -right-80 top-0 w-[70%] h-80 bg-white  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:scale-100 overflow-hidden lg:group-hover:rotate-0">
                  <img
                    src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717298/stats-hover_hbm23m.png"
                    alt="smoothie"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto">
            {/* Fourth project */}
            <div
              className="hidden lg:flex items-center justify-around space-x-20 border-y py-16 border-y-black group relative cursor-pointer"
              onClick={() => (window.location.href = "/case-study/4")}
            >
              <div className="w-1/3 h-96  transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/Smoothie_dhwlm0.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-white overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:pointer-events-auto">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717289/smoothie-hover_znf5gc.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-[30%] flex flex-col justify-center items-start gap-4 text-left">
                <h3 className="text-4xl font-bold text-black">
                  Smoothie Smash
                </h3>
                <p className="text-xl text-black font-bold">Food & Drink</p>
                <p className="text-lg font-semibold text-black">
                  We built a TikTok-first launch campaign for this food
                  start-up. Fast cuts, bold graphics, and creator-led taste
                  tests turned into millions of views and a sell-out first week.
                </p>
                <div className="flex space-x-2 mt-2">
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    UGC
                  </span>
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    TikTok
                  </span>
                </div>
                <a
                  href="/case-study/4"
                  className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Project</span>
                  <span
                    aria-hidden
                    className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                  >
                    <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                  </span>
                </a>
              </div>
            </div>

            <div
              className="block md:flex lg:hidden items-center w-full mx-auto justify-center md:space-x-10 space-y-3 md:space-y-0 border-b border-b-black py-12 group relative mt-0 cursor-pointer"
              onClick={() => (window.location.href = "/case-study/4")}
            >
              {/* Text content first */}
              <div className="w-full md:w-[80%] flex flex-col justify-center items-start gap-4 text-left">
                <h3 className="text-4xl font-bold text-black">
                  Smoothie Smash
                </h3>
                <p className="text-xl text-black font-bold">Food & Drink</p>
                <p className="text-lg font-semibold text-black">
                  We built a TikTok-first launch campaign for this food
                  start-up. Fast cuts, bold graphics, and creator-led taste
                  tests turned into millions of views and a sell-out first week.
                </p>
                <div className="flex space-x-2 mt-2">
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    UGC
                  </span>
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    TikTok
                  </span>
                </div>
                <a
                  href="/case-study/4"
                  className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Project</span>
                  <span
                    aria-hidden
                    className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                  >
                    <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                  </span>
                </a>
              </div>
              {/* Image second */}
              <div className="w-full md:w-1/2 h-80  relative">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/Smoothie_dhwlm0.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Hover image placeholder */}
                <div className="absolute -right-80 top-0 w-[70%] h-80 bg-white  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 overflow-hidden group-hover:rotate-0">
                  <img
                    src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717289/smoothie-hover_znf5gc.png"
                    alt="smoothie"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Fifth project */}
            <div
              className="hidden lg:flex items-center justify-around space-x-20 border-b py-16 border-b-black group relative cursor-pointer"
              onClick={() => (window.location.href = "/case-study/5")}
            >
              <div className="w-1/3 h-80 xl:h-96  transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717249/Lumen_w2q5zm.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-white overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:pointer-events-auto">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717251/lumer-hover_vxhyvl.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-[30%] flex flex-col justify-center items-start gap-4 text-left">
                <h3 className="text-4xl font-bold text-black">Lumin Solar</h3>
                <p className="text-xl text-black font-bold">Energy</p>
                <p className="text-lg font-semibold text-black">
                  For this clean-tech brand we stripped out the jargon and made
                  solar feel simple. Scroll-stopping motion and sharp messaging
                  powered record inbound leads.
                </p>
                <div className="flex space-x-2 mt-2">
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    Motion Design
                  </span>
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    Strategy
                  </span>
                </div>
                <a
                  href="/case-study/5"
                  className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Project</span>
                  <span
                    aria-hidden
                    className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                  >
                    <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                  </span>
                </a>
              </div>
            </div>

            <div
              className="block md:flex lg:hidden items-center w-full mx-auto justify-center md:space-x-10 space-y-3 md:space-y-0 border-b border-b-black py-12 group relative mt-0 cursor-pointer"
              onClick={() => (window.location.href = "/case-study/5")}
            >
              {/* Text content first */}
              <div className="w-full md:w-[80%] flex flex-col justify-center items-start gap-4 text-left">
                <h3 className="text-4xl font-bold text-black">Lumin Solar</h3>
                <p className="text-xl text-black font-bold">Energy</p>
                <p className="text-lg font-semibold text-black">
                  For this clean-tech brand we stripped out the jargon and made
                  solar feel simple. Scroll-stopping motion and sharp messaging
                  powered record inbound leads.
                </p>
                <div className="flex space-x-2 mt-2">
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    Motion Design
                  </span>
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    Strategy
                  </span>
                </div>
                <a
                  href="/case-study/5"
                  className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Project</span>
                  <span
                    aria-hidden
                    className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                  >
                    <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                  </span>
                </a>
              </div>
              {/* Image second */}
              <div className="w-full md:w-1/2 h-80  relative">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717249/Lumen_w2q5zm.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Hover image placeholder */}
                <div className="absolute -right-80 top-0 w-[70%] h-64 xl:h-80 bg-white  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 overflow-hidden group-hover:rotate-0">
                  <img
                    src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717251/lumer-hover_vxhyvl.png"
                    alt="smoothie"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Sixth project */}
            <div
              className="hidden lg:flex items-center justify-around space-x-20 py-16 group relative cursor-pointer"
              onClick={() => (window.location.href = "/case-study/6")}
            >
              <div className="w-full lg:w-1/4 h-80  transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/SMART_h3lxc7.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 md:w-1/6 md:h-96 w-full h-64 bg-white overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:pointer-events-auto">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717298/stats-hover_hbm23m.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-[30%] flex flex-col justify-center items-start gap-4 text-left">
                <h3 className="text-4xl font-bold text-black">Smart Stats</h3>
                <p className="text-xl text-black font-bold">SaaS</p>
                <p className="text-lg font-semibold text-black">
                  We gave this data platform a face, not just numbers. From
                  explainer animations to punchy LinkedIn posts, we built a
                  visual system that made analytics unmissable.
                </p>
                <div className="flex space-x-2 mt-2">
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    Design
                  </span>
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    B2B
                  </span>
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    LinkedIn Content
                  </span>
                </div>
                <a
                  href="/case-study/6"
                  className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Project</span>
                  <span
                    aria-hidden
                    className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                  >
                    <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                  </span>
                </a>
              </div>
            </div>

            <div
              className="block md:flex lg:hidden items-center w-full mx-auto justify-center md:space-x-10 space-y-3 md:space-y-0 pt-12 group relative mt-0 cursor-pointer"
              onClick={() => (window.location.href = "/case-study/6")}
            >
              {/* Text content first */}
              <div className="w-full md:w-[80%] flex flex-col justify-center items-start gap-4 text-left">
                <h3 className="text-4xl font-bold text-black">Smart Stats</h3>
                <p className="text-xl text-black font-bold">SaaS</p>
                <p className="text-lg font-semibold text-black">
                  We gave this data platform a face, not just numbers. From
                  explainer animations to punchy LinkedIn posts, we built a
                  visual system that made analytics unmissable.
                </p>
                <div className="flex space-x-2 mt-2">
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    Design
                  </span>
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    B2B
                  </span>
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    LinkedIn Content
                  </span>
                </div>
                <a
                  href="/case-study/6"
                  className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Project</span>
                  <span
                    aria-hidden
                    className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                  >
                    <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                  </span>
                </a>
              </div>
              {/* Image second */}
              <div className="w-full md:w-1/2 h-72  relative">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/SMART_h3lxc7.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Hover image placeholder */}
                <div className="absolute -right-80 top-0 w-[70%] h-80 bg-white  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 overflow-hidden group-hover:rotate-0">
                  <img
                    src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717298/stats-hover_hbm23m.png"
                    alt="smoothie"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>
      <div className="w-screen mx-auto h-[1px] bg-black md:my-28 my-28 relative left-1/2 -translate-x-1/2" />
      <LazySection>
        <Section />
      </LazySection>
      <div className="relative left-1/2 -translate-x-1/2 w-screen mx-auto h-[1px] bg-black" />
    </div>
  );
};

export default CaseStudies;
