import { useRef, useEffect } from 'react'

const Hero = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error)
      })
    }
  }, [])

  return (
    <div className='relative w-full h-[50vh] md:h-auto md:aspect-video overflow-hidden'>
      {/* Video Element */}
      <video
        ref={videoRef}
        className='absolute inset-0 w-full h-full object-cover'
        src="https://res.cloudinary.com/di9tb45rl/video/upload/v1762717692/Demo-video_himxf7.mp4"
        loop
        muted
        autoPlay
        playsInline
      />
    </div>
  )
}

export default Hero