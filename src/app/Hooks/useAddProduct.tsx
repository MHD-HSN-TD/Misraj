"use client";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { Product, ProductsResponse } from "../interfaces/interfaces";

export const useAddProduct = () => {
  // handle the errore ,success and loading state
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // States for inputs
  const [productTitle, setTitle] = useState<string>("");
  const [productPrice, setPrice] = useState<string>("");
  const [productCategory, setCategory] = useState<string>("");
  const [productDescription, setDescription] = useState<string>("");

  // States for errors
  const [titleError, setTitleError] = useState<string>("");
  const [priceError, setPriceError] = useState<string>("");
  const [categoryError, setCategoryError] = useState<string>("");
  const [descriptionError, setDescriptionError] = useState<string>("");

  // empty the inputs
  const EmptyInputs = (e: React.FormEvent) => {
    e.preventDefault();
    setTitle("");
    setPrice("");
    setCategory("");
    setDescription("");
  };

  // handle the save operation
  const saveHandler = (e: React.FormEvent) => {
    e.preventDefault(); //prevent the reFresh proccess
    console.log("saved ! ");
  };

  // handle the submit operation
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault(); //prevent the reFresh proccess
    addProduct(); //call addProduct APi
    EmptyInputs(e); //after the APi
  };

  // Validation function
  const validateForm = () => {
    let isValid = true;

    if (!productTitle) {
      setTitleError("Title is required.");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (!productPrice) {
      setPriceError("Price is required.");
      isValid = false;
    } else if (isNaN(Number(productPrice))) {
      setPriceError("Price must be a number.");
      isValid = false;
    } else {
      setPriceError("");
    }

    if (!productCategory) {
      setCategoryError("Category is required.");
      isValid = false;
    }

    if (productCategory === "") {
      setCategoryError("Choose category.");
      isValid = false;
    } else {
      setCategoryError("");
    }

    if (!productDescription) {
      setDescriptionError("Description is required.");
      isValid = false;
    } else {
      setDescriptionError("");
    }

    return isValid;
  };

  const addProduct = async () => {
    try {
      //simple validation
      if (!validateForm()) return; // Stop if validation fails

      setIsLoading(true); // Set loading to true when the request starts
      setSuccess(false); // Reset success state
      setError(null); // Reset error state

      const url = "https://dummyjson.com/products/add";
      const data: Product = {
        title: productTitle,
        category: productCategory,
        price: productPrice,
        description: productDescription,
      };

      // console.log("URL is", url);
      const response: AxiosResponse<ProductsResponse> = await axios.post(
        url,
        data
      );

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
    submitHandler,
    titleError,
    priceError,
    categoryError,
    descriptionError,
  };
};
