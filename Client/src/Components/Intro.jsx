import React, { forwardRef } from "react";

const Intro = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="intro"
      {...props}
      className="flex flex-col items-center m-1 mt-[2rem]"
    >
      <div className="glass flex flex-col p-1 items-center mt-20 md:mt-24">
        <img
          src="nobbg.webp"
          alt="logo"
          className="h-28 w-auto md:h-36 object-cover"
        />
        <div className="text-center mt-6 mb-10">
          <h1 className=" text-[rgba(209,143,0,0.92)] text-2xl md:text-3xl mb-6 font-semibold">
            WELCOME TO ORGANIC GOODS!
          </h1>
          <p className=" text-slate-900 text-base md:text-lg">
            Discover Organic Goods, your source for high-quality organic
            products including Desi Murga, Desi Eggs, and fresh fish varieties
            like Catla, Rohu, and Pangas.
          </p>
          <div className="flex justify-center my-3">
            <img
              src="fresh.webp"
              alt="Fresh produce"
              className="h-36 mix-blend-darken"
            />
          </div>
          <p className=" text-slate-800 md:text-base text-base">
            *We sell premium organic goods, including fresh desi eggs, poultry,
            and high-quality fish, all sourced from our farm to ensure the best
            for you and your family.
          </p>
        </div>
      </div>
    </section>
  );
});

export default Intro;
