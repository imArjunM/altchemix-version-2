import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Globe, FlaskConical, Users } from 'lucide-react';

const stats = [
  { icon: Globe, value: '50+', label: 'Countries Served' },
  { icon: FlaskConical, value: '1000+', label: 'Custom Formulations' },
  { icon: Award, value: '25+', label: 'Years of Excellence' },
  { icon: Users, value: '500+', label: 'Industry Partners' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-muted/30' />
      <div className='absolute inset-0 grid-overlay opacity-30' />

      <div className='container mx-auto px-6 lg:px-12 relative z-10'>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='grid lg:grid-cols-2 gap-16 items-center'
        >
          {/* Content */}
          <div>
            <motion.span
              variants={itemVariants}
              className='inline-block text-sm font-semibold text-teal uppercase tracking-widest mb-4'
            >
              About Altchemix
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className='text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight'
            >
              Engineering the Future of
              <span className='gradient-text'> Polymer Performance</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className='text-lg text-muted-foreground leading-relaxed mb-6'
            >
              For over two decades, Altchemix has been at the forefront of
              masterbatch innovation. Our state-of-the-art facilities, equipped
              with advanced twin-screw extrusion technology, deliver
              unparalleled precision in color matching and additive dispersion.
            </motion.p>

            {/* Feature list */}
            <motion.div variants={itemVariants} className='space-y-4'>
              {[
                'Advanced twin-screw extrusion precision',
                'Global quality certifications & compliance',
                'Sustainable & eco-ready formulations',
              ].map((feature, index) => (
                <div key={index} className='flex items-center gap-3'>
                  <div className='w-5 h-5 rounded-full bg-teal/20 flex items-center justify-center'>
                    <div className='w-2 h-2 rounded-full bg-teal' />
                  </div>
                  <span className='text-foreground font-medium'>{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className='grid grid-cols-2 gap-6'
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className='glass-card rounded-2xl p-8 text-center group hover:shadow-elevated transition-all duration-500 light-sweep'
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <stat.icon className='w-10 h-10 mx-auto mb-4 text-teal group-hover:scale-110 transition-transform' />
                <div className='text-4xl font-bold text-foreground mb-2'>
                  {stat.value}
                </div>
                <div className='text-sm text-muted-foreground font-medium'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative line */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px blueprint-line' />
    </section>
  );
}
