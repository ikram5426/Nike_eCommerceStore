import React from "react";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";

const VideoClips = ({ imgsrc, clip }) => {
  return (
    <div className="relative h-28 lg:h-24 md:h-20 sm:h-14 w-32 lg:w-28 md:w-24 sm:w-16 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300">
      <img
        src={imgsrc}
        alt={imgsrc}
        className="inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl z-10 opacity-100 transition-opacity duration-500"
      />
      <div className=" bg-white blur-effect-theme absolute z-[100] opacity-100 top-0 left-0 right-0 h-8 w-8 md:h-5 md:w-5 flex rounded-full items-center justify-center ml-auto mr-auto mt-[30%]">
        <PlayCircleFilledWhiteOutlinedIcon fontSize='large' className="icon-style text-slate-900 md:h-3 md:w-3"></PlayCircleFilledWhiteOutlinedIcon>
      </div>
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="absolute flex h-full w-full object-cover z-0 opacity-0 group-hover:opacity-100 group-hover:z-20 rounded-xl "
      >
        <source type="video/mp4" src={clip} />
      </video>
    </div>
  );
};

export default VideoClips;
