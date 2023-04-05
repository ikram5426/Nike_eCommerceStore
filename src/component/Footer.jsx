import React from 'react'

const Footer = ({footerAPI:{titles,links}}) => {
  return (
    <footer className="bg-theme pt-7 pb-5">
      <div className="nike-container text-slate-200">
        <div className=" grid items-center justify-items-center grid-cols-3  max-w-full w-full m-auto md:max-w-none md:gap-5">
          {titles.map((val, i) => {
            return (
              <div className="gird items-center mb-5" key={i}>
                <h1 className="text-3xl lg:text-2xl md:text-1xl uppercase font-bold">
                  {val.title}
                </h1>
              </div>
            );
          })}
          {links.map((listSubArray, i) => {
            return (
              <ul key={i} className="grid items-center gap-1">
                {listSubArray.map((link, i) => {
                  return (
                    <li key={i} className="text-2xl sm:text-1xl">
                      {link.link}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="mt-5 text-center">
          <p className="text-2xl md:text-center">
            Copyright<sup className="text-2xl font-bold">&copy;</sup> All
            Reserved Rights{" "}
            <span className="font-semibold">IkramKhan Dev 2023</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer