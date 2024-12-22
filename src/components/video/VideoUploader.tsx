import React, { useState } from 'react';
import { useLanguage } from '@/utils/i18n';

interface VideoUploaderProps {
  onUpload: (file: File) => Promise<void>;
  accept?: string;
  maxSize?: number; // in bytes
}

export default function VideoUploader({
  onUpload,
  accept = 'video/*',
  maxSize = 100 * 1024 * 1024, // 100MB default
}: VideoUploaderProps) {
  const lang = useLanguage();
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const translations = {
    dragHere: {
      en: 'Drag and drop your video here',
      ar: 'اسحب وأفلت الفيديو هنا'
    },
    or: {
      en: 'or',
      ar: 'أو'
    },
    browse: {
      en: 'Browse files',
      ar: 'تصفح الملفات'
    },
    fileTooLarge: {
      en: 'File is too large',
      ar: 'الملف كبير جداً'
    },
    invalidType: {
      en: 'Invalid file type',
      ar: 'نوع الملف غير صالح'
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('video/')) {
      setError(translations.invalidType[lang]);
      return;
    }
    
    if (file.size > maxSize) {
      setError(translations.fileTooLarge[lang]);
      return;
    }
    
    try {
      await onUpload(file);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (file.size > maxSize) {
      setError(translations.fileTooLarge[lang]);
      return;
    }
    
    try {
      await onUpload(file);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center ${
        isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <div className="space-y-4">
        <p className="text-lg">{translations.dragHere[lang]}</p>
        <p className="text-gray-500">{translations.or[lang]}</p>
        <label className="inline-block">
          <span className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
            {translations.browse[lang]}
          </span>
          <input
            type="file"
            className="hidden"
            accept={accept}
            onChange={handleFileSelect}
          />
        </label>
        {error && (
          <p className="text-red-500 mt-2">{error}</p>
        )}
      </div>
    </div>
  );
}
