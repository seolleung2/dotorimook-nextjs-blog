import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { Blog } from "@Interfaces/Blog";

type Props = {
  blog: Blog;
};

const BlogHeader: NextPage<Props> = ({ blog }) => {
  return (
    <div className="blog-detail-header">
      <div className="mb-2 flex flex-row justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <a href="#">
              <span className="sr-only">{blog.author}</span>
              <div className="relative !mb-0 h-10 w-10">
                <Image
                  priority
                  fill
                  className="rounded-full object-cover"
                  src={blog.authorImage}
                  alt="author-image"
                />
              </div>
            </a>
          </div>
          <div className="ml-3">
            <p className="!mb-0 text-sm font-medium text-gray-900">
              <a href="#" className="hover:underline">
                {blog.author}
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={blog.date}>{blog.date}</time>
            </div>
          </div>
        </div>
        <div className="flex self-end">{/* Social Links Here */}</div>
      </div>
      <h1 className="mb-1 break-all text-2xl font-bold sm:text-4xl">
        {blog.title}
      </h1>
      <h2 className="blog-detail-header-subtitle mb-2 text-lg text-gray-600 sm:text-xl">
        {blog.description}
      </h2>
      <div className="relative mx-auto h-72 w-full bg-black sm:h-80 md:h-96">
        <Image
          priority
          fill
          className="object-cover"
          src={blog.coverImage}
          alt="cover-image"
        />
      </div>
    </div>
  );
};

export default BlogHeader;
