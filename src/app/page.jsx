import AboutUs from "@/components/pages/HomePage/AboutUs";
import BannerSection from "@/components/pages/HomePage/BannerSection";
import CardCab from "@/components/pages/HomePage/CardCab";
import Destination from "@/components/pages/HomePage/Destination";
import Newsletter from "@/components/pages/HomePage/Newsletter";
import OurServices from "@/components/pages/HomePage/OurServices";
import Packages from "@/components/pages/HomePage/Package";
import Testimonials from "@/components/pages/HomePage/Testimonials";

export default function Home() {
  return (
    <>
      <BannerSection />
      {/* <Cabspecs /> */}
      <CardCab />
      <Destination />
      <Packages />
      <AboutUs />
      <OurServices />
      <Newsletter />
      <Testimonials />
    </>
  );
}
