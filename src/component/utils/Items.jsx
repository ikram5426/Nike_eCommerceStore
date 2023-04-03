import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";


const Items = ({ id, color, shadow, title, text, img, btn, rating, price }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <div>
          <div className="">
            <h1>{price}</h1>
          </div>
          <div className="">
            <h1>
              <StarRateIcon className="icon-style text-slate-900" />
              {rating}
            </h1>
          </div>
          <div className="">
            <button type="button">
              <ShoppingBagIcon className="icon-style text-slate-900" style={{color:'white'}}/>
            </button>
            <button type='button'>{btn}</button>
          </div>
        </div>
      </div>
      <div>
        <img src={img} alt="item-pic" />
      </div>
    </div>
  );
};

export default Items;
