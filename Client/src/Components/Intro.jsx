import React, { forwardRef } from 'react';

const Intro = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="intro" {...props} className="flex flex-col items-center m-1 mt-[4rem]">
      <div className="glass flex flex-col items-center mt-20 md:mt-24">
        <img
          src="nobbg.png"
          alt="logo"
          className="h-36 md:h-40 object-cover"
        />
        <div className="text-center mt-6 mb-10">
          <h1 className="outfit text-[rgba(209,143,0,0.96)] text-3xl md:text-4xl mb-6 font-semibold">
            WELCOME TO ORGANIC GOODS!
          </h1>
          <p className="outfit text-slate-800 text-lg">
            At Organic Goods, we’re dedicated to bringing you the finest
            in natural, sustainable, and wholesome products. Our
            farm-fresh offerings include high-quality desi eggs,
            free-range poultry, and nutritious fish, all raised with care
            and respect for the environment.
          </p>
          <div className="flex justify-center my-4">
            <img
              src="fresh.png"
              alt="Fresh produce"
              className="h-48 mix-blend-darken"
            />
          </div>
          <p className="outfit text-slate-900 text-lg">
            We sell premium organic goods, including fresh desi eggs,
            free-range poultry, and high-quality fish, all sourced from
            our farm to ensure the best for you and your family.
          </p>
        </div>
      </div>
    </section>
  );
});

export default Intro;
