import React from 'react';
import { Truck, CreditCard, ShieldCheck, Clock, HeartHandshake } from 'lucide-react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  {
    title: 'Entregas Express',
    description: 'Tus emociones no pueden esperar. Reparto rápido en todo Tingo María.',
    icon: Clock
  },
  {
    title: 'Pago Sin Estrés',
    description: 'Aceptamos Yape, Plin y todas las tarjetas. 100% Seguro.',
    icon: ShieldCheck
  },
  {
    title: 'Calidad Premium',
    description: 'Flores frescas cortadas el mismo día y peluches importados.',
    icon: Truck
  },
  {
    title: 'Servicio con Amor',
    description: 'Te asesoramos en cada detalle vía WhatsApp.',
    icon: HeartHandshake
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-100 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 group p-4 rounded-xl hover:bg-red-50/50 transition-all duration-300 border border-transparent hover:border-red-100"
            >
              <div className="p-3 rounded-full bg-red-50 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shadow-sm">
                <benefit.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-brand-red transition-colors">{benefit.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;