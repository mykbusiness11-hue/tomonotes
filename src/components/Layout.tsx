import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Ghost } from 'lucide-react';
import tomoLogo from '../../assets/logotomo.png';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
          <Link
  to="/"
  className="
    flex
    items-center
    gap-3
    group
  "
>
  <img
    src={tomoLogo}
    alt="TOMODesk"
    className="
      w-9
      h-9
      object-contain
      select-none
      pointer-events-none
      transition-transform
      duration-300
      group-hover:scale-105
    "
  />

  <span
    className="
      font-semibold
      text-lg
      tracking-tight
      text-white
    "
  >
    TOMODesk
  </span>
</Link>

            <div className="flex items-center gap-8">
              <NavLinks />
              <Link
                to="/download"
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 text-sm font-medium"
              >
                Download
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
         <div className="flex items-center gap-3 opacity-60">
  <img
    src={tomoLogo}
    alt="TOMODesk"
    className="
      w-5
      h-5
      object-contain
    "
  />
  <span className="text-sm">
    TOMODesk
  </span>
</div>
            <FooterLinks />
            <p className="text-xs text-white/40">
              Built for private thinking
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavLinks = () => {
  const links = [
    
    { to: '/privacy', label: 'Privacy' },
  ];

  return (
    <div className="flex items-center gap-6">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="text-sm text-white/60 hover:text-white transition-colors duration-200"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

const FooterLinks = () => {
  const links = [
    { to: '/download', label: 'Download' },
    
    { to: '/privacy', label: 'Privacy' },
  ];

  return (
    <div className="flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
        >
          {link.label}
        </Link>
      ))}
      <a
        href="mailto:tomo@tomodeskapp.com"
        className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
      >
        Contact
      </a>
    </div>
  );
};

export default Layout;
