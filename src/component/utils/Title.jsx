import React from "react";

const Title = ({ifExist, title }) => {
  return (
    <div className={`grid items-center ${ifExist ? 'mt-[20vh] lg:mt-[15vh] md:mt-[12vh]' :''}  `}>
      <h1 className="text-8xl mb-10 lg:text-4xl md:text-4xl sm:text-3xl font-bold text-slate-900 filter drop-shadow-lg">
        {title}
      </h1>
    </div>
  );
};

export default Title;
