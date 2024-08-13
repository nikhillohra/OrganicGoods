import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./VerticalTimeline.css"; // Import the CSS file for styling
import { ourValues } from "../consts";

const OurValues = () => {
  // Memoize the timeline items to prevent unnecessary re-renders
  const memoizedTimelineItems = useMemo(() => ourValues, []);

  return (
    <section id="ourValues">
      <div className="flex items-center justify-center mt-10 p-1 md:p-2 w-full">
        <div className="flex flex-col items-center justify-center rounded-xl our md:w-[90%] w-full px-3.5 py-10">
          <h2 className="text-4xl text-left text-slate-900 font-semibold mb-6">
            Our Values
          </h2>
          <div className="timeline p-2 pt-6">
            {memoizedTimelineItems.map((item, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-content">
                    <h3 className="timeline-title text-xl font-semibold text-slate-800">
                      {item.title}
                    </h3>
                    <p className="timeline-description text-lg text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
