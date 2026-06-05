import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Sparkles, Zap, Shield, Download } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Monthly',
      price: '₹299',
      period: '/month',
      description: 'Try TOMODesk with flexibility',
      features: [
        'All core features',
        'Privacy mode',
        'Phone sync',
        'Teleprompter mode',
        'Email support',
      ],
    },
    {
      name: 'Yearly',
      price: '₹1,999',
      period: '/year',
      description: 'Best value for regular use',
      popular: true,
      features: [
        'All core features',
        'Priority support',
        'Early access to new features',
        'Custom themes',
        'Focus modes',
        'Save ₹1,589/year',
      ],
    },
    {
      name: 'Lifetime',
      price: '₹4,999',
      period: '',
      description: 'Pay once, own forever',
      features: [
        'All features forever',
        'Priority lifetime support',
        'All future updates',
        'Advanced privacy features',
        'Custom integrations',
        'Best for power users',
      ],
    },
  ];

  return (
    <div className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-accent-primary" />
            <span className="text-sm text-white/80">Free 5-day trial</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gradient">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Start free, upgrade when you need. No hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass rounded-xl p-6 relative flex flex-col ${
                plan.popular
                  ? 'ring-2 ring-accent-primary/50 bg-accent-primary/5'
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent-primary text-brand-black text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                <p className="text-sm text-white/50">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-semibold">{plan.price}</span>
                <span className="text-white/50 ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent-primary" />
                    </div>
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/download"
                className={`block w-full text-center py-3 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-white text-brand-black hover:bg-white/90'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-xl p-8 md:p-10"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center text-gradient">
            What's included
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Privacy First',
                description: 'Hidden during screen sharing unless you enable visibility',
              },
              {
                icon: Zap,
                title: 'Instant Sync',
                description: 'Notes appear on desktop instantly from your phone',
              },
              {
                icon: Sparkles,
                title: 'Teleprompter',
                description: 'Smooth scrolling for presentations and speeches',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{feature.title}</h3>
                  <p className="text-sm text-white/60">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-4">
            Questions about pricing?
          </p>
          <a
            href="mailto:hello@TOMODesk.app"
            className="text-accent-primary hover:text-accent-primary/80 transition-colors"
          >
            Contact us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
