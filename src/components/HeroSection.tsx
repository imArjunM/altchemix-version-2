import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
};

export function HeroSection() {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      {/* Background Layers */}
      <div className='absolute inset-0'>
        {/* Main background gradient */}
        <div className='absolute inset-0 bg-gradient-to-b from-background via-background to-muted' />

        {/* Hero image with overlay */}
        <motion.div
          className='absolute right-0 top-0 w-full lg:w-3/5 h-full'
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10' />
          <img
            src={heroBg}
            alt='Polymer pellets'
            className='w-full h-full object-cover opacity-60'
          />
        </motion.div>

        {/* Grid overlay */}
        <div className='absolute inset-0 grid-overlay opacity-50' />

        {/* Noise texture */}
        <div className='absolute inset-0 noise-overlay' />

        {/* Vignette */}
        <div className='absolute inset-0 vignette' />

        {/* Subtle glow */}
        <div className='absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl' />
      </div>

      {/* Content */}
      <div className='container mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-20'>
        <motion.div
          className='max-w-3xl'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-muted-foreground mb-8'>
              <span className='w-2 h-2 rounded-full bg-teal animate-subtle-pulse' />
              Global Leader in Masterbatch Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className='text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6'
          >
            Innovative <span className='gradient-text'>Color & Additive Formulations</span>{' '}
             for Responsible Plastics
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className='text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-2xl'
          >
            Shaping a Sustainable Future Through Smart Material Science.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className='flex flex-col sm:flex-row gap-4'
          >
            <Button variant='hero' size='xl' className='group'>
              Contact Sales
              <ArrowRight
                className='ml-2 group-hover:translate-x-1 transition-transform'
                size={18}
              />
            </Button>
            <Button variant='heroOutline' size='xl' className='group'>
              <Play size={18} className='mr-2' />
              View Capabilities
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className='mt-16 pt-8 border-t border-border/50'
          >
            <p className='text-sm text-muted-foreground mb-6'>
              Trusted by leading manufacturers worldwide
            </p>
            <div className='flex flex-wrap items-center gap-8 opacity-60'>
              {['ISO 9001', 'ISO 14001', 'REACH', 'RoHS', 'FDA Compliant'].map(
                (cert) => (
                  <span
                    key={cert}
                    className='text-sm font-medium text-steel tracking-wide'
                  >
                    {cert}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className='hidden lg:block absolute right-20 top-1/2 -translate-y-1/2'
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className='w-24 h-24 rounded-2xl glass-card p-4 soft-glow'>
            <div className='w-full h-full rounded-lg bg-gradient-to-br from-teal/20 to-emerald-deep/20' />
          </div>
        </motion.div>
      </div>

      {/* Blueprint line */}
      <div className='absolute bottom-0 left-0 right-0 h-px blueprint-line' />
    </section>
  );
}
