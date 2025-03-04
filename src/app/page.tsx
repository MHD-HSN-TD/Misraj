"use client";
import Button from "./components/Button";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { useGetProducts } from "./Hooks/useGetProducts";
import Card from "./components/Card";
import Skeleton from "./components/Skeleton";
import useFilters from "./Hooks/useFilter";
import usePagination from "./Hooks/usePagination";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdStarRate } from "react-icons/md";
import { FaDollarSign, FaFilter } from "react-icons/fa";

export default function Home() {
  //TODO : I followed a HOOK Pattern to do all the task
  const itemsPerPage = 10;
  //external logic
  const {
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    filterCategory,
    setFilterCategory,
    categories,
  } = useFilters();
  const { currentPage, setCurrentPage } = usePagination();
  const { error, products, isLoding, isEmpty } = useGetProducts(
    searchQuery,
    sortBy,
    filterCategory,
    currentPage,
    itemsPerPage
  );

  // states
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterhValue, setFilterhValue] = useState<string>("");

  const onChangSearchHandler = (e: any): void => {
    setSearchValue(e.target.value);
  };

  const onChangFilterhHandler = (e: any): void => {
    setFilterhValue(e.target.value);
  };

  const searchHandler = (): void => {
    // clear the Previous APIs
    setSortBy(null);
    setFilterCategory(null);
    setSearchQuery(searchValue);
  };

  const filterHandle = (): void => {
    // console.log("filterd value", filterCategory)
    // clear the Previous APIs
    setSearchQuery(null);
    setSortBy(null);
    setFilterCategory(filterhValue);
  };

  //TODO: I could make every part of this page as Component for better prefornace and clean Arch
  //! But I intended to make the APP run after that i can do the enhancments
  return (
    <>
      {/* Control Section */}
      <div className="bg-blue-400 lg:max-w-md max-w-sm m-auto rounded-md my-5 p-5">
        {/* Searching Section */}
        <div className="flex justify-center items-center my-2">
          <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => onChangSearchHandler(e)}
            className="p-2 border rounded m-2"
          />
          <Button
            color="primary"
            size="regular"
            icon={<CiSearch />}
            className="p-2"
            onClick={() => searchHandler()}
          >
            Search
          </Button>
        </div>

        {/* Sorting Section */}
        <div className="flex  justify-center items-center my-2">
          <Button
            color="primary"
            size="regular"
            className="m-2"
            onClick={() => setSortBy("price")}
            icon={<FaDollarSign />}
          >
            SortBy price
          </Button>
          <Button
            color="primary"
            size="regular"
            className="m-2"
            onClick={() => setSortBy("rating")}
            icon={<MdStarRate />}
          >
            SortBy rating
          </Button>
        </div>

        {/* Category Section */}
        <div className="flex justify-center items-center my-2">
          <select
            onChange={(e) => onChangFilterhHandler(e)}
            className="p-2 m-2 border rounded"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <Button
            color="primary"
            size="regular"
            icon={<FaFilter />}
            className="p-2"
            onClick={() => filterHandle()}
          >
            Filter
          </Button>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex justify-center items-center flex-wrap gap-4 ">
        {isLoding && <Skeleton />}
        {products.map((el) => (
          <Card
            image={el.thumbnail}
            price={el.price}
            rate={el.rating}
            title={el.title}
            description={el.description}
            key={el.id}
          />
        ))}
      </div>

      {/* Pagenation Section */}
      <div className="Pagenation Section">
        <p className="text-xl text-center m-5">
          {isEmpty && "There is no Data"}
        </p>
        <p className="text-xl text-center m-5">
          {error && "Something went Wrong"}
        </p>
        <div className="flex justify-center mt-4">
          <Button
            color="primary"
            size="regular"
            onClick={() => setCurrentPage(currentPage - 1)} //currentPage is 1 by default as it is defined in the component
            icon={<CgArrowLeft />}
            disabled={currentPage === 1}
          ></Button>

          <span className="mx-4 m-auto">
            {!isEmpty && "Page"} {!isEmpty && currentPage}
          </span>
          <Button
            color="primary"
            size="regular"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={products.length < itemsPerPage}
            icon={<CgArrowRight />}
          ></Button>
        </div>
      </div>
    </>
  );
}
