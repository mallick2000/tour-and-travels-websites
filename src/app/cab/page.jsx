import CabBookingSection from "@/components/CabPage/BannerSection";
import { Spacing } from "@/components/CabPage/CarRent";
import RecentSearches from "@/components/CabPage/RecentSearch";
import TaxiService from "@/components/CabPage/Sevice";
import OurServices from "@/components/HomePage/Section/OurServices";
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
