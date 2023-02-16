import Link from "next/link";
import React from "react";

type BlogCardType = {
  title?: string;
  content?: string;
  className?: string;
  url?: string
};
const BlogMediumCard = (props: BlogCardType) => {
  const { title, content, url } = props;
//   console.log("/"+ pageurl)
  return (
    <div className="mx-auto max-w-md overflow-hidden  rounded-2xl shadow-lg bg-white min-h-full">
      <a href={url}>
        <div className="cursor-pointer">
          <img
            className="aspect-video w-full object-cover"
            src="/assets/images/bg/card.png"
            alt="blog card background"
          />
        </div>
      </a>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-5 mt-3 text-gray-900">
          {title}
        </h3>
        <p mt-3 text-gray-500>
          {content} <a href={url}><span className="text-green-700 cursor-pointer underline text-sm hover:text-green-500 ease-in transition-all">Read More</span></a>
        </p>
      </div>
    </div>
  );
};

export default BlogMediumCard;
