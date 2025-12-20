import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BrandLogo from '@/common/brand-logo';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Industries', href: '#industries' },
  { label: 'Products', href: '#products' },
  { label: 'Technology', href: '#technology' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass shadow-subtle' : 'bg-transparent'
        }`}
      >
        <div className='container mx-auto px-6 lg:px-12'>
          <nav className='flex items-center justify-between h-20'>
            {/* Logo */}
            <motion.a
              href='#'
              className='flex items-center gap-3'
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <BrandLogo />
            </motion.a>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center gap-1'>
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className='px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group'
                  whileHover={{ y: -1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {item.label}
                  <span className='absolute bottom-0 left-4 right-4 h-0.5 bg-teal scale-x-0 group-hover:scale-x-100 transition-transform origin-left' />
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className='hidden lg:flex items-center gap-3'>
              <Button variant='ghost' size='sm'>
                Resources
              </Button>
              <Button variant='hero' size='default'>
                Contact Sales
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='lg:hidden p-2 text-foreground'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='lg:hidden glass border-t border-border'
            >
              <div className='container mx-auto px-6 py-6 space-y-4'>
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className='block py-2 text-foreground font-medium'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className='pt-4 border-t border-border space-y-3'>
                  <Button variant='heroOutline' className='w-full'>
                    Resources
                  </Button>
                  <Button variant='hero' className='w-full'>
                    Contact Sales
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}
