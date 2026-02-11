import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-brand-pink/30 py-20 sm:py-28 relative overflow-hidden">
      {/* Background hearts */}
      <div className="absolute top-10 left-10 text-brand-pink opacity-60 animate-pulse-slow">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
      </div>
      <div className="absolute bottom-10 right-10 text-brand-pink/60 opacity-60 animate-pulse-slow" style={{ animationDelay: '1.5s' }}>
        <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4 animate-fade-in-up">
            Momentos Inolvidables
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Nada nos hace más felices que ser parte de tu historia. Aquí, algunos suspiros que ayudamos a crear.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="glass-card rounded-2xl p-8 relative hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-5 left-8 bg-brand-gold text-white rounded-full p-2 shadow-lg">
                <Quote className="w-5 h-5" />
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed font-light">"{testimonial.comment}"</p>

              <div className="flex items-center border-t border-gray-100 pt-6">
                <img
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-red ring-offset-2"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h3 className="text-base font-bold text-gray-900 font-serif">{testimonial.name}</h3>
                  <div className="flex text-brand-gold gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;