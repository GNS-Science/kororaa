import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA4Mod from "react-ga4";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReactGA4 = ((ReactGA4Mod as any).default ?? ReactGA4Mod) as typeof ReactGA4Mod;

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA4.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
};

export default usePageTracking;
