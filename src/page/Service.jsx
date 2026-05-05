import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Zap,
  Lightbulb,
  Shield,
  Plug,
  Wrench,
  Home,
  Building2,
  AlertTriangle,
  Cable,
  Battery,
  CircuitBoard,
  Settings,
  CheckCircle2,
  ArrowRight,
  Plus,
  Minus,
  Phone,
  Clock,
  Search,
  ClipboardCheck,
  HardHat,
  ThumbsUp,
} from "lucide-react";

const Service = () => {
  // ====== SERVICE HERO ======
  const ServiceHero = () => {
    return (
      <section className="sec1 w-full h-fit pt-[20%] sm:pt-[10%] pb-[25%] sm:pb-[15%] flex justify-center items-center bg-gradient-to-r from-black/85 to-red-900/70 relative overflow-hidden">
        {/* Decorative animated circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 right-10 w-40 h-40 bg-red-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-10 w-52 h-52 bg-yellow-500 rounded-full blur-3xl"
        />

        <div className="flex justify-center text-center sm:text-left sm:justify-start items-center w-[90%] h-full relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-y-4 items-center sm:items-start"
          >
            <h3 className="uppercase font-semibold text-red-400 tracking-widest [text-shadow:1px_1px_2px_#000]">
              Our Services
            </h3>
            <h2 className="font-bold text-3xl sm:text-5xl max-w-[550px] [text-shadow:1px_1px_2px_#000] text-white">
              Complete electrical solutions for every need
            </h2>
            <p className="text-white max-w-[500px] text-[13px] sm:text-[15px] [text-shadow:1px_1px_2px_#000]">
              From minor repairs to full-scale installations, our certified
              electricians deliver dependable, code-compliant work backed by a
              100% satisfaction guarantee.
            </p>
            <div className="flex gap-x-3 flex-wrap gap-y-3 justify-center sm:justify-start">
              <Link
                to=""
                className="text-white bg-red-700 w-fit pt-2 pb-2 pl-8 pr-8 rounded hover:bg-red-600 transition duration-300 flex items-center gap-x-2"
              >
                Book a Service <ArrowRight size={16} />
              </Link>
              <Link
                to=""
                className="text-white bg-transparent border-2 border-white w-fit pt-2 pb-2 pl-8 pr-8 rounded hover:bg-white hover:text-black transition duration-300 flex items-center gap-x-2"
              >
                <Phone size={16} /> Call Now
              </Link>
            </div>
          </motion.span>
        </div>
      </section>
    );
  };

  // ====== QUICK BENEFIT BAR ======
  const ServiceBenefits = () => {
    const [benefits] = useState([
      {
        icon: <Clock size={28} color="red" />,
        label: "24/7 Emergency Service",
      },
      { icon: <Shield size={28} color="red" />, label: "Licensed & Insured" },
      { icon: <ThumbsUp size={28} color="red" />, label: "100% Satisfaction" },
      { icon: <CheckCircle2 size={28} color="red" />, label: "Free Estimates" },
    ]);

    return (
      <section className="w-full h-fit pb-[4%] flex justify-center items-center">
        <div className="bg-white shadow-2xl w-[90%] sm:mt-[-5em] mt-9 grid grid-cols-2 md:grid-cols-4 gap-0 overflow-hidden">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`flex flex-col md:flex-row items-center justify-center gap-3 p-6 ${
                i < benefits.length - 1 ? "md:border-r border-gray-200" : ""
              } ${i < 2 ? "border-b md:border-b-0 border-gray-200" : ""}`}
            >
              {b.icon}
              <h2 className="font-semibold text-center md:text-left text-[14px] md:text-[15px]">
                {b.label}
              </h2>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

  // ====== MAIN SERVICES GRID ======
  const ServicesGrid = () => {
    const [services] = useState([
      {
        icon: <Home size={35} color="red" />,
        h2Val: "Residential Wiring",
        pVal: "Complete home wiring services from new construction to remodels and upgrades for older homes.",
        features: ["New home wiring", "Rewiring", "Outlet installation"],
      },
      {
        icon: <Building2 size={35} color="red" />,
        h2Val: "Commercial Services",
        pVal: "Powering offices, retail spaces, and industrial facilities with reliable electrical infrastructure.",
        features: ["Office fit-outs", "Retail lighting", "Tenant improvements"],
      },
      {
        icon: <AlertTriangle size={35} color="red" />,
        h2Val: "Emergency Repairs",
        pVal: "24/7 emergency response for power outages, electrical faults, and urgent safety hazards.",
        features: ["24/7 availability", "Power restoration", "Hazard removal"],
      },
      {
        icon: <Lightbulb size={35} color="red" />,
        h2Val: "Lighting Solutions",
        pVal: "Modern lighting design and installation including LED upgrades, smart lighting, and outdoor systems.",
        features: ["LED upgrades", "Smart lighting", "Landscape lighting"],
      },
      {
        icon: <CircuitBoard size={35} color="red" />,
        h2Val: "Panel Upgrades",
        pVal: "Upgrade outdated panels to modern, code-compliant systems built to handle today's power demands.",
        features: ["Panel replacement", "Service upgrades", "Sub-panels"],
      },
      {
        icon: <Shield size={35} color="red" />,
        h2Val: "Surge Protection",
        pVal: "Whole-home and business surge protection to safeguard your valuable electronics and appliances.",
        features: [
          "Whole-home protection",
          "Point-of-use",
          "Lightning defense",
        ],
      },
      {
        icon: <Plug size={35} color="red" />,
        h2Val: "EV Charger Installation",
        pVal: "Professional installation of Level 2 EV chargers for your home or commercial property.",
        features: ["Level 2 chargers", "Tesla wall connector", "Permitting"],
      },
      {
        icon: <Battery size={35} color="red" />,
        h2Val: "Backup Generators",
        pVal: "Standby and portable generator installation to keep your power on during outages.",
        features: ["Standby systems", "Auto-transfer", "Maintenance plans"],
      },
      {
        icon: <Cable size={35} color="red" />,
        h2Val: "Safety Inspections",
        pVal: "Thorough electrical safety audits to identify hazards before they become costly problems.",
        features: ["Code compliance", "Real estate inspections", "Reports"],
      },
    ]);

    return (
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center">
        <div className="flex justify-center flex-col gap-y-8 items-center w-[90%] h-full">
          <div className="flex flex-col gap-y-2 w-full justify-center items-center">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999]">
              what we offer
            </h3>
            <h2 className="font-bold text-2xl sm:text-4xl text-black/92 max-w-[600px] text-center">
              Comprehensive electrical services under one roof
            </h2>
            <p className="text-black/60 max-w-[600px] text-center text-[14px] mt-2">
              Whether you need a quick fix or a major installation, our skilled
              team handles every job with the same commitment to quality and
              safety.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 justify-center gap-y-6 gap-x-6 items-stretch w-full h-fit">
            {services.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: false, amount: 0.2 }}
                className="group w-full h-full flex flex-col gap-y-4 p-7 border-b-4 border-red-500 shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                <div className="bg-red-50 w-fit p-3 rounded group-hover:bg-red-500 transition duration-300">
                  <div className="group-hover:[&>svg]:stroke-white transition duration-300">
                    {card.icon}
                  </div>
                </div>
                <h2 className="font-bold text-xl text-black/85 group-hover:text-red-500 transition duration-300">
                  {card.h2Val}
                </h2>
                <p className="text-black/60 text-[14px] leading-7">
                  {card.pVal}
                </p>
                <ul className="flex flex-col gap-y-2 mt-2">
                  {card.features.map((f, fi) => (
                    <li
                      key={fi}
                      className="flex items-center gap-x-2 text-[13px] text-black/70"
                    >
                      <CheckCircle2 size={15} color="red" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to=""
                  className="flex items-center gap-x-2 text-red-500 font-semibold mt-auto pt-3 hover:gap-x-3 transition-all duration-300"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // ====== PROCESS / HOW WE WORK ======
  const ServiceProcess = () => {
    const [steps] = useState([
      {
        icon: <Phone size={35} color="white" />,
        h2Val: "Contact Us",
        pVal: "Reach out by phone or our online form. Tell us what you need and when you need it done.",
        step: "01",
      },
      {
        icon: <Search size={35} color="white" />,
        h2Val: "Free Assessment",
        pVal: "We schedule a visit to inspect the issue, discuss options, and provide an honest estimate.",
        step: "02",
      },
      {
        icon: <ClipboardCheck size={35} color="white" />,
        h2Val: "Approve Quote",
        pVal: "Review our transparent quote with no hidden fees. Approve when you're ready to proceed.",
        step: "03",
      },
      {
        icon: <HardHat size={35} color="white" />,
        h2Val: "Quality Service",
        pVal: "Our certified team gets to work, delivering safe, code-compliant results that last.",
        step: "04",
      },
    ]);

    return (
      <section className="w-full h-fit bg-black/2 pb-[5%] pt-[5%] flex justify-center items-center">
        <div className="flex justify-center flex-col gap-y-10 items-center w-[90%] h-full">
          <div className="flex flex-col gap-y-2 w-full justify-center items-center">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999]">
              how we work
            </h3>
            <h2 className="font-bold text-2xl sm:text-4xl text-black/92 max-w-[550px] text-center">
              A simple 4-step process to powered-up satisfaction
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-8 gap-x-6 w-full relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative flex flex-col gap-y-4 items-center text-center bg-white p-7 shadow-xl hover:shadow-2xl transition duration-300"
              >
                {/* Step number watermark */}
                <span className="absolute top-2 right-4 text-6xl font-bold text-red-100 select-none">
                  {step.step}
                </span>
                <div className="bg-red-500 w-fit p-4 rounded-full shadow-lg z-10">
                  {step.icon}
                </div>
                <h2 className="font-bold text-xl text-black/85 z-10">
                  {step.h2Val}
                </h2>
                <p className="text-black/60 text-[14px] leading-7 z-10">
                  {step.pVal}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // ====== FEATURED SERVICE (image + text) ======
  const FeaturedService = () => {
    return (
      <section className="w-full h-fit pt-[5%] pb-[5%] flex justify-center items-center">
        <div className="flex justify-center flex-col sm:flex-row items-center w-[90%] h-full">
          <div className="w-full sm:w-[50%] h-[30em] overflow-hidden relative group">
            <img
              src="/images/img2.webp"
              alt="Featured Service"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-5 left-5 bg-red-500 text-white px-4 py-2 font-semibold text-[13px]">
              FEATURED SERVICE
            </div>
          </div>
          <div className="w-full sm:w-[50%] z-20 flex flex-col gap-y-4 pt-5 sm:p-9 bg-white h-full sm:mt-[5em] sm:ml-[-4em] shadow-xl">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999]">
              flagship offering
            </h3>
            <h2 className="font-bold xl:text-4xl text-black/90">
              Smart home electrical integration done right.
            </h2>
            <p className="text-black/60 text-[13px] sm:text-[15px]">
              Transform your home into a fully connected smart environment. We
              install and configure smart switches, lighting, thermostats,
              security systems, and EV chargers — all working together
              seamlessly under one roof.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                "Smart switches & dimmers",
                "Voice assistant integration",
                "Energy monitoring",
                "Mobile app control",
                "Custom automation",
                "Security integration",
              ].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-x-2 text-[13px] text-black/70"
                >
                  <CheckCircle2 size={15} color="red" />
                  {item}
                </span>
              ))}
            </div>
            <Link
              to=""
              className="text-white text-[13px] sm:text-[15px] bg-red-500 w-fit pt-2 pb-2 pl-8 pr-8 hover:bg-red-600 transition duration-300 mt-3 flex items-center gap-x-2"
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    );
  };

  // ====== FAQ SECTION ======
  const ServiceFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
      {
        q: "How quickly can you respond to an emergency call?",
        a: "Our emergency response team is available 24/7, and we typically arrive within 60 to 90 minutes for urgent calls in our service area.",
      },
      {
        q: "Are your electricians licensed and insured?",
        a: "Yes, every electrician on our team is fully licensed, bonded, and insured. We carry comprehensive liability coverage to protect both our clients and our workers.",
      },
      {
        q: "Do you offer free estimates?",
        a: "Absolutely. We provide free, no-obligation estimates for most projects. Just give us a call or fill out our online form to schedule a visit.",
      },
      {
        q: "What kind of warranty do you offer on your work?",
        a: "All of our work comes with a 1-year workmanship warranty. Many manufacturers also offer extended warranties on parts and equipment we install.",
      },
      {
        q: "Can you handle both residential and commercial jobs?",
        a: "Yes. We have dedicated teams for residential homes and commercial properties, ensuring specialized expertise for every type of project.",
      },
    ];

    return (
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between gap-x-10 gap-y-8 w-[90%] h-full">
          <div className="md:w-[40%] flex flex-col gap-y-4">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999]">
              got questions?
            </h3>
            <h2 className="font-bold text-2xl sm:text-4xl text-black/92">
              Frequently asked questions
            </h2>
            <p className="text-black/60 text-[14px] leading-7">
              Can't find what you're looking for? Reach out and our team will
              gladly answer any questions about our services, pricing, or
              process.
            </p>
            <Link
              to=""
              className="bg-red-500 hover:bg-red-600 transition duration-300 text-white pt-2 pb-2 pl-7 pr-7 w-fit mt-2 flex items-center gap-x-2"
            >
              <Phone size={16} /> Ask a Question
            </Link>
          </div>

          <div className="md:w-[60%] flex flex-col gap-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="border border-gray-200 shadow-md hover:shadow-lg transition duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-black/85 hover:text-red-500 transition duration-200"
                >
                  <span className="text-[15px]">{faq.q}</span>
                  <span className="text-red-500 flex-shrink-0 ml-3">
                    {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-black/60 text-[14px] leading-7">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // ====== CTA BANNER ======
  const ServiceCTA = () => {
    return (
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center">
        <div className="flex pl-10 pr-10 p-7 flex-col sm:flex-row justify-between bg-gradient-to-r from-yellow-600 to bg-red-700 gap-y-8 items-center w-[90%] h-full">
          <h2 className="text-black/92 font-bold text-[17px] max-w-[200px] sm:text-2xl sm:max-w-[400px] md:max-w-[500px] md:text-3xl xl:text-4xl xl:max-w-[600px]">
            Need an electrician today? We're just one call away.
          </h2>
          <div className="flex gap-x-3 flex-wrap gap-y-3">
            <Link
              to=""
              className="pt-2 pb-2 pl-7 pr-7 bg-yellow-400 hover:bg-yellow-600 transition duration-300 font-semibold flex items-center gap-x-2"
            >
              <Phone size={16} /> Call Now
            </Link>
            <Link
              to=""
              className="pt-2 pb-2 pl-7 pr-7 bg-black hover:bg-gray-800 transition duration-300 font-semibold text-white flex items-center gap-x-2"
            >
              Book Online <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    );
  };

  // ====== RENDER ======
  return (
    <>
      <ServiceHero />
      <ServiceBenefits />
      <ServicesGrid />
      <ServiceProcess />
      <FeaturedService />
      <ServiceFAQ />
      <ServiceCTA />
    </>
  );
};

export default Service;
