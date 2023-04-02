import React from "react";
import VideoClips from "./VideoClips";

const Hero = ({heroapi:{title,subtitle,btntext,img,videos,sociallinks}}) => {
  return (
    <div className="relative w-auto h-auto flex flex-col">
      <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auth top-0 left-0 absolute z-0 right-0 opacity-100"></div>
      <div className="opacity-100 z-100 relative grid item-center justify-items-center nike-container mt-28 md:mt-24">
        <div>
          <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xt font-extrabold filter drop-shadow-sm text-slate-200 pb-4">
            {title}
          </h1>
          <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xt font-extrabold filter drop-shadow-sm text-slate-200 pb-4 leading-20">
            {subtitle}
          </h1>
          <button
            type="button"
            className="button-theme bg-slate-200 shadow-slate-200 text-5xl lg:text-3xl md:text-2xl ml-[15%] rounded-xl my-5"
          >
            {btntext}
          </button>
          <div className="grid gap-5 md:gap-3 absolute top-[35vh] md:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
            {videos.map((vid, i) => {
              return (
                <VideoClips
                  key={i}
                  imgsrc={vid.imgsrc}
                  clip={vid.clip}
                ></VideoClips>
              );
            })}
          </div>
          <div></div>
        </div>
        <div>
          <img
            src={img}
            alt="main pic"
            className="w-auto h-[45vh] lg:[35vh] md:h-[31vh] sm:h-[25vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
