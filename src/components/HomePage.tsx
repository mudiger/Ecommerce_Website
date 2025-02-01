import React from 'react';
import { Sparkles, TrendingUp, Clock, Tag } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

export const HomePage: React.FC = () => {
  // Filter products for different sections
  const dealProducts = products.slice(0, 4);
  const trendingProducts = products.slice(4, 8);
  const flashSaleProducts = products.slice(8, 12);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Summer Sale is Live!
            </h1>
            <p className="text-xl text-white mb-8">
              Get up to 50% off on selected items. Limited time offer.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Deal of the Day */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="h-6 w-6 text-yellow-500" />
          <h2 className="text-2xl font-bold">Deals of the Day</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealProducts.map((product) => (
            <div key={product.id} className="relative">
              <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full">
                -20%
              </div>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Flash Sale */}
      <section className="bg-red-50 -mx-4 px-4 py-8 rounded-xl">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="h-6 w-6 text-red-500" />
          <h2 className="text-2xl font-bold">Flash Sale</h2>
          <div className="ml-auto flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg">
            <span>Ends in:</span>
            <span className="font-mono">05:23:45</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashSaleProducts.map((product) => (
            <div key={product.id} className="relative">
              <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full">
                -30%
              </div>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-6 w-6 text-green-500" />
          <h2 className="text-2xl font-bold">Trending Now</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotional Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-8 text-white">
          <Tag className="h-8 w-8 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Student Discount</h3>
          <p className="mb-4">Get 15% off with valid student ID</p>
          <button className="bg-white text-rose-500 px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            Verify Now
          </button>
        </div>
        <div className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl p-8 text-white">
          <Tag className="h-8 w-8 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Free Shipping</h3>
          <p className="mb-4">On orders above $50</p>
          <button className="bg-white text-purple-500 px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};