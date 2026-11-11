/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, AppPage } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProductsPage } from './pages/ProductsPage';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { PresentationMode } from './components/PresentationMode';
import { RfqBuilderModal } from './components/RfqBuilderModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Product, RfqItem } from './types';
import { PRODUCTS } from './data/mockData';

export default function App() {
  // Page Routing State (syncs with hash: '#/about', '#/services', '#/blog', '#/contact', '#/products', '#/home', '#product/<id>' or '#/')
  const [currentPage, setCurrentPage] = useState<AppPage>(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('about')) return 'about';
    if (hash.includes('services') || hash.includes('service')) return 'services';
    if (hash.includes('blog')) return 'blog';
    if (hash.includes('contact')) return 'contact';
    if (hash.startsWith('#/products') || hash === '#/products') return 'products';
    if (hash.includes('product/')) return 'product-detail';
    return 'home';
  });

  // Selected Product for dedicated Full Page View
  const [selectedProductForPage, setSelectedProductForPage] = useState<Product>(() => {
    const hash = window.location.hash;
    if (hash.includes('product/')) {
      const pid = hash.split('product/')[1]?.toLowerCase();
      const found = PRODUCTS.find((p) => p.id === pid || p.articleNo.toLowerCase().replace(' ', '-') === pid);
      if (found) return found;
    }
    return PRODUCTS[0];
  });

  // Selected Category filter for Catalog
  const [selectedCategoryForCatalog, setSelectedCategoryForCatalog] = useState<string>('all');

  // Listen to browser back/forward and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('about')) {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('services') || hash.includes('service')) {
        setCurrentPage('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('blog')) {
        setCurrentPage('blog');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('contact')) {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#/products') || hash === '#/products') {
        setCurrentPage('products');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('product/')) {
        const pid = hash.split('product/')[1];
        const found = PRODUCTS.find((p) => p.id === pid || p.articleNo.toLowerCase().replace(' ', '-') === pid);
        if (found) {
          setSelectedProductForPage(found);
        }
        setCurrentPage('product-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
        if (hash.includes('products')) {
          setTimeout(() => {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Programmatic navigation handler
  const handleNavigate = (page: AppPage, targetSectionId?: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      if (targetSectionId) {
        window.location.hash = `#/${page}`;
        setTimeout(() => {
          const el = document.getElementById(targetSectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        window.location.hash = '#/';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (page === 'product-detail') {
      window.location.hash = `#product/${selectedProductForPage.id}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'products') {
      window.location.hash = '#/products';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = `#/${page}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenProductFullPage = (product: Product) => {
    setSelectedProductForPage(product);
    setCurrentPage('product-detail');
    window.location.hash = `#product/${product.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // RFQ Cart State
  const [rfqItems, setRfqItems] = useState<RfqItem[]>([
    { product: PRODUCTS[0], quantity: 100 },
    { product: PRODUCTS[3], quantity: 50 },
  ]);

  // Modal States
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);
  const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);
  const [videoModalData, setVideoModalData] = useState<{ isOpen: boolean; title: string; category: string }>({
    isOpen: false,
    title: '',
    category: '',
  });

  // 3D Showcase Target Model
  const [active3dModel, setActive3dModel] = useState<'catheter' | 'pipette' | 'surgical' | 'autoclave' | 'copper-t'>('catheter');

  // RFQ Handlers
  const handleAddToRfq = (product: Product, quantity = 50) => {
    setRfqItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsRfqOpen(true);
  };

  const handleUpdateQuantity = (productId: string, qty: number) => {
    setRfqItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity: Math.max(1, qty) } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setRfqItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearAll = () => {
    setRfqItems([]);
  };

  const handleAddItemById = (productId: string) => {
    const p = PRODUCTS.find((x) => x.id === productId);
    if (p) handleAddToRfq(p);
  };

  // 3D Jump Handler
  const handleOpen3d = (modelKey: 'catheter' | 'pipette' | 'surgical' | 'autoclave' | 'copper-t') => {
    setActive3dModel(modelKey);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.location.hash = '#/home';
      setTimeout(() => {
        const element = document.getElementById('3d-demo');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const element = document.getElementById('3d-demo');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Video Modal Trigger
  const handleOpenVideoModal = (title: string, category: string) => {
    setVideoModalData({ isOpen: true, title, category });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-cyan-600 selection:text-white">
        
        {/* Navigation Bar with Active Page Highlight & Mega Menu */}
        <Navbar
          rfqCount={rfqItems.reduce((acc, i) => acc + i.quantity, 0)}
          onOpenRfq={() => setIsRfqOpen(true)}
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onSelectCategory={(catId) => {
            setSelectedCategoryForCatalog(catId);
          }}
        />

        {/* Dynamic Multi-Page Router Views */}
        {currentPage === 'home' && (
          <HomePage
            onOpen3d={handleOpen3d}
            onOpenVideoModal={handleOpenVideoModal}
            onOpenRfq={() => setIsRfqOpen(true)}
            onAddToRfq={handleAddToRfq}
            onOpenProductDetail={(prod) => setSelectedProductDetail(prod)}
            onOpenProductPage={handleOpenProductFullPage}
            onNavigateAbout={() => handleNavigate('about')}
            onNavigateContact={() => handleNavigate('contact')}
            onNavigateServices={() => handleNavigate('services')}
            onNavigateBlog={() => handleNavigate('blog')}
            onNavigateProducts={(catId) => {
              if (catId) setSelectedCategoryForCatalog(catId);
              handleNavigate('products');
            }}
            active3dModel={active3dModel}
            selectedCategory={selectedCategoryForCatalog}
            onCategoryChange={(catId) => setSelectedCategoryForCatalog(catId)}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenProductDetail={(prod) => setSelectedProductDetail(prod)}
            onOpenProductPage={handleOpenProductFullPage}
            onAddToRfq={handleAddToRfq}
            onOpenRfq={() => setIsRfqOpen(true)}
            initialCategory={selectedCategoryForCatalog}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
            onOpenRfq={() => setIsRfqOpen(true)}
            onNavigateProducts={() => handleNavigate('products')}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
            onOpenRfq={() => setIsRfqOpen(true)}
            onNavigateProducts={() => handleNavigate('products')}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
            onSelectCategory={(catId) => {
              setSelectedCategoryForCatalog(catId);
              handleNavigate('products');
            }}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateAbout={() => handleNavigate('about')}
            onOpenRfq={() => setIsRfqOpen(true)}
          />
        )}

        {/* Full Dedicated Page for Surgical Product Details */}
        {currentPage === 'product-detail' && (
          <ProductDetailPage
            product={selectedProductForPage}
            onBackToCatalog={() => handleNavigate('products')}
            onSelectProduct={(p) => handleOpenProductFullPage(p)}
            onAddToRfq={handleAddToRfq}
            onOpenRfq={() => setIsRfqOpen(true)}
          />
        )}

        {/* Universal Footer with Page Navigation */}
        <Footer onNavigate={handleNavigate} />

        {/* Global Interactive Modals */}
        <VideoModal
          isOpen={videoModalData.isOpen}
          onClose={() => setVideoModalData({ isOpen: false, title: '', category: '' })}
          title={videoModalData.title}
          category={videoModalData.category}
        />

        <PresentationMode
          isOpen={isPresentationOpen}
          onClose={() => setIsPresentationOpen(false)}
          onOpen3d={handleOpen3d}
        />

        <RfqBuilderModal
          isOpen={isRfqOpen}
          onClose={() => setIsRfqOpen(false)}
          rfqItems={rfqItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearAll={handleClearAll}
          onAddItem={handleAddItemById}
        />

        <ProductDetailModal
          product={selectedProductDetail}
          onClose={() => setSelectedProductDetail(null)}
          onLaunch3d={handleOpen3d}
          onAddToRfq={handleAddToRfq}
          onOpenFullPage={handleOpenProductFullPage}
        />

      </div>
  );
}
