import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaPlay } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Cards from "./Cards";
import Interested from "./Interested";
// import OptionalAddOns from "./OptionalAddOns";
import "../../styles/scaling-overrides.css";
import Section from "../Home/Section.jsx";

const Hero = () => {
  const [cmsData] = useState({
    showVideo: true,
    videoUrl: "https://player.vimeo.com/video/76979871",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (!cmsData.showVideo) return;
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const playerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const heroSectionRef = useRef(null);
  const initialVideoPositionRef = useRef(null);
  const [videoPosition, setVideoPosition] = useState({
    top: 0,
    left: 0,
    right: "auto",
    bottom: "auto",
    width: 180,
    height: 130,
  });
  const [videoState, setVideoState] = useState("initial"); // 'initial', 'transitioning', 'fixed', 'absolute'

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      const node = playerRef.current;
      if (!node) return;
      if (!node.contains(e.target)) {
        handleClose();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Capture initial video position
  useEffect(() => {
    if (initialVideoPositionRef.current) {
      const rect = initialVideoPositionRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      setVideoPosition({
        top: rect.top + scrollY,
        left: rect.left,
        right: "auto",
        bottom: "auto",
        width: rect.width,
        height: rect.height,
      });
    }
  }, []);

  // Handle scroll for smooth video animation
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!heroSectionRef.current || !initialVideoPositionRef.current) {
            ticking = false;
            return;
          }

          const heroRect = heroSectionRef.current.getBoundingClientRect();
          const initialRect =
            initialVideoPositionRef.current.getBoundingClientRect();
          const footer = document.querySelector("footer");
          const footerRect = footer?.getBoundingClientRect();

          const scrollY = window.scrollY || window.pageYOffset;
          const initialTop = initialRect.top + scrollY;
          const initialLeft = initialRect.left;
          const initialWidth = initialRect.width;
          const initialHeight = initialRect.height;

          // Target position (bottom right)
          const targetBottom = 24; // 6 * 4px
          const targetRight = 24;
          const targetWidth = 200;
          const targetHeight = 160;

          // Calculate progress (0 to 1) based on hero section scroll
          const scrollEnd = heroRect.height;
          const scrollProgress = Math.max(
            0,
            Math.min(1, -heroRect.top / scrollEnd)
          );

          // Check if footer is approaching
          const bottomOffset = 240; // Reduced to allow video to move lower before stopping
          const footerApproaching =
            footerRect && footerRect.top <= window.innerHeight;

          if (scrollProgress === 0) {
            // At the top - initial position
            setVideoState("initial");
            setVideoPosition({
              top: initialTop,
              left: initialLeft,
              right: "auto",
              bottom: "auto",
              width: initialWidth,
              height: initialHeight,
            });
          } else if (!footerApproaching) {
            // Scrolled - instantly fixed to bottom right
            setVideoState("fixed");
            setVideoPosition({
              top: "auto",
              left: "auto",
              right: targetRight,
              bottom: targetBottom,
              width: targetWidth,
              height: targetHeight,
            });
          } else if (footerApproaching && footerRect) {
            // Footer approaching - absolute position
            setVideoState("absolute");
            const footerTop = footerRect.top + scrollY;
            const calculatedTop = footerTop - targetHeight - bottomOffset;
            setVideoPosition({
              top: calculatedTop,
              left: "auto",
              right: targetRight,
              bottom: "auto",
              width: targetWidth,
              height: targetHeight,
            });
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Call once on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Desktop / larger screens - hidden on small screens */}
      <div
        ref={heroSectionRef}
        className="hidden sm:block sm:min-h-screen pt-8 mt-20"
      >
        <div className="w-full max-w-[1280px] min-h-[calc(100vh-80px)] mx-auto flex flex-col justify-center items-center px-4 md:px-10 lg:px-10 pb-8">
          {/* Video at top center */}
          <div
            ref={initialVideoPositionRef}
            className="w-auto aspect-[9/13] h-[280px] mb-8 shrink-0"
            aria-hidden="true"
          />

          {/* Heading */}
          <div className="flex flex-col items-center w-full mb-6">
            <h1 className="font-bold text-[clamp(95px,17vw,160px)] leading-[0.9] mb-6 text-center">
              What we do
            </h1>

            {/* Description */}
            <p className="text-black text-base font-normal text-center max-w-2xl px-4 mb-8">
              We make content that cuts through the noise. Strategy, UGC,
              design, and motion, built to get noticed and remembered.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FF322E] h-12 hero-btn px-8 py-3 text-sm font-bold tracking-wide text-white border-transparent relative overflow-hidden group"
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                  <FaChevronRight className="text-white w-5 h-5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-[140%]" />
                </div>
                <span className="block transition-all duration-300 ease-in-out text-base group-hover:translate-x-40">
                  Let's chat
                </span>
              </a>

              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-[1px] border-brand h-12 hero-btn px-8 py-3 text-sm font-bold tracking-wide text-brand relative overflow-hidden group"
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                  <FaChevronRight className="text-brand w-5 h-5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-[140%]" />
                </div>
                <span className="block transition-all duration-300 ease-in-out text-base group-hover:translate-x-28">
                  About us
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video - always rendered with smooth animation */}
      {createPortal(
        <div
          ref={videoContainerRef}
          className="service-hero-title hidden sm:flex items-center justify-center service-video z-10"
          style={{
            position:
              videoState === "fixed" && videoPosition.top === "auto"
                ? "fixed"
                : "absolute",
            top:
              videoPosition.top !== "auto"
                ? `${videoPosition.top}px`
                : videoPosition.top,
            left:
              videoPosition.left !== "auto"
                ? `${videoPosition.left}px`
                : videoPosition.left,
            right:
              videoPosition.right !== "auto"
                ? `${videoPosition.right}px`
                : videoPosition.right,
            bottom:
              videoPosition.bottom !== "auto"
                ? `${videoPosition.bottom}px`
                : videoPosition.bottom,
            width: `${videoPosition.width}px`,
            height: `${videoPosition.height}px`,
            transition: "none", // Smooth animation via position updates
          }}
        >
          <VideoPlayer
            containerClassName="w-full h-full"
            onVideoClick={handleOpen}
          />
        </div>,
        document.body
      )}

      <div className="hidden sm:block">
        <Cards />
        <Interested />
        {/* <OptionalAddOns /> */}
        <Section />
        <div className="relative left-1/2 -translate-x-1/2 w-screen h-[1px] bg-black" />
      </div>
      {/* Mobile-only view - visible only on small screens */}
      <div className="block sm:hidden w-full h-auto pt-8 px-4">
        <div className="flex flex-col justify-start items-center gap-10 pb-0 pt-20">
          {/* Video (targeting the same video but sized for mobile) */}
          <div className="mb-2">
            <VideoPlayer
              containerClassName="w-[180px] h-[220px] mx-auto"
              videoClassName="w-full h-[220px] object-cover"
              onVideoClick={handleOpen}
            />
          </div>

          {/* Headline & description (smaller for mobile) */}
          <div className="flex flex-col gap-2 text-center text-black mb-3">
            <h1 className="text-6xl font-black leading-tight">What we do</h1>
            <p className="text-sm leading-relaxed mt-5">
              We make content that cuts through the noise. Strategy, UGC,
              design, and motion, built to get noticed and remembered.
            </p>
          </div>

          {/* Buttons stacked for mobile */}
          <div className="flex gap-3 justify-center w-full px-4 -mt-5">
            <a
              href="/contact"
              className="flex-1 max-w-[160px] inline-flex items-center justify-center gap-2 bg-[#FF322E] h-12 px-4 text-sm font-bold tracking-wide text-white"
            >
              <span className="whitespace-nowrap">Let's chat</span>
            </a>

            <a
              href="/about"
              className="flex-1 max-w-[160px] inline-flex items-center justify-center gap-2 bg-transparent border-[1px] border-brand h-12 px-4 text-sm font-bold tracking-wide text-brand"
            >
              <span>About us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile sections outside h-screen */}
      <div className="block sm:hidden">
        {/* Include cards component (will also be mobile visible) */}
        <div className="mt-6">
          <Cards />
        </div>
        <Interested />
        {/* <OptionalAddOns /> */}
        <Section />
        <div className="relative left-1/2 -translate-x-1/2 w-screen h-[1px] bg-black " />
      </div>

      {open &&
        createPortal(
          <div
            onClick={handleClose}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
          >
            <div
              onClick={handleClose}
              className="absolute inset-0 bg-black/60"
            />

            <div
              ref={playerRef}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[1100px] mx-4 h-[50vh] md:h-[60vh]"
            >
              <iframe
                title="Vimeo player"
                src={`${cmsData.videoUrl}?autoplay=1&muted=0`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                style={{ border: 0, borderRadius: 0 }}
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

function VideoPlayer({
  containerClassName = "",
  videoClassName = "",
  onVideoClick,
}) {
  const videoRef = useRef(null);
  const [isMuted] = useState(true);

  // Always keep video playing
  React.useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = isMuted;
    videoRef.current.play();
  }, [isMuted]);

  // Overlay and play button always visible
  return (
    <div
      className={`relative cursor-pointer ${containerClassName}`}
      onClick={onVideoClick}
    >
      <video
        ref={videoRef}
        className={`w-full h-full object-fill ${videoClassName}`}
        autoPlay
        muted={isMuted}
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/di9tb45rl/video/upload/v1762717692/Demo-video_himxf7.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center gap-4 pointer-events-none">
        <button className="bg-white bg-opacity-80 rounded-full p-3 transition-all pointer-events-none">
          <FaPlay className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
