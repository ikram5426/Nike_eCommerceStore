import React from "react";

const Content = ({ifExist, endPoint: {heading, title,  text, btn, img, url } }) => {
  return (
    <div
      className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container ${ifExist ? "flex-row-reverse":"flex-row"}`}
    >
      <div className="max-w-lg lg:max-w-none w-full md:text-center">
        <h1 className="text-5xl lg:text-4xl md:text-2xl sm:text-2xl text-gradient font-bold ">
          {heading}
        </h1>
        <h1 className="text-5xl lg:text-4xl md:text-2xl sm:text-2xl text-slate-900 filter text-shadow-lg font-semibold my-5">
          {title}
        </h1>
        <p className="text-slate-900 text-2xl md:text-sm">{text}</p>
        <a
          href={url}
          className="flex items-center mt-5 rounded lg:justify-center 
        "
          target={`_blank`}
          role="button"
        >
          <button
            type="button"
            className="button-theme bg-slate-800 shadow-slate-900 text-slate-100 py-3 text-2xl "
          >
            {btn}
          </button>
        </a>
      </div>
      <div className="flex items-center justify-center max-w-xl lg:max-w-none relative w-full">
        <img src={img} alt={`img/${heading}`}  className={` w-auto transitions-theme object-fill  ${ifExist?"h-75 lg:h-56 md:h-45 sm:h-40 rotate-6 hover:-rotate-12":'h-80 lg:h-65 md:h-50 sm:h-45 rotate-[19deg] hover:rotate-12'}`}/>
      </div>
    </div>
  );
};

export default Content;
