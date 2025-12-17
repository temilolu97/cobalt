import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Product = () => {
    const location = useLocation();
    const product = location.state?.product;
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
    };

    return (
        <div className="px-6 md:px-16 py-10 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {/* Product Image */}
                <div className="flex items-center justify-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full max-w-md object-contain rounded-lg shadow-md"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-center gap-6">
                    <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                    <p className="text-xl text-gray-700 font-semibold">&#8358;{product.price.max ? product.price.max.toLocaleString() : product.price.toLocaleString()}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>

                    {/* Size Selector (optional) */}
                    {product.sizes && (<div>
                        <label className="text-sm text-gray-700 font-medium">Select Size</label>
                        <div className="flex gap-3 mt-2">
                            {product.sizes.map((size:number) => (
                                <button
                                    key={size}
                                    className="border border-gray-300 px-4 py-1 rounded hover:border-black transition"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>)}

                    {/* Quantity Selector */}
                    <div>
                        <label className="text-sm text-gray-700 font-medium">Quantity</label>
                        <div className="flex items-center gap-4 mt-2">
                            <button
                                onClick={() => handleQuantityChange(quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:border-black transition"
                            >
                                -
                            </button>
                            <span className="w-8 text-center">{quantity}</span>
                            <button
                                onClick={() => handleQuantityChange(quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:border-black transition"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Add to Cart */}
                    <button
                        onClick={handleAddToCart}
                        className="mt-4 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition w-max"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Related Products */}
            {/* <div className="mt-16">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">You might also like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="border rounded-lg p-4 text-center shadow hover:shadow-md transition">
                            <img src={sampleImage} className="h-40 w-40 mx-auto object-contain mb-3" />
                            <p className="font-medium text-gray-800">Another Product</p>
                            <p className="text-sm text-gray-600">&#8358;12,000</p>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    )
}

export default Product