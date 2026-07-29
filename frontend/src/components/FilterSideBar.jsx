import { Input } from "./ui/input";
import React, { useState } from "react";
import { Button } from "./ui/button";
const FilterSidebar = ({ allProducts }) => {
  const Categories = allProducts.map((p) => p.category);
  const UniqueCategory = ["All", ...new Set(Categories)];

  const Brands = allProducts.map((p) => p.brand);
  const UniqueBrand = ["All", ...new Set(Brands)];
  const [priceRange, setPriceRange] = useState([0, 5000]);
  console.log(UniqueBrand);

  return (
    <div className="bg-gray-100 mt-10 p-4 rounded-md h-max hidden md:block w-64">
      {/* Search */}
      <Input
        type="text"
        placeholder="Search..."
        className="bg-white p-2 rounded-md border-gray-400 border-2 w-full"
      />

      {/* Category */}
      <h1 className="mt-5 font-semibold text-xl">Category</h1>

      <div className="flex flex-col gap-2 mt-3">
        {UniqueCategory.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <input type="radio" />
            <label htmlFor="">{item}</label>
          </div>
        ))}
      </div>
      {/* brands */}
      <h1 className="mt-5 font-semibold text-xl">Brand</h1>

      <select className="bg-white w-full p-2 border border-gray-200 rounded-md">
        {UniqueBrand.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item.toUpperCase()}
            </option>
          );
        })}
      </select>

      {/* price range */}
      <h1 className="mt-5 font-semibold text-xl mb-3">Price Range</h1>

      <div className="flex flex-col gap-2">
        <label>
          Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
        </label>

        <div className="flex gap-2 items-center">
          <input
            type="number"
            min="0"
            max="5000"
            className="w-20 p-1 border border-gray-300 rounded"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
          />

          <span>-</span>

          <input
            type="number"
            min="0"
            max="999999"
            className="w-20 p-1 border border-gray-300 rounded"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
          />
        </div>

        <input
          type="range"
          min="0"
          max="5000"
          step="100"
          className="w-full"
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([Number(e.target.value), priceRange[1]])
          }
        />

        <input
          type="range"
          min="0"
          max="999999"
          step="100"
          className="w-full"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
        />
      </div>

      {/* Reset button */}
      <Button
        className="bg-pink-600 text-white mt-5 cursor-pointer w-full"
        onClick={() => setPriceRange([0, 5000])}
      >
        Reset Filters
      </Button>
    </div>
  );
};

export default FilterSidebar;
