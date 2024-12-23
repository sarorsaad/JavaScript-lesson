import { LayoutContent } from '@/components/layout/LayoutContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saror Academy',
  description: 'Learn programming with bilingual content',
}

type Props = {
  children: React.ReactNode;
  params: { lang: string };
}

export default function Layout({ children, params }: Props) {
  // Validate lang parameter
  if (params.lang !== 'en' && params.lang !== 'ar') {
    throw new Error(`Invalid language: ${params.lang}`);
  }
  
  return (
    <div className="min-h-screen">
      <LayoutContent lang={params.lang as 'en' | 'ar'}>
        {children}
      </LayoutContent>
    </div>
  )
}
