import { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const GalleryWithText = ({ heading, text, images }) => {
  const defaultImages = [
    { src: null, alt: "Gallery image 1" },
    { src: null, alt: "Gallery image 2" },
    { src: null, alt: "Gallery image 3" }
  ]
  const displayImages = images || defaultImages

  const containerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    // Only enable scroll animation for screens >= 768px (md and up)
    if (window.innerWidth < 768) {
      gsap.set(textRef.current, { y: 0 });
      return;
    }

    const textEl = textRef.current;
    const containerEl = containerRef.current;

    // Reset position
    gsap.set(textEl, { y: 0 });

    const st = ScrollTrigger.create({
      trigger: containerEl,
      start: 'top 120px',
      end: () =>
        containerEl.offsetHeight - textEl.offsetHeight <= 0
          ? '+=0'
          : `+=${containerEl.offsetHeight - textEl.offsetHeight - 160}`,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const maxY = containerEl.offsetHeight - textEl.offsetHeight - 160;
        gsap.to(textEl, {
          y: progress * maxY,
          ease: 'none',
          duration: 0,
        });
      },
    });

    return () => {
      st.kill();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div ref={containerRef} className='w-full bg-white py-16 md:py-24 px-3 md:px-0 relative'>
      <div className='max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-start'>
        
        {/* Left Images */}
        <div className='w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1'>
          {displayImages.map((image, index) => (
            <div key={index} className='w-full aspect-[4/3] bg-[#DBDBDB] overflow-hidden'>
              {image.src ? (
                <img src={image.src} alt={image.alt || `Gallery image ${index + 1}`} className='w-full h-full object-cover' loading="lazy" />
              ) : (
                <div className='w-full h-full flex items-center justify-center bg-[#DBDBDB]'>
                  <svg className='w-20 h-20 text-[#BABABA]' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z'/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Text */}
        <div className='w-full lg:w-1/2 order-1 lg:order-2 relative' style={{ minHeight: '320px' }}>
          <div
            ref={textRef}
            className='absolute'
          >
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6'>
              {heading || "Mobile-first design that converts"}
            </h2>
            <p className='text-base md:text-lg text-black leading-relaxed'>
              {text || "With 68% of traffic from mobile, every interaction was optimized for touch. The checkout was reduced to three taps, with desktop equally refined."}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryWithText
