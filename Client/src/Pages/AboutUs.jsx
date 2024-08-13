import React from "react";
import { Map } from "../Components/yindex";
import Footer from "../Components/Footer/Footer";
import GetInTouch from "../Components/GetInTouch";
import OurValues from "../Components/OurValues";

const AboutUs = () => {
  return (
    <section>
      <div className="w-full h-auto flex p-1 items-center justify-center mt-[8rem] flex-col">
        <h1 className="text-4xl text-slate-700 font-medium text-center my-4">
          About Us
        </h1>
        <div className="glassA about p-3 flex pb-10 flex-col items-center justify-center">
          <div className="items-center justify-center">
            <img
              src="./nobbg.png"
              alt="logo"
              className="h-[102px] ml-1 mb-10"
            />
          </div>
          <div className="items-center justify-center bg-[#ae8d60a2] pt-5 pb-5 rounded-lg p-4">
            <div className="items-center justify-center  pt-10 pb-5 rounded-lg p-4">
              <h2 className="text-3xl text-slate-900 text-center  font-semibold">
                Welcome to Organic Goods
              </h2>
              <p className="text-center text-lg font-medium text-slate-800  mt-10">
                We are committed to providing the finest organic products from
                our farm to your table. At Organic Goods, our mission is to
                provide high-quality, healthy, and sustainably sourced products,
                so that you and your family can enjoy the very best that nature
                has to offer.
              </p>

              {/* OUR STORY */}
              <div className=" rounded-lg p-4 pb-6 mt-10">
                {/* <h1 className="text-4xl font-medium text-center underline  text-black p-2">
                  Our Story!
                </h1> */}
                <h2 className="text-start font-medium text-black mt-4 mb-2 text-2xl">
                  Why We Started Organic Goods?
                </h2>
                <p className="text-slate-800 text-start text-lg">
                  A few years ago, as we became more health-conscious and sought
                  truly nutritious organic options, we were increasingly
                  frustrated by the limited availability of such products in the
                  market. Driven by our desire for high-quality, organically
                  farmed food, we began growing our own produce. This journey
                  led us to establish Organic Goods—a place where you can find
                  food that is not only beneficial for your health but also kind
                  to the planet.
                </p>
                <div className="mt-10">
                  <h2 className="text-start font-medium text-black mt-4 mb-2 text-2xl">
                    Our Mission.
                  </h2>
                  <p className="text-slate-800 text-start text-lg">
                    Our mission is simple yet powerful: to provide the best
                    organic products to our customers while maintaining ethical
                    and sustainable practices. We are driven by a desire to make
                    a difference in the world through our commitment to quality,
                    transparency, and environmental stewardship. We believe that
                    everyone deserves access to wholesome, nutritious food, and
                    we are dedicated to making that a reality.
                  </p>
                </div>
                <div className="mt-10">
                  <h2 className="text-start font-medium text-black mt-4 mb-2 text-2xl">
                    Our Vision.
                  </h2>
                  <p className="text-slate-800 text-start text-lg">
                    We envision a future where organic farming is the standard,
                    not the exception. Our mission is to make nutritious,
                    organic food affordable for everyone—rich or poor, urban or
                    rural. By expanding our product range and advocating for
                    sustainable practices, we aim to foster a healthier
                    lifestyle and a greener planet.
                  </p>
                  <p className="text-slate-800 text-start text-lg mt-4">
                    At Organic Goods, we strive to ensure that organic food is
                    within reach for all people, enhancing the health and
                    well-being of our community while making a positive impact
                    on the environment.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center mt-6">
                <img className="w-[12rem]" src="./vision.png" alt="Vision" />
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <OurValues />
      </div>
      <div>
        <GetInTouch />
      </div>
      <div>
        <Map />
      </div>
      <Footer />
    </section>
  );
};

export default AboutUs;
