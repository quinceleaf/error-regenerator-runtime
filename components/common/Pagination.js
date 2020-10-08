import React, { useState, useEffect } from "react";

import {
  MdNavigateBefore,
  MdNavigateNext,
  MdFirstPage,
  MdLastPage,
  MdMoreHoriz,
} from "react-icons/md";

const Pagination = ({ pageProps }) => {
  const {
    pageIndex,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    ...rest
  } = pageProps;



  const renderGoToFirstPage = () => {
    return (
      <button
        type="button"
        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 "
        aria-label="Previous"
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      >
        <MdFirstPage />
      </button>
    );
  };

  const renderPrevious = () => {
    return (
      <button
        type="button"
        className="relative inline-flex items-center px-2 py-2 #rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500"
        aria-label="Previous"
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        <MdNavigateBefore />
      </button>
    );
  };

  const renderNext = () => {
    return (
      <button
        type="button"
        className="-ml-px relative inline-flex items-center px-2 py-2 #rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 "
        aria-label="Next"
        onClick={() => nextPage()}
        disabled={!canNextPage}
      >
        <MdNavigateNext />
      </button>
    );
  };

  const renderGoToLastPage = () => {
    return (
      <button
        type="button"
        className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 "
        aria-label="Next"
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      >
        <MdLastPage />
        {/* <span className="mx-2">{pageNumbers.length} pages</span> */}
        <span className="mx-2">{`${pageCount} ${
          pageCount === 1 ? "page" : "pages"
        }`}</span>
      </button>
    );
  };

  const renderSkippedPages = () => {
    return (
      <li className="block hover:text-white hover:bg-green-400 text-sm text-gray-500 border-r border-grey-light px-3 py-2">
        <MdMoreHoriz />
      </li>
    );
  };

  const renderPageNumbers = () => {
    let currentPage = pageIndex + 1
    let renderPageRange = [];

    if (pageCount == 1) {
      renderPageRange = [1]
    } else if (pageCount == 2) {
      renderPageRange = [1,2]
    } else if (pageCount == 3) {
      renderPageRange = [1,2,3]
    } else if (currentPage == 1) {
      renderPageRange = [1,2,3]
    } else if (pageCount == 2) {
      renderPageRange = [1,2,3]
    } else if (currentPage == pageCount) {
      renderPageRange = [currentPage - 2, currentPage - 1, currentPage]
    } else {
      renderPageRange = [currentPage - 1, currentPage, currentPage + 1]
    }

    return (
      <div>
        {renderPageRange.map((number) =>
          number === pageIndex + 1  ? (
            <button
              key={number}
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700  bg-blue-300 text-white "
              onClick={() => gotoPage(number)}
            >
              {number}
            </button>
          ) : (
            <button
              key={number}
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700  text-gray-500 "
              onClick={() => gotoPage(number)}
            >
              {number}
            </button>
          )
        )}
      </div>
    );
  };

  // const adjustForFilter = () => {
  //   isFiltered && page > pageNumbers.length ? goToPage(1) : null;
  // };

  return (
    <div className=" mt-4">
      <nav className="relative z-0 inline-flex shadow-sm">
        {renderGoToFirstPage()}
        {renderPrevious()}
        {renderPageNumbers()}
        {renderNext()}
        {renderGoToLastPage()}
        {/* {adjustForFilter()} */}
      </nav>
    </div>
  );
};

export default Pagination;
