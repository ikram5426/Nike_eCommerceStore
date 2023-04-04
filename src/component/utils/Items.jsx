import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Items = ({ifExist, id, color, shadow, title, text, img, btn, rating, price }) => {
  return (
    <div
      className={` relative bg-gradient-to-b ${color} ${shadow} grid items-center rounded-xl py-5 px-5 transition-all duration-700 w-full h-[20vh] hover:scale-105 ${
        ifExist ? "justify-items-start" : "justify-items-center"
      }`}
    >
      <div
        className={`grid ${
          ifExist ? "justify-items-start" : "justify-items-center"
        } `}
      >
        <h1 className="text-slate-200 text-4xl lg:text-3xl md:text-base font-bold filter drop-shadow ">
          {title}
        </h1>
        <p className=" text-slate-200 filter drop-shadow text-2xl md:text-sm font-medium ">
          {text}
        </p>
        <div className="flex items-center  flex-col my-3">
          <div className="flex justify-between w-28">
            {" "}
            <div className=" flex items-center bg-white/80 px-1 rounded blur-effect-theme  ">
              <h1 className="text-black text-lg font-medium ">${price}</h1>
            </div>
            <div className="flex items-center pl-4">
              <StarRateIcon className="icon-style text-slate-100 w-8 h-8 md:h-4 md:w-4" />{" "}
              <h1 className="text-xl lg:text-normal md:text-sm font-bold text-slate-100">
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
      <div className={`flex ${ifExist? 'absolute top-20 right-2':'justify-items-center'}`}>
        <img
          src={img}
          alt="item-pic"
        className={`h-auto w-80 lg:w-40 md:w-30 transitions-theme hover:-rotate-12 ${ifExist  ? " -rotate-45":"h-36 w-64"}`}
        />
      </div>
    </div>
  );
};

export default Items;
