import React from "react";
import { BaseLayout } from "@Components/layout";
import { Banner } from "@Components/common";
import { BlogList } from "@Components/blogs";

export default function Home() {
  return (
    <BaseLayout>
      <Banner />
      <BlogList />
    </BaseLayout>
  );
}
