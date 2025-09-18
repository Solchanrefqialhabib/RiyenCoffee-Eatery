"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// In Next.js, images in the 'public' directory are served from the root.
// So, we reference it with a string path instead of importing it as a module.
const logo = '/Logo.png';

interface NavLink {
  href: string;
  label: string;
  megaMenu?: MegaMenuItem[];
}

interface MegaMenuItem {
  title: string;
  links: { href: string; label: string }[];
}

const navLinks: NavLink[] = [
  { href: '/menu', label: 'MENU' },
  { href: '/artikel', label: 'ARTIKEL' },
  { href: '/about', label: 'TENTANG KAMI' },
];

// SVG Icon Components
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-600 hover:text-pink-500 transition">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
);

const TiktokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-600 hover:text-black transition">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.98-1.55-1.99-2.31-4.54-2.2-7.09.05-1.48.45-2.95 1.11-4.26.83-1.63 2.11-3.03 3.65-4.04 1.55-1.02 3.32-1.57 5.12-1.57v4.03c-1.15.02-2.3.15-3.41.44-.01.95-.01 1.9-.02 2.84-.03 1.31.39 2.62 1.17 3.66.78 1.05 1.95 1.76 3.24 1.93.01-2.91-.01-5.82.02-8.73Z"/>
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-600 hover:text-blue-600 transition">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
);


const StarbucksMegaMenu = () => {
  const menuData = {
    'Minuman': [
      { href: '/menu/minuman', label: 'Semua Minuman' },
      { href: '/menu/minuman/espresso', label: 'Espresso' },
      { href: '/menu/minuman/kopi-susu', label: 'Kopi Susu' },
    ],
    'Makanan': [
      { href: '/menu/makanan', label: 'Semua Makanan' },
      { href: '/menu/makanan/pastry', label: 'Pastry' },
      { href: '/menu/makanan/kue', label: 'Kue' },
    ],
  };

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-brand-dark mb-4">Minuman</h3>
          <ul className="space-y-2">
            {menuData['Minuman'].map(link => (
              <li key={link.label}><a href={link.href} className="text-gray-600 hover:text-brand-primary text-sm">{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-brand-dark mb-4">Makanan</h3>
          <ul className="space-y-2">
            {menuData['Makanan'].map(link => (
              <li key={link.label}><a href={link.href} className="text-gray-600 hover:text-brand-primary text-sm">{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="col-span-2">
           <div className="relative w-full h-48 rounded-lg overflow-hidden">
             <img src="/flat.jpg" alt="Menu Special" className="w-full h-full object-cover" />
           </div>
        </div>
      </div>
    </div>
  );
};


export default function Navbar({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const hoverColor = theme === 'dark' ? 'hover:text-gray-200' : 'hover:text-brand-primary';

  return (
    <header className={`relative z-50 transition-colors duration-300 ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center px-6 md:px-10 h-20">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo Riyen Coffee & Eatery" width={65} height={65} />
          </a>
          <nav className="hidden lg:flex items-center h-full">
            <ul className="flex items-center gap-6 h-full">
              {navLinks.map((link) => (
                <li 
                  key={link.label} 
                  className="h-full flex items-center"
                  onMouseEnter={() => setHoveredMenu(link.label)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <a href={link.href} className={`relative font-bold uppercase tracking-widest text-sm transition-colors duration-300 ${textColor} ${hoverColor}`}>
                    {link.label}
                    {hoveredMenu === link.label && (
                      <motion.div 
                        className="absolute bottom-[-28px] left-0 right-0 h-1 bg-brand-primary"
                        layoutId="underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="hidden lg:flex items-center gap-6">
            <div className="flex gap-4">
               <a href="https://www.instagram.com/riyen.id?igsh=d3NpYTU2dmF0eG5j" target="_blank" rel="noopener noreferrer">
                 <InstagramIcon />
               </a>
               <a href="https://www.tiktok.com/@riyen.coffee?_t=ZS-8zpmV7WY5fr&_r=1" target="_blank" rel="noopener noreferrer">
                 <TiktokIcon />
               </a>
               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                 <FacebookIcon />
               </a>
            </div>
            <a href="/contact" className="font-semibold text-sm flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Lokasi Kami
            </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {hoveredMenu === 'MENU' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setHoveredMenu('MENU')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <StarbucksMegaMenu />
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="lg:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-lg"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-end mb-8">
                  <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close Menu">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
              </div>
              <nav className="flex flex-col gap-6 text-lg font-bold">
                {navLinks.map(link => (
                  <a key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.label}</a>
                ))}
              </nav>
               <div className="flex gap-6 mt-10">
                  <a href="https://www.instagram.com/riyen.id?igsh=d3NpYTU2dmF0eG5j" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                  <a href="https://www.tiktok.com/@riyen.coffee?_t=ZS-8zpmV7WY5fr&_r=1" target="_blank" rel="noopener noreferrer"><TiktokIcon /></a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
              </div>
              <div className="mt-auto pt-6 border-t border-gray-200 flex flex-col gap-4">
                  <a href="/contact" className="font-semibold text-sm flex items-center gap-2 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Lokasi Kami
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

