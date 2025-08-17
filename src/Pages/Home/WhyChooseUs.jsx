import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Grow your Sales Pipeline",
    desc: "With the help of our powerful B2B strategies, we’ll help you to drive quality leads and grow your sales pipeline.",
    img: "https://img.freepik.com/free-photo/business-people-analyzing-statistics_23-2148823751.jpg",
  },
  {
    title: "Focus on the Best Opportunities",
    desc: "Using our valuable insights, we’ll help you cut through the noise and focus only on the best opportunities to boost your sales.",
    img: "https://img.freepik.com/free-photo/young-man-working-laptop_23-2148746378.jpg",
  },
  {
    title: "Boost Your ROI",
    desc: "Our verified data and expert support ensures that every campaign delivers maximum results for your business.",
    img: "https://img.freepik.com/free-photo/colleagues-discussing-graphs_23-2147743573.jpg",
  },
];

export default function WhyChooseUs() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-center text-center">
          {/* Numbers */}
          <p className="text-yellow-500 font-semibold text-xl mb-4">
            {String(current + 1).padStart(2, "0")}
            <span className="text-gray-400">
              /{slides.length.toString().padStart(2, "0")}
            </span>
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-snug mb-6">
            Maximize Your Sales Team Potential With Our{" "}
            <span className="text-yellow-500">Qualified Email Data Lists</span>
          </h2>

          {/* Para */}
          <p className="text-gray-600 leading-relaxed mb-6">
            We are a team of highly skilled B2B marketing experts with a unique
            system for achieving triple-digit growth for B2B companies.
          </p>

          {/* Arrows */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Right Slider */}
        <div className="relative w-full h-[350px] flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, y: -50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, y: 50, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute w-[80%] max-w-md"
            >
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center 
                shadow-[0px_6px_25px_rgba(37,99,235,0.35)]"> 
                
                {/* Top Line */}
                <div className="w-12 h-1 bg-blue-500 rounded-full mb-4"></div>

                {/* Image */}
                <div className="w-28 h-28 overflow-hidden rounded-full border-4 border-blue-500 mb-4">
                  <img
                    src={slides[current].img}
                    alt={slides[current].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {slides[current].title}
                </h3>

                {/* Desc */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {slides[current].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
