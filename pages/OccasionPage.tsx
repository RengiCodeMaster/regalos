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
        <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-brand-red font-cursive text-3xl block mb-2">Regalos perfectos para</span>
                    <h1 className="text-5xl font-serif font-bold text-gray-900 capitalize">
                        {activeCategory}
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Encuentra el detalle ideal para celebrar este momento especial.
                        Diseños exclusivos hechos con amor.
                    </p>
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-sm">
                        <p className="text-xl text-gray-400">Pronto agregaremos productos para esta ocasión.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OccasionPage;
