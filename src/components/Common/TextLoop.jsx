import React, { useRef, useEffect } from 'react'

export default function TextLoop({ text, speed = 50, direction = 'left', className = '', gap = '2rem', separator = null }) {
  const trackRef = useRef(null)
  const offsetRef = useRef(0)
  const rafRef = useRef(null)

  // Split text by commas and clean up
  const textItems = text.split(',').map(item => item.trim()).filter(item => item.length > 0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    // Ensure smooth looping in both directions.
    // If direction is 'right' we start the track offset halfway so moving right
    // will reveal duplicated content on the left instead of empty space.
    const trackWidth = track.scrollWidth || 0
    if (direction === 'right') {
      // Start halfway through the repeated content
      offsetRef.current = trackWidth / 2
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
    }

    const animate = () => {
      const moveSpeed = direction === 'left' ? speed / 60 : -speed / 60
      offsetRef.current += moveSpeed
      // keep offset within reasonable bounds to avoid huge numbers
      if (offsetRef.current > trackWidth) offsetRef.current -= trackWidth
      if (offsetRef.current < 0) offsetRef.current += trackWidth
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [speed, direction])

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div ref={trackRef} className="inline-flex will-change-transform items-center">
        {Array.from({ length: 20 }).map((_, repeatIndex) => (
          textItems.map((item, itemIndex) => (
            <React.Fragment key={`${repeatIndex}-${itemIndex}`}>
              <span className={className}>
                {item}
              </span>
              {separator && (
                <span 
                  className="mx-4 flex items-center justify-center"
                  style={{ color: 'inherit' }}
                >
                  {separator}
                </span>
              )}
            </React.Fragment>
          ))
        )).flat()}
      </div>
    </div>
  )
}
