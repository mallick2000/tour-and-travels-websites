import CabBookingSection from "@/components/pages/CabPage/BannerSection";

import FAQ from "@/components/pages/CabPage/CabFaq";
import OffersSection from "@/components/pages/CabPage/CabOffer";

import TaxiService from "@/components/pages/CabPage/Sevice";
import CarOptions from "@/components/pages/CabPage/Cabspecs";

import Testimonials from "@/components/pages/HomePage/Testimonials";

import React from "react";

const page = () => {
  return (
    <>
      <CabBookingSection />
      <CarOptions />
      <OffersSection />
      <TaxiService />
      <Testimonials /> <FAQ />
    </>
  );
};

export default page;
