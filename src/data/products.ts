export interface Product {
  id: number;
  name: string;
  price: number | { min: number; max: number };
  image: string;
  category: string;
  description?: string;
  sizes?: number[];
}

export const products: Product[] = [
  // Smartphones
{
    id: 1,
    name: 'iPhone 13 Pro (128GB)',
    price: 710000,
    category: 'Smartphones',
    image: 'https://i.ebayimg.com/thumbs/images/g/4LMAAOSwZQ1mjZt7/s-l300.webp',
    description: 'Apple iPhone 13 Pro with A15 Bionic chip, Pro camera system, and stunning Super Retina XDR display.',
    
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23 (256GB)',
    price: 620000,
    category: 'Smartphones',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&h=500&fit=crop',
    description: 'Samsung Galaxy S23 with Snapdragon 8 Gen 2, 50MP camera, and 6.1" Dynamic AMOLED display.',
    
  },
  {
    id: 3,
    name: 'Tecno Phantom X2',
    price: 510000,
    category: 'Smartphones',
    image: 'https://i.ebayimg.com/images/g/7C4AAeSwyDBnwkzc/s-l960.webp',
    description: 'Tecno Phantom X2 with MediaTek Dimensity 9000, 50MP camera, and 6.8" AMOLED display.',
    
  },
  {
    id: 4,
    name: 'Infinix Zero Ultra 5G',
    price: 350000,
    category: 'Smartphones',
    image: 'https://i.ebayimg.com/images/g/r9cAAOSw6DBm7PS8/s-l1600.webp',
    description: 'Infinix Zero Ultra 5G with MediaTek Dimensity 920, 200MP camera, and 6.8" AMOLED display.',
    
  },
  {
    id: 5,
    name: 'Redmi Note 12 Pro+',
    price: 295000,
    category: 'Smartphones',
    image: 'https://i.ebayimg.com/images/g/YowAAOSwFUJnTyS7/s-l1600.webp',
    description: 'Redmi Note 12 Pro+ with MediaTek Dimensity 1080, 200MP camera, and 6.67" AMOLED display.',
    
  },
  {
    id: 6,
    name: 'Nova Edge Pro Dual SIM Android Phone (256GB)',
    price: 315000,
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Smartphones',
  },
  {
    id: 7,
    name: 'AeroLite Compact Smartphone (64GB)',
    price: 175000,
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Smartphones',
  },

  // Laptops
  {
    id: 8,
    name: 'Apple MacBook Air 13" M1 Chip 8GB 256GB 2020 Model - Gold',
    price: 1465000,
    image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/921227/1.jpg?7118',
    category: 'Laptops',
  },
  {
    id: 9,
    name: 'Hp EliteBook X360 1030 G3 TOUCHSCREEN CORE I5 8GB RAM/ 512GB SSD BACKLIT KEYBOARD FP READER WIN 11 PRO',
    price: 575000,
    image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/4679262/2.jpg?4561',
    category: 'Laptops',
  },
  {
    id: 10,
    name: 'Asus Vivobook Go 14" Laptop, Intel Celeron, 4GB, 512GB, Win 11, Office 365 1-Yr, Rose Pink',
    price: 425000,
    image: 'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/22/9067104/2.jpg?9769',
    category: 'Laptops',
  },

  // Accessories
{
    id: 11,
    name: 'Baseus 65W Fast Charger',
    price: 52000,
    category: 'Accessories',
    image: 'https://i.ebayimg.com/images/g/sAUAAOSwk~Bn2pJD/s-l1600.webp',
    description: 'Baseus 65W Fast Charger with USB-C and USB-A ports, compatible with most devices.',
    
  },
  {
    id: 12,
    name: 'Oraimo 3-in-1 Charging Cable',
    price: 50000,
    category: 'Accessories',
    image: 'https://pictures-nigeria.jijistatic.net/35400288_3_431x505.jpg',
    description: 'Oraimo 3-in-1 charging cable with Lightning, USB-C, and Micro USB connectors.',
    
  },
  {
    id: 13,
    name: 'Bluetooth Selfie Stick Tripod',
    price: 58000,
    category: 'Accessories',
    image: 'https://i.ebayimg.com/thumbs/images/g/e~4AAOSw9gloTI7T/s-l300.webp',
    description: 'Bluetooth selfie stick with tripod stand, remote control, and extendable design.',

  },
  {
    id: 14,
    name: 'Wireless Charging Pad',
    price: 61000,
    category: 'Accessories',
    image: 'https://i.ebayimg.com/images/g/2j4AAOSw9T9memuH/s-l1600.webp',
    description: '10W wireless charging pad with LED indicator and non-slip design for Qi-enabled devices.',

  },
  {
    id: 15,
    name: 'USB-C Hub Adapter',
    price: 63000,
    category: 'Accessories',
    image: 'https://i.ebayimg.com/images/g/2k4AAOSwIJVnUm-6/s-l1600.webp',
    description: 'USB-C hub adapter with HDMI, USB-A, SD card reader, and power delivery support.',
    
  },

  // Best Sellers
  {
    id: 16,
    name: 'Binatone Multi-Cooker',
    price: 62000,
    category: 'Best Sellers',
    image: "https://binatonelifestyle.com/wp-content/uploads/2023/11/MCS2250-1.webp"
  },
  {
    id: 17,
    name: 'Scanfrost Microwave Oven',
    price: 120000,
    category: 'Best Sellers',
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/0672952/1.jpg?7336"
  },
  {
    id: 18,
    name: 'Philips Blender Pro Series',
    price: 74000,
    category: 'Best Sellers',
    image: "https://images.philips.com/is/image/philipsconsumer/vrs_63d7ce27948b26063f463f17ca312d5b6af360c7?&wid=618&hei=618&$jpglarge$"
  },
  {
    id: 19,
    name: 'LG Washing Machine (6.5kg Front Load)',
    price: 425000,
    category: 'Best Sellers',
    image: "https://www.lg.com/africa/images/washing-machines/md06041777/gallery/d-01-new.jpg"
  },
  {
    id: 20,
    name: 'Saisho Gas Cooker (4 Burners)',
    price: 168000,
    category: 'Best Sellers',
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/0913104/1.jpg?3819"
  },
];