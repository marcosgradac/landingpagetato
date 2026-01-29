import { useMediaQuery } from "@mui/material";
import LandingDesktop from "./desktop/index";
import LandingMobile from "./mobile/LandingMobile";

export default function LandingPage() {
  const isMobile = useMediaQuery("(max-width:768px)");
  return isMobile ? <LandingMobile /> : <LandingDesktop />;
}
