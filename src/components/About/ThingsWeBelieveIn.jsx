const ThingsWeBelieveIn = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pb-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-0 bg-white overflow-x-hidden">
      <div className="max-w-full mx-auto w-full">
        {/* Text Section - Zoom & Small Laptop Optimized */}
        <div className="text-left xl:text-left mb-2 md:mb-16 lg:mb-20 px-2 sm:px-0 max-w-4xl mx-auto xl:mx-0">
          {/* Heading - Zoom & Small Laptop Optimized */}
          <h2 
              className="font-bold text-black text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] leading-tight mb-0 sm:mb-4 text-left"
            style={{
              opacity: 1,
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 700,
              lineHeight: '120%',
              letterSpacing: '0%'
            }}
          >
            Things we believe in
          </h2>
          
          {/* Below Text - Zoom & Small Laptop Optimized */}
          <p 
            className="text-black text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-left"
            style={{
              fontWeight: 400,
              lineHeight: '150%',
              letterSpacing: '0%'
            }}
          >
           These are the principles that guide everything we create - grounding our work in <br /> <span className="font-black">authenticity</span>, driving it with <span className="font-black">creativity</span>, and strengthening it through <span className="font-black">strategy</span>.
          </p>
        </div>
        
        {/* Cards Grid - Zoom & Small Laptop Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-4 xl:gap-6 2xl:gap-8">
          {/* First Card - Zoom & Small Laptop Optimized */}
          <div className="w-full max-w-sm mx-auto lg:max-w-[25vw] space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-0 md:px-0 md:mx-0 my-10 md:my-0">
            {/* Red Card with Icon Only */}
            <div 
              className="w-full h-40 sm:h-48 md:h-56 lg:h-48 xl:h-56 2xl:h-60 flex items-center justify-center"
              style={{
                opacity: 1,
                background: '#FF322E'
              }}
            >
              <img 
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1765908400/1_pui4ev.png" 
                alt="Content should mean something icon"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Text Content Below Card */}
            <h3 
              className="font-bold text-black text-lg sm:text-lg md:text-2xl lg:text-xl xl:text2xl 2xl:text-4xl text-left"
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 700,
                lineHeight: '140%',
                letterSpacing: '0%'
              }}
            >
             Strong brands are built on something real.
            </h3>
            
            <p 
              className="text-black text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-relaxed text-left"
              style={{
                fontWeight: 400,
                lineHeight: '150%',
                letterSpacing: '0%'
              }}
            >
             We believe the most impactful work feels real and true to your brand. Whether we are designing a website, shaping your identity or creating content, everything is crafted with intention and aligned to how your audience actually thinks. No filler or forced moments - just work that connects.
            </p>
          </div>
          
          {/* Second Card - Zoom & Small Laptop Optimized */}
          <div className="w-full max-w-sm mx-auto lg:max-w-[25vw] space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-0 mb-10 md:mb-0">
            {/* Red Card with Icon Only */}
            <div 
              className="w-full h-40 sm:h-48 md:h-56 lg:h-48 xl:h-56 2xl:h-60 flex items-center justify-center"
              style={{
                opacity: 1,
                background: '#FF322E'
              }}
            >
              <img 
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1765908401/2_vle5af.png" 
                alt="We create work that sticks icon"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Text Content Below Card */}
            <h3 
              className="font-bold text-black text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-3xl text-left md:text-left lg:text-left"
              style={{
                fontWeight: 700,
                lineHeight: '140%',
                letterSpacing: '0%'
              }}
            >
           Design and storytelling should make people feel.
            </h3>
            
            <p 
              className="text-black text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-relaxed text-left md:text-left lg:text-left"
              style={{
                fontWeight: 400,
                lineHeight: '150%',
                letterSpacing: '0%'
              }}
            >
             We move beyond surface visuals, creating bold ideas across branding, digital design, websites and motion that hold attention. Every project is a chance to craft something distinctive, considered and built to stand out on every screen.
            </p>
          </div>
          
          {/* Third Card - Zoom & Small Laptop Optimized */}
          <div className="w-full max-w-sm mx-auto lg:max-w-[25vw] space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-0 md:col-span-2 lg:col-span-1 md:justify-self-center mb-16 md:mb-0">
            {/* Red Card with Icon Only */}
            <div 
              className="w-full h-40 sm:h-48 md:h-56 lg:h-48 xl:h-56 2xl:h-60 flex items-center justify-center"
              style={{
                opacity: 1,
                background: '#FF322E'
              }}
            >
              <img 
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1765908448/3_cmny76.png" 
                alt="Bold ideas need solid foundation icon"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Text Content Below Card */}
            <h3 
              className="font-bold text-black text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-left"
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 700,
                lineHeight: '140%',
                letterSpacing: '0%'
              }}
            >
             Strategy gives creativity direction.
            </h3>
            
            <p 
              className="text-black text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-relaxed text-left"
              style={{
                fontWeight: 400,
                lineHeight: '150%',
                letterSpacing: '0%'
              }}
            >
            From brand positioning and content frameworks to website structure and digital ecosystems, everything we make is grounded in strategy. Clear thinking guides each design and every piece of content, helping your brand show up with purpose, consistency and impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThingsWeBelieveIn;