"use client";

import Button from "@/app/components/Button";
import Status from "@/app/components/Status";
import { useAddProduct } from "@/app/Hooks/useAddProduct";
import useFilters from "@/app/Hooks/useFilter";
import React, { useState } from "react";
import {
  MdAdd,
  MdAddAlert,
  MdAddBusiness,
  MdCancel,
  MdCategory,
  MdDescription,
  MdOutlineSubtitles,
  MdPriceChange,
  MdSave,
  MdSaveAs,
} from "react-icons/md";

const page = () => {

  const { addProduct,
    productTitle, setTitle,
    productPrice, setPrice,
    success, setCategory,
    productDescription, setDescription,
    error, EmptyInputs,
    saveHandler,
    submitHandler } = useAddProduct()

  const { categories } = useFilters();



  return (
    <div className="">

      <h1 className="lg:text-3xl text-xl lg:m-4 m-3">Fille the filds below to add a product:</h1>

      <form className="lg:max-w-xl max-w-xs m-auto grid gap-3">
        {/* title input */}
        <label className="input input-bordered flex items-center gap-2">
          <MdOutlineSubtitles />
          <input value={productTitle} type="text" className="grow" placeholder="Title"
            onChange={e => setTitle(e.target.value)} />
        </label>

        {/* price input */}
        <label className="input input-bordered flex items-center gap-2">
          <MdPriceChange />
          <input value={productPrice} type="text" className="grow" placeholder="Price"
            onChange={e => setPrice(e.target.value)} />
        </label>

        {/* category input */}
        <label className="input input-bordered flex items-center gap-2">
          <MdCategory />
          <select
            onChange={e => setCategory(e.target.value)}
            className=" grow">
            <option value="">Choose Categorie</option>
            {categories.map(category => <option key={category} value={category}>
              {category}
            </option>)}
          </select>
        </label>

        {/* description input */}
        <textarea
          className="textarea textarea-bordered w-80 lg:w-full "
          placeholder="Description"
          value={productDescription}
          onChange={(e) => setDescription(e.target.value)}></textarea>

        <div className="flex justify-between">
          <Button color="primary" icon={<MdAdd />} size="regular" onClick={e => submitHandler(e)} > Add</Button>
          <Button color="primary" icon={<MdSaveAs />} size="regular" onClick={e => saveHandler(e)}> Save</Button>
          <Button color="secondary" icon={<MdCancel />} size="regular" onClick={e => EmptyInputs(e)}> Cancel</Button>
        </div>
      </form>
      {success && < Status status='Adding' />}

    </div>
  );
};

export default page;
