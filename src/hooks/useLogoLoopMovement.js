import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2
}

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback()
      window.addEventListener('resize', handleResize)
      callback()
      return () => window.removeEventListener('resize', handleResize)
    }

    const observers = elements.map(ref => {
      if (!ref.current) return null
      const observer = new ResizeObserver(callback)
      observer.observe(ref.current)
      return observer
    })

    callback()

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}

const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? []

    if (images.length === 0) {
      onLoad()
      return
    }

    let remainingImages = images.length
    const handleImageLoad = () => {
      remainingImages -= 1
      if (remainingImages === 0) {
        onLoad()
      }
    }

    images.forEach(img => {
      const htmlImg = img
      if (htmlImg.complete) {
        handleImageLoad()
      } else {
        htmlImg.addEventListener('load', handleImageLoad, { once: true })
        htmlImg.addEventListener('error', handleImageLoad, { once: true })
      }
    })

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad)
        img.removeEventListener('error', handleImageLoad)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}

const useAnimationLoop = (trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover) => {
  const rafRef = useRef(null)
  const lastTimestampRef = useRef(null)
  const offsetRef = useRef(0)
  const velocityRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (seqWidth > 0) {
      offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
    }

    if (prefersReduced) {
      track.style.transform = 'translate3d(0, 0, 0)'
      return () => {
        lastTimestampRef.current = null
      }
    }

    const animate = timestamp => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp
      }

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000
      lastTimestampRef.current = timestamp

      const target = pauseOnHover && isHovered ? 0 : targetVelocity

      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU)
      velocityRef.current += (target - velocityRef.current) * easingFactor

      if (seqWidth > 0) {
        offsetRef.current += velocityRef.current * deltaTime
        // keep offset within [0, seqWidth) so the visible translation wraps
        // This ensures movement appears infinite regardless of direction
        offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth
        const translateX = -offsetRef.current
        track.style.transform = `translate3d(${translateX}px, 0, 0)`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      lastTimestampRef.current = null
    }
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef])
}

export function useLogoLoopMovement({ logos, gap = 32, logoHeight = 28, speed = 120, direction = 'left', pauseOnHover = true, stripCoverage = 2 }) {
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const seqRef = useRef(null)

  const [seqWidth, setSeqWidth] = useState(0)
  const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES)
  const [isHovered, setIsHovered] = useState(false)

  const targetVelocity = useMemo(() => {
    const magnitude = Math.abs(speed)
    const directionMultiplier = direction === 'left' ? 1 : -1
    const speedMultiplier = speed < 0 ? -1 : 1
    return magnitude * directionMultiplier * speedMultiplier
  }, [speed, direction])

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0
    const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0

    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth))
      // Create enough copies for infinite scrolling without visible repetition
      const copiesNeeded = Math.ceil((containerWidth * Math.max(1, stripCoverage)) / sequenceWidth) + 20
      setCopyCount(Math.max(50, copiesNeeded))
    }
  }, [])

  useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight])
  useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight])

  useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover)

  const cssVariables = useMemo(
    () => ({
      '--logoloop-gap': `${gap}px`,
      '--logoloop-logoHeight': `${logoHeight}px`
    }),
    [gap, logoHeight]
  )

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsHovered(true)
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsHovered(false)
  }

  return {
    containerRef,
    trackRef,
    seqRef,
    seqWidth,
    copyCount,
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    cssVariables
  }
}

export default useLogoLoopMovement
