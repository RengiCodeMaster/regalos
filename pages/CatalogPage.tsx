import React from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const CatalogPage: React.FC = () => {
    // Sort products by price descending to show "Premium" items first
    const sortedProducts = PRODUCTS
        .sort((a, b) => b.price - a.price);

    return (
        <div className="pt-14 sm:pt-20 pb-6 sm:pb-10 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                {/* Compact Header */}
                <div className="mb-4 sm:mb-6">
                    <h1 className="text-xl sm:text-3xl font-serif font-bold text-gray-900 text-center">
                        Catálogo Completo
                    </h1>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
                    {sortedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CatalogPage;
