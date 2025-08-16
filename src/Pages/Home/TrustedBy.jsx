import React from "react";
// Trusted By Section
const logos = [
  { src: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755336209/WhatsApp_Image_2025-08-16_at_00.43.39_a807bb08_l6h9zm.jpg", alt: "Expo" },
  { src: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755336209/WhatsApp_Image_2025-08-16_at_00.43.39_5357db37_ferqoh.jpg", alt: "Drosa" },
  { src: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755336209/WhatsApp_Image_2025-08-16_at_00.43.39_a807bb08_l6h9zm.jpg", alt: "Seattle Colleges" },
  { src: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755336210/WhatsApp_Image_2025-08-16_at_00.43.38_b318bbab_ea1rpp.jpg", alt: "Oracle" },
  { src: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755336210/WhatsApp_Image_2025-08-16_at_00.43.37_40f90109_cazp5u.jpg", alt: "Experian" },
  { src: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755336209/WhatsApp_Image_2025-08-16_at_00.43.38_943553af_flwgvn.jpg", alt: "Costco Wholesale" },
  { src: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755336210/WhatsApp_Image_2025-08-16_at_00.43.38_c2b7abed_t0dhnm.jpg", alt: "IBM" },
  { src: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755336209/WhatsApp_Image_2025-08-16_at_00.43.38_39fa4911_qkhf0i.jpg", alt: "Prime Therapeutics" },
  { src: "https://res.cloudinary.com/dyfgyhy2v/image/upload/v1755336210/WhatsApp_Image_2025-08-16_at_00.43.39_47648f9d_yxgzvh.jpg", alt: "Coty" },
];

const TrustedBy = () => {
  return (
    <section className="w-full bg-white relative z-0 pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className="text-center text-[28px] sm:text-3xl font-semibold leading-tight"
          style={{ color: "#1B325F" }}
        >
          Trusted By Over{" "}
          <span style={{ color: "#FFA31A" }}>11K Organizations</span>{" "}
          To Grow Revenue
        </h2>

        {/* Logos Grid */}
        <div className="mt-8 flex flex-wrap justify-center gap-5">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="w-[220px] h-[90px] rounded-xl border border-gray-200 shadow-[0_6px_18px_rgba(16,24,40,0.06)] flex items-center justify-center p-5 bg-white"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TrustedBy;