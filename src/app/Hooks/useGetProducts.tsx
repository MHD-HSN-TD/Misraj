import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Product, ProductsResponse } from "../interfaces/interfaces";


export const useGetProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoding, setIsLoding] = useState<boolean>(false);




    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoding(true)
                const response: AxiosResponse<ProductsResponse> = await axios.get('https://dummyjson.com/products');
                console.log(response.data.products)
                setProducts(response.data.products); // Store the fetched products in state
                setIsLoding(false)
            } catch (err) {
                setError('Failed to fetch products'); // Handle any errors that occur during fetch
                console.error(err);
            }
        };

        fetchProducts(); // Call the function to fetch data
    }, []);

    return {
        isLoding, setIsLoding,
        error,
        setError,
        products,
        setProducts,
    };
};




// import axios, { AxiosResponse } from "axios";
// import { useEffect, useState } from "react";
// import { Product, ProductsResponse } from "../interfaces/interfaces";

// export const useGetProducts = (searchQuery: string = '', sortBy: string = '', category: string = '', page: number = 1) => {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [error, setError] = useState<string | null>(null);
//     const [isLoading, setIsLoading] = useState<boolean>(false);
//     const [totalCount, setTotalCount] = useState<number>(0); // To keep track of total products

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 setIsLoading(true);
//                 // Construct the API URL based on search, sort, filter, and pagination
//                 let url = `https://dummyjson.com/products`;

//                 if (searchQuery) {
//                     url += `/search?q=${encodeURIComponent(searchQuery)}`;
//                 }

//                 if (sortBy) {
//                     // Assuming sortBy could be 'price' or 'rating'
//                     url += `&sort=${sortBy}`;
//                 }

//                 if (category) {
//                     url += `&category=${encodeURIComponent(category)}`;
//                 }

//                 // Assuming each page returns a limited number of products
//                 url += `&page=${page}&limit=10`; // Adjust limit as needed

//                 const response: AxiosResponse<ProductsResponse> = await axios.get(url);
//                 setProducts(response.data.products);
//                 setTotalCount(response.data.total); // Update total count for pagination
//                 setIsLoading(false);
//             } catch (err) {
//                 setError('Failed to fetch products');
//                 console.error(err);
//             }
//         };

//         fetchProducts();
//     }, [searchQuery, sortBy, category, page]); // Dependencies for re-fetching

//     return {
//         isLoading,
//         error,
//         products,
//         totalCount,
//         setProducts,
//     };
// };
