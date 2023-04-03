import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Items = ({ id, color, shadow, title, text, img, btn, rating, price }) => {
  return (
    <div
      className={` relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-center rounded-xl py-5 px-5 transition-all duration-700 w-full hover:scale-105`}
    >
      <div className="grid items-center justify-center">
        <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow ">
          {title}
        </h1>
        <p className=" text-slate-200 filter drop-shadow text-base md:text-sm font-normal ">
          {text}
        </p>
        <div className="flex items-center  flex-col my-3">
          <div className="flex justify-between w-28">
            {" "}
            <div className=" flex items-center bg-white/80 px-1 rounded blur-effect-theme ">
              <h1 className="text-black text-sm font-medium ">${price}</h1>
            </div>
            <div className="flex items-center">
              <StarRateIcon className="icon-style text-slate-100 w-5 h-5 md:h-4 md:w-4" />{" "}
              <h1 className="text-xl lg:text-lg md:text-sm font-bold text-slate-100">
                {rating}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3 my-2">
            <button
              type="button"
              className="bg-white opacity-90 blur-effect-theme rounded button-theme p-0.5 shadow-sky-200"
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white opacity-90 blur-effect-theme rounded button-theme p-0.5 shadow-sky-200 text-sm px-2 py-1"
            >
              {btn}
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <img src={img} alt="item-pic" className="h-36 w-64 transitions-theme hover:-rotate-12" />
      </div>
    </div>
  );
};

export default Items;
