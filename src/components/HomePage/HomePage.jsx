import React from "react";
import BannerSection from "./Section/BannerSection";
import Cardcab from "./Section/CardCab";
import AboutUs from "./Section/AboutUs";

import Destination from "./Section/Destination";
import Testimonials from "./Section/Testimonials";
import Newsletter from "./Section/Newsletter";
import OurServices from "./Section/OurServices";
import Packages from "./Section/Package";

// import Cabspecs from "./Section/Cabspecs";

const HomePage = () => {
  return (
    <div>
      <BannerSection />
      {/* <Cabspecs /> */}
      <Cardcab />
      <Destination />
      <Packages />
      <AboutUs />
      <OurServices />
      <Newsletter />
      <Testimonials />
    </div>
  );
};

export default HomePage;
