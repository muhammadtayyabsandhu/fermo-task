import React, { useState, useEffect } from "react";

const FloatingStats = () => {
  const [records, setRecords] = useState(0);
  const [clients, setClients] = useState(0);
  const [conversion, setConversion] = useState(0);

  // Final target values
  const targetRecords = 85;   // M+
  const targetClients = 5000; // clients
  const targetConversion = 95; // %

  useEffect(() => {
    let rec = 0,
      cli = 0,
      conv = 0;
    const timer = setInterval(() => {
      if (rec < targetRecords) rec += 1;
      if (cli < targetClients) cli += 50;
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
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute bottom-[-70px] left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md shadow-xl rounded-2xl flex flex-wrap justify-between px-6 sm:px-10 py-8 w-[95%] sm:w-[90%] max-w-6xl z-[999] border border-gray-200">
      {/* Record */}
      <div className="text-center flex-1 min-w-[120px] mb-4 sm:mb-0">
        <p className="text-3xl sm:text-4xl font-extrabold tracking-wide text-black">
          {records}M+
        </p>
        <p className="text-sm font-medium text-blue-600">B2B Records</p>
      </div>

      <div className="hidden sm:block w-px bg-green-500 mx-4"></div>

      {/* Clients */}
      <div className="text-center flex-1 min-w-[120px] mb-4 sm:mb-0">
        <p className="text-3xl sm:text-4xl font-extrabold tracking-wide text-black">
          {clients.toLocaleString()}+
        </p>
        <p className="text-sm font-medium text-blue-600">Clients Served</p>
      </div>

      <div className="hidden sm:block w-px bg-green-500 mx-4"></div>

      {/* Conversion */}
      <div className="text-center flex-1 min-w-[120px] mb-4 sm:mb-0">
        <p className="text-3xl sm:text-4xl font-extrabold tracking-wide text-black">
          {conversion}%
        </p>
        <p className="text-sm font-medium text-blue-600">Conversion Rate Improved</p>
      </div>

      <div className="hidden sm:block w-px bg-green-500 mx-4"></div>

      {/* Revenue */}
      <div className="text-center flex-1 min-w-[120px]">
        <p className="text-3xl sm:text-4xl font-extrabold tracking-wide text-black">4X</p>
        <p className="text-sm font-medium text-blue-600">Revenue Increased</p>
      </div>
    </div>
  );
};

export default FloatingStats;
