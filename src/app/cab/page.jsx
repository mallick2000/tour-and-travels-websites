import CabBookingSection from "@/components/pages/CabPage/BannerSection";
import Cabcard from "@/components/pages/CabPage/CabCard";
import FAQ from "@/components/pages/CabPage/CabFaq";
import OffersSection from "@/components/pages/CabPage/CabOffer";
import { Spacing } from "@/components/pages/CabPage/CarRent";
import RecentSearches from "@/components/pages/CabPage/RecentSearch";
import TaxiService from "@/components/pages/CabPage/Sevice";
import CarOptions from "@/components/pages/HomePage/Cabspecs";

import Testimonials from "@/components/pages/HomePage/Testimonials";

import React from "react";

const page = () => {
  return (
    <>
      <CabBookingSection />
      {/* <RecentSearches /> */}
      <CarOptions />
      {/* <Cabcard /> */}
      <OffersSection />
      {/* <Spacing /> */}
      <TaxiService />
      {/* <OurServices /> */}
      <Testimonials /> <FAQ />
    </>
  );
};

export default page;
