import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA4 from 'react-ga4';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA4.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);
};

export default usePageTracking;
