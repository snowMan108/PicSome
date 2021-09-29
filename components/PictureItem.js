import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { ShoppingCartIcon as ShoppingCartSolid } from "@heroicons/react/solid";

import { addToBasket } from "../slices/basketSlice";
import { PlusIcon } from "@heroicons/react/outline";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

import { removeFromBasket } from "../slices/basketSlice";

function PictureItem({ item }) {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    const productId = item.id;
    //Remove the item from redux
    dispatch(removeFromBasket(productId));
  };

  const addItemToBasket = () => {
    const product = {
      url: item.url,
      id: item.id,
      isFavorite: item.isFavorite,
    };
    //sending the product as an action to the REDUX store ... the basket slice
    dispatch(addToBasket(product));
  };

  const itemIsInCartCheck = (id) => {
    const match = items.some((basketItem) => basketItem.id === id);
    return match;
  };

  return (
    <div className="m-1 flex flex-col group relative ">
      <div className="flex flex-row mt-2 z-30 justify-between absolute w-full ">
        <HeartIcon
          className={` h-4 w-4 cursor-pointer text-red-500 ml-3 opacity-0 group-hover:opacity-100   `}
        />
        {itemIsInCartCheck(item.id) ? (
          <ShoppingCartSolid
            onClick={removeItemFromBasket}
            className={`h-4 w-4 cursor-pointer mr-3 text-blue-500 `}
          />
        ) : (
          <PlusCircleIcon
            onClick={addItemToBasket}
            className={`h-4 w-4 cursor-pointer opacity-0 group-hover:opacity-100 mr-3   text-blue-500 `}
          />
        )}
        {/* <PlusCircleIcon
          onClick={addItemToBasket}
          className={`h-4 w-4 cursor-pointer opacity-0 group-hover:opacity-100 mr-3   text-blue-500 `}
        /> */}
      </div>
      <LazyLoadImage
        src={item.url}
        /* effect="blur" */ className={`h-32 w-32 
         rounded-md`}
      />
      {/*  <p>index: {item.id}</p> */}
    </div>
  );
}

export default PictureItem;
