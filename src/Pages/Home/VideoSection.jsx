import React from "react";
import { FaRocket } from "react-icons/fa";

const MarketingSection = () => {
  return (
    <section className="w-full bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side (Video / Image) */}
        <div className="flex justify-center">
          <div className="w-full md:w-[500px] h-[280px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // <-- apna video link lagao
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Side (Text + Button) */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Connect With Your{" "}
            <span className="text-yellow-500">Targeted Audience</span>
          </h2>
          <div className="w-20 h-[3px] bg-blue-600 my-4 mx-auto md:mx-0"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            We offer global business organizations with the DATA fuel to power
            multi-channel marketing campaigns. Experience our one-stop data
            solutions to connect with your niche prospects seamlessly across
            numerous industries.
          </p>

          <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 flex items-center gap-2 mx-auto md:mx-0">
            <FaRocket className="text-lg" />
            GET SEGMENTED LIST NOW!
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
