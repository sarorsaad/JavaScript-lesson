import React from 'react';
import VideoPlayer from '../video/VideoPlayer';
import { useLanguage } from '../../utils/i18n';

interface VideoLessonProps {
  videoUrl: string;
  title: {
    en: string;
    ar: string;
  };
  description?: {
    en: string;
    ar: string;
  };
  transcript?: {
    en: string;
    ar: string;
  };
}

export default function VideoLesson({
  videoUrl,
  title,
  description,
  transcript
}: VideoLessonProps) {
  const lang = useLanguage();
  const isRTL = lang === 'ar';

  return (
    <div className={`video-lesson ${isRTL ? 'rtl' : 'ltr'} mt-8`}>
      <VideoPlayer
        src={videoUrl}
        title={title}
        description={description}
        controls={true}
      />
      {transcript && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">
            {lang === 'en' ? 'Transcript' : 'النص المكتوب'}
          </h4>
          <p className="whitespace-pre-wrap">{transcript[lang]}</p>
        </div>
      )}
    </div>
  );
}
