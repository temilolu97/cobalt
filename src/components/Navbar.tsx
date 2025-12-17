import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/kazzin.png';
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../contexts/CartContext';

const categories = [
  'Smartphones',
  'Laptops',
  'Accessories',
  'Best Sellers',
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/?category=${category.toLowerCase()}`);
    setMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    navigate('/');
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="px-4 py-3 border-b">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={handleHomeClick}>
            <h1 className='text-lg font-bold'>COBALTSTAR</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleHomeClick}
              className="text-gray-600 hover:text-gray-900"
            >
              Home
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="text-gray-600 hover:text-gray-900"
              >
                {category}
              </button>
            ))}
            <Link to="/cart" className="relative p-2">
              <ShoppingBagIcon className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={handleHomeClick}
                className="text-left text-gray-600 hover:text-gray-900"
              >
                Home
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="text-left text-gray-600 hover:text-gray-900"
                >
                  {category}
                </button>
              ))}
              <Link
                to="/cart"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShoppingBagIcon className="h-6 w-6" />
                Cart {cartItems.length > 0 && `(${cartItems.length})`}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 