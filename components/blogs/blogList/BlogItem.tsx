import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@Interfaces/Blog";

type Props = {
  blog: Blog;
};

const BlogItem: FunctionComponent<Props> = ({ blog }) => {
  const fullDate = new Date(blog.date);
  const monthIndex = fullDate.getMonth();
  const date = fullDate.getDate();

  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="mb-20 flex max-h-96 w-full cursor-pointer flex-col md:max-h-[484px] md:w-[355px] xl:w-[400px] 4xl:min-h-[484px] 4xl:w-[445px]">
        <div className="relative mb-4 h-56 w-full shadow-xl sm:h-64">
          <Image
            src={blog.coverImage}
            className="rounded-lg object-cover object-center opacity-100 hover:opacity-80"
            fill
            alt="blog-thumbnail"
          />
          <div className="absolute top-5 left-5 flex h-16 w-16 flex-col items-center justify-center rounded-md bg-black/60 text-2xl leading-none text-white">
            <span className="font-bold">{date}</span>
            <span className="mt-1 text-xs">{monthNames[monthIndex]}</span>
          </div>
        </div>
        <div className="">
          <div className="mb-3 flex flex-wrap items-center space-x-4 text-sm font-normal text-[#D10068]">
            {(blog.categories || []).map((category) => (
              <span className="block" key={category}>
                #{category}
              </span>
            ))}
          </div>
          <h3 className="mb-2 h-[54px] text-lg font-bold leading-normal text-[#292929] line-clamp-2">
            {blog.title}
          </h3>
          <p className="mb-0 max-h-20 text-sm font-normal leading-relaxed text-[#292929] line-clamp-3">
            {blog.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
