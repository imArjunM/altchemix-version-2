import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import {
  Target,
  Eye,
  ShieldCheck,
  Recycle,
  Award,
  Users,
  Zap,
} from 'lucide-react';

/* ================= CORE VALUES ================= */

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description:
      'We act with honesty, transparency, and accountability in every decision and partnership.',
  },
  {
    icon: Recycle,
    title: 'Responsibility',
    description:
      'We are committed to sustainable practices that protect our planet and communities.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We pursue superior quality, innovation, and reliability in every solution we deliver.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'We work closely with our customers and teams to achieve shared, long-term success.',
  },
  {
    icon: Zap,
    title: 'Agility',
    description:
      'We adapt quickly to evolving market needs and technological advancements.',
  },
];

/* ================= MOTION ================= */

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/* ================= SECTION ================= */

export function MissionVisionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section className='relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-muted/20' />
      <div className='absolute inset-0 grid-overlay opacity-25' />

      <div className='container relative z-10'>
        <motion.div
          ref={ref}
          variants={container}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* ================= MISSION & VISION ================= */}
          <div className='grid md:grid-cols-2 gap-12 mb-24'>
            {/* Mission */}
            <motion.div
              variants={fadeUp}
              className='glass-card rounded-3xl p-10'
            >
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-14 h-14 rounded-xl bg-teal/15 flex items-center justify-center'>
                  <Target className='w-7 h-7 text-teal' />
                </div>
                <h3 className='text-2xl font-bold'>Our Mission</h3>
              </div>

              <p className='text-lg text-muted-foreground leading-relaxed'>
                Our mission is to revolutionize plastics by delivering
                sustainable, high-performance masterbatch and additive
                technologies that enable superior aesthetics, functionality, and
                cost-efficiency—while shaping a greener future.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeUp}
              className='glass-card rounded-3xl p-10'
            >
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-14 h-14 rounded-xl bg-teal/15 flex items-center justify-center'>
                  <Eye className='w-7 h-7 text-teal' />
                </div>
                <h3 className='text-2xl font-bold'>Our Vision</h3>
              </div>

              <p className='text-lg text-muted-foreground leading-relaxed'>
                To become the most trusted masterbatch and additive solutions
                partner across Asia-Pacific and beyond—recognized for pioneering
                innovation, uncompromising reliability, and leadership in
                sustainable practices.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Blueprint divider */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px blueprint-line' />
    </section>
  );
}
