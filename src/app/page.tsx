"use client";
import Image from "next/image";
import Button from "./components/Button";
import { CgAbstract, CgAdidas } from "react-icons/cg";
import { useGetProducts } from "./Hooks/useGetProducts";
import Card from "./components/Card";
import { Product } from "./interfaces/interfaces";
import Skeleton from "./components/Skeleton";

export default function Home() {
  let { error, setError, products, setProducts, isLoding, setIsLoding, } = useGetProducts();

  const doNothing = (name: string): void => {
    console.log(products);
  };
  return (

    <div>

      <div className="bg-slate-300 max-w-md m-auto flex rounded-md">

        <div className="flex align-middle justify-around my-2">
          <input
            // onChange={}
            type="text"
            placeholder=" ادخل الاسم الكامل او الكنية"
            className="input input-bordered input-success lg:w-1/2  text-red-600 lg:text-lg text-xs" />

        </div>
        <div>
          <Button color="primary" size="large" icon={<CgAdidas />}
            onClick={() => { doNothing("second one"); }}>Hi</Button>
        </div>
      </div>


      <div className="flex justify-center items-center flex-wrap gap-4 ">
        {isLoding && < Skeleton />}
        {products.map((el) => <Card image={el.thumbnail}
          price={el.price}
          rate={el.rating}
          title={el.title}
          description={el.description}
          key={el.id}
        />)}
      </div>
    </div>
  );
}


// import React, { useState } from 'react';
// import { useGetProducts } from '../hooks/useGetProducts'; // Adjust the import path
// import Button from '../components/Button'; // Your custom Button component

// const ProductList: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortBy, setSortBy] = useState('');
//   const [category, setCategory] = useState('');
//   const [page, setPage] = useState(1);

//   const { isLoading, error, products, totalCount } = useGetProducts(searchQuery, sortBy, category, page);

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSortBy(event.target.value);
//   };

//   const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setCategory(event.target.value);
//   };

//   const handleNextPage = () => {
//     if ((page * 10) < totalCount) { // Assuming 10 products per page
//       setPage(prevPage => prevPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (page > 1) {
//       setPage(prevPage => prevPage - 1);
//     }
//   };

//   return (
//     <div>
//       <h1>Product List</h1>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearchChange}
//         placeholder="Search products..."
//       />
//       <select onChange={handleSortChange}>
//         <option value="">Sort by</option>
//         <option value="price">Price</option>
//         <option value="rating">Rating</option>
//       </select>
//       <select onChange={handleCategoryChange}>
//         <option value="">All Categories</option>
//         {/* Add categories as needed */}
//         <option value="beauty">Beauty</option>
//         <option value="electronics">Electronics</option>
//       </select>

//       <Button color="primary" size="small" onClick={() => setPage(1)}>Search</Button>

//       {isLoading && <p>Loading...</p>}
//       {error && <p>{error}</p>}

//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             <h2>{product.title}</h2>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//           </li>
//         ))}
//       </ul>

//       {/* Pagination Controls */}
//       <div>
//         <Button color="secondary" size="small" onClick={handlePrevPage} disabled={page === 1}>Previous</Button>
//         <span> Page {page} </span>
//         <Button color="secondary" size="small" onClick={handleNextPage} disabled={(page * 10) >= totalCount}>Next</Button>
//       </div>
//     </div>
//   );
// };

// export default ProductList;
