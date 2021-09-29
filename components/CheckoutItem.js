import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TrashIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";

function CheckoutItem({ item }) {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    const productId = item.id;
    //Remove the item from redux
    dispatch(removeFromBasket(productId));
  };

  return (
    <div className="mx-3 mt-3 flex flex-row items-center justify-between border-b-1 border-borderNavColor">
      <div className="flex flex-row items-center ml-3">
        <TrashIcon
          onClick={removeItemFromBasket}
          className="h-5 transform cursor-pointer hover:scale-110 duration-200 w-5 mr-4"
        />
        <LazyLoadImage className="h-10 w-10 mb-4" src={item.url} />
      </div>
      <p className="mr-4">$5</p>
    </div>
  );
}

export default CheckoutItem;
