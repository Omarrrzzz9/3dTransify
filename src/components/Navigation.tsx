import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isProductsDropdownOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(e.target as Node)) {
          setIsProductsDropdownOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isProductsDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsMinimized(true);
      } else if (currentScrollY < lastScrollY) {
        setIsMinimized(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const productItems = [
    { id: 'kscan', label: 'KSCAN' },
    { id: 'simscan', label: 'SIMSCAN' },
    { id: 'nimbletrack', label: 'NimbleTrack' },
    { id: '3devok', label: '3DeVOK Series' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
  };

  return (
    <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 transition-all duration-300 ${isMinimized ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between gap-8">
          <div
            className="cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="flex items-center">
              <img
                src="/3d_lll.png"
                alt="3D Transify"
                className="h-12 w-auto"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div
              className="px-5 py-2.5 rounded-full bg-slate-900/70 border border-slate-700 backdrop-blur-sm hover:border-cyan-500/40 transition-all"
            >
              <button
                onClick={() => handleNavClick('home')}
                className={`text-sm font-light transition-colors ${
                  currentPage === 'home'
                    ? 'text-cyan-400'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                Home
              </button>
            </div>

            <div className="relative">
              <div
                className="px-5 py-2.5 rounded-full bg-slate-900/70 border border-slate-700 backdrop-blur-sm hover:border-cyan-500/40 transition-all"
              >
                <button
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                  className={`text-sm font-light transition-colors ${
                    isProductsDropdownOpen
                      ? 'text-cyan-400'
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  Products
                </button>
              </div>
            </div>

            <div
              className="px-5 py-2.5 rounded-full bg-slate-900/70 border border-slate-700 backdrop-blur-sm hover:border-cyan-500/40 transition-all"
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`text-sm font-light transition-colors ${
                  currentPage === 'services'
                    ? 'text-cyan-400'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                Services
              </button>
            </div>

            <div
              className="px-5 py-2.5 rounded-full bg-slate-900/70 border border-slate-700 backdrop-blur-sm hover:border-cyan-500/40 transition-all"
            >
              <button
                onClick={() => handleNavClick('about')}
                className={`text-sm font-light transition-colors ${
                  currentPage === 'about'
                    ? 'text-cyan-400'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                About Us
              </button>
            </div>

            <div
              className="px-5 py-2.5 rounded-full bg-slate-900/70 border border-slate-700 backdrop-blur-sm hover:border-cyan-500/40 transition-all"
            >
              <button
                onClick={() => handleNavClick('contact')}
                className={`text-sm font-light transition-colors ${
                  currentPage === 'contact'
                    ? 'text-cyan-400'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                Contact
              </button>
            </div>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isProductsDropdownOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-md border-t border-slate-800/50">
          <div className="max-w-7xl mx-auto px-8 py-8 relative">
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-1 opacity-0"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(6, 182, 212, 0.6), rgba(6, 182, 212, 0.4))',
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.3)',
                animation: 'extendFromLeft 2s ease-out forwards',
                animationDelay: '0.2s'
              }}
            />
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-1/5 h-0.5 opacity-0"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(6, 182, 212, 0.4))',
                boxShadow: '0 0 15px rgba(6, 182, 212, 0.4)',
                animation: 'extendFromLeft 2s ease-out forwards',
                animationDelay: '0.4s',
                transform: 'translateY(-15px)'
              }}
            />
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-1/6 h-0.5 opacity-0"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(251, 146, 60, 0.4))',
                boxShadow: '0 0 15px rgba(251, 146, 60, 0.4)',
                animation: 'extendFromLeft 2s ease-out forwards',
                animationDelay: '0.6s',
                transform: 'translateY(15px)'
              }}
            />
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 h-1 opacity-0"
              style={{
                background: 'linear-gradient(to left, transparent, rgba(251, 146, 60, 0.6), rgba(251, 146, 60, 0.4))',
                boxShadow: '0 0 20px rgba(251, 146, 60, 0.5), 0 0 40px rgba(251, 146, 60, 0.3)',
                animation: 'extendFromRight 2s ease-out forwards',
                animationDelay: '0.2s'
              }}
            />
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-1/5 h-0.5 opacity-0"
              style={{
                background: 'linear-gradient(to left, transparent, rgba(251, 146, 60, 0.4))',
                boxShadow: '0 0 15px rgba(251, 146, 60, 0.4)',
                animation: 'extendFromRight 2s ease-out forwards',
                animationDelay: '0.4s',
                transform: 'translateY(-15px)'
              }}
            />
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-1/6 h-0.5 opacity-0"
              style={{
                background: 'linear-gradient(to left, transparent, rgba(6, 182, 212, 0.4))',
                boxShadow: '0 0 15px rgba(6, 182, 212, 0.4)',
                animation: 'extendFromRight 2s ease-out forwards',
                animationDelay: '0.6s',
                transform: 'translateY(15px)'
              }}
            />
            <div className="flex items-center justify-center gap-3 relative z-10">
              {productItems.map((product) => (
                <div
                  key={product.id}
                  className="px-5 py-2.5 rounded-full bg-slate-900/70 border border-slate-700 backdrop-blur-sm hover:border-cyan-500/40 transition-all"
                >
                  <button
                    onClick={() => {
                      handleNavClick(product.id);
                      setIsProductsDropdownOpen(false);
                    }}
                    className="text-sm font-light text-gray-200 hover:text-cyan-400 transition-colors"
                  >
                    {product.label}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800/50">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-5 py-2.5 rounded-full text-sm font-light transition-colors ${
                  currentPage === item.id
                    ? 'bg-slate-900/50 text-cyan-400 border border-slate-800'
                    : 'text-gray-300 hover:text-white hover:bg-slate-900/30'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 space-y-2">
              <div className="text-xs text-gray-500 px-5 py-1">Products</div>
              {productItems.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleNavClick(product.id)}
                  className="block w-full text-left px-5 py-2.5 rounded-full text-sm font-light text-gray-300 hover:text-cyan-400 hover:bg-slate-900/30 transition-colors"
                >
                  {product.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
