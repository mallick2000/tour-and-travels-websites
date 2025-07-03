import React from "react";

const IndividualDestinationPage = async (props) => {
  const { name } = await props.params;
  console.log(name);
  return <div>IndividualDestinationPage = {name}</div>;
};

export default IndividualDestinationPage;
