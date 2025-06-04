import React from "react";
import { portfolioCompanies } from "../data/portfolioCompanies";

const Portfolio = () => {
  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-4xl font-bold mb-16 mt-12">PORTFOLIO</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioCompanies.map((company, index) => (
            <a
              key={index}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
            >
               <div className="relative w-36 h-24 mb-4">
                {/* Black/Dark Version */}
                <img
                  src={`/company/${company.logo || "pl.png"}`}
                  alt={company.name}
                  className="absolute inset-0 w-full h-full object-contain brightness-50 saturate-0 transition-opacity duration-300"
                />
                {/* Full-color Hover Version */}
                <img
                  src={`/company/${company.logo || "pl.png"}`}
                  alt={company.name}
                  className="relative w-full h-full object-contain opacity-0 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-sm text-gray-600">{company.description}</p>
            </a>
          ))}

          {/* Add Portfolio Company Button 
          <button className="border-2 border-dashed rounded-lg p-6 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors">
            + Add Portfolio Company
          </button>  */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
