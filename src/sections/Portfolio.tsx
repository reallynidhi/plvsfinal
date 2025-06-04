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
              {/* Logo container (left-aligned and bigger) */}
              <div className="w-36 h-24 mb-4">
                <img
                  src={`/company/${company.logo || "pl.png"}`}
                  alt={company.name}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition"
                />
              </div>

              <p className="text-sm text-gray-600">{company.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
