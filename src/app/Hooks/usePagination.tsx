"use client";
import { useState } from "react";
const usePagination = (initialPage: number = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  return {
    currentPage,
    setCurrentPage,
  };
};

export default usePagination;
