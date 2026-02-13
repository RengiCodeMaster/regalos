import React from 'react';
import { ShoppingCart, Zap } from 'lucide-react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleBuyNow = () => {
    const message = `Hola Detallitos Jany, quiero comprar:\n\n*${product.name}*\nPrecio: S/ ${product.price}\n\n¿Está disponible?`;
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 flex flex-col h-full">

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-red-50 to-pink-50">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-4 sm:p-8">
              <ShoppingCart className="w-10 h-10 sm:w-16 sm:h-16 text-brand-red/30 mx-auto mb-2 sm:mb-3" />
              <p className="text-xs sm:text-sm text-gray-400 font-medium line-clamp-2">{product.name}</p>
            </div>
          </div>
        )}

        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <div className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">
          {product.category}
        </div>

        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]" title={product.name}>
          {product.name}
        </h3>

        <p className="text-gray-500 text-xs sm:text-sm mb-3 line-clamp-2 leading-relaxed flex-grow font-light">
          {product.description}
        </p>

        {/* Price */}
        <div className="mb-3">
          <span className="text-xl sm:text-2xl font-bold text-brand-red">S/ {product.price.toFixed(2)}</span>
        </div>

        {/* Action Buttons - Always Visible */}
        <div className="flex flex-col gap-2">
          {/* Buy Now Button - Primary */}
          <button
            onClick={handleBuyNow}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 sm:py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-xs sm:text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Comprar Ahora
          </button>

          {/* Add to Cart Button - Secondary */}
          <button
            onClick={() => addItem(product)}
            className="w-full bg-white hover:bg-brand-red border-2 border-brand-red text-brand-red hover:text-white py-2.5 sm:py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all text-xs sm:text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;