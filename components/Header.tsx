import React, { useState } from 'react';
import { ShoppingCart, Heart, Search, User, Menu, X, ChevronDown, Phone, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Category } from '../types';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onSearch: (term: string) => void;
  onCategorySelect: (category: Category) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onCategorySelect }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileOccasionsOpen, setIsMobileOccasionsOpen] = useState(false);
  const { items, toggleCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle Scroll Effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    setIsMobileMenuOpen(false);
  };

  const occasionLinks = [
    { name: 'Cumpleaños', path: '/ocasion/cumpleanos' },
    { name: 'Aniversario', path: '/ocasion/aniversario' },
    { name: 'Graduación', path: '/ocasion/graduacion' },
    { name: 'Mejórate Pronto', path: '/ocasion/mejorate-pronto' },
    { name: 'San Valentín', path: '/ocasion/san-valentin' },
  ];

  // Dynamic Navigation Text Color
  const navTextColor = isScrolled ? 'text-gray-600' : 'text-white/90';
  const navHoverColor = 'hover:text-brand-red';
  const logoTextColor = isScrolled ? 'text-gray-800' : 'text-white';
  const iconColor = isScrolled ? 'text-gray-600' : 'text-white';

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white shadow-md py-1.5 sm:py-2 border-b border-gray-100'
        : 'bg-gradient-to-b from-black/60 to-transparent py-3 sm:py-6 border-none shadow-none'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex flex-col cursor-pointer group pl-1 sm:pl-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <h1 className={`text-xl sm:text-2xl md:text-3xl font-serif font-bold tracking-wide transition-colors ${logoTextColor}`}>
              Detallitos <span className="text-brand-red font-cursive text-2xl sm:text-3xl md:text-4xl">Jany</span>
            </h1>
          </Link>

          {/* Right Side Group: Navigation + Actions */}
          <div className="flex items-center gap-4 xl:gap-8">

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center space-x-6 text-xs font-bold tracking-widest uppercase ${navTextColor}`}>
              <Link
                to="/"
                className={`${navHoverColor} transition-colors relative group py-2`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Inicio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
              </Link>

              {/* Ocasiones Dropdown */}
              <div className="group relative h-full flex items-center cursor-pointer py-2">
                <span className={`${navHoverColor} transition-colors flex items-center gap-1`}>
                  Ocasiones <ChevronDown className={`w-3 h-3 transition-transform group-hover:rotate-180 ${isScrolled ? 'text-gray-400' : 'text-white/70'}`} />
                </span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-xl rounded-b-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50 overflow-hidden mt-1">
                  <ul className="py-2 text-gray-500 font-medium normal-case tracking-normal">
                    {occasionLinks.map((item) => (
                      <li key={item.name}>
                        <Link to={item.path} className="block hover:bg-red-50 hover:text-brand-red px-6 py-3 transition-colors border-b border-gray-50 last:border-0">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link to="/categoria/ramos-buchones" className={`${navHoverColor} transition-colors relative group py-2`}>
                Ramos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
              </Link>
              <Link to="/categoria/chocolates" className={`${navHoverColor} transition-colors relative group py-2`}>
                Chocolates
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
              </Link>
              <Link to="/categoria/peluches" className={`${navHoverColor} transition-colors relative group py-2`}>
                Peluches
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Functional Actions */}
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="tel:+51913961433" className={`hidden xl:flex items-center gap-2 ${navTextColor} ${navHoverColor} transition-colors group`}>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors border shadow-sm ${isScrolled
                  ? 'bg-white border-gray-100 group-hover:bg-red-50'
                  : 'bg-white/10 backdrop-blur-md border-white/20 group-hover:bg-brand-red'
                  }`}>
                  <Phone className={`w-4 h-4 ${isScrolled ? 'text-brand-red' : 'text-white'}`} />
                </div>
                <div className="flex flex-col text-xs text-right leading-tight">
                  <span className={`font-medium ${isScrolled ? 'text-gray-400' : 'text-gray-300'}`}>Llámanos</span>
                  <span className={`font-bold ${isScrolled ? 'text-gray-800' : 'text-white'} group-hover:text-brand-red`}>913 961 433</span>
                </div>
              </a>

              <div className={`h-8 w-px hidden lg:block ${isScrolled ? 'bg-gray-200' : 'bg-white/20'}`}></div>

              <button
                className={`flex flex-col items-center ${navTextColor} ${navHoverColor} transition-colors relative group`}
                onClick={toggleCart}
              >
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 group-hover:text-brand-red transition-all" />
                  {items.length > 0 && (
                    <span className="absolute -top-2 -right-2 h-4 w-4 bg-brand-red text-white text-[10px] flex items-center justify-center rounded-full border border-white animate-bounce-slow font-bold shadow-sm">
                      {items.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                  )}
                </div>
              </button>

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden p-2 ${iconColor} hover:text-brand-red transition-colors`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>
      {/* Desktop Header Content Ends Here */}

      {/* Navigation Bar (Desktop) */}


      {/* Mobile Menu */}
      {/* Mobile Menu - Aesthetic & Collapsible */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl animate-fade-in max-h-[85vh] overflow-y-auto z-40">
          <div className="p-6 space-y-8 pb-20">

            {/* Main Navigation Links */}
            <nav className="flex flex-col space-y-1">
              <Link
                to="/"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-lg font-medium text-gray-800 py-3 border-b border-gray-50 hover:text-brand-red flex justify-between items-center group"
              >
                Inicio
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
            </nav>

            {/* Categorías Section */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-4 ml-1">Categorías</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Ramos Buchones', path: '/categoria/ramos-buchones' },
                  { name: 'Chocolates', path: '/categoria/chocolates' },
                  { name: 'Peluches', path: '/categoria/peluches' }
                ].map((item) =\u003e (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                    }}
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 hover:bg-red-50/50 transition-colors text-center gap-2 group border border-transparent hover:border-red-100"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-brand-red">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Ocasiones Special Dropdown */}
            <div className="border rounded-2xl border-gray-100 overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => setIsMobileOccasionsOpen(!isMobileOccasionsOpen)}
                className="w-full flex justify-between items-center p-4 text-base font-serif font-medium text-gray-800 hovered:bg-gray-50 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-brand-red" />
                  Buscar por Ocasión
                </span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isMobileOccasionsOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`transition-all duration-300 ease-in-out bg-gray-50/50 ${isMobileOccasionsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="flex flex-col p-2">
                  {occasionLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 text-sm text-gray-600 hover:text-brand-red hover:bg-white rounded-lg transition-all"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Support CTA */}
            <a href="tel:+51913961433" className="block w-full py-3 px-4 rounded-xl bg-gray-900 text-white text-center font-medium shadow-lg active:scale-[0.98] transition-transform">
              ¿Necesitas ayuda? Llámanos
            </a>

          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
