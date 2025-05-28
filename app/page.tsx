import Link from "next/link";
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Products } from '@/components/sections/products';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">🎵 Brain Beats</h1>
        <p className="mb-6">Educational music for every grade and subject.</p>
        <Link href="/songs" className="text-blue-600 underline">Browse Songs</Link>
      </main>
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Contact />
    </>
  );
}