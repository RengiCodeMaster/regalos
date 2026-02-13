import React from 'react';
import Hero from '../components/Hero';
import BenefitsSection from '../components/BenefitsSection';
import Testimonials from '../components/Testimonials';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { Category } from '../types';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <BenefitsSection />

            <div id="catalogo" className="pt-4 sm:pt-6 relative scroll-mt-20">
                {/* Background decorative blob */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
                    <div className="text-center mb-6 sm:mb-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase">
                            Colección Destacada
                        </h2>
                        <div className="h-1 w-20 bg-brand-red mx-auto rounded-full mt-3"></div>
                        <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base mt-3">
                            Descubre los detalles más elegidos para sorprender.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
                        {/* Show popular products or just a mix of top products */}
                        {PRODUCTS.filter(p => p.popular).slice(0, 8).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="text-center mt-8 sm:mt-10">
                        <p className="text-gray-500 text-sm sm:text-base">Explora nuestras categorías para ver más opciones</p>
                    </div>
                </div>
            </div>

            <Testimonials />
        </>
    );
};

export default HomePage;
