import React from "react";
import { teamMembers } from "../data/teamMembers";
import Image from "next/image";

const People = () => {
  return (
    <div className=" pt-20">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-4xl font-bold mb-16 mt-12">PEOPLE</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <a
              key={index}
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square mb-4 overflow-hidden">
                <Image
                  src={`/people/${member.image}`}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  height={400}
                  width={400}
                />
              </div>
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default People;
