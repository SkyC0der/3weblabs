import React from "react";

const TestimonialCard = () => {
  return (
    <div className="p-6 my-8   mx-4 rounded-2xl drop-shadow-md bg-white shadow">
      <div className="py-5">
        <p>
          Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a
          pellentesque nec, egestas non nisi. Donec rutrum congue leo eget
          malesuada.
        </p>
      </div>
      <div className="flex mt-2">
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
