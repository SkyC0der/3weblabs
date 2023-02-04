import React from "react";
type TitleCardProps = {
  title?: string;
  content?: string;
  className?: string;
};
const TitleCard = (props: TitleCardProps) => {
  const { title, content } = props;
  return (
    <div className="flex justify-between items-center bg-white bg-opacity-30 p-4 rounded-2xl m-6 ">
      <div>
        <img
          src="/assets/images/illustrations/titlecard.svg"
          alt="green placeholder illustration"
        />
      </div>
      <div className="mx-4">
        <h3 className="text-2xl font-semibold my-4">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default TitleCard;
