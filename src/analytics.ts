import ReactGA from 'react-ga4';

export const initAnalytics = () => {
  ReactGA.initialize(
    import.meta.env.VITE_GA_ID
  );
};