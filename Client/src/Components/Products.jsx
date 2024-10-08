import React, { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation"; // Import Swiper navigation styles
import { products } from "../consts/index";

const Products = forwardRef((props, ref) => {
  return (
    <section ref={ref} {...props} id="products">
      <div className="w-full flex justify-center items-center p-1">
        <div className="glassS lake flex flex-col items-center justify-center mt-10">
          <h2 className="text-2xl md:text-3xl text-slate-800 font-medium text-center mb-6">
            Discover Our Premium Poultry and Fish Products
          </h2>

          {/* Conditional rendering for empty products array */}
          {products.length > 0 ? (
            <Swiper
              spaceBetween={30}
              loop={true}
              breakpoints={{
                520: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
              pagination={{ clickable: true }}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
              className="w-full md:h-[35rem] h-[25rem] relative"
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center md:p-2">
                    <div className="relative flex-wrap">
                      <img
                        src={product.image}
                        className="w-full md:h-[35rem] h-[25rem] rounded-xl object-cover"
                        alt={product.name}
                      />
                      <div className="absolute bottom-0 w-full bg-black bg-opacity-75 opacity-70 rounded-b-xl  p-2">
                        <h2 className="md:text-base text-sm text-white">
                          {product.name}
                        </h2>
                        <h3 className="md:text-sm text-xs text-white">
                          Price: {product.price}
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-lg text-gray-500">
              No products available at the moment.
            </p>
          )}

          <div className="flex flex-col items-center text-center p-2 m-2 rounded-xl bg-[#f6fbef85] mt-10">
            <h1 className="text-2xl font-semibold text-[#831919]">We Offer!</h1>
            <h2 className="md:text-lg text-base m-2 font-[400] text-[#1e1c1c]">
              Wholesale rates on all our premium poultry and fish products,
              delivering quality goods to markets near and far. Whether you're a
              local business or just near our farm, we're here to provide you
              with the best. Contact us today to place your order or to learn
              more about how you can benefit from our wholesale offerings!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Products;
