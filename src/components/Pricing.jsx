import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Pricing = () => {
  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100, scale: 0.9 },
    hiddenRight: { opacity: 0, x: 100, scale: 0.9 },
    hiddenUp: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center">
        <div className="flex justify-center flex-col gap-y-18 items-center w-[90%] h-full">
          <div className="flex md:justify-between w-full flex-col md:flex-row sm:justify-center gap-y-7 sm:items-center">
            <span className="flex flex-col gap-y-6 md:justify-start justify-center items-center md:items-start">
              <h3 className="uppercase font-semibold text-red-500">
                Pricing Plan
              </h3>
              <h2 className="text-black/89 md:text-3xl xl:text-4x md:text-left text-center md:max-w-[400px] font-bold max-w-[500px]">
                Serving you 24 hours a day, 365 days a year.
              </h2>
            </span>
            <span className="flex flex-col gap-y-6 sm:justify-center w-full md:w-fit md:items-start items-center">
              <p className="text-black/70 xl:max-w-[500px] text-center md:text-left text-[13px] md:text-[14px] md:max-w-[400px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                delectus in ipsam veritatis blanditiis autem velit cumque eum
                assumenda accusamus aspernatur laborum aliquam, iure corporis
                nesciunt error repellendus deserunt est.
              </p>
              <Link
                to=""
                className="bg-red-500 md:text-[14px] hover:bg-red-600 transition duration-300 pl-7 pr-7 pt-2 pb-2 font-semibold text-white w-fit"
              >
                Discover More
              </Link>
            </span>
          </div>
          <div className="flex justify-center w-full items-center flex-col md:flex-row gap-y-5">
            <motion.div
              variants={cardVariants}
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.1 }}
              className="w-full md:w-[35%] flex gap-y-2 justify-center items-center flex-col shadow-xl pb-6"
            >
              <span className="bg-gray-400 gap-y-0 flex flex-col justify-center items-center w-full pt-5 pb-5">
                <h2 className="text-white font-semibold">Basic Package</h2>
                <p className="text-white">Starter package service</p>
              </span>
              <div className="flex gap-y-1 pt-5 pb-5 flex-col w-full justify-center items-center">
                <span className="flex w-full justify-center items-center">
                  <sup className="font-bold text-[14px] text-red-700">$</sup>
                  <h2 className="font-bold text-5xl text-red-700">39</h2>
                  <sup className="font-bold text-[14px] text-red-700">99</sup>
                </span>
                <p>Session</p>
              </div>
              <p className="text-black/70 max-w-[200px] text-center leading-10">
                Lorem ipsum dolor sit amet elit. Blanditiis quo saepe quod,
                vitae ab quae architecto cumque natus iusto delectus nam
                corrupti provident!
              </p>
              <Link
                to=""
                className="bg-red-500 hover:bg-red-600 transition duration-300 text-white w-fit pt-2 pb-2 pl-7 pr-7"
              >
                Get Started
              </Link>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.1 }}
              className="w-full md:w-[35%] flex gap-y-2 justify-center items-center flex-col shadow-xl pb-6"
            >
              <span className="bg-red-600 gap-y-0 flex flex-col justify-center items-center w-full pt-5 pb-5">
                <h2 className="text-white font-semibold">Basic Package</h2>
                <p className="text-white">Starter package service</p>
              </span>
              <div className="flex gap-y-1 pt-5 pb-5 flex-col w-full justify-center items-center">
                <span className="flex w-full justify-center items-center">
                  <sup className="font-bold text-[14px] text-red-700">$</sup>
                  <h2 className="font-bold text-5xl text-red-700">39</h2>
                  <sup className="font-bold text-[14px] text-red-700">99</sup>
                </span>
                <p>Session</p>
              </div>
              <p className="text-black/70 max-w-[200px] text-center leading-10">
                Lorem ipsum dolor sit amet elit. Blanditiis quo saepe quod,
                vitae ab quae architecto cumque natus iusto delectus nam
                corrupti provident!
              </p>
              <Link
                to=""
                className="bg-red-500 hover:bg-red-600 transition duration-300 text-white w-fit pt-2 pb-2 pl-7 pr-7"
              >
                Get Started
              </Link>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.1 }}
              className="w-full md:w-[35%] flex gap-y-2 justify-center items-center flex-col shadow-xl pb-6"
            >
              <span className="bg-gray-400 gap-y-0 flex flex-col justify-center items-center w-full pt-5 pb-5">
                <h2 className="text-white font-semibold">Basic Package</h2>
                <p className="text-white">Starter package service</p>
              </span>
              <div className="flex gap-y-1 pt-5 pb-5 flex-col w-full justify-center items-center">
                <span className="flex w-full justify-center items-center">
                  <sup className="font-bold text-[14px] text-red-700">$</sup>
                  <h2 className="font-bold text-5xl text-red-700">39</h2>
                  <sup className="font-bold text-[14px] text-red-700">99</sup>
                </span>
                <p>Session</p>
              </div>
              <p className="text-black/70 max-w-[200px] text-center leading-10">
                Lorem ipsum dolor sit amet elit. Blanditiis quo saepe quod,
                vitae ab quae architecto cumque natus iusto delectus nam
                corrupti provident!
              </p>
              <Link
                to=""
                className="bg-red-500 hover:bg-red-600 transition duration-300 text-white w-fit pt-2 pb-2 pl-7 pr-7"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
