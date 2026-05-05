import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Award,
  Users,
  Zap,
  Target,
  Eye,
  Heart,
  CheckCircle,
  Lightbulb,
  Wrench,
  ShieldCheck,
} from "lucide-react";

const About = () => {
  // ====== HERO SECTION ======
  const AboutHero = () => {
    return (
      <section className="sec1 w-full h-fit pt-[20%] sm:pt-[10%] pb-[25%] sm:pb-[15%] flex justify-center items-center bg-gradient-to-r from-black/80 to-red-900/70">
        <div className="flex justify-center text-center sm:text-left sm:justify-start items-center w-[90%] h-full">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-y-4 items-center sm:items-start"
          >
            <h3 className="uppercase font-semibold text-red-400 tracking-widest [text-shadow:1px_1px_2px_#000]">
              About Us
            </h3>
            <h2 className="font-bold text-3xl sm:text-5xl max-w-[500px] [text-shadow:1px_1px_2px_#000] text-white">
              Powering homes and businesses for over 25 years
            </h2>
            <p className="text-white max-w-[500px] text-[13px] sm:text-[15px] [text-shadow:1px_1px_2px_#000]">
              We are a family-owned electrical company committed to delivering
              safe, reliable, and innovative electrical solutions. From wiring
              your home to upgrading commercial systems, our certified
              electricians bring expertise to every project.
            </p>
            <Link
              to=""
              className="text-white bg-red-700 w-fit pt-2 pb-2 pl-8 pr-8 rounded hover:bg-red-600 transition duration-300"
            >
              Meet Our Team
            </Link>
          </motion.span>
        </div>
      </section>
    );
  };

  // ====== STATS / ACHIEVEMENT CARDS ======
  const AboutStats = () => {
    const [stats] = useState([
      {
        icon: <Award size={35} color="red" />,
        h2Val: "25+ Years",
        pVal: "Of trusted experience powering homes, businesses, and industrial sites across the region.",
      },
      {
        icon: <Users size={35} color="red" />,
        h2Val: "5,000+ Clients",
        pVal: "Happy customers who continue to trust us for all their electrical needs and emergencies.",
      },
      {
        icon: <Zap size={35} color="red" />,
        h2Val: "10,000+ Projects",
        pVal: "Completed successfully with zero compromise on safety, quality, or our craftsmanship.",
      },
      {
        icon: <ShieldCheck size={35} color="red" />,
        h2Val: "Fully Licensed",
        pVal: "Certified, bonded, and insured electricians ready to handle any electrical challenge.",
      },
    ]);

    return (
      <section className="w-full h-fit pb-[4%] flex justify-center items-center">
        <div className="sm:grid grid sm:grid-cols-2 grid-cols-1 md:flex gap-x-3 gap-y-3 justify-between mt-9 sm:mt-[-5em] items-center w-[90%] h-full">
          {stats.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white sm:w-full xl:w-[23%] md:w-[25%] h-fit shadow-2xl p-9 flex flex-col gap-y-4 justify-center items-center"
            >
              {card.icon}
              <h2 className="font-semibold xl:text-xl text-center md:text-[14px]">
                {card.h2Val}
              </h2>
              <p className="text-center max-w-[200px] leading-7 text-black/60">
                {card.pVal}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

  // ====== OUR STORY SECTION ======
  const OurStory = () => {
    return (
      <section className="w-full h-fit pt-[2%] pb-[2%] flex justify-center items-center">
        <div className="flex justify-center flex-col sm:flex-row items-center w-[90%] h-full">
          <div className="w-full sm:w-[50%] h-[30em] overflow-hidden">
            <img
              src="/images/img2.webp"
              alt="Our Story"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-full sm:w-[50%] flex flex-col gap-y-4 pt-5 sm:p-9 bg-white h-full sm:mt-[5em] sm:ml-[-4em]">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999]">
              our story
            </h3>
            <h2 className="font-bold xl:text-4xl text-black/90">
              From a small workshop to a trusted name in electrical services.
            </h2>
            <p className="text-black/60 text-[13px] sm:text-[15px]">
              What started as a single van and one passionate electrician in
              1999 has grown into a full-service electrical company serving
              thousands of clients. Our journey has been built on word-of-mouth
              referrals, honest pricing, and the kind of craftsmanship you can
              count on.
            </p>
            <p className="text-black/60 text-[13px] sm:text-[15px]">
              Today, we have a team of certified electricians, modern equipment,
              and a 24/7 emergency response unit. But our core values remain the
              same: treat every job like it matters, because it does, and treat
              every customer like family.
            </p>
            <Link
              to=""
              className="text-white text-[13px] sm:text-[15px] bg-red-500 w-fit pt-2 pb-2 pl-8 pr-8 hover:bg-red-600 transition duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
    );
  };

  // ====== MISSION, VISION, VALUES ======
  const MissionVision = () => {
    const [pillars] = useState([
      {
        icon: <Target size={35} color="red" />,
        h2Val: "Our Mission",
        pVal: "To deliver safe, reliable, and high-quality electrical services that empower our communities.",
      },
      {
        icon: <Eye size={35} color="red" />,
        h2Val: "Our Vision",
        pVal: "To be the most trusted and innovative electrical services provider in the region by 2030.",
      },
      {
        icon: <Heart size={35} color="red" />,
        h2Val: "Our Values",
        pVal: "Integrity, safety, excellence, and a relentless commitment to customer satisfaction every day.",
      },
      {
        icon: <Lightbulb size={35} color="red" />,
        h2Val: "Our Promise",
        pVal: "Transparent pricing, on-time service, and workmanship guaranteed for total peace of mind.",
      },
      {
        icon: <CheckCircle size={35} color="red" />,
        h2Val: "Our Standards",
        pVal: "Every project meets or exceeds national electrical codes and the highest safety regulations.",
      },
      {
        icon: <Wrench size={35} color="red" />,
        h2Val: "Our Approach",
        pVal: "We listen first, plan carefully, then execute with precision and respect for your space.",
      },
    ]);

    return (
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center">
        <div className="flex justify-center flex-col gap-y-8 items-center w-[90%] h-full">
          <div className="flex flex-col gap-y-2 w-full justify-center items-center">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999]">
              what drives us
            </h3>
            <h2 className="font-bold text-2xl sm:text-4xl text-black/92 max-w-[550px] text-center">
              The principles that power everything we do.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 justify-center gap-y-5 gap-x-5 items-center w-full h-fit">
            {pillars.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full h-fit flex flex-col gap-y-3 justify-center items-center p-7 border-b-4 border-red-500 shadow-xl hover:scale-103 transition duration-300"
              >
                {card.icon}
                <h2 className="text-center font-bold text-xl text-red-500">
                  {card.h2Val}
                </h2>
                <p className="text-center">{card.pVal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // ====== CTA BANNER ======
  const AboutCTA = () => {
    return (
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center">
        <div className="flex pl-10 pr-10 p-7 flex-col sm:flex-row justify-between bg-gradient-to-r from-yellow-600 to bg-red-700 gap-y-8 items-center w-[90%] h-full">
          <h2 className="text-black/92 font-bold text-[17px] max-w-[200px] sm:text-2xl sm:max-w-[400px] md:max-w-[500px] md:text-3xl xl:text-4xl xl:max-w-[600px]">
            Ready to work with electricians who actually care? Let's talk.
          </h2>
          <Link
            to=""
            className="pt-2 pb-2 pl-7 pr-7 bg-yellow-400 hover:bg-yellow-600 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    );
  };

  // ====== TEAM / WHY CHOOSE US SECTION ======
  const WhyChooseUs = () => {
    const [reasons] = useState([
      {
        icon: <ShieldCheck size={35} color="red" />,
        h2Val: "Licensed & Insured",
        pVal: "Every electrician on our team is fully certified, bonded, and insured for your complete protection.",
        btnVal: "Verify Credentials",
      },
      {
        icon: <Wrench size={35} color="red" />,
        h2Val: "Skilled Craftsmen",
        pVal: "Our team brings decades of combined experience, ongoing training, and a passion for getting it right the first time.",
        btnVal: "Meet The Team",
      },
      {
        icon: <Heart size={35} color="red" />,
        h2Val: "Customer First",
        pVal: "From the first call to the final inspection, we treat your home or business with the same care we'd give our own.",
        btnVal: "Read Reviews",
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
      <section className="w-full h-fit bg-black/2 pb-[10%] pt-[5%] flex justify-center items-center">
        <div className="flex justify-center flex-col gap-y-8 items-center w-[90%] h-full">
          <div className="w-full h-fit justify-center items-center flex flex-col gap-y-5">
            <h2 className="text-black/80 font-bold text-3xl text-center">
              Why choose us
            </h2>
            <p className="text-black/70 max-w-[600px] text-center">
              Choosing the right electrician matters. Here's what sets us apart
              from the competition and why thousands of clients keep coming back
              to us year after year.
            </p>
          </div>
          <div className="flex justify-center md:flex-row flex-col gap-x-5 gap-y-5 items-center w-full h-fit">
            {reasons.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeVariants}
                initial={index % 2 === 0 ? "hiddenUp" : "hiddenLeft"}
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.25 }}
                className="w-full md:w-[28%] shadow-xl h-fit pl-5 pr-5 pt-10 pb-10 flex flex-col gap-y-5 justify-center items-center bg-white"
              >
                {card.icon}
                <h2 className="text-black/80 font-semibold text-xl text-center">
                  {card.h2Val}
                </h2>
                <p className="text-black/60 text-center">{card.pVal}</p>
                <Link
                  to=""
                  className="pt-2 pb-2 pl-7 pr-7 bg-red-600 hover:bg-red-500 transition duration-200 text-white font-semibold"
                >
                  {card.btnVal}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // ====== RENDER FULL ABOUT PAGE ======
  return (
    <>
      <AboutHero />
      <AboutStats />
      <OurStory />
      <MissionVision />
      <AboutCTA />
      <WhyChooseUs />
    </>
  );
};

export default About;
