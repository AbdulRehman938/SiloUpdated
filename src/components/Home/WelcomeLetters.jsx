import { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BASE_LAYOUT = [
  { char: 'W', size: 155, x: -45, y: -160, rotate: -40, z: 5 },
  { char: 'e', size: 115, x: 55, y: -110, rotate: -25, z: 7 },
  { char: 'l', size: 200, x: 140, y: -90, rotate: -25, z: 10 },
  { char: 'c', size: 155, x: 0, y: -80, rotate: 25, z: 11 },
  { char: 'o', size: 155, x: 70, y: -60, rotate: 45, z: 12 },
  { char: 'm', size: 235, x: 95, y: 0, rotate: 0, z: 15 },
  { char: 'e', size: 115, x: 290, y: 95, rotate: 0, z: 16 },
];

const DROP_ORDER = [6, 4, 5, 3, 2, 1, 0];

export const WelcomeLetters = () => {
  const containerRef = useRef(null);

  const { OFFSET_X, OFFSET_Y, SCALE } = useMemo(() => {
    // Calculate DPR-normalized viewport width
    const dpr = typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1;
    const physicalWidth = typeof window !== 'undefined' ? window.innerWidth : 1440;
    const w = physicalWidth / dpr; // Logical viewport width

  // Mobile breakpoints (keep client's logic)
  // Make very small phones still render letters (avoid scale 0 which hides them)
  if (w <= 385) return { OFFSET_X: -55, OFFSET_Y: 170, SCALE: 0.8 };
    if (w <= 425) return { OFFSET_X: -40, OFFSET_Y: 170, SCALE: 0.9 }; // 425px mobile
    if (w <= 428) return { OFFSET_X: -40, OFFSET_Y: 170, SCALE: 0.9 }; // 428px mobile
    if (w <= 440) return { OFFSET_X: -40, OFFSET_Y: 170, SCALE: 0.9 }; // 425px mobile
    if (w <= 480) {
      const t = (w - 425) / (480 - 425);
      return {
        OFFSET_X: -40 + (100 - (-40)) * t,
        OFFSET_Y: 100 + (20 - 100) * t,
        SCALE: 1.26 + (0.85 - 1.26) * t,
      };
    }
    // if (w <= 700) return { OFFSET_X: 120, OFFSET_Y: 200, SCALE: 0.95 };
    
    // Tablet/Desktop breakpoints - adjusted down 20% and shifted left
    if (w <= 768) return { OFFSET_X: -45, OFFSET_Y: -350, SCALE: 1.25 };
    if (w <= 900) return { OFFSET_X: -45, OFFSET_Y: -250, SCALE: 1.25 }; // md
    if (w <= 1024) return { OFFSET_X: -20, OFFSET_Y: -250, SCALE: 1.5 }; // lg
    if (w <= 1440) return { OFFSET_X: 0, OFFSET_Y: -160, SCALE: 2.0 }; // 1440 - slightly smaller
    if (w <= 1536) return { OFFSET_X: 20, OFFSET_Y: -160, SCALE: 1.8 }; // xl
    
    // 2xl and above - adjusted to fit within parent and cover full height
    return { OFFSET_X: -30, OFFSET_Y: -180, SCALE: 2.3 };
  }, []);

  const LETTER_LAYOUT = useMemo(
    () =>
      BASE_LAYOUT.map((item) => ({
        ...item,
        x: item.x + OFFSET_X,
        y: item.y + OFFSET_Y,
      })),
    [OFFSET_X, OFFSET_Y]
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll('.welcome-letter');
    const container = containerRef.current.parentElement;
    const containerHeight = container ? container.offsetHeight : 500;
    
    // Check if mobile view
    const isMobile = window.innerWidth < 768;
    
    // Desktop: start from top of viewport, Mobile: start from top of container
    const startY = isMobile ? -containerHeight - 100 : -window.innerHeight - 600;
    
    // Use the parent div as trigger instead of the component itself
    const triggerElement = isMobile 
      ? document.getElementById('welcome-parent-div-mobile')
      : document.getElementById('welcome-parent-div');
    const startPosition = isMobile ? 'top bottom' : 'top 80%';

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement || containerRef.current,
        start: startPosition,
        once: true,
        id: 'welcome-letters',
      },
    });

    letters.forEach((letter, index) => {
      const dropIndex = DROP_ORDER.indexOf(index);
      const { x, y, rotate } = LETTER_LAYOUT[index];
      const startTime = (letters.length - 1 - index) * 0.15; // Animate from right to left (e, m, o, c, l, e, W)
      const fallDuration = 0.8 + Math.random() * 0.2;

      tl.fromTo(
        letter,
        { y: startY, x, rotate, opacity: 0, scaleY: 1, scaleX: 1 },
        { y, opacity: 1, duration: fallDuration, ease: 'power3.in' },
        startTime
      );

      tl.to(
        letter,
        { scaleY: 0.55, scaleX: 1.35, duration: 0.18, ease: 'power4.out' },
        startTime + fallDuration
      );

      tl.to(
        letter,
        { y: y - 25, scaleY: 1.2, scaleX: 0.9, duration: 0.28, ease: 'power2.out' },
        startTime + fallDuration + 0.05
      );

      tl.to(
        letter,
        { y, scaleY: 1, scaleX: 1, duration: 0.55, ease: 'elastic.out(1, 0.4)' },
        startTime + fallDuration + 0.35
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getById('welcome-letters')?.kill();
      ScrollTrigger.refresh();
    };
  }, [LETTER_LAYOUT]);

  return (
    <div
      ref={containerRef}
      style={{
        transform: `scale(${SCALE})`,
        transformOrigin: 'center center',
      }}
      className='relative overflow-visible flex gap-0 font-epilogue font-semibold leading-none tracking-[-0.03em] select-none'
    >
      {LETTER_LAYOUT.map((item, i) => (
        <span
          key={i}
          className='absolute welcome-letter will-change-transform'
          style={{
            fontSize: `${item.size}px`,
            transform: `translate(${item.x}px, ${item.y}px) rotate(${item.rotate}deg)`,
            zIndex: -1,
          }}
        >
          {item.char}
        </span>
      ))}
    </div>
  );
};
