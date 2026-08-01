import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Trash2, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useEffect } from "react";
import { setCart } from "@/redux/productSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.product);
  console.log(cart);
  const subtotal = cart?.totalPrice;
  const shipping = subtotal > 299 ? 0 : 10;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;
  const navigate = useNavigate();

  const API = "http://localhost:5555/api/v1/cart";
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    loadCart();
    const fetchCart = async () => {
      try {
        const res = await axios.get(`${API}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.data.success) {
          dispatch(setCart(res.data.cart));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCart();
  }, [dispatch]);
  const handleUpdateQuantity = async (productId, type) => {
    try {
      const res = await axios.put(
        `${API}/update`,
        { productId, type },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (res.data.success) {
        dispatch(setCart(res.data.cart));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);

      // toast.error(
      //   error.response?.data?.message || "Failed to update cart"
      // );
    }
  };
  const handleRemove = async (productId) => {
    try {
      const res = await axios.delete(`${API}/remove`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: { productId },
      });
      if (res.data.success) {
        dispatch(setCart(res.data.cart));
        toast.success("Product removed from Cart");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadCart = async () => {
    try {
      const res = await axios.get(API, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.data.success) {
        dispatch(setCart(res.data.cart));
      }
    } catch (error) {
      console.log(error);
    }
  };

 return (
  <div className="pt-32 bg-gray-50 min-h-screen">
    {cart?.items?.length > 0 ? (
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-7">
          Shopping Cart
        </h1>

        <div className="flex gap-7">
          {/* Cart Items */}
          <div className="flex-1 flex flex-col gap-5">
            {cart?.items?.map((product, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-center">

                  {/* Product */}
                  <div className="flex items-center gap-5 w-[350px]">
                    <img
                      src={product?.productId?.productImg?.[0]?.url}
                      alt=""
                      className="w-20 h-20 rounded-md object-cover"
                    />

                    <div>
                      <h1 className="font-semibold text-lg">
                        {product?.productId?.productName}
                      </h1>

                      <p className="text-gray-600">
                        ₹{product?.productId?.productPrice}
                      </p>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleUpdateQuantity(
                          product.productId._id,
                          "decrease"
                        )
                      }
                    >
                      -
                    </Button>

                    <span className="font-semibold">
                      {product.quantity}
                    </span>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleUpdateQuantity(
                          product.productId._id,
                          "increase"
                        )
                      }
                    >
                      +
                    </Button>
                  </div>

                  {/* Price */}
                  <p className="font-semibold text-lg">
                    ₹
                    {product.productId.productPrice *
                      product.quantity}
                  </p>

                  {/* Remove */}
                  <button
                    onClick={() =>
                      handleRemove(product.productId._id)
                    }
                    className="flex items-center gap-1 text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-[380px]">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>
                    Subtotal ({cart?.items?.length} items)
                  </span>
                  <span>
                    ₹{cart?.totalPrice?.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹{shipping}</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax (5%)</span>
                  <span>₹{tax}</span>
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex gap-2">
                    <Input placeholder="Promo Code" />
                    <Button variant="outline">Apply</Button>
                  </div>

                  <Button onClick={()=>navigate("/address")} className="w-full bg-pink-600">
                    PLACE ORDER
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full"
                  >
                    <Link to="/products">
                      Continue Shopping
                    </Link>
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground pt-4">
                  <p>* Free shipping on orders over 299</p>
                  <p>* 30-days return policy</p>
                  <p>* Secure checkout with SSL encryption</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    ) : (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="bg-pink-100 p-6 rounded-full">
          <ShoppingCart className="w-16 h-16 text-pink-600" />
        </div>

        <h2 className="mt-6 text-2xl font-bold">
          Your Cart is Empty
        </h2>

        <p className="mt-2 text-gray-600">
          Looks like you haven't added anything yet.
        </p>

        <Button
          onClick={() => navigate("/products")}
          className="mt-6 bg-pink-600 hover:bg-pink-700"
        >
          Start Shopping
        </Button>
      </div>
    )}
  </div>
);
};

export default Cart;
