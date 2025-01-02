"use client";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Product, ProductsResponse } from "../interfaces/interfaces";

export const useGetProducts = (
  searchQuery: string | null,
  sortBy: string | null,
  filterCategory: string | null,
  currentPage: number,
  itemsPerPage: number
) => {
  //states to handle API status
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoding, setIsLoding] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  // check in the result has no products
  const isEmptyChech = (productsArr: Product[]): boolean => {
    return productsArr.length === 0;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoding(true);

        let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
          (currentPage - 1) * itemsPerPage
        }`;

        //? I think the APi url can add all the featuers to it , but it was unique Api for every feature
        // if (searchQuery) url += `/search?&q=${searchQuery}`;
        // if (sortBy) url += `?sortBy=${sortBy}&order=desc`;

        if (searchQuery)
          url = `https://dummyjson.com/product/search?&q=${searchQuery}`;
        if (sortBy)
          url = `https://dummyjson.com/product?sortBy=${sortBy}&order=desc`;
        if (filterCategory)
          url = `https://dummyjson.com/products/category/${filterCategory}`;

        const response: AxiosResponse<ProductsResponse> = await axios.get(url);
        setProducts(response.data.products); // Store the fetched products in state
        setIsEmpty(isEmptyChech(response.data.products)); // check in the result has no products
        console.log(isEmpty, "isEmpty");
        setIsLoding(false);
      } catch (err) {
        setError("Failed to fetch products"); // Handle any errors that occur during fetch
        console.error(err);
      }
    };

    fetchProducts(); // Call the function to fetch data
  }, [searchQuery, sortBy, filterCategory, currentPage, itemsPerPage]);

  return {
    isLoding,
    setIsLoding,
    error,
    setError,
    products,
    setProducts,
    isEmpty,
    setIsEmpty,
  };
};
