import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="sec1 w-full h-fit pt-[20%] sm:pt-[10%] pb-[25%] sm:pb-[15%] flex justify-center items-center">
        <div className="flex justify-start items-center w-[90%] h-full">
          <span className="flex flex-col gap-y-4">
            <h2 className="font-bold text-3xl sm:text-5xl max-w-[400px] [text-shadow:1px_1px_2px_#000] text-white">
              Our expert electricians are trustworthy and reliable
            </h2>
            <p className="text-white max-w-[500px] text-[13px] sm:text-[15px] [text-shadow:1px_1px_2px_#000]">
              Lorem ipsum dolor sit amet elit.Unde quae facere id laborum
              aliquam quia delectus eaque, est sit. Corporis dolorum sint ipsam.
            </p>
            <Link href="" className="text-white bg-red-700 w-fit pt-2 pb-2 pl-8 pr-8 rounded hover:bg-red-600 transition duration-300">Get Started</Link>
          </span>
        </div>
      </section>
    </>
  );
};

export default Banner;
