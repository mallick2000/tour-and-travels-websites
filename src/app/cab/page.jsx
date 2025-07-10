import CabBookingSection from "@/components/pages/CabPage/BannerSection";
import { Spacing } from "@/components/pages/CabPage/CarRent";
import RecentSearches from "@/components/pages/CabPage/RecentSearch";
import TaxiService from "@/components/pages/CabPage/Sevice";
import CardCab from "@/components/pages/HomePage/CardCab";
import OurServices from "@/components/pages/HomePage/OurServices";
import Testimonials from "@/components/pages/HomePage/Testimonials";

import React from "react";

const page = () => {
  return (
    <>
      <CabBookingSection />
      {/* <RecentSearches /> */}
      <CardCab />
      <Spacing />
      <TaxiService />
      <OurServices />
      <Testimonials />
    </>
  );
};

export default page;
