"use client";
import Image from "next/image";
import Button from "./components/Button";
import { CgAbstract, CgAdidas, CgArrowBottomRightO, CgArrowLeft, CgArrowRight, CgCalendarNext, CgPlayTrackNext } from "react-icons/cg";
import { useGetProducts } from "./Hooks/useGetProducts";
import Card from "./components/Card";
import { Product } from "./interfaces/interfaces";
import Skeleton from "./components/Skeleton";
import useFilters from "./Hooks/useFilter";
import usePagination from "./Hooks/usePagination";
import { EventHandler, useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  const itemsPerPage = 10;
  const { searchQuery, setSearchQuery, sortBy, setSortBy, filterCategory, setFilterCategory, categories, setCategories,
  } = useFilters();
  const { currentPage, setCurrentPage } = usePagination();
  const { error, setError, products, setProducts, isLoding, setIsLoding, isEmpty, setIsEmpty } = useGetProducts(searchQuery, sortBy, filterCategory, currentPage, itemsPerPage);

  const [searchValue, setSearchValue] = useState<string>('')
  const [filterhValue, setFilterhValue] = useState<string>('')

  const onChangSearchHandler = (e: any): void => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
    // setSearchQuery(e.target.value)
  };

  const searchHandler = (): void => {
    console.log("searchValue", searchValue)
    setSortBy(null)
    setFilterCategory(null)

    setSearchQuery(searchValue)
    // console.log(e.target.value)
    // setSearchValue(e.target.value)
  };

  const onChangFilterhHandler = (e: any): void => {
    console.log(e.target.value)
    // setFilterhValue(e.target.value)
  };

  const filterHandle = (): void => {
    console.log("filterd value", filterCategory)
    setSearchQuery(null)
    setSortBy(null)
    setFilterCategory(filterhValue)

    // setFilterCategory(filterhValue)
    // console.log(e.target.value)
    // setSearchValue(e.target.value)
  };





  return (
    <>
      <div className="bg-slate-300 max-w-md m-auto rounded-md">

        <div className="flex align-middle justify-around my-2">
          <input
            type="text"
            placeholder="Search products..."
            // value={searchQuery}
            onChange={(e) => onChangSearchHandler(e)}
            className="p-2 border rounded m-2" />

          <Button color="primary" size="regular" icon={<CiSearch />} className="p-2"
            onClick={() => searchHandler()}>Search</Button>
        </div>


        <div className="flex">
          <Button color="primary" size="regular" className="m-2"
            onClick={() => setSortBy('price')}
            icon={<CgAdidas />} >setSortBy price</Button>

          <Button color="primary" size="regular" className="m-2"
            onClick={() => setSortBy('rating')}
            icon={<CgAdidas />} >setSortBy rating</Button>
        </div>


        <select
          // value={filterCategory}
          onChange={(e) => onChangFilterhHandler(e)} className="p-2 border rounded">
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <Button color="primary" size="regular" icon={<CiSearch />} className="p-2"
          onClick={() => filterHandle()}>Search</Button>
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

      <p className="text-xl text-center m-5" >{isEmpty && 'There is no Data'}</p>
      <div className="flex justify-center mt-4">
        <Button color="primary" size="regular" onClick={() => setCurrentPage(currentPage - 1)}
          icon={<CgArrowLeft />}
          disabled={currentPage === 1}>
          {/* Previous */}
        </Button>
        <span className="mx-4 m-auto">{!isEmpty && 'Page'}  {!isEmpty && currentPage}</span>
        <Button
          color="primary"
          size="regular"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={products.length < itemsPerPage}
          icon={<CgArrowRight />}>
          {/* Next */}
        </Button>
      </div>
    </ >
  );
}

