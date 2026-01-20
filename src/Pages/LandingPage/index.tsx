import DesktopLanding from "./desktop";
import MobileLanding from "./mobile";

const LandingPage = () => {
  const isMobile = window.innerWidth <= 768;

  return isMobile ? <MobileLanding /> : <DesktopLanding />;
};

export default LandingPage;
