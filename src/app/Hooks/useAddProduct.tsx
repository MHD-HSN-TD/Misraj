"use client";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { Product, ProductsResponse } from "../interfaces/interfaces";

export const useAddProduct = () => {
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [productTitle, setTitle] = useState<string>('');
    const [productPrice, setPrice] = useState<string>('');
    const [productCategory, setCategory] = useState<string>('');
    const [productDescription, setDescription] = useState<string>('');

    const EmptyInputs = (e: React.FormEvent) => {
        e.preventDefault()
        setTitle('')
        setPrice('')
        setCategory('')
        setDescription('')
    }

    const saveHandler = (e: React.FormEvent) => {
        e.preventDefault(); //prevent the reFresh proccess
        console.log("saved ! ")
    }



    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault(); //prevent the reFresh proccess
        addProduct();//call addProduct APi
        EmptyInputs(e)//after the APi
    }

    const addProduct = async () => {
        try {
            setIsLoading(true); // Set loading to true when the request starts
            setSuccess(false); // Reset success state
            setError(null); // Reset error state

            const url = 'https://dummyjson.com/products/add';
            const data: Product = {
                title: productTitle,
                category: productCategory,
                price: productPrice,
                description: productDescription,
            };

            console.log("URL is", url);
            const response: AxiosResponse<ProductsResponse> = await axios.post(url, data);

            console.log(response);
            setSuccess(true); // Set success to true after a successful response
            setIsLoading(false); // Set loading to false after the request completes
        } catch (err) {
            setError("Failed to add product"); // Handle any errors that occur during the request
            console.error(err);
            setIsLoading(false); // Set loading to false if there's an error
        }
    };

    return {
        addProduct,
        productTitle,
        setTitle,
        productPrice,
        setPrice,
        productCategory,
        setCategory,
        productDescription,
        setDescription,
        error,
        success,
        isLoading,
        EmptyInputs,
        saveHandler,
        submitHandler
    };
};