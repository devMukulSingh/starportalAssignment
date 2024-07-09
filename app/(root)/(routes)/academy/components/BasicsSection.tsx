import React from "react";
import BasicsOfCrypto from "./BasicsOfCrypto";
import Certificate from "./Certificate";
import RoadToLearnersvg from "./RoadToLearnersvg";
import RoadToLearnerSvg2 from "./RoadToLearnerSvg2";

const BasicsSection = () => {
  return (
    <div
      className="
        flex
        justify-center
        md:p-0
        px-5
        "
    >
      <div className="md:w-5/6 w-full flex flex-col  ">
        <BasicsOfCrypto />
        <Certificate />
      </div>
    </div>
  );
};

export default BasicsSection;
