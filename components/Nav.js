import React from "react";
import { ShoppingCartIcon as ShoppingCart } from "@heroicons/react/outline";
import { ShoppingCartIcon as ShoppingCartSolid } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Nav() {
  const items = useSelector(selectItems);

  const router = useRouter();
  const handleCartClick = () => {
    router.push("/cartpage");
  };

  const handlePicSomeClick = () => {
    router.push("/");
  };
  return (
    <div className="bg-navBarColor w-screen border-b-2 border-borderNavColor sticky z-40 top-0   h-20 flex flex-row items-center justify-between">
      {/* Pic Some */}
      <p
        onClick={handlePicSomeClick}
        className="text-3xl cursor-pointer font-bold text-white ml-5"
      >
        Pic Some
      </p>
      {/* Shopping cart */}
      <div className="flex flex-row mr-5 items-center">
        {items.length > 0 ? (
          <ShoppingCartSolid
            onClick={handleCartClick}
            className="  h-9 w-9 text-white cursor-pointer"
          />
        ) : (
          <ShoppingCart
            onClick={handleCartClick}
            className="  h-9 w-9 text-white cursor-pointer"
          />
        )}

        {/* <ShoppingCartSolid className="" /> */}

        {/* Number showing how many items in cart: */}
        <div
          className={`${
            items.length === 0 && "opacity-0 cursor-default"
          }  flex flex-row items-center cursor-default justify-center rounded-full w-5 h-5 border-2 border-white`}
        >
          <p className="text-white text-xs ">{items.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
