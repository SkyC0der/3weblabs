import React from "react";
type TitleCardProps = {
  title?: string;
  content?: string;
  className?: string;
  icon?: string;
};
const TitleCard = (props: TitleCardProps) => {
  const { title, content, icon } = props;
  return (
    <div className="flex w-full min-h-full justify-start items-center bg-white bg-opacity-30 p-4 rounded-2xl m-2 ">
      <div className="mr-2 w-1/6">
        <i className={icon}></i>
      </div>
      <div className="mx-2 w-5/6">
        <h3 className="text-xl font-semibold my-3">{title}</h3>
        <p className="font-normal">{content}</p>
      </div>
    </div>
  );
};

export default TitleCard;
