import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';

import Download from './pages/Download';
import Privacy from './pages/Privacy';
import Layout from './components/Layout';
import PaymentSuccess from './pages/PaymentSuccess';

function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/download" element={<Download />} />
            <Route path="/privacy" element={<Privacy />} />
              <Route
    path="/payment-success"
    element={<PaymentSuccess />}
  />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}

export default App;
