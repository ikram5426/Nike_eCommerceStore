import React,{useEffect, useState} from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from '../assets/logo.png'

const Navbar = () => {
  const [navState , SetNavState]=useState(false)
  const navController=()=>{
    if(window.scrollY > 30){
      SetNavState(true)
    }else{
      SetNavState(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",navController)
    return ()=>{
      window.removeEventListener("scroll",navController)
    }
  },[])
  return (
    <header
      className={
        !navState
          ? "absolute top-7 left-0 right-0 opacity-100 z-50"
          : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
      }
    >
      <nav className="flex items-center justify-between nike-container">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo/img"
            className={`w-16 h-auto ${navState && "filter brightness-0"}`}
          />
        </div>
        <ul className="flex items-center justify-center gap-2">
          <li className="grid items-center">
            <SearchOutlinedIcon
              className={`icon-style ${
                navState && "text-slate-900 transition-all duration-300"
              }`}
            />
          </li>
          <li className="grid items-center">
            <FavoriteIcon
              className={`icon-style ${
                navState && "text-slate-900 transition-all duration-300"
              }`}
            />
          </li>
          <li className="grid items-center">
            <button
              type="button"
              className="border-none outline-none active:scale-110 transition-all duration-300 relative"
            >
              <ShoppingBagOutlinedIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
              <div
                className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                  navState
                    ? "bg-slate-900 text-slate-100 shadow-slate-900"
                    : "bg-slate-100 text-slate-900 shadow-slate-100"
                }`}
              >
                0
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
