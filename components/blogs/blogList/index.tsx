import React from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  return (
    <section className="blogList">
      <h2 className="mx-auto mb-4 flex flex-wrap px-11 pt-20 font-Catamaran text-3xl font-extrabold md:max-w-[740px] md:px-0 xl:max-w-[1258px] 4xl:max-w-[1890px]">
        Featured Blogs
      </h2>
      <div className="gap mx-auto flex flex-wrap gap-7 px-11 md:max-w-[740px] md:px-0 xl:max-w-[1258px] 4xl:max-w-[1890px] 4xl:gap-9">
        {blogs.map((blog) => (
          <BlogItem key={blog.slug} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;

const blogs = [
  {
    slug: "nft-marketplace-in-react-js-next-typescript-full-guide",
    title: "NFT Marketplace in React, Typescript & Solidity - Full Guide",
    description:
      "Learn how to use React / Next JS, Solidity, and Pinata(IPFS) to create NFT marketplace on Ethereum. All In Typescript.",
    date: "2022-12-25",
    coverImage: "https://thrangra.sirv.com/Ethereum_blue_light-small.jpg",
    tags: ["NFT", "React", "Solidity", "Ethereum"],
    category: "development",
  },
  {
    slug: "web-development-and-coding-full-course",
    title: "Web Development & Code 101 - Full Guide [2022]",
    description:
      "Learn programming in JS language, HTML, and CSS. Create a Web Application made in React JS. The path to the final project includes many assignments, code exercises, and challenges.",
    date: "2022-08-24",
    coverImage: "https://thrangra.sirv.com/Course_logo%20copy.jpg",
    tags: ["Javascript", "ReactJS"],
    category: "development",
  },
  {
    slug: "rust-webassembly-with-js-ts-the-practical-guide",
    title: "Rust & WebAssembly with JS (TS) - The Practical Guide",
    description:
      "Learn how to code in Rust! Compile the code to WebAssembly, prepare JS/TS frontend and finish the course by creating the practical Snake game that can run in any browser.",
    date: "2022-04-15",
    coverImage: "https://thrangra.sirv.com/Rust_small.jpg",
    tags: ["Rust", "WebAssembly"],
    category: "development",
  },
  {
    slug: "unity-2d-with-c-complete-game-dev-course",
    title: "Unity 2D With C# - Complete Game Dev Course",
    description:
      "Create the complete 2D survival game in Unity with C#. Learn best practices and patterns.",
    date: "2022-02-12",
    coverImage: "https://thrangra.sirv.com/Final_Unity_2D_Small.jpg",
    tags: ["Unity", "Game", "C#"],
    category: "development",
  },
  {
    slug: "markdown-full-example",
    title: "Markdown Extensive Example",
    description: "Learn how to write markdown",
    date: "2022-01-08",
    coverImage:
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=50",
    tags: ["markdown"],
    category: "development",
  },
];
