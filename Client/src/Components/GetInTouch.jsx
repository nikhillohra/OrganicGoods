import React from "react";

const GetInTouch = () => {
  return (
    <section id="getInTouch">
      <div className="flex items-center justify-center p-4 mb-10">
        <div className="flex flex-col items-center p-6 rounded-lg shadow-md w-full max-w-[98%] get getb">
          <h1 className="text-2xl md:text-3xl font-semibold text-[rgba(209,143,0,0.96)] mb-4">
            Contact Us!
          </h1>
          <p className="text-base md:text-lg text-center font-medium text-[#1b1414] mb-6">
            We love hearing from our customers and community members.
          </p>
          <div className="bg-[#c4d1c434] py-4 px-5 m-2 rounded-lg flex items-center flex-wrap">
            <div className="space-y-4 text-sm md:text-lg text-[#1b1414] ">
              <div className="flex flex-col sm:flex-row items-start sm:items-center p-1">
                <span className="font-semibold mr-2">Address:</span>
                <span className="break-words">
                  Desi Murga and Fish Farm, near Siluwa, Sagda Jhapani, Madhya
                  Pradesh 482056
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <span className="font-semibold mr-2">Phone:</span>
                <span className="break-words">
                  +919098489056 &amp; +917898491294 &amp; +917999635913
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <span className="font-semibold mr-2">Email:</span>
                <span className="break-words">organicgoodsmp@gmail.com</span>
              </div>
            </div>
          </div>
          <h2 className="text-sm md:text-base text-[#221e1e] font-normal text-center mt-6 mb-4">
            *We'll get back to you as soon as possible. Thank you for reaching
            out!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
