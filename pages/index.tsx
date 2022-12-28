import React from "react";
import type { NextPage, GetStaticProps } from "next";
import { BaseLayout } from "@Components/layout";
import { Banner } from "@Components/common";
import { BlogList } from "@Components/blogs";
import { getBlogs } from "@Libraries/blogs";
import { Blog } from "@Interfaces/Blog";

type Props = {
  blogs: Blog[];
};

export const Home: NextPage<Props> = ({ blogs }) => {
  return (
    <BaseLayout>
      <Banner />
      <BlogList blogs={blogs} />
    </BaseLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const blogs = getBlogs();

  return {
    props: {
      blogs,
    },
  };
};
