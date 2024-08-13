import React from "react";

const Map = () => {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3347.4546178769488!2d79.9465378!3d23.0004118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398053001f5e1b83%3A0xb4622db9a53ca391!2sDesi%20Murga%20and%20Fish%20Farm%20-%20Organic%20Goods!5e1!3m2!1sen!2sin!4v1723486551083!5m2!1sen!2sin`;

  return (
    <section id="find-us" className="map-section bg-[#9e803494] p-6">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-center text-[#312c2c] mb-4">
          Find Us
        </h2>
        <p className="text-lg font-medium text-center text-[#1b1414] mb-6">
          We invite you to visit us at our farm and see firsthand how we produce
          our organic products. Use the map below to find directions and plan
          your visit.
        </p>
        <div className="w-full max-w-6xl ">
          <iframe
            src={mapSrc}
            className="w-full md:h-[34rem] h-[22rem] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
