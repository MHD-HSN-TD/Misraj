"use client"
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Product, ProductsResponse } from "../interfaces/interfaces";


export const useGetProducts = (
    searchQuery: string | null, sortBy: string | null, filterCategory: string | null, currentPage: number, itemsPerPage: number
) => {
    const [products, setProducts] = useState<Product[]>([]);

    const [error, setError] = useState<string | null>(null);
    const [isLoding, setIsLoding] = useState<boolean>(false);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);


    const isEmptyChech = (productsArr: Product[]): boolean => {
        return productsArr.length === 0
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoding(true)

                // 'https://dummyjson.com/products?sortBy=title&order=asc'
                // 'https://dummyjson.com/products/search?q=phone'
                // 'https://dummyjson.com/products?sortBy=title&order=asc
                // let url = `https://dummyjson.com/products`;

                let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`;


                // if (searchQuery) url += `/search?&q=${searchQuery}`;
                // if (sortBy) url += `?sortBy=${sortBy}&order=desc`;

                if (searchQuery) url = `https://dummyjson.com/product/search?&q=${searchQuery}`;
                if (sortBy) url = `https://dummyjson.com/product?sortBy=${sortBy}&order=desc`;
                if (filterCategory) url = `https://dummyjson.com/products/category/${filterCategory}`;

                console.log("URL iS", url)
                const response: AxiosResponse<ProductsResponse> = await axios.get(url);

                console.log(response.data.products)

                setProducts(response.data.products); // Store the fetched products in state
                setIsEmpty(isEmptyChech(response.data.products))
                console.log(isEmpty, 'isEmpty')
                setIsLoding(false)
            } catch (err) {
                setError('Failed to fetch products'); // Handle any errors that occur during fetch
                console.error(err);
            }
        };

        fetchProducts(); // Call the function to fetch data
    }, [searchQuery, sortBy, filterCategory, currentPage, itemsPerPage]);

    return {
        isLoding, setIsLoding,
        error,
        setError,
        products,
        setProducts,
        isEmpty, setIsEmpty,
    };
};

