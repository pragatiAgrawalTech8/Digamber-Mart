import React from "react";
import Logo from "./Logo";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
const NavBar = () => {
  const user = true;
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
              <Link to={"/profile"}>
                <li>Hello User</li>
              </Link>
            )}
          </ul>
          <Link to={"/cart"} className="relative">
            <ShoppingCart />
            <span className="bg-pink-500 rounded-full absolute text-white -top-3 -right-5 px-2">
              0
            </span>
          </Link>
          {user ? (
            <Button className="bg-pink-600 text-white cursor-pointer">Login</Button>
          ) : (
            <Button className="bg-gradient-to-tl from-blue-600 to-purple-600 text-white cursor-pointer">
              Login
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
