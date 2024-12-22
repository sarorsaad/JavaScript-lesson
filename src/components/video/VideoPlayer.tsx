import React from 'react';
import { useLanguage } from '../../utils/i18n';

interface VideoPlayerProps {
  src: string;
  title: {
    en: string;
    ar: string;
  };
  description?: {
    en: string;
    ar: string;
  };
  poster?: string;
  autoPlay?: boolean;
  controls?: boolean;
}

export default function VideoPlayer({
  src,
  title,
  description,
  poster,
  autoPlay = false,
  controls = true,
}: VideoPlayerProps) {
  const lang = useLanguage();
  const isRTL = lang === 'ar';

  return (
    <div className={`video-container ${isRTL ? 'rtl' : 'ltr'}`}>
      <h3 className="text-xl font-semibold mb-2">{title[lang]}</h3>
      {description && (
        <p className="text-gray-600 mb-4">{description[lang]}</p>
      )}
      <div className="relative aspect-video w-full">
        <video
          className="w-full h-full rounded-lg shadow-lg"
          src={src}
          poster={poster}
          controls={controls}
          autoPlay={autoPlay}
          playsInline
        >
          <track
            kind="captions"
            src={`${src}.${lang}.vtt`}
            srcLang={lang}
            label={lang === 'en' ? 'English' : 'العربية'}
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
