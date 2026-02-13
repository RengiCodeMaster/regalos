import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { Category } from '../types';

const CategoryPage: React.FC = () => {
    const { categorySlug } = useParams<{ categorySlug: string }>();

    // Helper to normalize strings for comparison (simple version)
    // slug is likely 'ramos-buchones', category is 'Ramos Buchones'

    // Let's create a map or a mapping function
    const getCategoryFromSlug = (slug: string): Category | null => {
        switch (slug) {
            case 'packs': return Category.AMOR_ETERNO; // Mapping 'packs' to Amor Eterno as it seems to be the main pack
            case 'pack-amor-eterno': return Category.AMOR_ETERNO;
            case 'ramos-buchones': return Category.RAMOS_BUCHONES;
            case 'ramos': return Category.RAMOS_BUCHONES;
            case 'chocolates': return Category.CHOCOLATES;
            case 'peluches': return Category.PELUCHES;
            default: return null;
        }
    };

    const activeCategory = categorySlug ? getCategoryFromSlug(categorySlug) : null;

    const filteredProducts = useMemo(() => {
        if (!activeCategory) return [];
        return PRODUCTS.filter(product => product.category === activeCategory);
    }, [activeCategory]);

    if (!activeCategory) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-24">
                <p className="text-xl text-gray-500">Categoría no encontrada</p>
            </div>
        );
    }

    return (
        <div className="pt-16 sm:pt-20 pb-8 sm:pb-12 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="text-center mb-6 sm:mb-10">
                    <span className="text-brand-red font-cursive text-xl sm:text-2xl block mb-2">Colección Exclusiva</span>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 capitalize">
                        {activeCategory}
                    </h1>
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 sm:py-20 bg-white rounded-2xl shadow-sm">
                        <p className="text-base sm:text-xl text-gray-400">Pronto agregaremos productos a esta categoría.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
