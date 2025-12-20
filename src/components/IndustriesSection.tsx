import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  Package,
  Pipette,
  Cable,
  Shirt,
  Heart,
  Home,
  Cog,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const industries = [
  {
    id: 'packaging',
    icon: Package,
    title: 'Packaging',
    subtitle: 'Food & Consumer Goods',
    description:
      'High-performance masterbatches for flexible and rigid packaging applications. Our solutions ensure food safety compliance, UV protection, and brand-perfect color consistency across millions of units.',
    applications: [
      'Food containers',
      'Beverage bottles',
      'Flexible films',
      'Caps & closures',
    ],
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  },
  {
    id: 'pipes',
    icon: Pipette,
    title: 'Pipes & Agriculture',
    subtitle: 'Infrastructure Solutions',
    description:
      'Engineered additives for agricultural films, irrigation systems, and infrastructure pipes. Weather-resistant formulations that extend product life in harsh outdoor conditions.',
    applications: [
      'PE/PP pipes',
      'Drip irrigation',
      'Mulch films',
      'Greenhouse covers',
    ],
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
  },
  {
    id: 'wire-cable',
    icon: Cable,
    title: 'Wire & Cable',
    subtitle: 'Electrical Applications',
    description:
      'Flame-retardant and UV-stabilized masterbatches for electrical insulation. Meeting stringent fire safety standards while maintaining excellent processability.',
    applications: [
      'Building wire',
      'Automotive cables',
      'Telecom cables',
      'Industrial wiring',
    ],
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  },
  {
    id: 'fibres',
    icon: Shirt,
    title: 'Fibres & Textiles',
    subtitle: 'Technical Textiles',
    description:
      'Specialized masterbatches for synthetic fiber production. Antimicrobial, UV-resistant, and color-fast solutions for apparel and technical textile applications.',
    applications: [
      'Carpet fibers',
      'Nonwovens',
      'Technical textiles',
      'Sportswear',
    ],
    image:
      'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop',
  },
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Healthcare',
    subtitle: 'Medical & Pharmaceutical',
    description:
      'FDA-compliant and biocompatible masterbatches for medical devices and pharmaceutical packaging. Antimicrobial solutions that meet the strictest regulatory requirements.',
    applications: [
      'Medical devices',
      'Pharma packaging',
      'Diagnostic equipment',
      'Hospital consumables',
    ],
    image:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop',
  },
  {
    id: 'appliances',
    icon: Home,
    title: 'Appliances',
    subtitle: 'Consumer Electronics',
    description:
      'Premium color and performance solutions for household appliances. Scratch-resistant, UV-stable formulations that maintain aesthetics throughout product life.',
    applications: [
      'White goods',
      'Small appliances',
      'Electronics housings',
      'HVAC components',
    ],
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
  },
  {
    id: 'custom',
    icon: Cog,
    title: 'Custom OEM',
    subtitle: 'Tailored Solutions',
    description:
      'Bespoke masterbatch development for unique applications. Our technical team works alongside your R&D to create proprietary formulations that give you a competitive edge.',
    applications: [
      'Automotive parts',
      'Industrial components',
      'Specialty applications',
      'R&D projects',
    ],
    image:
      'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop',
  },
];

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id='industries' className='py-32 relative overflow-hidden '>
      {/* Background */}
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-emerald-deep via-primary to-graphite' />
      <div className='absolute inset-0 grid-overlay opacity-10' />
      <div className='absolute inset-0 noise-overlay' />

      {/* Glow effects */}
      <div className='absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-teal/20 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-light/10 rounded-full blur-3xl' />

      <div className='container mx-auto px-6 lg:px-12 relative z-10'>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <span className='inline-block text-sm font-semibold text-teal uppercase tracking-widest mb-4'>
            Industries We Serve
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-primary-foreground mb-6'>
            Tailored Solutions for Every Sector
          </h2>
          <p className='text-xl text-stone max-w-3xl mx-auto'>
            From packaging to healthcare, our masterbatches power products
            across diverse industries with precision-engineered performance.
          </p>
        </motion.div>

        {/* Industry Selector - Avient Style */}
        <div className='grid lg:grid-cols-12 gap-8 items-start'>
          {/* Left Menu */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='lg:col-span-4 space-y-1'
          >
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry)}
                className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 group flex items-center gap-4 ${
                  activeIndustry.id === industry.id
                    ? 'bg-teal/20 border-l-4 border-teal'
                    : 'hover:bg-primary-foreground/5 border-l-4 border-transparent'
                }`}
              >
                <industry.icon
                  className={`w-5 h-5 transition-colors ${
                    activeIndustry.id === industry.id
                      ? 'text-teal'
                      : 'text-stone group-hover:text-primary-foreground'
                  }`}
                />
                <div>
                  <span
                    className={`block font-semibold transition-colors ${
                      activeIndustry.id === industry.id
                        ? 'text-primary-foreground'
                        : 'text-stone group-hover:text-primary-foreground'
                    }`}
                  >
                    {industry.title}
                  </span>
                  <span className='text-sm text-steel-light'>
                    {industry.subtitle}
                  </span>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Right Content */}
          <div className='lg:col-span-8'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className='relative rounded-2xl overflow-hidden'
              >
                {/* Image */}
                <div className=' relative'>
                  <img
                    src={activeIndustry.image}
                    alt={activeIndustry.title}
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-graphite via-graphite/60 to-transparent' />
                </div>

                {/* Content Overlay */}
                <div className='absolute bottom-0 left-0 right-0 p-8 lg:p-12'>
                  <h3 className='text-3xl font-bold text-primary-foreground mb-3'>
                    Why Materials Matter for {activeIndustry.title}
                  </h3>
                  <p className='text-lg text-silver mb-6 max-w-2xl'>
                    {activeIndustry.description}
                  </p>

                  {/* Applications */}
                  <div className='flex flex-wrap gap-2 mb-8'>
                    {activeIndustry.applications.map((app) => (
                      <span
                        key={app}
                        className='px-3 py-1 rounded-full bg-primary-foreground/10 text-sm text-silver border border-primary-foreground/20'
                      >
                        {app}
                      </span>
                    ))}
                  </div>

                  <Button variant='teal' size='lg' className='group'>
                    Explore Solutions
                    <ArrowRight
                      className='ml-2 group-hover:translate-x-1 transition-transform'
                      size={18}
                    />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
