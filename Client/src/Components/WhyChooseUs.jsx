import React, { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation'; // Import Swiper navigation styles

const WhyChooseUs = forwardRef((props, ref) => {
  return (
    <section ref={ref} {...props} id="whyChooseUs" className="flex justify-center items-center mt-10">
      <div className="glassS p-4 flex flex-col items-center w-full max-w-4xl">
        <h2 className="text-3xl text-slate-800 font-semibold text-center mb-6">
          Meet Our Livestock: Poultry and Aquatic Farming
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="w-full h-[35rem] relative"
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src="./hen.png"
                className="w-full h-[35rem] rounded-xl object-cover"
                alt="Hen"
              />
              <div className="absolute bottom-0 w-full bg-black opacity-70 rounded-b-xl py-2 px-4 text-center">
                <h2 className="text-lg text-white">
                  Desi Murga/Desi Murgi (Chicken)
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="./fishes.png"
                className="w-full h-[35rem] rounded-xl object-cover"
                alt="Fishes"
              />
              <div className="absolute bottom-0 w-full bg-black opacity-70 rounded-b-xl py-2 px-4 text-center">
                <h2 className="text-lg text-white">
                  Fishes: Catla, Rohu, Pangas
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="./eggs.png"
                className="w-full h-[35rem] rounded-xl object-cover"
                alt="Eggs"
              />
              <div className="absolute bottom-0 w-full bg-black opacity-70 rounded-b-xl py-2 px-4 text-center">
                <h2 className="text-lg text-white">
                  Desi Eggs/Brown Country Eggs
                </h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
});

export default WhyChooseUs;
