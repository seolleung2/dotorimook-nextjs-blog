import React from "react";
import Image from "next/image";
import ReactRotatingText from "react-rotating-text";

const MainBanner = () => {
  return (
    <div className="relative min-h-[300px] bg-cover bg-center bg-no-repeat transition-all md:min-h-[300px] lg:min-h-[420px] 4xl:min-h-[770px]">
      <Image
        src="/static/images/coverImage-galaxy.jpg"
        className="object-cover object-center"
        fill
        alt="main-image"
      />
      <div className="absolute left-0 right-0 top-0 bottom-0 m-auto flex h-64 w-[50%] text-white">
        <p className="flex w-full flex-col justify-center text-xl font-light leading-tight sm:text-3xl lg:w-2/3 lg:text-4xl">
          <span>안녕하세요.</span>
          <br />
          <ReactRotatingText
            items={[
              "독서를 좋아하는",
              "얼리어답터를 좋아하는",
              "만드는 재미를 추구하는",
            ]}
          />
          <span>
            개발자 <strong>정광묵</strong>입니다.
          </span>
          <button className="btn-outline btn-info btn-xs btn mt-4 w-1/2 sm:btn-sm md:btn-md lg:btn-lg">
            About me 👨🏻‍💻
          </button>
        </p>
        <div className="pointer-events-none relative hidden w-0 lg:block lg:w-1/3">
          <Image
            src="/static/images/mimoticon.webp"
            className="bg-transparent object-cover object-center"
            fill
            alt="gif-image"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
