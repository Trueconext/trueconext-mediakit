import { useState } from 'react';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { InteractiveBackground } from './components/InteractiveBackground';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative">
      <InteractiveBackground />
      
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-black/40 backdrop-blur-md rounded-full p-1">
        <button
          onClick={() => setLanguage('es')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            language === 'es'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          ES
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            language === 'en'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          EN
        </button>
      </div>

      {/* Main Content */}
      <Hero language={language} />
      <Stats language={language} />
      <About language={language} />
      <Services language={language} />
      <Contact language={language} />
    </div>
  );
}