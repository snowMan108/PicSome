import React from "react";
import { ShoppingCartIcon as ShoppingCart } from "@heroicons/react/outline";
import { ShoppingCartIcon as ShoppingCartSolid } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  const handleCartClick = () => {
    router.push("/cartpage");
  };

  const handlePicSomeClick = () => {
    router.push("/");
  };
  return (
    <div className="bg-navBarColor w-screen border-b-2 border-borderNavColor sticky z-40 top-0 shadow-2xl  h-20 flex flex-row items-center justify-between">
      {/* Pic Some */}
      <p
        onClick={handlePicSomeClick}
        className="text-3xl cursor-pointer font-bold text-white ml-5"
      >
        Pic Some
      </p>
      {/* Shopping cart */}
      <ShoppingCart
        onClick={handleCartClick}
        className="h-9 w-9 text-white mr-5 cursor-pointer"
      />
      {/* <ShoppingCartSolid className="" /> */}
    </div>
  );
}

export default Nav;
