import React from "react";
import { FiPhone } from "react-icons/fi";
import { useEffect, useState } from "react";
const HeroSection = () => {
  const words = ["POWERFUL", "DYNAMIC", "SMART"]; // words loop karne ke liye
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // current word index
  const [subIndex, setSubIndex] = useState(0); // current character index
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    // typing / deleting speed
    const speed = deleting ? 100 : 150;

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < currentWord.length) {
        setSubIndex(subIndex + 1);
      } else if (deleting && subIndex > 0) {
        setSubIndex(subIndex - 1);
      } else if (!deleting && subIndex === currentWord.length) {
        // pause after full word typed
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words]);

  useEffect(() => {
    setText(words[index].substring(0, subIndex));
  }, [subIndex, index, words]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#083c8c] via-[#0b4fb6] to-[#0c5fcb] text-white font-sans overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="src/assets/hero image.png"
          alt="Marketing Illustration"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b4fb6]/90 via-[#0c5fcb]/80 to-[#083c8c]/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-5 items-center gap-6">
        {/* Left Content (chhota column) */}
        <div className="md:col-span-2 space-y-5 text-center md:text-left px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug">
             <span className="text-yellow-400">{text}</span> MARKETING <br />
            SOLUTIONS EVERY <span className="text-yellow-300">B2B</span>{" "}
            BUSINESS NEEDS
          </h1>
          <p className="text-sm sm:text-base opacity-90 max-w-sm mx-auto md:mx-0">
            The Secret Source for Customer Acquisition & Retention
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2.5 px-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
              GET A QUOTE TODAY!
            </button>
            <a
              href="tel:1-888-494-0588"
              className="text-base sm:text-lg hover:text-yellow-300 transition-colors flex items-center gap-2 font-medium"
            >
              <FiPhone className="text-xl sm:text-2xl" />
              1-888-494-0588
            </a>
          </div>
        </div>

        {/* Right Side Image (bari column) */}
        <div className="md:col-span-3 flex justify-center md:justify-end relative">
          <img
            src="https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755338581/hero_image_m7a3th.png"
            alt="Marketing"
            className="w-full max-w-[950px] md:max-w-[1100px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
