import React from "react";
import Link from "next/link";
import Image from "next/image";

type BlogType = {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage: string;
  tags: string[];
  category: string;
};

interface IBlogItemProps {
  blog: BlogType;
}

const BlogItem = ({ blog }: IBlogItemProps) => {
  const fullDate = new Date(blog.date);
  const monthIndex = fullDate.getMonth();
  const date = fullDate.getDate();

  return (
    <div className="mb-20 flex max-h-96 w-full flex-col md:max-h-[484px] md:w-[355px] xl:w-[400px] 4xl:min-h-[484px] 4xl:w-[445px]">
      <div className="relative -z-10 mb-4 h-56 w-full shadow-xl sm:h-64">
        <Image
          src={blog.coverImage}
          className="-z-10 rounded-lg object-cover object-center"
          fill
          alt="blog-thumbnail"
        />
        <div className="pointer-events-none absolute top-5 left-5 -z-10 flex h-16 w-16 flex-col items-center justify-center rounded-md bg-black/60 text-2xl leading-none text-white">
          <span className="font-bold">{date}</span>
          <span className="mt-1 text-xs">{monthNames[monthIndex]}</span>
        </div>
      </div>
      <div className="">
        <div className="mb-3 flex flex-wrap items-center space-x-4 text-sm font-normal text-[#D10068]">
          {(blog.tags || []).map((tag) => (
            <Link href="#" className="block" key={tag}>
              <span>#{tag}</span>
            </Link>
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
