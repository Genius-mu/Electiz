import { Command, Fish, Group } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Section6 = () => {
  const [Cards3, setCards3] = useState([
    {
      icon: <Command size={35} color="red" />,
      h2Val: "Consultations",
      pVal: "Lorem ipsum dolor sit amet adipisicing elit. Itaque eaque quasi reiciendis quas tempore? Nostrum repudiandae odit quae? Officia!",
      btnVal: "Chat Sales",
    },
    {
      icon: <Group size={35} color="red" />,
      h2Val: "Choose Package",
      pVal: "Lorem ipsum dolor sit amet adipisicing elit. Itaque eaque quasi reiciendis quas tempore? Nostrum repudiandae odit quae? Officia!",
      btnVal: "Learn More",
    },
    {
      icon: <Fish size={35} color="red" />,
      h2Val: "Get Service",
      pVal: "Lorem ipsum dolor sit amet adipisicing elit. Itaque eaque quasi reiciendis quas tempore? Nostrum repudiandae odit quae? Officia!",
      btnVal: "Learn More",
    },
  ]);

  const fadeVariants = {
    hiddenLeft: { opacity: 0, x: -100, scale: 0.95 },
    hiddenRight: { opacity: 0, x: 100, scale: 0.95 },
    hiddenUp: { opacity: 0, y: 100, scale: 0.95 },
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
      <section className="w-full h-fit bg-black/2 pb-[10%] pt-[5%] flex justify-center items-center">
        <div className="flex justify-center flex-col gap-y-8 items-center w-[90%] h-full">
          <div className="w-full h-fit justify-center items-center flex flex-col gap-y-5">
            <h2 className="text-black/80 font-bold text-3xl text-center ">
              How it works
            </h2>
            <p className="text-black/70 max-w-[600px] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              culpa consectetur facilis beatae sed quas quam a modi ea est optio
              numquam voluptas!
            </p>
          </div>
          <div className="flex justify-center md:flex-row flex-col gap-x-5 items-center w-full h-fit">
            {Cards3.map((card3, index) => (
              <>
                <motion.div
                  key={card3}
                  variants={fadeVariants}
                  initial={index % 2 === 0 ? "hiddenUp" : "hiddenLeft"}
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.25 }}
                  className="w-full md:w-[28%] shadow-xl h-fit pl-5 pr-5 pt-10 pb-10 flex flex-col gap-y-5 justify-center items-center"
                >
                  {card3.icon}
                  <h2 className="text-black/80 font-semibold text-xl text-center">
                    {card3.h2Val}
                  </h2>
                  <p className="text-black/60 text-center">{card3.pVal}</p>
                  <Link
                    to=""
                    className="pt-2 pb-2 pl-7 pr-7 bg-red-600 hover:bg-red-500 transition duration-200 text-white font-semibold"
                  >
                    {card3.btnVal}
                  </Link>
                </motion.div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section6;
