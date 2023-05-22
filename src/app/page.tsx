'use client'

import Header from '@/app/components/header.component'
import HeroSection from '@/app/sections/hero/hero.section'

export default function Home() {
  return (
    <main className="h-[100vh]">
      <Header />
      <HeroSection />
    </main>
  )
}
