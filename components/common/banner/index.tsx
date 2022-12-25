import React from "react";
import Image from "next/image";

const MainBanner = () => {
  return (
    <div className="relative -z-10 min-h-[300px] bg-cover bg-center bg-no-repeat transition-all md:min-h-[300px] lg:min-h-[420px] 4xl:min-h-[770px]">
      <Image
        src="/static/images/coverImage-galaxy.jpg"
        className="object-cover object-center"
        fill
        alt="main-image"
      />
    </div>
  );
};

export default MainBanner;
