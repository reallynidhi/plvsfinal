import React from 'react';

export const Footer = () => {
  return (
    <footer className="mt-20 py-8 px-8 border-t">
      <div className="flex justify-between items-center text-xs">
        <div className="text-xl font-bold">PL/VS</div>
        <div className="text-gray-500">© PROTOCOL LABS VENTURE STUDIO 2024</div>
        <div>
          <a
            href="https://www.protocol.ai/legal/#terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
          >
            IMPORTANT DISCLOSURES
          </a>
        </div>
      </div>
    </footer>
  );
};
