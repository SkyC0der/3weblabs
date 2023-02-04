import React from "react";

const TestimonialCard = () => {
  return (
    <div className="p-6 my-8 px-10  mx-4 rounded-2xl shadow-lg bg-white shadow">
      <div className="py-8">
        <p>
          Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a
          pellentesque nec, egestas non nisi. Donec rutrum congue leo eget
          malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac
          lectus.
        </p>
      </div>
      <div className="flex">
        <div className="mr-2"><img src="/assets/images/utils/avatar.svg" alt="" /></div>
        <div className="flex flex-col">
            <span>Coretta Dossantos</span>
            <span className="text-gray-400">Blockchain Developer</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
