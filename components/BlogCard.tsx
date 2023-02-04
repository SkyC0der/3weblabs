import React from "react";

type BlogCardType = {
  title?: string;
  content?: string;
  className?: string;
};
const BlogCard = (props: BlogCardType) => {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-2xl shadow-lg bg-white shadow">
      <div>
        <img
          className="aspect-video w-full object-cover"
          src="/assets/images/bg/card.png"
          alt="blog card background"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-5 mt-3 text-gray-900">LTO Campaign</h3>
        <p mt-3 text-gray-500>
          Dolor ad quaerat quis quam quo. In quod eius sit consequuntur quis.
          Provident […]
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
