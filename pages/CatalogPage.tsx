import React from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const CatalogPage: React.FC = () => {
    // Sort products by price descending to show "Premium" items first
    const sortedProducts = PRODUCTS
        .filter(p => p.image && !p.image.includes('placeholder') && !p.image.includes('ui-avatars'))
        .sort((a, b) => b.price - a.price);

    return (
        <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-brand-red font-cursive text-3xl block mb-2">Nuestro Catálogo</span>
                    <h1 className="text-5xl font-serif font-bold text-gray-900">
                        Diseños Premium
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Descubre nuestra colección completa de regalos inolvidables.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sortedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CatalogPage;
