import { Instagram, Youtube, Music2 } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'es';
}

export function Hero({ language }: HeroProps) {
  const content = {
    es: {
      title: 'MEDIA KIT',
      subtitle: 'Bailarina & Creadora de Contenido',
    },
    en: {
      title: 'MEDIA KIT',
      subtitle: 'Dancer & Content Creator',
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12">
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Photo */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/20">
            <img
              src="figma:asset/image1.png"
              alt="ValeriaVZG"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side - Info */}
        <div className="text-center md:text-left space-y-4">
          <div>
            <img
              src="figma:asset/image2.png"
              alt="ValeriaVZG Logo"
              className="h-16 mx-auto md:mx-0"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            VALEVZG
          </h1>
          
          <p className="text-lg md:text-xl text-purple-300 font-medium">
            {content[language].subtitle}
          </p>

          {/* Social Links */}
          <div className="flex gap-3 justify-center md:justify-start pt-2">
            <a
              href="https://www.tiktok.com/discover/valevzg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/30 backdrop-blur-sm p-3 rounded-xl hover:bg-purple-600 transition-all transform hover:scale-110 group"
            >
              <Music2 className="w-5 h-5 text-purple-400 group-hover:text-white" />
            </a>
            <a
              href="https://www.instagram.com/valevzg_/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/30 backdrop-blur-sm p-3 rounded-xl hover:bg-pink-600 transition-all transform hover:scale-110 group"
            >
              <Instagram className="w-5 h-5 text-pink-400 group-hover:text-white" />
            </a>
            <a
              href="https://www.youtube.com/@vleriavzz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/30 backdrop-blur-sm p-3 rounded-xl hover:bg-red-600 transition-all transform hover:scale-110 group"
            >
              <Youtube className="w-5 h-5 text-red-400 group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}