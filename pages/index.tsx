import React from "react";
import type { NextPage, GetStaticProps } from "next";
import { BaseLayout } from "@Components/layout";
import { Banner } from "@Components/common";
import { BlogList } from "@Components/blogs";
import { getDir, getFileNames } from "@Libraries/md";

export default function Home() {
  return (
    <BaseLayout>
      <Banner />
      <BlogList />
    </BaseLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const path = getDir("/content/blogs");
  const fileNames = getFileNames(path);

  return {
    props: {},
  };
};
