import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BaseLayout } from "@Components/layout";
import { Banner } from "@Components/common";

export default function Home() {
  return (
    <BaseLayout>
      <Banner />
      <section className="blogList">
        <h2 className="mx-auto mb-4 flex flex-wrap px-11 pt-20 font-Catamaran text-3xl font-extrabold md:max-w-[740px] md:px-0 xl:max-w-[1258px] 4xl:max-w-[1890px]">
          Featured Blogs
        </h2>
        <div className="gap mx-auto flex flex-wrap gap-7 px-11 md:max-w-[740px] md:px-0 xl:max-w-[1258px] 4xl:max-w-[1890px] 4xl:gap-9">
          <div className="mb-20 flex max-h-96 w-full flex-col md:max-h-[484px] md:w-[355px] xl:w-[400px] 4xl:min-h-[484px] 4xl:w-[445px]">
            <div className="relative -z-10 mb-4 h-56 w-full grow shadow-xl sm:h-64">
              <Image
                src="/static/images/nextjs-logo.png"
                className="-z-10 rounded-lg object-cover object-center"
                fill
                alt="blog-thumbnail"
              />
              <div className="pointer-events-none absolute top-5 left-5 -z-10 flex h-16 w-16 flex-col items-center justify-center rounded-md bg-black/60 text-2xl leading-none text-white">
                <span className="font-bold">25</span>
                <span className="mt-1 text-xs">Dec</span>
              </div>
            </div>
            <div className="grow-0">
              <div className="mb-3 flex flex-wrap items-center space-x-4 text-sm font-normal text-[#D10068]">
                <Link href="#" className="block">
                  <span>#Javascript</span>
                </Link>
                <Link href="#" className="block">
                  <span>#React</span>
                </Link>
                <Link href="#" className="block">
                  <span>#NextJS</span>
                </Link>
              </div>
              <h3 className="mb-2 text-lg font-bold leading-normal text-[#292929]">
                Blog markdown test!
              </h3>
              <p className="mb-0 max-h-20 text-sm font-normal leading-relaxed text-[#292929] line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="mb-20 flex max-h-96 w-full flex-col md:max-h-[484px] md:w-[355px] xl:w-[400px] 4xl:min-h-[484px] 4xl:w-[445px]">
            <div className="relative -z-10 mb-4 h-56 w-full grow shadow-xl sm:h-64">
              <Image
                src="/static/images/nextjs-logo.png"
                className="-z-10 rounded-lg object-cover object-center"
                fill
                alt="blog-thumbnail"
              />
              <div className="pointer-events-none absolute top-5 left-5 -z-10 flex h-16 w-16 flex-col items-center justify-center rounded-md bg-black/60 text-2xl leading-none text-white">
                <span className="font-bold">25</span>
                <span className="mt-1 text-xs">Dec</span>
              </div>
            </div>
            <div className="grow-0">
              <div className="mb-3 flex flex-wrap items-center space-x-4 text-sm font-normal text-[#D10068]">
                <Link href="#" className="block">
                  <span>#Javascript</span>
                </Link>
                <Link href="#" className="block">
                  <span>#React</span>
                </Link>
                <Link href="#" className="block">
                  <span>#NextJS</span>
                </Link>
              </div>
              <h3 className="mb-2 text-lg font-bold leading-normal text-[#292929]">
                Blog markdown test!
              </h3>
              <p className="mb-0 max-h-20 text-sm font-normal leading-relaxed text-[#292929] line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="mb-20 flex max-h-96 w-full flex-col md:max-h-[484px] md:w-[355px] xl:w-[400px] 4xl:min-h-[484px] 4xl:w-[445px]">
            <div className="relative -z-10 mb-4 h-56 w-full grow shadow-xl sm:h-64">
              <Image
                src="/static/images/nextjs-logo.png"
                className="-z-10 rounded-lg object-cover object-center"
                fill
                alt="blog-thumbnail"
              />
              <div className="pointer-events-none absolute top-5 left-5 -z-10 flex h-16 w-16 flex-col items-center justify-center rounded-md bg-black/60 text-2xl leading-none text-white">
                <span className="font-bold">25</span>
                <span className="mt-1 text-xs">Dec</span>
              </div>
            </div>
            <div className="grow-0">
              <div className="mb-3 flex flex-wrap items-center space-x-4 text-sm font-normal text-[#D10068]">
                <Link href="#" className="block">
                  <span>#Javascript</span>
                </Link>
                <Link href="#" className="block">
                  <span>#React</span>
                </Link>
                <Link href="#" className="block">
                  <span>#NextJS</span>
                </Link>
              </div>
              <h3 className="mb-2 text-lg font-bold leading-normal text-[#292929]">
                Blog markdown test!
              </h3>
              <p className="mb-0 max-h-20 text-sm font-normal leading-relaxed text-[#292929] line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="mb-20 flex max-h-96 w-full flex-col md:max-h-[484px] md:w-[355px] xl:w-[400px] 4xl:min-h-[484px] 4xl:w-[445px]">
            <div className="relative -z-10 mb-4 h-56 w-full grow shadow-xl sm:h-64">
              <Image
                src="/static/images/nextjs-logo.png"
                className="-z-10 rounded-lg object-cover object-center"
                fill
                alt="blog-thumbnail"
              />
              <div className="pointer-events-none absolute top-5 left-5 -z-10 flex h-16 w-16 flex-col items-center justify-center rounded-md bg-black/60 text-2xl leading-none text-white">
                <span className="font-bold">25</span>
                <span className="mt-1 text-xs">Dec</span>
              </div>
            </div>
            <div className="grow-0">
              <div className="mb-3 flex flex-wrap items-center space-x-4 text-sm font-normal text-[#D10068]">
                <Link href="#" className="block">
                  <span>#Javascript</span>
                </Link>
                <Link href="#" className="block">
                  <span>#React</span>
                </Link>
                <Link href="#" className="block">
                  <span>#NextJS</span>
                </Link>
              </div>
              <h3 className="mb-2 text-lg font-bold leading-normal text-[#292929]">
                Blog markdown test!
              </h3>
              <p className="mb-0 max-h-20 text-sm font-normal leading-relaxed text-[#292929] line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="mb-20 flex max-h-96 w-full flex-col md:max-h-[484px] md:w-[355px] xl:w-[400px] 4xl:min-h-[484px] 4xl:w-[445px]">
            <div className="relative -z-10 mb-4 h-56 w-full grow shadow-xl sm:h-64">
              <Image
                src="/static/images/nextjs-logo.png"
                className="-z-10 rounded-lg object-cover object-center"
                fill
                alt="blog-thumbnail"
              />
              <div className="pointer-events-none absolute top-5 left-5 -z-10 flex h-16 w-16 flex-col items-center justify-center rounded-md bg-black/60 text-2xl leading-none text-white">
                <span className="font-bold">25</span>
                <span className="mt-1 text-xs">Dec</span>
              </div>
            </div>
            <div className="grow-0">
              <div className="mb-3 flex flex-wrap items-center space-x-4 text-sm font-normal text-[#D10068]">
                <Link href="#" className="block">
                  <span>#Javascript</span>
                </Link>
                <Link href="#" className="block">
                  <span>#React</span>
                </Link>
                <Link href="#" className="block">
                  <span>#NextJS</span>
                </Link>
              </div>
              <h3 className="mb-2 text-lg font-bold leading-normal text-[#292929]">
                Blog markdown test!
              </h3>
              <p className="mb-0 max-h-20 text-sm font-normal leading-relaxed text-[#292929] line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
