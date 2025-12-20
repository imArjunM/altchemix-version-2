import { useRef, useState } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import {
  Microscope,
  Beaker,
  Leaf,
  Factory,
  Shield,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import images for full-cover cards
import colorMasterbatch from '@/assets/color-masterbatch.jpg';
import customSolutions from '@/assets/custom-solutions.jpg';

const technologies = [
  {
    icon: Microscope,
    title: 'Colour Matching',
    description:
      'Advanced spectrophotometry for precise color formulation. We match any target within ΔE < 1.0.',
    stats: '10,000+',
    statsLabel: 'Formulations',
    type: 'featured',
    image: colorMasterbatch,
  },
  {
    icon: Beaker,
    title: 'Application Testing',
    description: 'Full-scale processing trials ensure real-world performance.',
    type: 'compact',
  },
  {
    icon: Leaf,
    title: 'Sustainable Solutions',
    description: 'Bio-based and recyclable masterbatches for circular economy.',
    type: 'compact',
  },
  {
    icon: Factory,
    title: 'Twin-Screw Extrusion',
    description:
      'State-of-the-art compounding with precision temperature control and superior dispersion.',
    stats: '99.9%',
    statsLabel: 'Dispersion Rate',
    type: 'featured',
    image: customSolutions,
  },
  {
    icon: Shield,
    title: 'Quality Control',
    description:
      'Comprehensive testing: mechanical, thermal, spectral, and rheological analysis.',
    badges: ['ISO 9001', 'ISO 14001', 'REACH'],
    type: 'wide',
  },
];

// Featured Card with full image cover
function FeaturedCard({
  tech,
  index,
}: {
  tech: (typeof technologies)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 50 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);
  const brightness = useTransform(mouseXSpring, [-0.5, 0.5], [0.9, 1.1]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.23, 1, 0.32, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
      }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className='md:col-span-2 relative group cursor-pointer perspective-1000'
    >
      <motion.div
        className='relative h-80 rounded-3xl overflow-hidden'
        animate={{ scale: isHovered ? 1.02 : 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Background Image */}
        <motion.img
          src={tech.image}
          alt={tech.title}
          className='absolute inset-0 w-full h-full object-cover'
          style={{ filter: `brightness(${brightness})` } as any}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.7 }}
        />

        {/* Dark Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-graphite via-graphite/60 to-graphite/20' />

        {/* Light sweep */}
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-teal/10 to-transparent'
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '200%' : '-100%' }}
          transition={{ duration: 0.7 }}
        />

        {/* Animated border glow */}
        <motion.div
          className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
          style={{
            background:
              'linear-gradient(135deg, transparent 40%, hsl(var(--teal) / 0.3) 50%, transparent 60%)',
            backgroundSize: '200% 200%',
          }}
          animate={
            isHovered
              ? {
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Particle effects */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, x: '50%', y: '50%' }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    x: `${50 + (Math.random() - 0.5) * 80}%`,
                    y: `${50 + (Math.random() - 0.5) * 80}%`,
                  }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                  className='absolute w-1 h-1 rounded-full bg-teal'
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Content */}
        <div className='absolute inset-0 p-8 flex flex-col justify-end'>
          {/* Icon with pulse */}
          <motion.div
            className='w-16 h-16 rounded-2xl bg-white backdrop-blur-sm flex items-center justify-center mb-6 border border-teal/30'
            animate={
              isHovered
                ? {
                    boxShadow: [
                      '0 0 0 0 hsl(var(--teal) / 0.4)',
                      '0 0 0 15px hsl(var(--teal) / 0)',
                      '0 0 0 0 hsl(var(--teal) / 0)',
                    ],
                  }
                : {}
            }
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <tech.icon className='w-8 h-8 text-teal' />
          </motion.div>

          <div className='flex items-end justify-between'>
            <div className='flex-1'>
              <motion.h3
                className='text-3xl font-bold text-white mb-2'
                animate={{ x: isHovered ? 10 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {tech.title}
              </motion.h3>
              <motion.p
                className='text-gray-200 max-w-md'
                initial={{ opacity: 0.8 }}
                animate={{ opacity: isHovered ? 1 : 0.8 }}
              >
                {tech.description}
              </motion.p>
            </div>

            {/* Stats */}
            {tech.stats && (
              <motion.div
                className='text-right ml-4'
                animate={{ scale: isHovered ? 1.1 : 1, y: isHovered ? -5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className='text-4xl font-bold text-yellow-500'>{tech.stats}</div>
                <div className='text-sm text-white'>
                  {tech.statsLabel}
                </div>
              </motion.div>
            )}
          </div>

          {/* Animated CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className='mt-6'
          >
            <Button variant='glass' className='group/btn'>
              Explore Technology
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className='ml-2 w-4 h-4' />
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Compact Card with icon focus
function CompactCard({
  tech,
  index,
}: {
  tech: (typeof technologies)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='relative group cursor-pointer'
    >
      <motion.div
        className='glass-card rounded-2xl p-8 h-full relative overflow-hidden'
        animate={{
          y: isHovered ? -8 : 0,
          boxShadow: isHovered
            ? '0 25px 50px -12px hsl(var(--teal) / 0.25)'
            : '0 0 0 0 transparent',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
          style={{
            background:
              'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--teal) / 0.1) 0%, transparent 50%)',
          }}
        />

        {/* Icon with animated ring */}
        <div className='relative mb-6'>
          <motion.div
            className='w-14 h-14 rounded-xl bg-gradient-to-br from-teal/20 to-emerald-deep/10 flex items-center justify-center relative z-10'
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <tech.icon className='w-7 h-7 text-teal' />
          </motion.div>

          {/* Orbiting dot */}
          <motion.div
            className='absolute top-0 left-0 w-full h-full'
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              className='absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-teal'
              animate={{ opacity: isHovered ? 1 : 0 }}
            />
          </motion.div>
        </div>

        <motion.h3
          className='text-xl font-bold text-foreground mb-3'
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {tech.title}
        </motion.h3>

        <motion.p
          className='text-muted-foreground leading-relaxed mb-6'
          animate={{ opacity: isHovered ? 1 : 0.7 }}
        >
          {tech.description}
        </motion.p>

        {/* Animated underline */}
        <motion.div
          className='h-0.5 bg-gradient-to-r from-teal to-emerald-deep rounded-full'
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Floating arrow */}
        <motion.div
          className='absolute bottom-6 right-6'
          animate={{
            x: isHovered ? 0 : -10,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight className='w-5 h-5 text-teal' />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Wide Card with badges
function WideCard({
  tech,
  index,
}: {
  tech: (typeof technologies)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='md:col-span-3 relative group cursor-pointer'
    >
      <motion.div
        className='glass-card rounded-2xl p-8 relative overflow-hidden'
        animate={{
          y: isHovered ? -5 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Cursor spotlight */}
        <motion.div
          className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
          style={{
            background: `radial-gradient(600px circle at ${mouseX.get()}px ${mouseY.get()}px, hsl(var(--teal) / 0.06), transparent 40%)`,
          }}
        />

        {/* Blueprint grid lines */}
        <div className='absolute inset-0 opacity-20'>
          <div className='absolute inset-0 grid-overlay' />
          <motion.div
            className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal to-transparent'
            animate={{ x: isHovered ? '100%' : '-100%' }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        <div className='relative z-10 flex flex-col md:flex-row md:items-center gap-6'>
          {/* Icon */}
          <motion.div
            className='w-20 h-20 rounded-2xl bg-gradient-to-br from-teal/20 to-emerald-deep/10 flex items-center justify-center flex-shrink-0 border border-teal/20'
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.4 }}
          >
            <tech.icon className='w-10 h-10 text-teal' />
          </motion.div>

          {/* Content */}
          <div className='flex-1'>
            <motion.h3
              className='text-2xl font-bold text-foreground mb-2'
              animate={{ x: isHovered ? 5 : 0 }}
            >
              {tech.title}
            </motion.h3>
            <p className='text-muted-foreground mb-4'>{tech.description}</p>

            {/* Animated badges */}
            <div className='flex flex-wrap gap-3'>
              {tech.badges?.map((badge, i) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className='px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-medium border border-teal/20 backdrop-blur-sm'
                >
                  <motion.span
                    animate={{ opacity: isHovered ? 1 : 0.8 }}
                    className='flex items-center gap-2'
                  >
                    <Sparkles className='w-3 h-3' />
                    {badge}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Animated CTA */}
          <motion.div
            animate={{ x: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button variant='teal' className='group/btn whitespace-nowrap'>
              View Certifications
              <ArrowRight className='ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform' />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function TechnologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id='technology'
      className='pb-32 relative overflow-hidden '
    >
      {/* Animated background */}
      <div className='absolute inset-0 grid-overlay opacity-30' />
      <motion.div
        className='absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-teal/5 to-transparent rounded-full blur-3xl'
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-emerald-deep/5 to-transparent rounded-full blur-3xl'
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className='container mx-auto px-6 lg:px-12 relative z-10'>
        {/* Header with staggered animation */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='inline-block text-sm font-semibold text-teal uppercase tracking-widest mb-4'
          >
            Innovation & Technology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-4xl md:text-5xl font-bold text-foreground mb-6'
          >
            R&D Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-xl text-muted-foreground max-w-3xl mx-auto'
          >
            Our commitment to innovation drives continuous advancement in
            polymer technology and processing capabilities.
          </motion.p>
        </motion.div>

        {/* Bento Grid - 5 cards with unique designs */}
        <div className='grid md:grid-cols-3 gap-6'>
          {/* Row 1: Featured card (2 cols) + Compact card */}
          <FeaturedCard tech={technologies[0]} index={0} />
          <CompactCard tech={technologies[1]} index={1} />

          {/* Row 2: Compact card + Featured card (2 cols) */}
          <CompactCard tech={technologies[2]} index={2} />
          <FeaturedCard tech={technologies[3]} index={3} />

          {/* Row 3: Wide card spanning all 3 columns */}
          <WideCard tech={technologies[4]} index={4} />
        </div>
      </div>

      {/* Blueprint line */}
      <motion.div
        className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent'
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
    </section>
  );
}
