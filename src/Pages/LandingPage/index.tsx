import { useMediaQuery } from "@mui/material";
import LandingDesktop from "./desktop/index";
import LandingMobile from "./mobile/LandingMobile";
import { HelmetProvider } from "react-helmet-async";

export default function LandingPage() {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <HelmetProvider>
      {isMobile ? <LandingMobile /> : <LandingDesktop />}
    </HelmetProvider>
  );
}
