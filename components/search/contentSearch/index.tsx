import React, { Fragment } from "react";
import type { NextPage } from "next";
import { Popover, Transition } from "@headlessui/react";
import RecommendedSearchList from "../recommendedSearch";

type Props = {
  isSearchEnabled: boolean;
};

const ContentSearch: NextPage<Props> = ({ isSearchEnabled }) => {
  return (
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
      <div className="absolute -bottom-[75%] left-0 right-0 flex h-[72px] w-full items-center justify-center bg-[#f1f0f0] sm:-bottom-[112.5%] sm:h-[108px] lg:-bottom-[150%] lg:h-36">
        <div className="grow-1 relative flex h-10 w-2/3 lg:h-20">
          <div className="inputBox flex w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-gray-500 dark:text-gray-400 lg:h-8 lg:w-8"
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
              id="search-input"
              autoComplete="off"
              type="text"
              className="block h-full w-full rounded-tl-lg rounded-bl-lg bg-white p-2.5 pl-14 text-sm focus:outline-none lg:text-lg"
              placeholder="Enter Your Search Topic"
            />
            <button
              type="button"
              className="inset-y-0 right-0 flex h-full items-center rounded-tr-lg rounded-br-lg bg-white pr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-gray-500 dark:text-gray-400 lg:h-8 lg:w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <RecommendedSearchList isContentSearched />
        </div>
      </div>
    </Transition>
  );
};

export default ContentSearch;
