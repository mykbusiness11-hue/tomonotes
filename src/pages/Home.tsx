import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Eye,
  EyeOff,
  Monitor,
  Smartphone,
  MessageSquare,
  Presentation,
  Brain,
  Sparkles,
  Shield,
  Download,
  ArrowRight,
  Check,
} from 'lucide-react';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <PrivacySection />
      <PricingPreview />
      <FinalCTA />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Shield className="w-4 h-4 text-accent-primary" />
          <span className="text-sm text-white/80">Hidden during screen sharing</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl font-semibold leading-tight mb-6 text-gradient"
        >
          Keep notes visible only to yourself
          <br />
          during screen sharing.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          TOMONotes lets you keep floating notes, scripts, and reminders visible only to you during Zoom Meet, Teams, interviews, and presentations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link
            to="/download"
            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-brand-black font-medium hover:bg-white/90 transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            Download for Windows
          </Link>
         
        </motion.div>

        {/* Hero Visual */}
       {/* Product Demo Video */}
{/* Product Demo Video */}
<motion.div
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="mt-12"
>
  <div className="w-full">
    <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
      <iframe
        className="
          w-full
          h-[100px]
          md:h-[200px]
          lg:h-[400px]
        "
        src="https://www.youtube.com/embed/l8Cbk3PWEXs?rel=0"
        title="TOMONotes Demo"
        allowFullScreen
      />
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
};



const FeaturesSection = () => {
  const features = [
    {
      icon: EyeOff,
      title: 'Invisible During Screen Sharing',
      description: 'Your notes stay private unless you choose to reveal them.',
    },
    {
      icon: Monitor,
      title: 'Always On Top',
      description: 'Keep your workspace above every app and meeting window.',
    },
    {
      icon: Smartphone,
      title: 'Phone to Desktop Sync',
      description: 'Send thoughts instantly from phone to desktop.',
    },
    {
      icon: Presentation,
      title: 'Teleprompter Mode',
      description: 'Smooth scrolling for presentations and speaking.',
    },
    {
      icon: MessageSquare,
      title: 'Minimal Workspace',
      description: 'Capture ideas without breaking focus.',
    },
    {
      icon: Brain,
      title: 'Reader & Focus Modes',
      description: 'Reduce distractions with a calm writing environment.',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gradient">
            Why TOMONotes?
          </h2>
          <p className="text-white/60">Built for the moments that matter</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-lg p-6 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-accent-primary" />
              </div>
              <h3 className="font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkflowSection = () => {
  const steps = [
    { icon: Smartphone, label: 'Write on phone' },
    { icon: ArrowRight, label: 'Sync', isArrow: true },
    { icon: Monitor, label: 'Use privately' },
    { icon: Presentation, label: 'Present confidently' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gradient">
            Seamless Workflow
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 md:gap-8 flex-wrap"
        >
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              {step.isArrow ? (
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mb-2">
                    <step.icon className="w-4 h-4 text-white/40" />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-lg glass flex items-center justify-center mb-2 hover:bg-white/10 transition-all">
                    <step.icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  <span className="text-xs text-white/60">{step.label}</span>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const PrivacySection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gradient">
                  Built for private thinking.
                </h2>
                <ul className="space-y-4">
                  {[
                    'Hidden during screen sharing',
                    'One-click visibility toggle',
                    'Local-first workspace',
                    'Minimal distraction environment',
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <div className="w-5 h-5 rounded-full bg-accent-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-accent-primary" />
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Privacy Switch Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 flex justify-center"
            >
              <div className="glass-light rounded-xl p-6 w-full max-w-xs">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <EyeOff className="w-5 h-5 text-green-400" />
                    <span className="font-medium text-green-400">Private</span>
                  </div>
                  <span className="text-xs text-white/60">Active</span>
                </div>

                {/* Toggle */}
                <div className="relative h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <motion.div
                    initial={{ x: -40 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="absolute left-2 w-10 h-10 rounded bg-green-500 flex items-center justify-center"
                  >
                    <EyeOff className="w-5 h-5 text-white" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="ml-14 text-sm text-white/80"
                  >
                    Only you can see this
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


const PricingPreview = () => {
  const [checkoutLoading,
  setCheckoutLoading] =
  useState<string | null>(
    null
  );

const handleCheckout = async (
  plan: 'yearly' | 'lifetime'
) => {

  setCheckoutLoading(
    plan
  );

  try {

    const response =
      await fetch(
        `${import.meta.env.VITE_API_URL}/create-checkout`,
        {
          method: 'POST',
          headers: {
            'Content-Type':
              'application/json',
          },
          body:
            JSON.stringify({
              plan,
            }),
        }
      );

    const data =
      await response.json();

    window.location.href =
      data.checkoutUrl;

  }
  catch (error) {

    console.error(
      error
    );

    setCheckoutLoading(
      null
    );

  }

};
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '',
      description: 'Start with full access for 5 days',
      features: [
        'All features unlocked for 5 days',
        'After trial: 1 note + 1 folder free',
        'Privacy mode',
        'Floating notes',
      ],
      button: 'Start Free',
    },
    {
      name: 'Yearly Pro',
      price: '$18.99',
      period: '/year . incl. tax',
      
      description: 'Everything unlocked',
      popular: true,
      features: [
        'Unlimited notes & folders',
        'Privacy mode',
        'Phone sync',
        'Teleprompter mode',
        'Reader & focus modes',
        
      ],
      button: 'Get Yearly',
    },
    {
      name: 'Lifetime Pro',
      price: '$24.99',
      period: ' once . incl. tax',
      description: 'Pay once, use forever',
      features: [
        'Everything in Pro',
        'Lifetime access',
        
        'Priority support',
        'Best value',
      ],
      button: 'Get Lifetime',
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gradient">
            Simple Pricing
          </h2>

          <p className="text-white/60 text-lg">
            Start free. Upgrade only if you love it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-5 glass border border-white/10 ${
                plan.popular
                  ? 'ring-2 ring-accent-primary/50 bg-accent-primary/5'
                  : ''
              }`}
            >

              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-black text-xs font-semibold">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-1xl font-semibold mb-2">
                  {plan.name}
                </h3>

                <p className="text-white/50 text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold">
                  {plan.price}
                </span>

                <span className="text-white/50 ml-1">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <div className="w-5 h-5 rounded-full bg-accent-primary/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-accent-primary" />
                    </div>

                    <span className="text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
  <button
  disabled={
    checkoutLoading !== null
  }
  onClick={() =>
    handleCheckout(
      plan.name === 'Yearly Pro'
        ? 'yearly'
        : 'lifetime'
    )
  }
  className={`block w-full text-center py-3 rounded-xl font-medium transition-all ${
    plan.popular
      ? 'bg-white text-black hover:bg-white/90'
      : 'glass hover:bg-white/10'
  } ${
    checkoutLoading !== null
      ? 'opacity-70 cursor-not-allowed'
      : ''
  }`}
>
  {(checkoutLoading === 'yearly' &&
    plan.name === 'Yearly Pro') ||
   (checkoutLoading === 'lifetime' &&
    plan.name === 'Lifetime Pro')
    ? '⏳ Preparing secure checkout...'
    : plan.button}
</button>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};



const FinalCTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gradient">
            Your workspace should stay yours.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/download"
              className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-brand-black font-medium hover:bg-white/90 transition-all"
            >
              <Download className="w-4 h-4" />
              Download TOMONotes
            </Link>
           
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
