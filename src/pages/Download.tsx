import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, Monitor, Smartphone, Check, ArrowRight, Shield, Zap, Lock } from 'lucide-react';

const DownloadPage = () => {
  return (
    <div className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gradient">
            Download TOMONotes
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Start your free 5-day trial. No credit card required.
          </p>
        </motion.div>

        {/* Download Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-xl p-8 hover:bg-white/5 transition-all group"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-accent-primary/10 flex items-center justify-center">
                <Monitor className="w-7 h-7 text-accent-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-1">Desktop App</h2>
                <p className="text-white/60">Windows 10/11</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-white text-brand-black font-medium hover:bg-white/90 transition-all mb-6"
            >
              <Download className="w-5 h-5" />
              Download for Windows
              <span className="text-sm text-brand-gray">v1.0.0</span>
            </motion.button>

            <div className="space-y-3">
              {[
                'Privacy mode during screen sharing',
                'Always on top workspace',
                'Phone sync integration',
                'Teleprompter mode',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-white/60">
                  <Check className="w-4 h-4 text-green-400" />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Companion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-xl p-8 hover:bg-white/5 transition-all group"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center">
                <Smartphone className="w-7 h-7 text-white/60" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-1">Mobile Companion</h2>
                <p className="text-white/60">iOS & Android</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {[
                'Quick note capture',
                'Sync to desktop instantly',
                'Preview while presenting',
                'Voice-to-text support',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-white/60">
                  <Check className="w-4 h-4 text-green-400" />
                  {feature}
                </div>
              ))}
            </div>

            <div className="px-6 py-4 rounded-lg bg-white/5 border border-white/10 border-dashed text-center">
              <p className="text-sm text-white/60">Coming soon</p>
              <p className="text-xs text-white/40 mt-1">Join the waitlist below</p>
            </div>
          </motion.div>
        </div>

        {/* System Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-xl p-8 mb-12"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">System Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'OS', value: 'Windows 10/11' },
              { label: 'RAM', value: '4GB minimum' },
              { label: 'Storage', value: '100MB' },
            ].map((req) => (
              <div key={req.label} className="text-center">
                <p className="text-xs text-white/50 uppercase tracking-wide mb-1">{req.label}</p>
                <p className="font-medium">{req.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold mb-8 text-gradient">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Install',
                description: 'Download and install TOMONotes on your desktop',
                icon: Download,
              },
              {
                step: '02',
                title: 'Start Trial',
                description: 'Launch and start your 5-day free trial',
                icon: Zap,
              },
              {
                step: '03',
                title: 'Present',
                description: 'Keep notes private while screen sharing',
                icon: Shield,
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="glass rounded-lg p-6"
              >
                <div className="text-3xl font-semibold text-accent-primary/30 mb-4">
                  {item.step}
                </div>
                <item.icon className="w-8 h-8 text-accent-primary mb-3" />
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center glass rounded-xl p-8"
        >
          <Lock className="w-10 h-10 text-accent-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Built for Privacy</h3>
          <p className="text-white/60 mb-6 max-w-md mx-auto">
            Your notes never leave your device. No cloud sync, no tracking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-brand-black font-medium"
            >
              <Download className="w-4 h-4" />
              Download Now
            </motion.button>
            <Link
              to="/pricing"
              className="flex items-center gap-2 px-6 py-3 rounded-lg glass hover:bg-white/10 transition-all"
            >
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DownloadPage;
