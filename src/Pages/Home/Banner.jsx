import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative bg-[#0A2E65] flex items-center justify-between px-10 py-16 overflow-hidden">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-snug max-w-xl">
          Unlock Your <span className="text-[#F7A600]">Marketing Potential</span>
          <br /> With Our Data Insights
        </h1>
        <div className="mt-4 w-24 h-[3px] bg-[#F7A600]"></div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute right-0 top-0 h-full w-1/2 bg-[#F5FAFF] clip-diagonal flex items-center justify-center"
      >
        <button className="bg-gradient-to-r from-[#FBB040] to-[#F7931E] text-[#0A2E65] font-semibold px-6 py-3 rounded-md shadow-md hover:scale-105 transition-transform">
          CONTACT US NOW!
        </button>
      </motion.div>

      {/* Clip-path shape */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </section>
  );
};

export default Banner;
