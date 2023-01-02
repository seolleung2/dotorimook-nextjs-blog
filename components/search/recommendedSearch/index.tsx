import React from "react";
import type { NextPage } from "next";

type Props = {
  isContentSearched?: boolean;
};

const RecommendedSearchList: NextPage<Props> = ({ isContentSearched }) => {
  return (
    <ul
      className={`${
        isContentSearched && "absolute -bottom-[46px]"
      } is-multiple select z-10 flex max-h-80 w-full flex-col bg-white p-0 font-medium`}
      role="listbox"
    >
      <li
        onClick={() => {}}
        className={`relative w-full cursor-pointer rounded-md bg-[#ececec] p-3 hover:bg-indigo-500 hover:text-white`}
      >
        <div className="truncate text-sm">Found Blog Title 1</div>
        <p className="truncate text-sm">Found Blog Desc 1</p>
        <span className="mt-2 rounded-xl bg-gray-800 px-2 py-1 text-xs text-white">
          blogs
        </span>
      </li>
      <li
        onClick={() => {}}
        className={`relative w-full cursor-pointer rounded-md bg-[#ececec] p-3 hover:bg-indigo-500 hover:text-white`}
      >
        <div className="truncate text-sm">Found Blog Title 2</div>
        <p className="truncate text-sm">Found Blog Desc 2</p>
        <span className="mt-2 rounded-xl bg-gray-800 px-2 py-1 text-xs text-white">
          portfolios
        </span>
      </li>
    </ul>
  );
};

export default RecommendedSearchList;
