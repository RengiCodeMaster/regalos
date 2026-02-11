import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import BenefitSection from './components/BenefitsSection';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Testimonials from './components/Testimonials';
import StickyWhatsApp from './components/StickyWhatsApp';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OccasionPage from './pages/OccasionPage';
import CategoryPage from './pages/CategoryPage';
import CatalogPage from './pages/CatalogPage';
import { Category } from './types';
import { PRODUCTS } from './constants';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  // Temporary state for Header compatibility
  // In a real router app, Header would likely use Links and not prop callbacks for navigation
  // But we keep the search logic if possible, or move it to HomePage.
  // For now, let's keep the Header simple and just log or handle basic search if on homepage.

  const handleSearch = (term: string) => {
    console.log("Search term:", term);
    // Ideally redirect to search page or filter current view
  };

  const handleCategorySelect = (cat: Category) => {
    // In RPA, we might navigate to a category page, or scroll if on Home.
    // For now, let's assume this is legacy behavior from the single page version
    // and we might need to update Header to do real navigation.
    console.log("Category selected:", cat);
    // We could navigate to home and scroll?
    // window.location.href = '/#catalogo'; 
    // But better to update Header component next.
  };

  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-[#FFFBFA] font-sans">
          <Header
            onSearch={handleSearch}
            onCategorySelect={handleCategorySelect}
          />

          <CartDrawer />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ocasion/:occasionSlug" element={<OccasionPage />} />
              <Route path="/categoria/:categorySlug" element={<CategoryPage />} />
              <Route path="/catalogo" element={<CatalogPage />} />
              {/* Fallback route */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          <StickyWhatsApp />
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;