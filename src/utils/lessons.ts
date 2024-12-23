import { Language } from './i18n';

export interface LessonContent {
  title: string;
  content: string;
  exercises?: string[];
  quizzes?: string[];
}

export const getLessonContent = async (
  category: string,
  slug: string,
  lang: Language
): Promise<LessonContent> => {
  try {
    const module = await import(`@/app/[lang]/lessons/${category}/${slug}/page${lang === 'ar' ? '.ar' : ''}`);
    return module.default;
  } catch (error) {
    throw new Error(`Lesson content not found for ${category}/${slug} in ${lang}`);
  }
};
