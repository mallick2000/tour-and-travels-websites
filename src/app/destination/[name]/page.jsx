import ChilikaBlog from "@/components/pages/Destination/Chilika";
import React from "react";

const IndividualDestinationPage = async (props) => {
  const { name } = await props.params;
  console.log(name);
  return (
    <div>
      {" "}
      <ChilikaBlog />
    </div>
  );
};

export default IndividualDestinationPage;
