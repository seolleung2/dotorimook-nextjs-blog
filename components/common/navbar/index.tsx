import React, { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { navigation } from "./navigation";
import { ContentSearch, PopOverSearch } from "@Components/search";

interface INavbarProps {
  isSearchEnabled: boolean;
  onSearch: () => void;
}

const Navbar = ({ isSearchEnabled, onSearch }: INavbarProps) => {
  return (
    <nav className="navigation sticky -top-2 z-50 flex h-24 w-full items-center justify-between bg-[#e2e2e2] px-2 pb-2 pt-4 lg:px-4 lg:pb-4 lg:pt-8">
      <Popover className="lg:hidden">
        <div className="relative">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
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
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition lg:hidden"
          >
            <div className="rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div className="text-4xl">🌰</div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Link legacyBehavior key={item.name} href={item.href}>
                    <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div className="px-4">
                <PopOverSearch />
              </div>
              <a
                href="#"
                className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
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
      <div className="flex h-fit flex-row items-center lg:h-full lg:space-x-16">
        <ul className="hidden items-center space-x-16 font-Catamaran text-base font-medium text-gray-600 lg:flex lg:text-lg">
          {navigation.map((category) => (
            <li
              key={category.name}
              className="cursor-pointer hover:text-gray-900"
            >
              {category.name}
            </li>
          ))}
        </ul>
        <MagnifyingGlassIcon
          className="h-10 w-10 cursor-pointer rounded-md bg-white px-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={onSearch}
        />
      </div>
      {/* contentSearch */}
      <ContentSearch isSearchEnabled={isSearchEnabled} />
    </nav>
  );
};

export default Navbar;
