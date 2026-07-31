// import Breadcrumbs from "@/components/Breadcrumbs";
// import ProductDesc from "@/components/ProductDesc";
// import ProductImg from "@/components/ProductImg";
// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// const SingleProduct = () => {
//   const params = useParams();
//   const productId = params.id;

//   const { products } = useSelector((store) => store.product);

//   const product = products.find((item) => item._id === productId);

//   return (
//     <div className="pt-32 py-10 max-w-7xl mx-auto">
//       <Breadcrumbs product={product} />

//       <div className="mt-10 grid grid-cols-2 items-start gap-10">
//         <ProductImg images={product?.ProductImg || []} product={product} />
//         <ProductDesc  product={product} />
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;


import Breadcrumbs from "@/components/Breadcrumbs";
import ProductDesc from "@/components/ProductDesc";
import ProductImg from "@/components/ProductImg";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setProducts } from "@/redux/productSlice"; // apna actual action name check kar lena

const SingleProduct = () => {
  const params = useParams();
  const productId = params.id;
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.product);

  useEffect(() => {
    if (!products || products.length === 0) {
      const fetchProducts = async () => {
        try {
          const res = await axios.get("http://localhost:5555/api/v1/product/getallproducts");
          if (res.data.success) {
            dispatch(setProducts(res.data.products));
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchProducts();
    }
  }, []);

  const product = products?.find((item) => item._id === productId);

  return (
    <div className="pt-32 py-10 max-w-7xl mx-auto">
      <Breadcrumbs product={product} />

      <div className="mt-10 grid grid-cols-2 items-start gap-10">
        <ProductImg images={product?.productImg || []} product={product} />
        <ProductDesc product={product} />
      </div>
    </div>
  );
};

export default SingleProduct;