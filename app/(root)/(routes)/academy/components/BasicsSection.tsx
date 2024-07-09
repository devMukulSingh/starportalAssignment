import React from "react";
import BasicsOfCrypto from "./BasicsOfCrypto";
import Certificate from "./Certificate";

const BasicsSection = () => {
  return (
    <div
      className="
        flex
        justify-center
        md:p-0
        px-5
        min-h-screen
        "
    >
      <div className="md:w-3/4 w-full flex flex-col  ">
        <BasicsOfCrypto />
        <Certificate />
      </div>
    </div>
  );
};

export default BasicsSection;
