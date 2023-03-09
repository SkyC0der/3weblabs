import Link from "next/link";
import React from "react";

type LabCardType = {
  title?: string;
  content?: string;
  className?: string;
  pageurl?: string;
};
const LabCard = (props: LabCardType) => {
  const { title, content, pageurl } = props;
  console.log("/" + pageurl);
  return (
    <div className="mx-auto max-w-md overflow-hidden  rounded-2xl shadow-lg bg-white min-h-[auto]">
      <Link href={"/" + pageurl}>
        <div className="cursor-pointer">
          <img
            className="aspect-video w-full object-cover"
            src="/assets/images/bg/card.png"
            alt="blog card background"
          />
        </div>
      </Link>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-5 mt-3 text-gray-900">
          {title}
        </h3>
        <p mt-3 text-gray-500>
          {content}
        </p>
        <div className="text-center mx-auto mt-4 flex justify-center">
          <Link href="/innovation">
            <span className="bg-blue-500 text-white  font-semibold border-b  bg-primary text-white mx-2 hover:bg-blue-800 ease-in cursor-pointer transition-all rounded-l-lg rounded-r-lg p-3 font-normal flex items-center justify-center">
              Explore
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LabCard;
