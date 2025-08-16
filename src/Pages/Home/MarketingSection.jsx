import React, { useState } from "react";
import { FaDatabase, FaBroom, FaHandshake, FaEnvelope } from "react-icons/fa";

const services = [
  {
    id: "customized-data",
    title: "Customized Data",
    color: "bg-yellow-400 text-white",
    icon: <FaDatabase size={20} />,
    content: {
      col1: {
        heading: "Industry Segments",
        categories: ["Technology", "Healthcare", "Finance", "Retail"],
      },
      col2: {
        heading: "Company Info",
        categories: ["Revenue", "Location", "Job Titles", "Employee Count"],
      },
    },
  },
  {
    id: "data-cleansing",
    title: "Data Cleansing",
    color: "bg-blue-900 text-white",
    icon: <FaBroom size={20} />,
    content: {
      col1: {
        heading: "Data Quality",
        categories: [
          "Remove Duplicates",
          "Fix Typos",
          "Standardize Formats",
          "Update Contacts",
        ],
      },
      col2: {
        heading: "Validation",
        categories: [
          "Email Verification",
          "Phone Check",
          "Address Validation",
          "Spam Removal",
        ],
      },
    },
  },
  {
    id: "data-partnership",
    title: "Data Partnership",
    color: "bg-blue-900 text-white",
    icon: <FaHandshake size={20} />,
    content: {
      col1: {
        heading: "Partnership Types",
        categories: [
          "Lead Sharing",
          "Joint Ventures",
          "Affiliate Programs",
          "Exclusive Deals",
        ],
      },
      col2: {
        heading: "Benefits",
        categories: [
          "Shared Insights",
          "API Integration",
          "Cross Marketing",
          "Custom Data Projects",
        ],
      },
    },
  },
  {
    id: "email-campaigns",
    title: "Email Campaigns",
    color: "bg-yellow-400 text-white",
    icon: <FaEnvelope size={20} />,
    content: {
      col1: {
        heading: "Campaign Setup",
        categories: ["Templates", "Segmentation", "Automation", "Tracking"],
      },
      col2: {
        heading: "Optimization",
        categories: [
          "Personalization",
          "A/B Testing",
          "Drip Campaigns",
          "Performance Reports",
        ],
      },
    },
  },
];

export default function MarketingSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        <span className="text-blue-900">Reach </span>
        <span className="text-yellow-400">Decision Makers </span>
        Instantly With Our Amazing AI Enabled
        <span className="text-yellow-400"> Marketing Data</span>
      </h2>
      <p className="text-center text-gray-600 mb-12">
        When you want to reach the targeted prospects our marketing data
        insights have your back.
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left side buttons */}
        <div className="flex flex-col gap-4">
          {services.map((service) => (
            <button
              key={service.id}
              className={`flex items-center gap-3 px-4 py-3 w-48 rounded-md font-medium transition-all duration-300 ${
                activeService.id === service.id
                  ? service.color
                  : "bg-gray-100 text-gray-800"
              }`}
              onClick={() => setActiveService(service)}
            >
              {service.icon}
              {service.title}
            </button>
          ))}
        </div>

        {/* Right side dynamic content */}
        <div className="bg-white rounded-lg shadow-inner p-6 border border-gray-200">
          <div className="grid grid-cols-2 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-blue-900 border-b pb-2">
                {activeService.content.col1.heading}
              </h3>
              <ul className="space-y-2 pl-4 list-disc text-gray-700">
                {activeService.content.col1.categories.map((cat, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-blue-900 border-b pb-2">
                {activeService.content.col2.heading}
              </h3>
              <ul className="space-y-2 pl-4 list-disc text-gray-700">
                {activeService.content.col2.categories.map((cat, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
