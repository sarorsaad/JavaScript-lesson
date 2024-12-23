"use client";
import React, { useState } from 'react';
import VideoUploader from '@/components/video/VideoUploader';
import VideoPlayer from '@/components/video/VideoPlayer';
import { useLanguage } from '@/utils/i18n';

export default function VideoUploadPage() {
  const lang = useLanguage();
  const [uploadedVideo, setUploadedVideo] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const translations = {
    title: {
      en: 'Upload Lesson Video',
      ar: 'رفع فيديو الدرس'
    },
    description: {
      en: 'Upload your screen recording or lesson video here',
      ar: 'قم برفع تسجيل الشاشة أو فيديو الدرس هنا'
    },
    uploadSuccess: {
      en: 'Video uploaded successfully!',
      ar: 'تم رفع الفيديو بنجاح!'
    },
    uploadError: {
      en: 'Error uploading video',
      ar: 'خطأ في رفع الفيديو'
    }
  };

  const handleUpload = async (file: File) => {
    try {
      setIsUploading(true);
      // In a real implementation, this would upload to a video hosting service
      // For demo purposes, we'll create an object URL
      const videoUrl = URL.createObjectURL(file);
      setUploadedVideo(videoUrl);
      setIsUploading(false);
    } catch (error) {
      console.error('Upload error:', error);
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{translations.title[lang]}</h1>
      <p className="text-gray-600 mb-8">{translations.description[lang]}</p>

      <div className="space-y-8">
        <VideoUploader
          onUpload={handleUpload}
          accept="video/*"
          maxSize={500 * 1024 * 1024} // 500MB
        />

        {isUploading && (
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          </div>
        )}

        {uploadedVideo && (
          <div className="mt-8">
            <VideoPlayer
              src={uploadedVideo}
              title={translations.uploadSuccess}
              controls={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}
