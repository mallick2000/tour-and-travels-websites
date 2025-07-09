"use client";

import { useParams } from "next/navigation";
import Bhitarkanika from "@/components/pages/Destination/Bhitarkanika";
import ChilikaBlog from "@/components/pages/Destination/Chilika";
import React from "react";
import Simlipal from "@/components/pages/Destination/Similipal";
import Puri from "@/components/pages/Destination/Puri";
import Bhubaneswar from "@/components/pages/Destination/Bhubaneswar";
import Koraput from "@/components/pages/Destination/Koraput";

const Destinations = {
  chilika: <ChilikaBlog />,
  bhitarkanika: <Bhitarkanika />,
  similipal: <Simlipal />,
  puri: <Puri />,
  bhubaneswar: <Bhubaneswar />,
  koraput: <Koraput />,
};

const IndividualDestinationPage = () => {
  const { name } = useParams();
  return <div>{Destinations[name?.toLowerCase()]}</div>;
};

export default IndividualDestinationPage;
