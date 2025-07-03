import CabBookingSection from "@/components/pages/CabPage/BannerSection";
import { Spacing } from "@/components/pages/CabPage/CarRent";
import RecentSearches from "@/components/pages/CabPage/RecentSearch";
import TaxiService from "@/components/pages/CabPage/Sevice";
import OurServices from "@/components/pages/HomePage/OurServices";

import React from "react";

const page = () => {
  return (
    <>
      <CabBookingSection />
      <RecentSearches />
      <Spacing />
      <TaxiService />
      <OurServices />
    </>
  );
};

export default page;
