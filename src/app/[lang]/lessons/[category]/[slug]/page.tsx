import React from 'react';
import { notFound } from 'next/navigation';

interface LessonPageProps {
  params: {
    lang: 'en' | 'ar';
    category: string;
    slug: string;
  };
}

export default function LessonPage({ params }: LessonPageProps) {
  const { lang, category, slug } = params;

  // Validate category
  const validCategories = ['javascript', 'react', 'nodejs'];
  if (!validCategories.includes(category)) {
    notFound();
  }

  // Import the lesson component dynamically
  const LessonComponent = React.lazy(() => 
    import(`@/app/[lang]/lessons/${category}/${slug}/page${lang === 'ar' ? '.ar' : ''}`).catch(() => {
      notFound();
    })
  );

  return (
    <React.Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <LessonComponent params={params} />
    </React.Suspense>
  );
}
