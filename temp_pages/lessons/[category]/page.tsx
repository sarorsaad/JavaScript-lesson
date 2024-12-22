import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: {
    lang: 'en' | 'ar';
    category: string;
  };
}

const categoryContent = {
  javascript: {
    en: {
      title: 'JavaScript Lessons',
      description: 'Learn JavaScript from basics to advanced concepts',
      lessons: [
        { slug: 'variables-datatypes', title: 'Variables and Data Types' },
        { slug: 'functions', title: 'Functions' },
        { slug: 'objects', title: 'Objects' },
        { slug: 'dom-manipulation', title: 'DOM Manipulation' }
      ]
    },
    ar: {
      title: 'دروس جافا سكريبت',
      description: 'تعلم جافا سكريبت من المبادئ الأساسية إلى المفاهيم المتقدمة',
      lessons: [
        { slug: 'variables-datatypes', title: 'المتغيرات وأنواع البيانات' },
        { slug: 'functions', title: 'الدوال' },
        { slug: 'objects', title: 'الكائنات' },
        { slug: 'dom-manipulation', title: 'التعامل مع DOM' }
      ]
    }
  },
  react: {
    en: {
      title: 'React Lessons',
      description: 'Master React development with hands-on lessons',
      lessons: [
        { slug: 'what-is-react', title: 'What is React?' },
        { slug: 'basics', title: 'React Basics' },
        { slug: 'jsx-attributes', title: 'JSX Attributes' },
        { slug: 'react-elements', title: 'React Elements' },
        { slug: 'browser-process', title: 'Browser Process' }
      ]
    },
    ar: {
      title: 'دروس رياكت',
      description: 'أتقن تطوير رياكت مع دروس عملية',
      lessons: [
        { slug: 'what-is-react', title: 'ما هو رياكت؟' },
        { slug: 'basics', title: 'أساسيات رياكت' },
        { slug: 'jsx-attributes', title: 'خصائص JSX' },
        { slug: 'react-elements', title: 'عناصر رياكت' },
        { slug: 'browser-process', title: 'عملية المتصفح' }
      ]
    }
  },
  nodejs: {
    en: {
      title: 'Node.js Lessons',
      description: 'Learn server-side JavaScript with Node.js',
      lessons: [
        { slug: 'introduction', title: 'Introduction to Node.js' },
        { slug: 'getting-started', title: 'Getting Started' },
        { slug: 'event-loop', title: 'Event Loop' },
        { slug: 'event-driven', title: 'Event-Driven Architecture' }
      ]
    },
    ar: {
      title: 'دروس نود جي إس',
      description: 'تعلم جافا سكريبت على جانب الخادم مع نود جي إس',
      lessons: [
        { slug: 'introduction', title: 'مقدمة إلى نود جي إس' },
        { slug: 'getting-started', title: 'البدء مع نود جي إس' },
        { slug: 'event-loop', title: 'حلقة الأحداث' },
        { slug: 'event-driven', title: 'البرمجة المدفوعة بالأحداث' }
      ]
    }
  }
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { lang, category } = params;
  const isRTL = lang === 'ar';

  // Validate category
  if (!categoryContent[category as keyof typeof categoryContent]) {
    notFound();
  }

  const content = categoryContent[category as keyof typeof categoryContent][lang];

  return (
    <div className={`py-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
      <p className="text-gray-600 mb-8">{content.description}</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.lessons.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/${lang}/lessons/${category}/${lesson.slug}`}
            className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">{lesson.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
