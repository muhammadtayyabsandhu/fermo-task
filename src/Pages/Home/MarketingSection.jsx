import React, { useState } from "react";
import { FaDatabase, FaBroom, FaHandshake, FaEnvelope, FaChartLine } from "react-icons/fa";

const services = [
  {
    id: "customized-data",
    title: "Customized Data",
    icon: <FaDatabase size={18} />,
    content: {
      col1: { categories: ["Technology", "Healthcare", "Finance", "Retail"] },
      col2: { categories: ["Revenue", "Location", "Job Titles", "Employee Count"] },
    },
  },
  {
    id: "data-cleansing",
    title: "Data Cleansing",
    icon: <FaBroom size={18} />,
    content: {
      col1: { categories: ["Remove Duplicates", "Fix Typos", "Standardize Formats", "Update Contacts"] },
      col2: { categories: ["Email Verification", "Phone Check", "Address Validation", "Spam Removal"] },
    },
  },
  {
    id: "data-partnership",
    title: "Data Partnership",
    icon: <FaHandshake size={18} />,
    content: {
      col1: { categories: ["Lead Sharing", "Joint Ventures", "Affiliate Programs", "Exclusive Deals"] },
      col2: { categories: ["Shared Insights", "API Integration", "Cross Marketing", "Custom Data Projects"] },
    },
  },
  {
    id: "email-campaigns",
    title: "Email Campaigns",
    icon: <FaEnvelope size={18} />,
    content: {
      col1: { categories: ["Templates", "Segmentation", "Automation", "Tracking"] },
      col2: { categories: ["Personalization", "A/B Testing", "Drip Campaigns", "Performance Reports"] },
    },
  },
  {
    id: "market-analysis",
    title: "Market Analysis",
    icon: <FaChartLine size={18} />,
    content: {
      col1: { categories: ["Trends", "Competitors", "Customer Insights", "Growth Reports"] },
      col2: { categories: ["Forecasting", "KPIs", "Analytics Dashboard", "Benchmarks"] },
    },
  },
];

export default function MarketingSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        <span className="text-blue-900">Reach </span>
        <span className="text-yellow-400">Decision Makers </span>
        Instantly With Our Amazing AI Enabled
        <span className="text-yellow-400"> Marketing Data</span>
      </h2>
      <p className="text-center text-gray-600 mb-12">
        When you want to reach the targeted prospects our marketing data
        insights have your back.
      </p>

      {/* Main layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left sidebar buttons */}
        <div className="w-full md:w-1/3 flex flex-col gap-3">
          {services.map((service) => (
            <button
              key={service.id}
              className={`flex items-center gap-2 px-3 py-3 rounded-lg font-medium text-sm transition-all duration-300 shadow-sm
                ${
                  activeService.id === service.id
                    ? "bg-yellow-400 text-white scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              onClick={() => setActiveService(service)}
            >
              {service.icon}
              {service.title}
            </button>
          ))}
        </div>

        {/* Right dynamic panel */}
        <div className="w-full md:w-2/3 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ...activeService.content.col1.categories,
              ...activeService.content.col2.categories,
            ].map((cat, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 
                           text-gray-800 hover:bg-blue-600 hover:text-white hover:shadow-md hover:scale-[1.02] 
                           transition-all duration-300"
              >
                <span>{cat}</span>
                <span className="text-gray-400 group-hover:text-white">›</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
