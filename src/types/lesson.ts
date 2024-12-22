export interface LessonMeta {
  title: string;
  description: string;
  language: 'en' | 'ar';
  category: 'javascript' | 'nodejs' | 'react' | 'nextjs' | 'python' | 'django';
  level: 'beginner' | 'intermediate' | 'advanced';
  order: number;
  videoUrl?: string;
  transcript?: {
    en: string;
    ar: string;
  };
  titleTranslations?: {
    en: string;
    ar: string;
  };
  descriptionTranslations?: {
    en: string;
    ar: string;
  };
}

export interface Lesson extends LessonMeta {
  content: string;
  code_examples?: string[];
  exercises?: {
    question: string;
    options?: string[];
    answer?: string;
  }[];
}
