import React from 'react';
import { Heart, Stars } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Hero: React.FC = () => {
  const scrollToCatalog = () => {
    const catalogElement = document.getElementById('catalogo');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden h-screen flex items-center bg-gray-900">
      {/* Hero Background Image - Contained Here Only */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Gemini_Generated_Image_trp7dwtrp7dwtrp7.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-center opacity-90"
          fetchPriority="high"
          loading="eager"
          width={1920}
          height={1080}
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>

      <div className="max-w-7xl mx-auto h-full w-full">
        <div className="relative z-10 w-full h-full flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center pb-20 lg:pb-0">

          {/* Text Content - Mobile: Bottom Centered, Desktop: Left Centered */}
          <div className="relative z-10 w-full flex flex-col h-full justify-end lg:justify-center lg:pb-0 lg:pt-0 items-center text-center lg:items-start lg:text-left px-4">

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif text-white mb-4 lg:mb-6 animate-slide-up drop-shadow-lg leading-tight" style={{ animationDelay: '0.1s' }}>
              Regala <span className="text-brand-red font-cursive relative">Amor</span>,<br />
              Crea <span className="text-brand-gold font-cursive">Magia</span>
            </h1>

            <p className="mt-2 lg:mt-4 text-sm sm:text-xl text-gray-200 font-light leading-relaxed max-w-lg animate-slide-up drop-shadow-md" style={{ animationDelay: '0.2s' }}>
              Transformamos sentimientos en <b>Ramos Buchones</b> y detalles exclusivos que perduran.
            </p>

            <div className="mt-6 lg:mt-8 flex flex-row gap-3 w-full justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={scrollToCatalog}
                className="px-6 py-3 lg:px-8 lg:py-4 bg-brand-red text-white rounded-xl font-bold shadow-lg shadow-red-900/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-sm lg:text-base w-fit"
              >
                <Heart className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                Ver Catálogo
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 lg:px-8 lg:py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 shadow-sm text-sm lg:text-base w-fit"
              >
                Contactar
              </a>
            </div>

            <div className="mt-8 lg:mt-12 flex w-full items-center justify-center lg:justify-start gap-6 lg:gap-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center lg:text-left">
                <p className="text-2xl lg:text-3xl font-serif font-bold text-white drop-shadow-md">+500</p>
                <p className="text-[10px] lg:text-xs text-gray-300 uppercase tracking-widest font-bold mt-1">Clientes Felices</p>
              </div>
              <div className="w-px h-8 lg:h-10 bg-white/20"></div>
              <div className="text-center lg:text-left">
                <p className="text-2xl lg:text-3xl font-serif font-bold text-white drop-shadow-md">4.9</p>
                <p className="text-[10px] lg:text-xs text-gray-300 uppercase tracking-widest font-bold mt-1">Calificación</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;