import { useRef, useEffect, useCallback, memo } from 'react'

interface FadingVideoProps {
  src: string
  className: string
  style?: React.CSSProperties
}

const FadingVideo = memo(function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number | null>(null)
  const fadingOutRef = useRef(false)
  const FADE_MS = 500
  const FADE_OUT_LEAD = 0.55

  const fadeTo = useCallback((target: number, duration: number) => {
    const video = videoRef.current
    if (!video) return
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    const start = performance.now()
    const startOp = parseFloat(video.style.opacity) || 0
    const delta = target - startOp
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      video.style.opacity = String(startOp + delta * progress)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }
    rafRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onLoaded = () => {
      video.style.opacity = '0'
      video.play().catch(() => {})
      fadeTo(1, FADE_MS)
    }
    const onTimeUpdate = () => {
      if (!fadingOutRef.current && video.duration && video.duration - video.currentTime <= FADE_OUT_LEAD && video.duration - video.currentTime > 0) {
        fadingOutRef.current = true
        fadeTo(0, FADE_MS)
      }
    }
    const onEnded = () => {
      video.style.opacity = '0'
      setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
        fadingOutRef.current = false
        fadeTo(1, FADE_MS)
      }, 100)
    }

    video.addEventListener('loadeddata', onLoaded)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)

    if (video.readyState >= 2) {
      onLoaded()
    }

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      video.removeEventListener('loadeddata', onLoaded)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
    }
  }, [src, fadeTo])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      preload="auto"
      src={src}
      className={className}
      style={{ opacity: 0, ...style }}
    />
  )
})

export default FadingVideo
