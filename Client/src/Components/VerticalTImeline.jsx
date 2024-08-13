import React, { forwardRef, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./VerticalTimeline.css"; // Import the CSS file for styling
import { timelineItems } from "../consts";

const VerticalTimeline = forwardRef((props, ref) => {
  // Memoize the timeline items to prevent unnecessary re-renders
  const memoizedTimelineItems = useMemo(() => timelineItems, []);

  return (
    <>
      <section ref={ref} {...props} id="verticalTimeline">
        <div className="flex items-center justify-center mt-10 p-1 md:p-2 md:mx-2 w-full">
          <div className="flex rounded-xl justify-center tlback items-center flex-col md:w-[95%] w-full p-4">
            <h2 className="text-4xl mt-10 text-left text-slate-900 font-[600] mb-2">
              Our Commitment to Traditional and Organic Farming!
            </h2>
            <div className="timeline p-1 py-6 my-2">
              {memoizedTimelineItems.map((item, index) => {
                const { ref, inView } = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                });

                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    className="timeline-item m-2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="timeline-content m-1 p-6 text-pretty">
                      <h3 className="timeline-title ">{item.title}</h3>
                      <p className="timeline-description">{item.description}</p>
                      <span className="timeline-date">{item.date}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default VerticalTimeline;
