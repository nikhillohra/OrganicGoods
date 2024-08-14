import React, { useRef, useEffect } from "react";
import Navbar from "../Components/Navbar"; // Adjust the path if necessary
import { Contact, Intro, Products } from "../Components/yindex";
import WhyChooseUs from "../Components/WhyChooseUs";
import { VerticalTimeline } from "../Components/yindex";
import Footer from "../Components/Footer/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  const introRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const verticalTimelineRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Scroll to the intro section if it exists
    if (window.location.hash === "#intro" && introRef.current) {
      introRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | Organic Goods</title>
        <meta
          name="description"
          content="Explore our home page to learn more about our high-quality organic products including Desi Murga, Desi Eggs, and fresh fish."
        />
      </Helmet>

      <Navbar introRef={introRef} />
      <div className="flex-col">
        <Intro ref={introRef} />
        <WhyChooseUs ref={whyChooseUsRef} />
        <VerticalTimeline ref={verticalTimelineRef} />
        <Products ref={productsRef} />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
