import React, { FunctionComponent } from "react";
import BlogItem from "./BlogItem";
import { Blog } from "@Interfaces/Blog";

type Props = {
  blogs: Blog[];
};

const BlogList: FunctionComponent<Props> = ({ blogs }) => {
  return (
    <section className="blogList">
      <h2 className="mx-auto mb-4 flex flex-wrap px-4 pt-20 font-Catamaran text-2xl font-extrabold sm:px-11 sm:text-3xl md:max-w-[740px] md:px-0 xl:max-w-[1258px] 4xl:max-w-[1890px]">
        Featured Blogs
      </h2>
      <div className="gap mx-auto flex flex-wrap gap-7 px-4 sm:px-11 md:max-w-[740px] md:px-0 xl:max-w-[1258px] 4xl:max-w-[1890px] 4xl:gap-9">
        {blogs.map((blog) => (
          <BlogItem key={blog.slug} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
