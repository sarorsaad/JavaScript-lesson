import { LayoutContent } from '@/components/layout/LayoutContent'

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // Validate lang parameter
  if (params.lang !== 'en' && params.lang !== 'ar') {
    throw new Error(`Invalid language: ${params.lang}`);
  }
  
  return (
    <LayoutContent lang={params.lang as 'en' | 'ar'}>
      {children}
    </LayoutContent>
  )
}
