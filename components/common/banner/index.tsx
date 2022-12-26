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
      <div className="absolute left-0 right-0 top-0 bottom-0 m-auto flex h-64 w-[60%] justify-start space-x-14 text-white">
        <p className="flex w-80 flex-col justify-center font-Catamaran text-xl font-light leading-tight sm:text-2xl lg:text-3xl">
          <span className="font-bold">Hello, World!</span>
          <br />
          <ReactRotatingText
            items={[
              "독서를 좋아하는",
              "얼리어답터를 좋아하는",
              "만드는 재미를 추구하는",
            ]}
          />
          <span>
            개발자 <strong className="font-extrabold">정광묵</strong>입니다.
          </span>
          <button className="btn-outline btn-info btn-xs btn mt-6 w-fit sm:btn-sm md:btn-md lg:btn-lg">
            About👨🏻‍💻
          </button>
        </p>
        <div className="border-neutral-900 pointer-events-none relative hidden w-64 rounded-full border-8 bg-white lg:block">
          <Image
            src="/static/images/portrait.jpeg"
            className="rounded-full bg-transparent object-cover object-center"
            fill
            alt="portrait-image"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
