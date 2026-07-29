import FilterSidebar from "@/components/FilterSidebar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "@/components/ProductCard"

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
const Products = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [loading,setLoading] = useState(false)
  const getAllProducts = async () => {
    try {
      setLoading(true)
      const res = await axios.get(
        "http://localhost:5555/api/v1/product/getallproducts"
      );

      if (res.data.success) {
        setAllProducts(res.data.products);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="pt-32 pb-10">
      <div className="max-w-7xl mx-auto flex gap-7">
        {/* Sidebar */}
        <FilterSidebar allProducts={allProducts}/>

        {/* Main Product Section */}
        <div className="flex flex-col flex-1">

  {/* Sort By */}
  <div className="flex justify-end mb-6">
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Sort by Price" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem value="lowToHigh">
            Price: Low to High
          </SelectItem>

          <SelectItem value="highToLow">
            Price: High to Low
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
    {allProducts.map((product) => (
      <ProductCard key={product._id} product={product} loading={loading}/>
    ))}
  </div>

</div>
      </div>
    </div>
  );
};

export default Products;
