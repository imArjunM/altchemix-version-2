import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, MapPin, Phone, Mail, ReceiptIndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const industries = [
  'Packaging',
  'Pipes & Agriculture',
  'Wire & Cable',
  'Fibres & Textiles',
  'Healthcare',
  'Appliances',
  'Custom OEM',
  'Other',
];

const products = [
  'Colour Masterbatch',
  'White Masterbatch',
  'Black Masterbatch',
  'Additive Masterbatch',
  'Custom Solutions',
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    product: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Inquiry Submitted',
      description: 'Our team will contact you within 24 hours.',
    });
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      industry: '',
      product: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id='contact' className='py-32 relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-muted/30' />
      <div className='absolute inset-0 grid-overlay opacity-30' />

      <div className='container mx-auto px-6 lg:px-12 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16'>
          {/* Left - Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className='inline-block text-sm font-semibold text-teal uppercase tracking-widest mb-4'>
              Get in Touch
            </span>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              Let's Discuss Your Project
            </h2>
            <p className='text-lg text-muted-foreground mb-12'>
              Whether you need custom color matching, additive solutions, or
              technical consultation, our team is ready to help you achieve
              optimal results.
            </p>

            {/* Contact Info */}
            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0'>
                  <MapPin className='w-6 h-6 text-teal' />
                </div>
                <div>
                  <h4 className='font-semibold text-foreground mb-1'>
                    ALTCHEMIX MATERIALS LLP
                  </h4>
                  <p className='text-muted-foreground'>
                    Plot No. PAP V-72/1/2, Wauli MIDC Chakan Phase 2 <br />
                    Chakan Police Station, Khed, Pune
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0'>
                  <Mail className='w-6 h-6 text-teal' />
                </div>
                <div>
                  <h4 className='font-semibold text-foreground mb-1'>Email</h4>
                  <p className='text-muted-foreground'>info@altchemix.com</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0'>
                  <ReceiptIndianRupee className='w-6 h-6 text-teal' />
                </div>
                <div>
                  <h4 className='font-semibold text-foreground mb-1'>
                    GSTIN/UIN
                  </h4>
                  <p className='text-muted-foreground'>27ACKFA2023M1ZE</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className='glass-card rounded-2xl p-8 lg:p-10 shadow-card'
            >
              <div className='grid md:grid-cols-2 gap-6 mb-6'>
                <div>
                  <label className='block text-sm font-medium text-foreground mb-2'>
                    Full Name *
                  </label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors text-foreground'
                    placeholder='John Smith'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-foreground mb-2'>
                    Company *
                  </label>
                  <input
                    type='text'
                    name='company'
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors text-foreground'
                    placeholder='Acme Plastics Inc.'
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-6 mb-6'>
                <div>
                  <label className='block text-sm font-medium text-foreground mb-2'>
                    Email *
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors text-foreground'
                    placeholder='john@acme.com'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-foreground mb-2'>
                    Phone
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors text-foreground'
                    placeholder='+1 234 567 8900'
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-6 mb-6'>
                <div>
                  <label className='block text-sm font-medium text-foreground mb-2'>
                    Industry
                  </label>
                  <select
                    name='industry'
                    value={formData.industry}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors text-foreground'
                  >
                    <option value=''>Select Industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className='block text-sm font-medium text-foreground mb-2'>
                    Product Interest
                  </label>
                  <select
                    name='product'
                    value={formData.product}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors text-foreground'
                  >
                    <option value=''>Select Product</option>
                    {products.map((prod) => (
                      <option key={prod} value={prod}>
                        {prod}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className='mb-8'>
                <label className='block text-sm font-medium text-foreground mb-2'>
                  Message
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className='w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors resize-none text-foreground'
                  placeholder='Tell us about your project requirements...'
                />
              </div>

              <Button variant='hero' size='xl' className='w-full group'>
                Submit Inquiry
                <Send className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
