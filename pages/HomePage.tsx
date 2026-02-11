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

            <div id="catalogo" className="pt-8 relative scroll-mt-32">
                {/* Background decorative blob */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="text-center mb-16 mt-8 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase">
                            Colección Destacada
                        </h2>
                        <div className="h-1 w-24 bg-brand-red mx-auto rounded-full"></div>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                            Descubre los detalles más elegidos para sorprender.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Show popular products or just a mix of top products */}
                        {PRODUCTS.filter(p => p.popular && p.image && !p.image.includes('placeholder')).slice(0, 8).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-500 mb-6">Explora nuestras categorías para ver más opciones</p>
                    </div>
                </div>
            </div>

            <Testimonials />
        </>
    );
};

export default HomePage;
