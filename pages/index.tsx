import React, { Fragment, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const [isSearchEnabled, setIsSearchEnabled] = useState<boolean>(false);
  const [isPopOverMenuEnabled, setIsPopOverMenuEnabled] =
    useState<boolean>(false);

  const clickSearchHandler = () => {
    setIsSearchEnabled(!isSearchEnabled);
  };

  const popOverHander = () => {
    setIsPopOverMenuEnabled(!isPopOverMenuEnabled);
  };
  return (
    <div className="">
      <Head>
        <title>Dotorimook&#39;s DevLog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navigation sticky -top-2 flex h-24 w-full items-center justify-between bg-[#e2e2e2] px-2 pb-2 pt-4 lg:px-4 lg:pb-4 lg:pt-8">
        <Popover className="lg:hidden">
          <div className="relative">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform lg:hidden"
            >
              <div className="bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div className="text-4xl">🌰</div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Link legacyBehavior key={item.name} href={item.href}>
                      <a className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-gray-900">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
                <div className="px-4">{/* Search Input Component */}</div>
                <a
                  href="#"
                  className="block w-full px-5 py-3 font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100"
                >
                  도토리 월드 탐험!
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <div
          className="flex h-fit min-w-[210px] items-center whitespace-nowrap font-Catamaran text-4xl font-black lg:h-full lg:text-5xl"
          id="main-logo"
        >
          <Link href="/">
            <h1>🌰DotoriLog</h1>
          </Link>
        </div>
        <div className="flex flex-row items-center h-fit lg:h-full lg:space-x-16">
          <ul className="items-center hidden space-x-16 text-base font-Catamaran lg:flex lg:text-lg">
            {navigation.map((category) => (
              <li key={category.name}>{category.name}</li>
            ))}
          </ul>
          <MagnifyingGlassIcon
            className="w-10 h-10 px-2 text-gray-400 bg-white rounded-md cursor-pointer hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={clickSearchHandler}
          />
        </div>
        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          show={isSearchEnabled}
        >
          <div className="flex h-36 absolute -bottom-[150%] left-0 right-0 w-full items-center justify-center bg-[#f1f0f0]">
            <div className="relative w-2/3 h-20">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search"
                className="block h-full w-full rounded-lg p-2.5 pl-14 text-lg"
                placeholder="Enter Your Search Topic"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 my-2 mr-1 bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-500 dark:text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Transition>
      </nav>
      <section
        className={`border border-blue-600 ${
          isSearchEnabled && "pt-36"
        } w-full`}
      >
        <div className="relative -z-10 min-h-[300px] md:min-h-[300px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[870px] transition-all bg-cover bg-no-repeat bg-center">
          <Image
            src="/static/images/blog-main.jpg"
            className="object-cover object-center"
            quality={100}
            fill
            alt="main-image"
          />
        </div>
        <h1 className="h-48 border border-red-500">
          DotoriJung 의 블로그 입니다 첫 번째 글입니다
        </h1>
        <h1 className="h-48 border border-red-500">
          DotoriJung 의 블로그 입니다 만세만세 만만세
        </h1>
        <h1 className="h-48 border border-red-500">
          DotoriJung 의 블로그 입니다 만세만세 만만세
        </h1>
        <h1 className="h-48 border border-red-500">
          DotoriJung 의 블로그 입니다 만세만세 만만세
        </h1>
        <h1 className="h-48 border border-red-500">
          DotoriJung 의 블로그 입니다 만세만세 만만세
        </h1>
        <h1 className="h-48 border border-red-500">
          DotoriJung 의 블로그 입니다 만세만세 만만세
        </h1>
        <h1 className="h-48 border border-red-500">
          DotoriJung 의 블로그 입니다 만세만세 만만세
        </h1>
        <h1 className="h-48 border border-red-500">
          DotoriJung 의 블로그 입니다 만세만세 만만세
        </h1>
        <h1 className="h-48 border border-red-500">
          DotoriJung 의 블로그 입니다 만세만세 만만세
        </h1>
        <h1 className="h-48 border border-red-500">
          DotoriJung 의 블로그 입니다 만세만세 만만세
        </h1>
        <h1 className="h-48 border border-red-500">
          DotoriJung 의 블로그 입니다 만세만세 만만세
        </h1>
      </section>
    </div>
  );
}

export const navigation = [
  { name: "Blogs", href: "/blogs" },
  { name: "Portfolio", href: "/portfolios" },
  { name: "About", href: "/about" },
];
