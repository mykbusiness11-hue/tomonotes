import { motion } from 'framer-motion';
import { Shield, Lock, Database, Eye, EyeOff, Key, Fingerprint } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-primary/10 mb-6">
            <Shield className="w-8 h-8 text-accent-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gradient">
            Your Privacy Matters
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            TOMONotes is Built with a privacy-first architecture.
          </p>
        </motion.div>

        {/* Core Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 mb-16"
        >
          {[
            {
              icon: Database,
              title: 'Local-First Architecture',
              description:
                'All your notes are stored locally on your device. We never have access to your content.',
            },
            {
              icon: EyeOff,
              title: 'Screen Sharing Privacy',
              description:
                'TOMONotes stays invisible during screen shares unless you explicitly enable visibility. Your notes remain private.',
            },
            {
              icon: Lock,
              title: 'Your Notes Stay On Your Device',
              description:
                'We don\'t store your notes on our servers. What you write stays on your machine.',
            },
            {
              icon: Fingerprint,
              title: 'No Tracking',
              description:
                'We never collect your note content or personal workspace data. Your usage patterns are yours alone.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* How Privacy Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-xl p-8 mb-16"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">How Privacy Works</h2>

          <div className="grid grid-cols-1 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <EyeOff className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Private Mode (Default)</h3>
                <p className="text-sm text-white/60">
                  When screen sharing starts, TOMONotes automatically becomes invisible. Only you can see your notes on your physical screen. Participants see nothing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Visible Mode (Explicit)</h3>
                <p className="text-sm text-white/60">
                  When you want to share notes with participants, toggle visibility on. This is always a deliberate action you control.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent-primary/20 flex items-center justify-center flex-shrink-0">
                <Key className="w-5 h-5 text-accent-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">One-Toggle Control</h3>
                <p className="text-sm text-white/60">
                  A single toggle lets you switch between private and visible modes. No menus, no settings, just instant control.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Data Collection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="glass rounded-xl p-8 text-center">
  <h2 className="text-2xl font-semibold mb-4">
    Your notes stay yours.
  </h2>

  <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
    TOMONotes is designed to keep your private workspace on your device.
    Your notes are not used for advertising, training, or shared with third parties.
  </p>
</div>
        </motion.div>

        {/* License */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-xl p-6 text-center"
        >
          <p className="text-sm text-white/40 leading-relaxed">
            TOMONotes respects your privacy by design. We believe your thoughts should remain yours alone.
            <br />
            <br />
            Questions? Reach us at{' '}
            <a href="mailto:tomo@tomodeskapp.com" className="text-accent-primary hover:text-accent-primary/80">
              tomo@tomodeskapp.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
