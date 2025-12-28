import React from "react";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <>
      <section className="w-full h-fit pt-[2%] pb-[2%] flex justify-center items-center">
        <div className="flex justify-center flex-col sm:flex-row items-center w-[90%] h-full">
          <div className="w-full sm:w-[50%] h-[30em] overflow-hidden">
            <img
              src="/images/img2.webp"
              alt="Fast Work"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-full sm:w-[50%] flex flex-col gap-y-4 pt-5 sm:p-9 bg-white h-full sm:mt-[5em] sm:ml-[-4em]">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999]">
              who we are
            </h3>
            <h2 className="font-bold xl:text-4xl text-black/90">
              We get the lights on fast and for a good price.
            </h2>
            <p className="text-black/60 text-[13px] sm:text-[15px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium cumque recusandae voluptatem eum odio, consequatur
              iusto velit quod, suscipit error, esse vitae corrupti ipsum
              deleniti tenetur. Velit nam aliquam aperiam.
            </p>
            <p className="text-black/60 text-[13px] sm:text-[15px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium cumque recusandae voluptatem eum odio, consequatur
              iusto velit quod, suscipit error, esse vitae corrupti ipsum
              deleniti tenetur. Velit nam aliquam aperiam.
            </p>
            <Link
              to=""
              className="text-white text-[13px] sm:text-[15px] bg-red-500 w-fit pt-2 pb-2 pl-8 pr-8 hover:bg-red-600 transition duration-300"
            >
              Discover More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
