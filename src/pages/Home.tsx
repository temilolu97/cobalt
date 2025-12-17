import { useEffect, useState, useRef } from 'react';
import heroImage from '../assets/heroImage.png';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { products } from '../data/products'

const Home = () => {
    const [searchParams] = useSearchParams();
    const [activeCategory, setActiveCategory] = useState<string>("Smartphones".toLowerCase())
    const [activeProducts, setActiveProducts] = useState<any[]>([])
    const productsSectionRef = useRef<HTMLDivElement>(null);
    const topSectionRef = useRef<HTMLDivElement>(null);
    
    const categories = [
        'Smartphones',
        'Laptops',
        'Accessories',
        'Best Sellers',
    ];

    useEffect(() => {
        const categoryFromUrl = searchParams.get('category');
        if (categoryFromUrl) {
            // Decode the URL-encoded category name
            const decodedCategory = decodeURIComponent(categoryFromUrl);
            // Find the matching category (case-insensitive)
            const category = categories.find(cat => 
                cat.toLowerCase() === decodedCategory.toLowerCase()
            );
            if (category) {
                handleCategoryChange(category);
                // Scroll to products section
                productsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If no category is selected, scroll to top
            topSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [searchParams]);

    useEffect(() => {
        let prods = products.filter(product => 
            product.category.toLowerCase() === activeCategory.toLowerCase()
        );
        setActiveProducts(prods);
    }, [activeCategory]);

    const navigate = useNavigate();

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category.toLowerCase());
        let prods = products.filter(product => 
            product.category.toLowerCase() === category.toLowerCase()
        );
        setActiveProducts(prods);
    };

    const handleShopNowClick = () => {
        productsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-slate-50">
            {/* Hero Section */}
            <section ref={topSectionRef} className="px-6 md:px-16 pt-10 pb-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1  gap-12 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col gap-6">
                        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                            Cobalt Electronics
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
                            Minimal, powerful tech for everyday life.
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 max-w-xl">
                            Curated smartphones, laptops, and accessories — chosen for performance,
                            reliability, and clean design. No clutter, just the essentials that work.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mt-2">
                            <button
                                onClick={handleShopNowClick}
                                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
                            >
                                Shop all gadgets
                            </button>
                            <button
                                onClick={() => handleCategoryChange('Smartphones')}
                                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-400 hover:bg-white transition"
                            >
                                View smartphones
                            </button>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-500">
                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                <span>Trusted devices only</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                                <span>Secure checkout</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                                <span>Fast nationwide delivery</span>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </section>

            {/* Best Selling Section */}
            <section ref={productsSectionRef} className="px-6 md:px-16 pb-16">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                                Best sellers
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Handpicked devices customers love the most.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
                        {categories.map((category) => (
                            <button
                                type="button"
                                onClick={() => handleCategoryChange(category)}
                                key={category}
                                className={`rounded-full border text-xs sm:text-sm py-2.5 px-4 text-center transition ${
                                    activeCategory === category.toLowerCase()
                                        ? 'border-slate-900 bg-slate-900 text-white'
                                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {activeProducts.map((product) => (
                            <button
                                key={product.id}
                                className="group text-left bg-white border border-slate-200 rounded-2xl p-4 flex flex-col gap-3 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)] transition"
                                onClick={() => navigate(`/products/${product.id}`, { state: { product } })}
                            >
                                <div className="flex items-center justify-center rounded-xl bg-slate-50 p-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-28 w-28 object-contain transition group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-medium text-slate-900 line-clamp-2">
                                        {product.name}
                                    </p>
                                    <p className="text-sm font-semibold text-slate-700">
                                        &#8358;{product.price.toLocaleString()}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
