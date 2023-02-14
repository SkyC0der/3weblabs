import React from "react";
type TestimonialCardProps = {
  content?: string;
  name?: string;
  role?: string;
  imgurl?: string;
  className?: string;
};

const TestimonialCard = (props: TestimonialCardProps) => {
  const {content, name, role, imgurl} = props
  return (
    <div className="p-6 my-8   mx-4 rounded-2xl drop-shadow-md bg-white shadow">
      <div className="py-5">
        <p>
         {content}
        </p>
      </div>
      <div className="flex mt-2">
        <div className="mr-4 rounded"><img className="rounded-full h-12 w-12" src={imgurl} alt="" /></div>
        <div className="flex flex-col">
            <span>{name}</span>
            <span className="text-gray-400">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
