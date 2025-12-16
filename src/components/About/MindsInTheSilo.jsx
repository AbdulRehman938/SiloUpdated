import { useState, useEffect, useRef, useCallback } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const MindsInTheSilo = () => {
  // Carousel state management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [mouseStart, setMouseStart] = useState(null);
  const [mouseEnd, setMouseEnd] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Viewport animation state
  const [cardsInViewport, setCardsInViewport] = useState(new Set());
  const cardRefs = useRef([]);

  // Carousel data - team members + special card
  const carouselData = [
    {
      id: "ruby-turbett",
      type: "team-member",
      name: "Ruby Turbett",
      title: "Founder",
      description:
        "Ruby has a decade of marketing experience, having built a finance-focused agency before leaning into her passion for social. She leads with sharp thinking and builds strong client relationships. Outside work, she’s at pilates, boxing or planning her next city break.",
      imageUrl:
        "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717229/Carousal1_qyrnxy.png",
    },
    {
      id: "hailey-hippolyte",
      type: "team-member",
      name: "Hailey Hippolyte",
      title: "Head of Social & Creator Partnerships",
      description:
        "Hailey turns ideas into standout stories and thoughtful collaborations. With a balance of data and creativity, she helps brands connect in a lasting way. She thrives on bringing people and ideas together, often found chasing sunsets when she’s off the clock.",
      imageUrl:
        "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717231/Carousal2_hnaif5.png",
    },
    {
      id: "will-carter",
      type: "team-member",
      name: "Will Carter",
      title: "Creative Digital Designer",
      description:
        "Will designs clean, human-focused digital experiences with a balance of creativity and practical thinking. He helps brands show up with clarity and purpose, turning ideas into simple products people enjoy using. When he’s not working, he’s likely on a padel court perfecting his backhand.",
      imageUrl:
        "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717231/Carousal4_inzouv.png",
    },
    {
      id: "join-us",
      type: "special-card",
      title: "Think you’re the right fit for our team?",
      buttonText: "Current Vacancies",
      description:
        "Can’t see an opening that fits you? Get in touch anyway - we’re always on the lookout for our next team-mates!",
    },
  ];

  // Enhanced responsive breakpoint detection
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Intersection Observer for viewport-based animations
  const observerCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      const cardIndex = parseInt(entry.target.dataset.cardIndex);

      setCardsInViewport((prev) => {
        const newSet = new Set(prev);

        // Card is entering viewport (even 1% visible)
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          newSet.add(cardIndex);
        }
        // Card is completely out of viewport
        else if (!entry.isIntersecting && entry.intersectionRatio === 0) {
          newSet.delete(cardIndex);
        }

        return newSet;
      });
    });
  }, []);

  // Setup intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.01], // Trigger at 0% (completely out) and 1% (barely in)
    });

    // Observe all card elements
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [observerCallback]);

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      // Compute cards-per-view for previous and new widths so we can reset slide on breakpoint change
      const prevWidth = viewportWidth;
      const getCardsPerView = (w) => {
        if (w < 768) return 1;
        if (w < 1280) return 2; // md and lg show 2 cards
        return 3; // xl and up show 3 cards
      };

      const prevCards = getCardsPerView(prevWidth);
      const newCards = getCardsPerView(width);

      if (newCards !== prevCards) {
        setCurrentSlide(0);
      }

      setViewportWidth(width);
    };

    // Initial check
    checkViewport();

    // Debounced resize handler for better performance
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkViewport, 150);
    };

    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [viewportWidth]);

  // Dynamic slide calculation based on viewport width
  const getLayoutForWidth = (w) => {
    // returns { cardsPerView, cardWidth, gap }
    if (w < 768) {
      return { cardsPerView: 1, cardWidth: Math.min(320, w - 40), gap: 12 };
    }
    if (w < 1024) {
      // md: show 2 cards, calculate width to fit properly
      const availableWidth = w - 80; // account for padding
      const cardWidth = Math.min(340, (availableWidth - 24) / 2);
      return { cardsPerView: 2, cardWidth, gap: 24 };
    }
    if (w < 1280) {
      // lg: show 2 cards, calculate width to fit properly
      const availableWidth = w - 100;
      const cardWidth = Math.min(380, (availableWidth - 24) / 2);
      return { cardsPerView: 2, cardWidth, gap: 24 };
    }
    // xl and up: show 3 cards, calculate width to fit properly
    const availableWidth = w - 120;
    const cardWidth = Math.min(380, (availableWidth - 48) / 3);
    return { cardsPerView: 3, cardWidth, gap: 24 };
  };

  const { cardsPerView, cardWidth, gap } = getLayoutForWidth(viewportWidth);
  const totalSlides =
    cardsPerView === 1
      ? carouselData.length
      : Math.max(1, carouselData.length - cardsPerView + 1);

  // Navigation functions with faster transitions
  const goToNextSlide = () => {
    if (!isTransitioning && currentSlide < totalSlides - 1) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const goToPrevSlide = () => {
    if (!isTransitioning && currentSlide > 0) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev - 1);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  // Enhanced touch gesture handlers with scroll conflict prevention
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);

    // Prevent horizontal scroll interference on all screen sizes
    if (touchStart) {
      const currentX = e.targetTouches[0].clientX;
      const diffX = Math.abs(currentX - touchStart);

      // If horizontal movement is significant, prevent default to avoid scroll conflicts
      if (diffX > 10) {
        e.preventDefault();
      }
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    // Trigger swipe for all screen sizes with boundary checks
    if (isLeftSwipe && currentSlide < totalSlides - 1) {
      goToNextSlide();
    } else if (isRightSwipe && currentSlide > 0) {
      goToPrevSlide();
    }

    // Reset touch states
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setMouseEnd(null);
    setMouseStart(e.clientX);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    setMouseEnd(e.clientX);
    e.preventDefault();
  };

  const handleMouseUp = () => {
    if (!isMouseDown || !mouseStart || !mouseEnd) {
      setIsMouseDown(false);
      return;
    }

    const distance = mouseStart - mouseEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < totalSlides - 1) {
      goToNextSlide();
    } else if (isRightSwipe && currentSlide > 0) {
      goToPrevSlide();
    }

    setIsMouseDown(false);
    setMouseStart(null);
    setMouseEnd(null);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setMouseStart(null);
    setMouseEnd(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Cleanup any active timers on unmount
  useEffect(() => {
    return () => {
      // Clear any pending transition timeouts
      setIsTransitioning(false);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-start justify-center py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-white overflow-x-hidden">
      <div className="max-w-full mx-auto w-full">
        {/* Header Section - Zoom & Small Laptop Optimized */}
        <div className="text-left xl:text-left mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-2 sm:px-0">
          <h2
            className="font-bold text-black text-4xl sm:text-xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-[48px] leading-tight mb-3 sm:mb-4"
            style={{
              opacity: 1,
              fontFamily: "Epilogue, sans-serif",
              fontWeight: 700,
              lineHeight: "120%",
              letterSpacing: "0%",
            }}
          >
            Minds in the Silo
          </h2>

          <p
            className="text-black text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl xl:mx-0"
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 400,
              lineHeight: "150%",
              letterSpacing: "0%",
            }}
          >
            Behind The Silo is a collective of storytellers, designers, and
            social minds who live and breathe content - building brands with
            creativity and strategy.
          </p>
        </div>

        {/* Carousel Container - Mobile Optimized */}
        <div
          className="relative"
          role="region"
          aria-label="Team members carousel"
          aria-live="polite"
        >
          {/* Cards Container - Mobile Enhanced with Framer Motion */}
          <div
            className="overflow-hidden w-full px-2 sm:px-4 lg:px-0 lg:max-w-full lg:mx-auto"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            role="group"
            aria-label={`Slide ${currentSlide + 1} of ${totalSlides}`}
            style={{ touchAction: "pan-y pinch-zoom" }}
          >
            <motion.div
              className="flex gap-3 sm:gap-4 md:gap-6 cursor-grab active:cursor-grabbing select-none"
              drag="x"
              dragConstraints={{
                left:
                  -(cardWidth + gap) *
                  Math.max(0, carouselData.length - cardsPerView),
                right: 0,
              }}
              dragElastic={0.2}
              dragMomentum={false}
              onDragStart={() => {
                setIsDragging(true);
                document.body.style.userSelect = "none";
              }}
              onDragEnd={(event, info) => {
                setIsDragging(false);
                document.body.style.userSelect = "";
                const offset = info.offset.x;
                const velocity = info.velocity.x;

                if (Math.abs(offset) > 50 || Math.abs(velocity) > 300) {
                  if (offset > 0 && currentSlide > 0) {
                    goToPrevSlide();
                  } else if (offset < 0 && currentSlide < totalSlides - 1) {
                    goToNextSlide();
                  }
                }
              }}
              animate={{
                x: -currentSlide * (cardWidth + gap),
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                mass: 0.5,
              }}
              style={{
                width: `${
                  cardWidth * carouselData.length +
                  gap * (carouselData.length - 1)
                }px`,
              }}
            >
              {carouselData.map((item, index) => {
                const isInViewport = cardsInViewport.has(index);

                return (
                  <motion.div
                    key={item.id}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                      if (el) el.dataset.cardIndex = index;
                    }}
                    className="flex-shrink-0"
                    style={{ width: `${cardWidth}px` }}
                    initial={{ opacity: 0, scale: 0.8, y: 50, rotateY: -15 }}
                    animate={{
                      opacity: isInViewport ? 1 : 0,
                      scale: isInViewport ? 1 : 0.8,
                      y: isInViewport ? 0 : 50,
                      rotateY: isInViewport ? 0 : -15,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                  >
                    {item.type === "team-member" ? (
                      // Team Member Card - No fading animations
                      <motion.div
                        className="bg-white h-full flex flex-col border-[1px] p-1 transition-all duration-200"
                        style={{
                          minHeight: "300px",
                          pointerEvents: "auto",
                          borderColor:
                            cardsPerView === 1 && isInViewport
                              ? "transparent"
                              : "transparent",
                        }}
                        onMouseEnter={(e) => {
                          if (!isDragging && window.innerWidth >= 768) {
                            e.currentTarget.style.borderColor = "transparent";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (cardsPerView !== 1 || !isInViewport) {
                            e.currentTarget.style.borderColor = "transparent";
                          }
                        }}
                        whileHover={!isDragging ? {} : {}}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={item.imageUrl}
                          alt={`${item.name} - Team Member`}
                          className="w-full h-auto object-cover flex-1 max-h-[22rem] lg:max-h-[22rem] md:max-h-[30rem]"
                          loading="lazy"
                          draggable={false}
                        />

                        {/* Text Content - No animations */}
                        <div className="mt-0 pt-3 sm:pt-3 lg:pt-4">
                          <h3 className="font-semibold text-black text-xl sm:text-base lg:text-2xl text-left">
                            {item.name}
                          </h3>
                          <p className="text-black text-base sm:text-sm lg:text-xl text-left mb-5 font-normal">
                            {item.title}
                          </p>
                          <p className="text-black text-sm lg:text-lg leading-relaxed text-left font-normal">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      // Special Card - Viewport-based animations
                      <motion.div
                        className=" p-3 sm:p-4 lg:p-6 xl:p-8 h-full flex flex-col justify-center items-center text-left border-[1px] group"
                        style={{
                          minHeight: "300px",
                          backgroundColor: "#FFE5E5",
                          borderColor: "#FF322E",
                          pointerEvents: isDragging ? "none" : "auto",
                        }}
                        whileHover={
                          !isDragging
                            ? {
                                borderColor: "#FF1E1A",
                                rotate: 0,
                              }
                            : {}
                        }
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="space-y-6 sm:space-y-4 lg:space-y-6 xl:space-y-8 max-w-xs"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: isInViewport ? 1 : 0,
                            scale: isInViewport ? 1 : 0.8,
                          }}
                          transition={{
                            duration: 0.6,
                            delay: isInViewport ? 0.2 : 0,
                          }}
                        >
                          <motion.h3
                            className="font-bold text-black text-3xl text-center w-[90%] md:text-4xl md:w-[100%] mx-auto sm:text-xl lg:text-2xl xl:text-3xl leading-tight"
                            style={{
                              fontFamily: "Epilogue, sans-serif",
                              fontWeight: 700,
                              lineHeight: "120%",
                              letterSpacing: "0%",
                            }}
                            initial={{ opacity: 0, scale: 0.7, rotateZ: -5 }}
                            animate={{
                              opacity: isInViewport ? 1 : 0,
                              scale: isInViewport ? 1 : 0.7,
                              rotateZ: isInViewport ? 0 : -5,
                            }}
                            transition={{
                              duration: 0.6,
                              delay: isInViewport ? 0.3 : 0,
                            }}
                          >
                            {item.title}
                          </motion.h3>

                          <motion.a
                            href="/careers"
                            className="inline-flex items-center justify-center gap-2 bg-brand h-12 px-8 py-3 text-sm font-bold tracking-wide text-white border-transparent relative overflow-hidden group w-[80%] mx-auto ml-9"
                            style={{
                              fontFamily: "DM Sans, sans-serif",
                              fontWeight: 700,
                            }}
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{
                              opacity: isInViewport ? 1 : 0,
                              y: isInViewport ? 0 : 20,
                              scale: isInViewport ? 1 : 0.8,
                            }}
                            transition={{
                              duration: 0.6,
                              delay: isInViewport ? 0.4 : 0,
                            }}
                          >
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                              <FaChevronRight className="text-white w-5 h-5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-[140%]" />
                            </div>
                            <span className="block transition-all duration-300 ease-in-out text-base group-hover:translate-x-80">
                              {item.buttonText}
                            </span>
                          </motion.a>

                          <motion.p
                            className="text-black text-sm text-center w-[90%] mx-auto md:w-[100%] sm:text-sm lg:text-base leading-relaxed"
                            style={{
                              fontFamily: "DM Sans, sans-serif",
                              fontWeight: 600,
                              lineHeight: "150%",
                              letterSpacing: "0%",
                            }}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{
                              opacity: isInViewport ? 1 : 0,
                              y: isInViewport ? 0 : 15,
                            }}
                            transition={{
                              duration: 0.6,
                              delay: isInViewport ? 0.5 : 0,
                            }}
                          >
                            {item.description}
                          </motion.p>
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation Controls - Mobile Optimized */}
          <div className="flex justify-between items-center mt-6 sm:mt-8 w-full pr-2 sm:pr-4 lg:max-w-full lg:mx-auto lg:pr-10">
            {/* Navigation Dots - Mobile Enhanced */}
            <div className="flex space-x-1 sm:space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentSlide(index);
                      setTimeout(() => setIsTransitioning(false), 300);
                    }
                  }}
                  className={`w-2 h-2 sm:w-3 sm:h-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                    currentSlide === index
                      ? "bg-red-500"
                      : "bg-red-200 hover:bg-red-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={currentSlide === index ? "true" : "false"}
                />
              ))}
            </div>

            {/* Navigation Arrows - Mobile Enhanced */}
            <div className="flex space-x-1 sm:space-x-2">
              <button
                onClick={goToPrevSlide}
                disabled={isTransitioning || currentSlide === 0}
                className={`w-10 h-10 sm:w-12 sm:h-12 border border-red-500 text-red-500 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-base sm:text-lg ${
                  isTransitioning || currentSlide === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-red-50 active:bg-red-100"
                }`}
                aria-label="Previous slide"
              >
                <HiArrowLeft />
              </button>
              <button
                onClick={goToNextSlide}
                disabled={isTransitioning || currentSlide === totalSlides - 1}
                className={`w-10 h-10 sm:w-12 sm:h-12 border border-red-500 text-red-500 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-base sm:text-lg ${
                  isTransitioning || currentSlide === totalSlides - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-red-50 active:bg-red-100"
                }`}
                aria-label="Next slide"
              >
                <HiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindsInTheSilo;
