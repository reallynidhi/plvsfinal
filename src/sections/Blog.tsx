import React from "react";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto px-8 flex-1">
        <h1 className="text-4xl font-bold mb-16 mt-12">
          The latest from PL Venture Studio
        </h1>

        {/* Added a responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              // target="_blank"
              rel="noopener noreferrer"
              className="block border-t pt-8 pb-12 hover:bg-gray-50 transition-colors rounded-xl"
            >
              {/* Optional image thumbnail support */}
              

              <h2 className="text-2xl font-bold mb-4">{post.title}</h2>

              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-2">
                  <span className="font-bold">{post.author}</span> | {post.date}
                </div>
              </div>

              {/* Improved paragraph spacing */}
              <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
