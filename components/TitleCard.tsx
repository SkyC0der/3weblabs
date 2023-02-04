import React from "react";
type TitleCardProps = {
  title?: string;
  content?: string;
  className?: string;
};
const TitleCard = (props: TitleCardProps) => {
  const { title, content } = props;
  return (
    <div className="flex align-center ">
      <div>
        <img
          src="/assets/images/illustrations/titlecard.svg"
          alt="green placeholder illustration"
        />
      </div>
      <div>
        <h3 className="text-2xl mx-2">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default TitleCard;
