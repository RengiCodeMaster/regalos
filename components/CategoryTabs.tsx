import React from 'react';
import { Category } from '../types';

interface CategoryTabsProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="sticky top-20 sm:top-24 z-40 bg-white/80 backdrop-blur-md shadow-sm py-4 mb-8 transition-all duration-300 border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2 sm:justify-center items-center">
          {Object.values(Category).map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`
                    whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border
                    ${activeCategory === category
                  ? 'bg-brand-red text-white border-brand-red shadow-lg shadow-red-200 transform scale-105'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-brand-pink hover:text-brand-red hover:bg-red-50'
                }
                `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;