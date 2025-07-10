import AboutUs from "@/components/pages/HomePage/AboutUs";
import Annoucement from "@/components/pages/HomePage/Annoucement";
import TopDestinations from "@/components/pages/HomePage/AttractionHome";
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

      <TopDestinations />
      <Annoucement />
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
