import mastercardlogo from '../assets/mastercardlogo.png'
import paypalLogo from '../assets/paypallogo.png'
import visaLogo from '../assets/visalog.png'


// const footerLinks = {
//   information: [
//     { name: 'Privacy Policy', href: '/privacy' },
//     { name: 'Terms and Conditions', href: '/terms' },
//     { name: 'Payment Options', href: '/payment' },
//     { name: 'Return Policy', href: '/returns' },
//   ],
//   contact: [
//     { name: 'Phone: 08066954411', href: 'tel:08066954411' },
//     { name: 'Email: adenugakao2018@gmail.com', href: 'mailto:adenugakao2018@gmail.com' },
//     { name: 'Address: 8, Rasheed Alaba Williams Street, Lekki Phase 1, Lagos State, Nigeria', href: '#' },
//   ],
// };

export default function Footer() {
  return (
    // <footer className="bg-gray-900 text-white">
    //   <div className="container-custom py-12">
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //       {/* Brand */}
    //       <div>
    //         <h3 className="text-xl font-bold mb-4">Kazzin Digital</h3>
    //         <p className="text-gray-400">
    //           Your one-stop fashion destination for style that speaks.
    //         </p>
    //       </div>

    //       {/* Information */}
    //       <div>
    //         <h3 className="text-lg font-semibold mb-4">Information</h3>
    //         <ul className="space-y-2">
    //           {footerLinks.information.map((link) => (
    //             <li key={link.name}>
    //               <Link to={link.href} className="text-gray-400 hover:text-white">
    //                 {link.name}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* Contact */}
    //       <div>
    //         <h3 className="text-lg font-semibold mb-4">Contact</h3>
    //         <ul className="space-y-2">
    //           {footerLinks.contact.map((link) => (
    //             <li key={link.name}>
    //               <a
    //                 href={link.href}
    //                 className="text-gray-400 hover:text-white"
    //                 target={link.href === '#' ? undefined : '_blank'}
    //                 rel={link.href === '#' ? undefined : 'noopener noreferrer'}
    //               >
    //                 {link.name}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>

    //     {/* Copyright */}
    //     <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
    //       <p>© 2025 www.kazzindigital.com - Powered by KAZZIN DIGITAL</p>
    //     </div>
    //   </div>
    // </footer>
    // At bottom of Home component's return, just before the closing </div>:


    <footer className="bg-gray-300 text-black-200 px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Policies Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Privacy Policy</h3>
          <p className="text-sm leading-relaxed">
            We respect your privacy. All customer data is handled securely and never shared with third parties without consent.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Terms &amp; Conditions</h3>
          <p className="text-sm leading-relaxed">
            By using our website, you agree to our terms regarding purchases, returns, account security, and more.
          </p>
        </div>

        {/* Payment & Return Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Payment Options</h3>
          <p className="text-sm leading-relaxed">
            We accept major debit cards, bank transfers, and secure online payment gateways.
          </p>
          <div className='grid grid-cols-3 gap-2'>
            <img src={mastercardlogo} className='h-20' />
            <img src={paypalLogo} className='h-20' />
            <img src={visaLogo} className='h-20' />

          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2">Return Policy</h3>
          <p className="text-sm leading-relaxed">
            Not satisfied with your order? You can return unused items within 7 days of delivery. Terms and conditions apply.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-sm leading-relaxed"><strong>Phone No:</strong> 08066954411</p>
          <p className="text-sm leading-relaxed"><strong>Email:</strong>info@cobaltstardigital.com</p>
          <p className="text-sm leading-relaxed"><strong>Address:</strong> 8, Rasheed Alaba Williams Street, Lekki Phase 1, Lagos State, Nigeria</p>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-400">
        &copy; 2025 <span className="font-semibold">Cobalt Electronics</span> — All rights reserved.
      </div>
    </footer>


  );
} 