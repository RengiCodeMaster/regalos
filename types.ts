import React from 'react';

export enum Category {
  AMOR_ETERNO = 'Pack Amor Eterno',
  RAMOS_BUCHONES = 'Ramos Buchones',
  CHOCOLATES = 'Chocolates & Dulces',
  PELUCHES = 'Peluches Gigantes',

  // Ocasiones
  CUMPLEANOS = 'Cumpleaños',
  ANIVERSARIO = 'Aniversario',
  GRADUACION = 'Graduación',
  MEJORATE_PRONTO = 'Mejórate Pronto',
  SAN_VALENTIN = 'San Valentín'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  image: string;
}

export interface SearchResult {
  title: string;
  url: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ElementType;
}