import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { Category } from '../types';

const OccasionPage: React.FC = () => {
    const { occasionSlug } = useParams<{ occasionSlug: string }>();

    // Map URL slug to correct Category Enum
    const categoryMap: { [key: string]: Category } = {
        'cumpleanos': Category.CUMPLEANOS,
        'aniversario': Category.ANIVERSARIO,
        'graduacion': Category.GRADUACION,
        'mejorate-pronto': Category.MEJORATE_PRONTO,
        'san-valentin': Category.SAN_VALENTIN
    };

    const activeCategory = occasionSlug ? categoryMap[occasionSlug] : null;

    const filteredProducts = useMemo(() => {
        if (!activeCategory) return [];
        return PRODUCTS.filter(product => product.category === activeCategory);
    }, [activeCategory]);

    if (!activeCategory) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl text-gray-500">Ocasión no encontrada</p>
            </div>
        );
    }

    return (
        <div className="pt-16 sm:pt-20 pb-8 sm:pb-12 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="text-center mb-6 sm:mb-10">
                    <span className="text-brand-red font-cursive text-xl sm:text-2xl block mb-2">Regalos perfectos para</span>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 capitalize">
                        {activeCategory}
                    </h1>
                    <p className="mt-3 text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto px-2">
                        Encuentra el detalle ideal para celebrar este momento especial.
                    </p>
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 sm:py-20 bg-white rounded-2xl shadow-sm">
                        <p className="text-base sm:text-xl text-gray-400">Pronto agregaremos productos para esta ocasión.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OccasionPage;
