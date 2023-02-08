import React from "react";
import Button from "../../components/Button/Primary";
import { useRouter } from "next/router";

export default function About() {

  const { pathname, push } = useRouter();

  return (
    <div>
      <div className="py-12 bg-[url('/assets/images/LTO.png')] bg-no-repeat bg-cover bg-center">
        <h2 className="container mx-auto my-9 px-5 xl:px-28 lg:px-20 3xl:px-40 xl:py-4 lg:py-4 md:py-4 3xl:py-4 text-4xl font-semibold text-white sm:text-2xl my-2">
          OpenBuilD for LTO
        </h2>
        <div className="text-white text-center">
          <p className="my-2">
            <strong className="mr-2 font-semibold">Opening Date:</strong> February 18, 2023.
          </p>
          <p className="my-2">
            <strong className="mr-2 font-semibold">Closing Date:</strong> May 18, 2023.
          </p>
        </div>
      </div>

      <div className="my-12 container mx-auto px-5 ">
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quo qui nemo dicta quaerat amet enim, fugit ullam animi adipisci,
          totam praesentium impedit natus laborum. In est vel repellat fugit?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id
          veritatis hic incidunt enim consectetur voluptatibus quaerat soluta,
          illum, laudantium nihil porro. Beatae alias laudantium voluptas
          maiores possimus, autem provident.
        </p>
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quo qui nemo dicta quaerat amet enim, fugit ullam animi adipisci,
          totam praesentium impedit natus laborum. In est vel repellat fugit?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id
          veritatis hic incidunt enim consectetur voluptatibus quaerat soluta,
          illum, laudantium nihil porro. Beatae alias laudantium voluptas
          maiores possimus, autem provident.
        </p>
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id
          veritatis hic incidunt enim consectetur voluptatibus quaerat soluta,
          illum, laudantium nihil porro. Beatae alias laudantium voluptas
          maiores possimus, autem provident. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusantium quo qui nemo dicta quaerat
          amet enim, fugit ullam animi adipisci, totam praesentium impedit natus
          laborum. In est vel repellat fugit?
        </p>
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id
          veritatis hic incidunt enim consectetur voluptatibus quaerat soluta,
          illum, laudantium nihil porro. Beatae alias laudantium voluptas
          maiores possimus, autem provident. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusantium quo qui nemo dicta quaerat
          amet enim, fugit ullam animi adipisci, totam praesentium impedit natus
          laborum. In est vel repellat fugit?
        </p>
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id
          veritatis hic incidunt enim consectetur voluptatibus quaerat soluta,
          illum, laudantium nihil porro. Beatae alias laudantium voluptas
          maiores possimus, autem provident. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusantium quo qui nemo dicta quaerat
          amet enim, fugit ullam animi adipisci, totam praesentium impedit natus
          laborum. In est vel repellat fugit?
        </p>

        <div>
          <div className="text-dark text-center">
            <p className="my-2">
              <strong className="mr-2 font-semibold">Opening Date:</strong> February 18, 2023.
            </p>
            <p className="my-2">
              <strong className="mr-2 font-semibold" >Closing Date:</strong> May 18, 2023.
            </p>
          </div>
          <div className="flex justify-center">
            <Button
            className="bg-[#30D72D] text-sm  mt-6"
            onClick={() => push("/openbuild")}
          >
            Register Here
          </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 mt-10">
        <h3 className="text-center text-3xl font-semibold my-6 mb-12">
          Awesome Group Of Partners
        </h3>
        <div className="grid pt-8 gap-8 grid-cols-5 md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 mx-auto place-items-center items-center  ">
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
