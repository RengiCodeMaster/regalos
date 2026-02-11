import React, { useState } from 'react';
import Hero from '../components/Hero';
import BenefitsSection from '../components/BenefitsSection';
import Testimonials from '../components/Testimonials';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { Category } from '../types';

const HomePage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>(Category.AMOR_ETERNO);

    // Filter out Occasion categories for the main home page tabs to keep it clean, 
    // or decide which ones to show. For now, let's keep the original tabs + maybe some others.
    // The user wanted separate pages for occasions, so maybe Home just shows the main product lines?
    // Let's stick to the original logic: "Pack Amor Eterno", "Ramos Puchones", etc.

    const MAIN_CATEGORIES = [
        Category.AMOR_ETERNO,
        Category.RAMOS_BUCHONES,
        Category.CHOCOLATES,
        Category.PELUCHES
    ];

    const filteredProducts = PRODUCTS.filter((product) => product.category === activeCategory);

    return (
        <>
            <Hero />
            <BenefitsSection />

            <div id="catalogo" className="pt-8 relative scroll-mt-32">
                {/* Background decorative blob */}
                <div className="absolute top-40 right-0 w-64 h-64 bg-brand-pink/40 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-20 left-0 w-96 h-96 bg-red-50/50 rounded-full blur-3xl -z-10"></div>

                {/* Category Tabs */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="flex flex-wrap justify-center gap-4">
                        {MAIN_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 ${activeCategory === cat
                                    ? 'bg-brand-red text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-red-50 hover:text-brand-red border border-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="text-center mb-16 mt-12 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase">
                            {activeCategory}
                        </h2>
                        <div className="h-1 w-24 bg-brand-red mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

            <Testimonials />
        </>
    );
};

export default HomePage;
