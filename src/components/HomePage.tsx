'use client';
import heroImage from '@/public/hero.webp';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Imagen ilustración */}
      <div className="relative w-4 md:w-1/2 h-1/2 md:h-full">
        <Image
          src={heroImage}
          alt="Retrato Norberto D'Abreu"
        //   placeholder='blur'
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Menú vertical */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-start px-8 py-12 space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">NORBERTO D’ABREU</h1>
        <nav className="text-lg space-y-3 font-medium">
          <Link href="#inicio" className="block hover:underline">INICIO</Link>
          <Link href="#bio" className="block hover:underline">BIO</Link>
          <Link href="#exhibiciones" className="block hover:underline">EXHIBICIONES</Link>
          <Link href="#testimoniales" className="block hover:underline">TESTIMONIALES</Link>
          <Link href="#retratos" className="block hover:underline">RETRATOS</Link>
          <Link href="#obras" className="block hover:underline">OBRAS EN VENTA</Link>
          <Link href="#contactos" className="block hover:underline">CONTACTOS</Link>
        </nav>
      </div>
    </main>
  );
}
