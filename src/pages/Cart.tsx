import { useCart } from '../contexts/CartContext';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  console.log(cartItems);
  

  const getItemPrice = (price: number | { min: number; max: number }) => {
    if (typeof price === 'number') return price;
    return price.max;
  };

  const total = cartItems.reduce((sum, item) => sum + getItemPrice(item.price) * item.quantity, 0);

  // Get related products based on cart items' categories
  const getRelatedProducts = () => {
    if (cartItems.length === 0) return [];
    
    // Get unique categories from cart items
    const categories = [...new Set(cartItems.map(item => item.category))];
    
    // Get products from the same categories, excluding items already in cart
    const cartItemIds = new Set(cartItems.map(item => item.id));
    const relatedProducts = products
      .filter(product => 
        categories.includes(product.category) && 
        !cartItemIds.has(product.id)
      )
      .slice(0, 4); // Show only 4 related products
    
    return relatedProducts;
  };

  const relatedProducts = getRelatedProducts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">&#8358;{getItemPrice(item.price).toLocaleString()}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">&#8358;{(getItemPrice(item.price) * item.quantity).toLocaleString()}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 text-red-500 hover:text-red-700"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
          
          <div className="mt-8 p-4 bg-white rounded-lg shadow">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-xl font-bold">&#8358; {total.toLocaleString()}</span>
            </div>
            <button className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {/* You May Also Like Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                state={{ product }}
                className="group"
              >
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">&#8358;{getItemPrice(product.price).toLocaleString()}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 