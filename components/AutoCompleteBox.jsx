"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const AutoCompleteBox = ({ inputVal }) => {
  const { products } = useSelector((store) => store.products);
  const filteredProducts = products.filter(
    (product) =>
      inputVal !== "" &&
      product.title.toLowerCase().includes(inputVal.toLowerCase())
  );

  return (
    inputVal !== "" && (
      <ul className="search-suggestion absolute top-full flex flex-col gap-[1px] right-0 mt-1 p-2 bg-pink-light z-20 rounded-md w-72 max-h-72 overflow-y-scroll overflow-x-hidden">
        {inputVal !== "" && filteredProducts.length <= 0 ? (
          <li className="text-sm px-4 py-2 border-b cursor-pointer capitalize rounded-md">
            Nothing found!
          </li>
        ) : (
          filteredProducts?.map((product, key) => {
            return (
              <Link
                href={`/product/${product.path}`}
                className="mb-2"
                key={key}
              >
                <li
                  key={product.id}
                  className="transition-colors text-sm px-4 py-2 border-b pb-4 cursor-pointer capitalize rounded-md "
                >
                  {product.title.toLowerCase()}
                </li>
              </Link>
            );
          })
        )}
      </ul>
    )
  );
};

export default AutoCompleteBox;
