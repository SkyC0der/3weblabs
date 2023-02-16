import React from "react";
import Button from "../../components/Button/Primary";
import { useRouter } from "next/router";
import ProfileCard from "../../components/ProfileCard";

export default function Card() {
  const { pathname, push } = useRouter();

  return (
    <div>
      <div className="py-12 bg-[url('/assets/images/LTO.png')] bg-no-repeat bg-cover bg-center">
        <h2 className="container text-center mx-auto my-9 px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 text-4xl font-semibold text-white sm:text-2xl my-2">
        OpenBuilD For SDGs
        </h2>
        <div className="text-white text-center">
          <p className="my-2">
            <strong className="mr-2 font-semibold">Opening Date:</strong> TBD
          </p>
          <p className="my-2">
            <strong className="mr-2 font-semibold">Closing Date:</strong> TBD
          </p>
        </div>
      </div>

      <div className="my-12 container mx-auto px-5  xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  sm:px-4 sm:py-2">
        <p className="my-8">
        The Sustainable Development Goals (SDGs) or Global Goals are a collection of 17 interlinked objectives designed to serve as a &quot;shared blueprint for peace and prosperity for people and the planet now and into the future&quot;.

        </p>
        <p className="my-8">
        The lists of targets and indicators for each of the 17 SDGs was published in a UN resolution in July 2017. Through the openbuild for SDGs we want to target a series of events and programs geared at building functional and usable solutions to contribute to different communities at the grassroots.

        </p>
       
        <div>
          <div className="text-dark text-center">
            <p className="my-2">
              <strong className="mr-2 font-semibold">Opening Date:</strong>TBD
            </p>
            <p className="my-2">
              <strong className="mr-2 font-semibold">Closing Date:</strong> TBD
            </p>
          </div>
          {/* <div className="flex justify-center">
            <a
              href="https://otobong-b7502.gr8.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white mx-2 bg-green-700 rounded-l-lg my-5 hover:bg-green-900 rounded-r-lg p-3 font-normal flex items-center justify-center"
    
            >
              Register Here
            </a>
          </div> */}
        </div>
      </div>
      <div className="container mx-auto px-5 py-8 mt-12 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  sm:px-4 sm:py-2">
        <h3 className="text-center text-3xl font-semibold my-6 mb-12">
          Community Leads
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-1  mx-auto place-items-center lg:grid-cols-2 gap-6 xl:grid-cols-3 2xl:grid-cols-3">
          <ProfileCard
            name="Demi Val-Ugboma"
            role="Communication Lead"
            imgUrl="/assets/images/partners/demi.jpeg"
            linkedin="https://www.linkedin.com/in/demivalugboma"
          />
          <ProfileCard
            name="Michael Madukwe"
            role="Design Lead"
            imgUrl="/assets/images/partners/punk.png"
            linkedin="https://www.linkedin.com/in/michael-madukwe-b1b59b166"
          />
          <ProfileCard
            name="Kem Consolation"
            role="Asst. Design Lead"
            imgUrl="/assets/images/partners/kem.jpeg"
            twitter="https://twitter.com/techieconso?s=21&t=VQlWj89eTYhZWrqnnfzm6A
            "
          />
          <ProfileCard
            name="Emmanuel Ezenwigbo"
            role="Web Lead"
            imgUrl="/assets/images/partners/bio.jpg"
            twitter="http://twitter.com/SkyC0der_"
          />
        </div>
      </div>
      <div className="container mx-auto px-5 mt-10 xl:px-20 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4  sm:px-4 sm:py-2">
        <h3 className="text-center text-3xl font-semibold my-6 mb-12">
          Awesome Group Of Partners
        </h3>
        <div className="grid pt-8 gap-8 grid-cols-4 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 mx-auto place-items-center items-center  ">
          <div className="w-4/5">
            <img
              className="w-full h-auto object-cover"
              src="/assets/images/partners/abcd.png"
              alt=""
            />
          </div>
          <div className="w-4/5">
            <img
              className="w-full h-auto object-cover"
              src="/assets/images/partners/dapp360.png"
              alt=""
            />
          </div>
          <div className="w-4/5">
            <img
              className="w-full h-auto object-cover"
              src="/assets/images/partners/poa.png"
              alt=""
            />
          </div>
          <div className="w-4/5">
            <img
              className="w-full h-auto bg-slate-700 object-cover"
              src="/assets/images/partners/empowa.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
