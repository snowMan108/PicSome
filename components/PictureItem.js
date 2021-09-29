import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { ShoppingCartIcon as ShoppingCartSolid } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { PlusIcon } from "@heroicons/react/outline";

function PictureItem({ item }) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      url: item.url,
      id: item.id,
      isFavorite: item.isFavorite,
    };

    //sending the product as an action to the REDUX store ... the basket slice
    dispatch(addToBasket(product));
  };

  return (
    <div className="m-1 flex flex-col group relative ">
      <div className="flex flex-row mt-2 z-30 justify-between absolute w-full ">
        <HeartIcon
          className={` h-4 w-4 cursor-pointer text-red-500 ml-3 opacity-0 group-hover:opacity-100   `}
        />
        <PlusCircleIcon
          onClick={addItemToBasket}
          className={`h-4 w-4 cursor-pointer opacity-0 group-hover:opacity-100 mr-3   text-blue-500 `}
        />
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
