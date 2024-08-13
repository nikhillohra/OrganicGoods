import React from "react";

const GetInTouch = () => {
  return (
    <section id="getInTouch">
      <div className="flex items-center justify-center p-4 mb-10">
        <div className="flex flex-col getb  items-center p-6 rounded-lg shadow-md w-full max-w-[70rem]">
          <h1 className="text-3xl font-semibold text-[rgba(209,143,0,0.96)] mb-4">
            Contact Us!
          </h1>
          <p className="text-lg text-center font-semibold text-[#1b1414] mb-6">
            We love hearing from our customers and community members.
          </p>
          <div className="bg-[#c4d1c434] py-6 p-1.5 m-2 rounded-lg flex items-center justify-center">
            <div className="space-y-4 text-lg text-[#1b1414]">
              <div className="flex items-center ">
                <span className="font-semibold mr-2">Address:</span>
                <span>
                  Desi Murga and Fish Farm, near Siluwa, Sagda Jhapani, Madhya
                  Pradesh 482056
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">Phone:</span>
                <span>+919098489056 &amp; +917898491294</span>
              </div>
              <div className="flex items-center ">
                <span className="font-semibold mr-2">Email:</span>
                <span>organicgoodsmp@gmail.com</span>
              </div>
            </div>
          </div>
          <h2 className="text-lg text-[#221e1e] font-normal text-center mt-6 mb-4">
            *We'll get back to you as soon as possible. Thank you for reaching
            out!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
