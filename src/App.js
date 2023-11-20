import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsContext from './context/products.context';

// COMPONENTS
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';

// PAGES
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const { isLoading } = useContext(ProductsContext);

  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      {isLoading ?
        <Loader />
        :
        <>
          <ScrollToTop />
          <Header />
          <main>
            <Routes>
              <Route exact path="/" element={ <Home /> } />
              <Route path="/products" element={ <Products /> } />
              <Route path="/about" element={ <About /> } />
              <Route path="/contact" element={ <Contact /> } />
            </Routes>
          </main>
          <Footer />
        </>
      }
    </BrowserRouter>
  );
}
