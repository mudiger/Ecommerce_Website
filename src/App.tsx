import React from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { Cart } from './components/Cart';
import { AuthModal } from './components/AuthModal';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-3/4">
                <HomePage />
              </div>
              <div className="md:w-1/4">
                <Cart />
              </div>
            </div>
          </main>
          <AuthModal />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;