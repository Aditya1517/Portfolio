import React from "react";
import { blogs } from "../../constants";

const Blogs = () => {
  return (
    <section
      id="blogs"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">BLOGS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Explore my thoughts, tutorials, and technical write-ups across various domains.
        </p>
      </div>

      {/* Blogs Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <a
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            key={blog.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{blog.date}</p>
              <p className="text-gray-500">{blog.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
