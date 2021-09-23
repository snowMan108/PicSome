import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { ShoppingCartIcon as ShoppingCartSolid } from "@heroicons/react/solid";

function PictureItem({ item, index }) {
  return (
    <div className="m-1 flex flex-col group">
      <div className="flex flex-row justify-end space-x-6 mr-7">
        <PlusCircleIcon className=" h-4 w-4 cursor-pointer absolute opacity-0 group-hover:opacity-100 mt-2  z-20" />
        <HeartIcon className=" h-4 w-4 cursor-pointer text-red-500 absolute mt-2 opacity-0 group-hover:opacity-100  z-20" />
      </div>
      <LazyLoadImage
        src={item.url}
        /* effect="blur" */ className={`h-32 w-32 
         rounded-md`}
      />
      {/*  <p>index: {index}</p> */}
    </div>
  );
}

export default PictureItem;
