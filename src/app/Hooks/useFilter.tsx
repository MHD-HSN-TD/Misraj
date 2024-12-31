"use client"
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useFilters = () => {
    const [searchQuery, setSearchQuery] = useState<string | null>("");
    const [sortBy, setSortBy] = useState<"price" | "rating" | null>(null);
    const [filterCategory, setFilterCategory] = useState<string | null>("");
    const [categories, setCategories] = useState<string[]>(['']);
    const [isLoding, setIsLoding] = useState<boolean>(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoding(true);
                let url = `https://dummyjson.com/products/category-list`;

                console.log("URL iS", url);
                const response: AxiosResponse<string[]> = await axios.get(url);

                // console.log(response.data);

                setCategories(response.data);
                // setIsEmpty(isEmptyChech(response.data.products));
                // console.log(isEmpty, "isEmpty");
                setIsLoding(false);
            } catch (err) {
                // setError("Failed to fetch products"); // Handle any errors that occur during fetch
                console.error(err);
            }
        };

        fetchProducts(); // Call the function to fetch data
    }, [searchQuery, sortBy, filterCategory,]);

    return {
        categories, setCategories,
        searchQuery,
        setSearchQuery,
        sortBy,
        setSortBy,
        filterCategory,
        setFilterCategory,
    };
};

export default useFilters;
