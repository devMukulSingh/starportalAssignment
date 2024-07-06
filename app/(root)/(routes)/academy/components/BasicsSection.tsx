import React from "react";
import BasicsOfCrypto from "./BasicsOfCrypto";
import Certificate from "./Certificate";

const BasicsSection = () => {
  return (
    <div
      className="
        h-screen 
        flex
        justify-center
        items-center
        "
    >
      <div className="sm:w-3/4 w-full flex flex-col h-full">
        <BasicsOfCrypto />
        <Certificate />
      </div>
    </div>
  );
};

export default BasicsSection;
