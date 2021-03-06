import React from "react";
import CheckoutItem from "../components/CheckoutItem";
/* import Nav from "../components/Nav"; */
import Head from "next/head";

import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { selectItems as selectFavoritedItems } from "../slices/favoritesSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CheckoutBody() {
  const items = useSelector(selectItems);
  const favoritedItems = useSelector(selectFavoritedItems);
  const itemCost = 5;
  return (
    <div>
      {" "}
      {items.length > 0 ? (
        <p className="font-bold text-2xl mt-4 ml-3">your shopping basket:</p>
      ) : (
        <p className="font-bold text-xl mt-4 ml-3">
          your shopping basket is empty
        </p>
      )}
      {/* Checkout Product including trashbin, to left. Price on far right(hard code price). */}
      {items.map((item, i) => (
        <CheckoutItem item={item} key={i} />
      ))}
      {items.length > 0 && (
        <h2 className="ml-4 mt-4">Total:${itemCost * items.length}</h2>
      )}
      {/* PLACE ORDER BUTTON */}
      {items.length > 0 && (
        <div className="flex justify-center">
          <div className="w-32 group transtion duration-100 hover:scale-105 cursor-pointer h-10 rounded-full bg-navBarColor flex-row flex justify-center items-center">
            <p className="text-white group-hover:underline cursor-pointer font-semibold text-sm ">
              Place order
            </p>
          </div>
        </div>
      )}
      {/* favorited items: */}
      <h1 className="font-semibold text-base mt-4 ml-3">Add some favorites?</h1>
      <div className="flex flex-wrap">
        {favoritedItems.map((item, i) => (
          <LazyLoadImage
            src={item.url}
            key={i}
            className="h-10 w-10"
          ></LazyLoadImage>
        ))}
      </div>
    </div>
  );
}

export default CheckoutBody;
