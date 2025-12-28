import { Axe, Book, Fish, Goal, KeyboardOff, Locate } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Section3 = () => {
  const [Cards2, setCards2] = useState([
    {
      icon: <Goal size={35} color="red" />,
      h2Val: "Electrical Installation",
      pVal: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <Book size={35} color="red" />,
      h2Val: "Panel Upgrades",
      pVal: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <Axe size={35} color="red" />,
      h2Val: "Lighting Upgrades",
      pVal: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <Fish size={35} color="red" />,
      h2Val: "Surge Protection",
      pVal: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <KeyboardOff size={35} color="red" />,
      h2Val: "Electrical Safety Accessments",
      pVal: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <Locate size={35} color="red" />,
      h2Val: "Switchboard Upgrades",
      pVal: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ]);

  return (
    <>
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center">
        <div className="flex justify-center flex-col gap-y-8 items-center w-[90%] h-full">
          <div className="flex flex-col gap-y-2 w-full justify-center items-center">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999]">
              what we offer
            </h3>
            <h2 className="font-bold text-2xl sm:text-4xl text-black/92 max-w-[550px] text-center">
              Serving you 24 hours a day, 365 days a year.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 justify-center gap-y-5 gap-x-5 items-center w-full h-fit">
            {Cards2.map((card2, i) => (
              <>
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="w-full h-fit flex flex-col gap-y-3 justify-center items-center p-7 border-b-4 border-red-500 shadow-xl hover:scale-103 transition duration-300"
                >
                  {card2.icon}
                  <h2 className="text-center font-bold text-xl text-red-500">
                    {card2.h2Val}
                  </h2>
                  <p className="text-center">{card2.pVal}</p>
                </motion.div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
