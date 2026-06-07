import { motion } from 'framer-motion';
import { Download, Shield, Monitor, Zap, Lock } from 'lucide-react';

const DownloadPage = () => {
  const handleDownload = () => {
  window.location.href =
    `${import.meta.env.VITE_API_URL}`;
};

  return (
    <div className="py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >

          
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-gradient">
            Download TOMODesk
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Private notes that stay visible to you and hidden from screen sharing.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 rounded-full glass text-sm">
              Windows 11 Recommended
            </span>

            <span className="px-4 py-2 rounded-full glass text-sm">
              5-Day Free Trial
            </span>

            <span className="px-4 py-2 rounded-full glass text-sm">
              No Account Required
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownload}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition-all"
          >
            <Download className="w-5 h-5" />
            Download for Windows
            <span className="text-black/60 text-sm">
              v1.0.0
            </span>
          </motion.button>
        </motion.div>

        {/* Privacy First */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-accent-primary" />
            <h2 className="text-2xl font-semibold">
              Privacy First
            </h2>
          </div>

          <p className="text-white/70 mb-8">
            TOMODesk does not collect, upload, store, analyze, or sell your
            notes. Everything stays on your device.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass rounded-xl p-5">
              <h3 className="font-medium mb-2">
                Local Storage Only
              </h3>
              <p className="text-sm text-white/60">
                Your notes are stored on your computer.
              </p>
            </div>

            <div className="glass rounded-xl p-5">
              <h3 className="font-medium mb-2">
                No User Accounts
              </h3>
              <p className="text-sm text-white/60">
                No signup required to start using TOMODesk.
              </p>
            </div>

            <div className="glass rounded-xl p-5">
              <h3 className="font-medium mb-2">
                No Data Collection
              </h3>
              <p className="text-sm text-white/60">
                Your notes never leave your device.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <motion.div
            whileHover={{ y: -3 }}
            className="glass rounded-xl p-6"
          >
            <Monitor className="w-8 h-8 text-accent-primary mb-4" />
            <h3 className="font-medium mb-2">
              Screen Share Safely
            </h3>
            <p className="text-sm text-white/60">
              Keep private notes visible to you while presenting.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="glass rounded-xl p-6"
          >
            <Zap className="w-8 h-8 text-accent-primary mb-4" />
            <h3 className="font-medium mb-2">
              Always Ready
            </h3>
            <p className="text-sm text-white/60">
              Lightweight overlay that stays accessible when you need it.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="glass rounded-xl p-6"
          >
            <Lock className="w-8 h-8 text-accent-primary mb-4" />
            <h3 className="font-medium mb-2">
              Built for Privacy
            </h3>
            <p className="text-sm text-white/60">
              No cloud storage. No tracking. No surprises.
            </p>
          </motion.div>

        </div>

        {/* System Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6">
            System Requirements
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-white/50 text-sm mb-1">
                Operating System
              </p>
              <p>Windows 10 (2004+) / Windows 11</p>
            </div>

            <div>
              <p className="text-white/50 text-sm mb-1">
                Memory
              </p>
              <p>4 GB RAM</p>
            </div>

          
          </div>

          <p className="text-xs text-white/40 mt-6">
            Windows 11 is recommended for the best screen-sharing privacy
            experience. On some older Windows 10 systems, protected windows
            may appear as a black placeholder during capture due to operating
            system limitations.
          </p>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownload}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition-all"
          >
            <Download className="w-5 h-5" />
            Download TOMODesk
          </motion.button>

          <p className="text-sm text-white/40 mt-4">
            No account required • 5-day free trial • Local-first
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default DownloadPage;
