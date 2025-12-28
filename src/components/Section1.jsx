import { AlarmClock, Phone, Shield, Wallet } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  const [Cards1, setCards1] = useState([
    {
      icon: <AlarmClock size={35} color="red" />,
      h2Val: "24/7 Availability",
      pVal: "Laborum officia facilis et, perspiciatis labore totam ab in. Voluptas magnam sequi saepe?",
    },
    {
      icon: <Wallet size={35} color="red" />,
      h2Val: "Affordable Price",
      pVal: "Laborum officia facilis et, perspiciatis labore totam ab in. Voluptas magnam sequi saepe?",
    },
    {
      icon: <Shield size={35} color="red" />,
      h2Val: "100% Guarantee",
      pVal: "Laborum officia facilis et, perspiciatis labore totam ab in. Voluptas magnam sequi saepe?",
    },
    {
      icon: <Phone size={35} color="red" />,
      h2Val: "Free Estimation",
      pVal: "Laborum officia facilis et, perspiciatis labore totam ab in. Voluptas magnam sequi saepe?",
    },
  ]);

  return (
    <>
      <section className="w-full h-fit pb-[4%] flex justify-center items-center">
        <div className="sm:grid grid sm:grid-cols-2 grid-cols-1 md:flex gap-x-3 gap-y-3 justify-between mt-9 sm:mt-[-5em] items-center w-[90%] h-full">
          {Cards1.map((card, i) => (
            <>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white sm:w-full xl:w-[23%] md:w-[25%] h-fit shadow-2xl p-9 flex flex-col gap-y-4 justify-center items-center"
              >
                {card.icon}
                <h2 className="font-semibold xl:text-xl text-center md:text-[14px]">
                  {card.h2Val}
                </h2>
                <p className="text-center max-w-[200px] leading-7 text-black/60">
                  {" "}
                  {card.pVal}{" "}
                </p>
              </motion.div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Section1;
