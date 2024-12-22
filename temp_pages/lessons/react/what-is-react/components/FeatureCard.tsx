import React from 'react';

interface FeatureCardProps {
  title: string;
  arabicTitle: string;
  arabicContent: string;
  englishContent: string;
  isRTL?: boolean;
}

export default function FeatureCard({
  title,
  arabicTitle,
  arabicContent,
  englishContent,
  isRTL = false
}: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:transform hover:-translate-y-1 transition-transform duration-300">
      <h3 className={`text-xl font-bold mb-4 text-blue-800 border-b-2 border-blue-200 pb-2 ${isRTL ? 'text-right' : ''}`}>
        {title}
        <span className={`block text-sm text-blue-600 mt-1 ${isRTL ? 'text-right' : ''}`}>
          {arabicTitle}
        </span>
      </h3>
      <div className="space-y-2">
        <p className={`text-gray-800 ${isRTL ? 'text-right font-arabic' : ''}`}>
          {arabicContent}
        </p>
        <p className={`text-gray-600 ${isRTL ? 'text-right' : ''}`}>
          {englishContent}
        </p>
      </div>
    </div>
  );
}
