'use client'

import * as React from 'react'

interface VideoPlayerProps {
  videoUrl: string
  lang: string
}

const VideoPlayer = React.forwardRef<HTMLDivElement, VideoPlayerProps>(({ videoUrl, lang }, ref) => {
  const isArabic = lang === 'ar'
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  const handleLoadedMetadata = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setError(isArabic 
      ? 'عذراً، حدث خطأ أثناء تحميل الفيديو. يرجى المحاولة مرة أخرى.'
      : 'Sorry, there was an error loading the video. Please try again.'
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLVideoElement>) => {
    const video = videoRef.current
    if (!video) return

    switch(e.key) {
      case ' ':
      case 'k':
        e.preventDefault()
        video.paused ? video.play() : video.pause()
        break
      case 'ArrowRight':
        e.preventDefault()
        video.currentTime = Math.min(video.duration, video.currentTime + 10)
        break
      case 'ArrowLeft':
        e.preventDefault()
        video.currentTime = Math.max(0, video.currentTime - 10)
        break
      case 'm':
        e.preventDefault()
        video.muted = !video.muted
        break
      case 'f':
        e.preventDefault()
        if (document.fullscreenElement) {
          document.exitFullscreen()
        } else {
          video.requestFullscreen()
        }
        break
    }
  }

  return (
    <div 
      ref={ref} 
      className={`relative w-full aspect-w-16 aspect-h-9 md:aspect-w-16 md:aspect-h-9 lg:aspect-w-16 lg:aspect-h-9 ${isArabic ? 'rtl' : 'ltr'}`}
      role="region"
      aria-label={isArabic ? 'مشغل الفيديو' : 'Video player'}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <span className="sr-only">
            {isArabic ? 'جارٍ تحميل الفيديو' : 'Loading video'}
          </span>
          <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-4 border-primary border-t-transparent" />
        </div>
      )}
      
      {error ? (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-red-50 dark:bg-red-900/20 p-4 md:p-6"
          role="alert"
        >
          <p className="text-red-700 dark:text-red-300 text-sm md:text-base text-center">{error}</p>
        </div>
      ) : (
        <video
          ref={videoRef}
          className="w-full h-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-lg"
          controls
          preload="metadata"
          onLoadedMetadata={handleLoadedMetadata}
          onError={handleError}
          onKeyDown={handleKeyPress}
          tabIndex={0}
          aria-label={isArabic ? 'مشغل الفيديو التعليمي' : 'Educational video player'}
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
          <track
            kind="captions"
            src={`${videoUrl}/captions-${lang}.vtt`}
            srcLang={lang}
            label={isArabic ? 'العربية' : 'English'}
            default
          />
          <p className="sr-only">
            {isArabic    
              ? 'عذراً، متصفحك لا يدعم تشغيل الفيديو. يرجى تحديث المتصفح أو استخدام متصفح آخر.'
              : 'Sorry, your browser does not support video playback. Please update your browser or try a different one.'
            }
          </p>
        </video>
      )}
      
      <div className="sr-only" aria-live="polite">
        {isArabic ? (
          <>
            <p className="text-base md:text-lg font-medium">مفاتيح التحكم في الفيديو:</p>
            <ul className="mt-2 space-y-1 md:space-y-2">
              <li className="text-sm md:text-base">مسافة أو K: تشغيل/إيقاف</li>
              <li className="text-sm md:text-base">سهم يمين: تقديم 10 ثوان</li>
              <li className="text-sm md:text-base">سهم يسار: إرجاع 10 ثوان</li>
              <li className="text-sm md:text-base">M: كتم/تشغيل الصوت</li>
              <li className="text-sm md:text-base">F: ملء الشاشة</li>
            </ul>
          </>
        ) : (
          <>
            <p className="text-base md:text-lg font-medium">Video controls:</p>
            <ul className="mt-2 space-y-1 md:space-y-2">
              <li className="text-sm md:text-base">Space or K: Play/Pause</li>
              <li className="text-sm md:text-base">Right arrow: Forward 10s</li>
              <li className="text-sm md:text-base">Left arrow: Rewind 10s</li>
              <li className="text-sm md:text-base">M: Mute/Unmute</li>
              <li className="text-sm md:text-base">F: Toggle fullscreen</li>
            </ul>
          </>
        )}
      </div>
      
      {/* Mobile touch controls hint */}
      <div className="md:hidden mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
        {isArabic ? 'اضغط مرتين للتشغيل/الإيقاف' : 'Double tap to play/pause'}
      </div>
    </div>
  )
})

VideoPlayer.displayName = 'VideoPlayer'

export default VideoPlayer
