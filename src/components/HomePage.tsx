import Image from "next/image";
import heroImage from '@/public/hero.webp';

export default function HomePage() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Menú lateral */}
      <aside className="w-64 bg-[#1a1a1a] text-white p-6 z-10 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8">Juan Pérez</h1>
          <nav className="space-y-4 text-lg">
            <a href="#" className="hover:text-yellow-400 transition">Inicio</a>
            <a href="#" className="hover:text-yellow-400 transition">Galería</a>
            <a href="#" className="hover:text-yellow-400 transition">Sobre mí</a>
            <a href="#" className="hover:text-yellow-400 transition">Contacto</a>
          </nav>
        </div>
        <footer className="text-sm text-gray-400">
          © 2025 Juan Pérez
        </footer>
      </aside>

      {/* Imagen principal */}
      <main className="relative flex-1">
        <Image
          src={heroImage} 
          alt="Pintura de fondo"
          fill
          priority
          className="object-cover"
        />
        {/* Capa oscura encima de la imagen */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Contenido sobre la imagen */}
        <div className="absolute inset-0 flex items-center justify-center text-white z-10 px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a mi mundo artístico</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Descubre una selección de obras únicas, llenas de color, emoción y creatividad.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
