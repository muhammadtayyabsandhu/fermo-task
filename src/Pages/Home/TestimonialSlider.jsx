import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "I would say it was indeed a good experience working with Blue Mail Media. They dealt with our requirement of a competitive database in time and we were able to get better results from our marketing campaigns.",
    name: "Peter",
    role: "MARKETING SPECIALIST",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/ImmixGroup_logo.png/320px-ImmixGroup_logo.png",
  },
  {
    text: "Blue Mail Media helped us enhance our outreach campaigns by providing accurate and up-to-date data. Their service was fast and reliable.",
    name: "Sarah",
    role: "HEAD OF SALES",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2560px-Logo_NIKE.svg.png",
  },
  {
    text: "The data quality from Blue Mail Media has consistently exceeded our expectations. We highly recommend their services.",
    name: "John",
    role: "BUSINESS DEVELOPMENT MANAGER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1920px-Microsoft_logo.svg.png",
  },
  {
    text: "Quick response, high-quality data, and a team that truly understands our needs. Great partnership!",
    name: "Emily",
    role: "MARKETING MANAGER",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png",
  },
  {
    text: "They provided exactly what we needed, when we needed it. Couldn't ask for more!",
    name: "David",
    role: "OPERATIONS LEAD",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
  },
  {
    text: "The experience has been smooth and efficient. The database accuracy is top-notch.",
    name: "Linda",
    role: "DATA ANALYST",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png",
  },
  {
    text: "Working with them was one of the best decisions for our marketing strategy.",
    name: "Chris",
    role: "GROWTH LEAD",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1920px-Facebook_Logo_%282019%29.png",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto flex items-start justify-between">
        {/* Heading */}
        <div>
          <h2 className="text-3xl font-bold">
            <span className="text-blue-900">What Our </span>
            <span className="text-yellow-400">Clients Say</span>
          </h2>
         
        </div>

        {/* Slider */}
        <div className="w-[55%] relative">
          <div className="bg-white rounded-md shadow-lg p-8 flex items-center justify-between w-full min-h-[200px]">
            {/* Left content */}
            <div className="max-w-[60%]">
              <p className="text-blue-900 leading-relaxed mb-6 text-sm">
                {testimonials[currentIndex].text}
              </p>
              <div>
                <div className="w-10 h-[2px] bg-yellow-400 mb-1"></div>
                <h4 className="text-blue-900 font-bold">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-800 text-xs">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Right logo */}
            <div className="max-w-[30%] flex justify-center">
              <img
                src={testimonials[currentIndex].logo}
                alt="logo"
                className="max-h-16 object-contain"
              />
            </div>
          </div>

          {/* Dots - bottom right */}
          <div className="flex gap-1 mt-2 justify-end">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === idx ? "bg-blue-900" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(idx)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
