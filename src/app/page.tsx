import { redirect } from 'next/navigation'

export default async function Home() {
  try {
    redirect('/en')
  } catch (error) {
    console.error('Error during redirect:', error)
    return null
  }
  // This line is never reached due to redirect
  return null
}
