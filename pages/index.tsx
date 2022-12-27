import React from "react";
import type { NextPage, GetStaticProps } from "next";
import { BaseLayout } from "@Components/layout";
import { Banner } from "@Components/common";
import { BlogList } from "@Components/blogs";
import { getBlogFileNames, getBlog } from "@Libraries/md";

export default function Home() {
  return (
    <BaseLayout>
      <Banner />
      <BlogList />
    </BaseLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blogFileNames = getBlogFileNames();

  const blogList = blogFileNames.map((fileName) => {
    const blog = getBlog(fileName);
    return blog;
  });

  console.log(blogList);

  return {
    props: {
      blogList,
    },
  };
};
