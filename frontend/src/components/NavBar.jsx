import React from "react";
import Logo from "./Logo";
import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import axios from "axios";
import { toast } from "sonner";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

const NavBar = () => {
  const { user } = useSelector((store) => store.user);
  const {cart} = useSelector(store=> store.product)
  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5555/api/v1/user/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (res.data.success) {
        dispatch(setUser(null));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="bg-pink-50 fixed w-full z-20 border-b border-pink-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3">
        <div>
          <Logo className="h-16 w-auto mx-auto mb-4" />
        </div>
        <nav className="flex gap-10 justify-between items-center">
          <ul className="flex gap-7 items-center text-xl font-semibold">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/products"}>
              <li>Products</li>
            </Link>
            {user && (
              <Link to={`/profile/${user._id}`}>
                <li>Hello, {user.firstName}</li>
              </Link>
            )}
          </ul>
          <Link to={"/cart"} className="relative">
            <ShoppingCart />
            <span className="bg-pink-500 rounded-full absolute text-white -top-3 -right-5 px-2">
              {cart?.items?.length || 0}
            </span>
          </Link>
          {user ? (
            <Button
              onClick={logoutHandler}
              className="bg-pink-600 text-white cursor-pointer"
            >
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button
                className="bg-gradient-to-tl from-blue-600 to-purple-600 text-white cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
