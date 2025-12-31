import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Award, Recycle, Wrench, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const features = [
  {
    icon: Palette,
    title: 'Custom Color & Fast Turnaround',
    text: 'Precision-matched solutions delivered with speed and consistency.',
  },
  {
    icon: Award,
    title: 'Certified Premium Quality',
    text: 'Global standards ensuring reliability across every application.',
  },
  {
    icon: Recycle,
    title: 'Sustainable Additive Systems',
    text: 'Eco-ready formulations supporting circular plastic ecosystems.',
  },
  {
    icon: Wrench,
    title: 'Technical & Application Expertise',
    text: 'Hands-on support to optimize processing and performance.',
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section id='about' className='relative py-28 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-muted/30' />
      <div className='absolute inset-0 grid-overlay opacity-30' />

      <div className='container mx-auto px-6 lg:px-12 relative z-10'>
        <motion.div
          ref={ref}
          variants={container}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='grid lg:grid-cols-[1fr_2fr] gap-16 items-center'
        >
          {/* LEFT — Core Message */}
          <div>
            <motion.span
              variants={fadeUp}
              className='inline-block text-sm font-semibold uppercase tracking-widest text-teal mb-4'
            >
              About Us
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className='text-4xl md:text-4xl font-bold leading-tight mb-6'
            >
              Engineering Advanced
              <span className='gradient-text'> Polymer Solutions</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className='text-lg text-muted-foreground leading-relaxed max-w-xl'
            >
              We combine advanced manufacturing, material science expertise, and
              sustainable innovation to deliver premium masterbatch and additive
              solutions for demanding global industries.
            </motion.p>

            <div className='mt-10'>
              <Button variant='hero' size='xl' className='group'>
                Know More
                <ArrowRight
                  className='ml-2 group-hover:translate-x-1 transition-transform'
                  size={18}
                />
              </Button>
            </div>
          </div>

          {/* RIGHT — Value Grid */}
          <motion.div
            variants={container}
            className='grid sm:grid-cols-2 gap-6'
          >
            {features.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 280 }}
                className='glass-card rounded-2xl p-7 group hover:shadow-elevated transition-all duration-500'
              >
                <item.icon className='w-8 h-8 text-teal mb-4 group-hover:scale-110 transition-transform' />
                <h4 className='text-base font-semibold mb-2'>{item.title}</h4>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Blueprint Line */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px blueprint-line' />
    </section>
  );
}
