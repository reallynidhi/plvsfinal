import React from "react";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-4xl font-bold mb-16 mt-12">
          The latest from PL Venture Studio
        </h1>

        <div>
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              // target="_blank"
              rel="noopener noreferrer"
              className="block border-t pt-8 hover:bg-gray-50 transition-colors"
            >
             
              <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
            
              <div className="mb-4">
              <div className="text-sm text-gray-500 mb-2">
              <span className="font-bold">{post.author}</span> | {post.date}
              </div>
            </div>

              
              
              <p className="text-gray-600">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
