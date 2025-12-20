import { motion } from 'framer-motion';
import { ArrowRight, FileText, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const actions = [
  {
    icon: Phone,
    title: 'Contact Sales',
    description: 'Speak with our technical experts about your requirements.',
    cta: 'Get in Touch',
    primary: true,
  },
  {
    icon: FileText,
    title: 'Download Brochure',
    description:
      'Access our complete product catalog and technical data sheets.',
    cta: 'Download PDF',
    primary: false,
  },
  {
    icon: Calendar,
    title: 'Schedule Discussion',
    description: 'Book a consultation with our R&D team for custom solutions.',
    cta: 'Book Meeting',
    primary: false,
  },
];

export function CTASection() {
  return (
    <section className='py-32 relative overflow-hidden'>
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-primary-foreground mb-6'>
            Ready to Transform Your Polymers?
          </h2>
          <p className='text-xl text-silver max-w-2xl mx-auto'>
            Partner with Altchemix for masterbatch solutions that elevate your
            products to the next level.
          </p>
        </motion.div>

        {/* Action Cards */}
        <div className='grid md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 ${
                action.primary
                  ? 'bg-primary-foreground shadow-elevated'
                  : 'bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20'
              }`}
            >
              <div
                className={`w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center ${
                  action.primary
                    ? 'bg-gradient-to-br from-teal to-emerald-deep'
                    : 'bg-primary-foreground/10'
                }`}
              >
                <action.icon
                  className={`w-8 h-8 ${
                    action.primary
                      ? 'text-primary-foreground'
                      : 'text-primary-foreground'
                  }`}
                />
              </div>

              <h3
                className={`text-xl font-bold mb-3 ${
                  action.primary ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {action.title}
              </h3>

              <p
                className={`mb-6 ${
                  action.primary ? 'text-muted-foreground' : 'text-silver'
                }`}
              >
                {action.description}
              </p>

              <Button
                variant={action.primary ? 'hero' : 'heroOutline'}
                className={`w-full group ${
                  !action.primary &&
                  'border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-foreground'
                }`}
              >
                {action.cta}
                <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
