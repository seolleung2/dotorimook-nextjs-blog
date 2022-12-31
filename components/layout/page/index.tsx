import React, { useState, FunctionComponent } from "react";
import Head from "next/head";
import { Navbar, Footer } from "@Components/common";

type Props = {
  path: string;
  children: React.ReactNode;
};

const PageLayout: FunctionComponent<Props> = ({ path, children }) => {
  const [isSearchEnabled, setIsSearchEnabled] = useState<boolean>(false);

  const clickSearchHandler = () => {
    setIsSearchEnabled(!isSearchEnabled);
  };

  return (
    <>
      <Head>
        <title>Dotorimook&#39;s DevLog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isSearchEnabled={isSearchEnabled} onSearch={clickSearchHandler} />
      <section
        className={`${
          isSearchEnabled && "pt-[72px] sm:pt-[108px] lg:pt-36"
        } w-full`}
      >
        <div className="flex flex-col items-center border border-red-600">
          {children}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PageLayout;