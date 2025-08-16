import React, { useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";

const HeroSection = () => {
  const [records, setRecords] = useState(0);
  const [clients, setClients] = useState(0);
  const [conversion, setConversion] = useState(0);

  const targetRecords = 500;
  const targetClients = 11000;
  const targetConversion = 68;

  useEffect(() => {
    let rec = 0,
      cli = 0,
      conv = 0;
    const timer = setInterval(() => {
      if (rec < targetRecords) rec += 5;
      if (cli < targetClients) cli += 200;
      if (conv < targetConversion) conv += 1;

      setRecords(Math.min(rec, targetRecords));
      setClients(Math.min(cli, targetClients));
      setConversion(Math.min(conv, targetConversion));

      if (
        rec >= targetRecords &&
        cli >= targetClients &&
        conv >= targetConversion
      ) {
        clearInterval(timer);
      }
    }, 20);
    return () => clearInterval(timer);
  }, []);

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
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-yellow-400">POWERFUL</span> MARKETING <br />
            SOLUTIONS EVERY <span className="text-yellow-300">B2B</span>{" "}
            BUSINESS NEEDS
          </h1>
          <p className="text-base sm:text-lg opacity-90 max-w-md mx-auto md:mx-0">
            The Secret Source for Customer Acquisition & Retention
          </p>
          <div className="flex items-center justify-center md:justify-start gap-5 flex-wrap">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              GET A QUOTE TODAY!
            </button>
            <a
              href="tel:1-888-494-0588"
              className="text-lg hover:text-yellow-300 transition-colors flex items-center gap-2 font-medium"
            >
              <FiPhone className="text-2xl" />
              1-888-494-0588
            </a>
          </div>
        </div>

        {/* Right Side Image */}
      
        <div className="flex justify-center md:justify-end relative">
          <img
            src="https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755338581/hero_image_m7a3th.png"
            alt="Marketing"
            className="w-full max-w-[550px] md:max-w-[600px] object-contain"
          />
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md text-black shadow-xl rounded-2xl flex flex-wrap justify-between px-6 sm:px-10 py-6 w-[95%] sm:w-[90%] max-w-6xl z-[999] border border-gray-200">
        <div className="text-center flex-1 min-w-[120px] mb-4 sm:mb-0">
          <p className="text-2xl sm:text-3xl font-bold text-blue-900">
            {records}M+
          </p>
          <p className="text-sm opacity-80">B2B Records</p>
        </div>

        <div className="hidden sm:block w-px bg-gray-300 mx-4"></div>

        <div className="text-center flex-1 min-w-[120px] mb-4 sm:mb-0">
          <p className="text-2xl sm:text-3xl font-bold text-blue-900">
            {clients.toLocaleString()}+
          </p>
          <p className="text-sm opacity-80">Clients Served</p>
        </div>

        <div className="hidden sm:block w-px bg-gray-300 mx-4"></div>

        <div className="text-center flex-1 min-w-[120px] mb-4 sm:mb-0">
          <p className="text-2xl sm:text-3xl font-bold text-blue-900">
            {conversion}%
          </p>
          <p className="text-sm opacity-80">Conversion Rate Improved</p>
        </div>

        <div className="hidden sm:block w-px bg-gray-300 mx-4"></div>

        <div className="text-center flex-1 min-w-[120px]">
          <p className="text-2xl sm:text-3xl font-bold text-blue-900">4X</p>
          <p className="text-sm opacity-80">Revenue Increased</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
