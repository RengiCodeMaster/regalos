import React from 'react';
import { MapPin, Phone, Mail, ArrowRight, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFBFA] text-gray-600 pt-16 pb-8 border-t border-red-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              {/* Official Logo */}
              {/* Official Text Logo */}
              <h1 className="text-2xl font-serif font-bold text-gray-800 tracking-wide">
                Detallitos <span className="text-brand-red font-cursive text-3xl">Jany</span>
              </h1>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Transformamos sentimientos en detalles inolvidables.
              Tu cómplice perfecto para sorprender en Tingo María.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 text-lg font-bold mb-6 flex items-center gap-2">
              Explorar
            </h4>
            <ul className="space-y-3 text-sm">
              {['Catálogo Completo', 'Ramos Buchones', 'Peluches Gigantes', 'Ofertas del Mes'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-brand-red transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-200 group-hover:bg-brand-red transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 text-lg font-bold mb-6">
              Contacto
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <span>Av. Raimondi, Tingo María, Perú</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <a href="tel:+51913961433" className="hover:text-brand-red transition-colors font-medium">+51 913 961 433</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <span className="break-all">contacto@detallitosjany.com</span>
              </li>
            </ul>
          </div>

          {/* Social / Newsletter */}
          <div>
            <h4 className="text-gray-900 text-lg font-bold mb-6">
              Síguenos
            </h4>
            <div className="flex gap-4 mb-8">
              {/* Facebook */}
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm hover:shadow-md">
                <Facebook className="w-5 h-5" />
              </a>
              {/* Instagram */}
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all shadow-sm hover:shadow-md">
                <Instagram className="w-5 h-5" />
              </a>
              {/* TikTok (SVG) */}
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm hover:shadow-md">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>

            </div>

            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-2 font-medium">Suscríbete para novedades</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Tu correo" className="bg-white border border-gray-200 text-gray-800 text-xs px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-brand-red shadow-sm" />
                <button className="bg-brand-red text-white p-2 rounded-lg hover:bg-red-700 transition-colors shadow-sm">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Detallitos Jany. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-red transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-brand-red transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
