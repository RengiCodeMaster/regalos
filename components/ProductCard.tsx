import React from 'react';
import { MessageCircle, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const whatsappMessage = `Hola Detallitos Jany, estoy interesado en el producto: ${product.name} (S/ ${product.price}). ¿Está disponible?`;
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 flex flex-col h-full">

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Overlay gradient only on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full text-gray-500 hover:bg-brand-red hover:text-white transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 shadow-sm">
          <Heart className="w-5 h-5" />
        </button>

        {/* Quick Action Button */}
        <div className="absolute bottom-4 left-0 w-full px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-white text-gray-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-brand-red hover:text-white transition-colors text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            Agregar al Carrito
          </button>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow relative z-10 bg-white">
        <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">{product.category}</div>
        <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-brand-red transition-colors line-clamp-1" title={product.name}>
          {product.name}
        </h3>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed flex-grow font-light">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <span className="text-xl font-bold text-gray-900">S/ {product.price.toFixed(2)}</span>

          <button
            onClick={() => addItem(product)}
            className="p-2 bg-red-50 text-brand-red rounded-full hover:bg-brand-red hover:text-white transition-all duration-300 group/btn"
            aria-label="Agregar al carrito"
          >
            <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;