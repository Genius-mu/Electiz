import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  X,
  Star,
  Phone,
  Sparkles,
  Zap,
  Crown,
  Shield,
  Plus,
  Minus,
  Quote,
  Tag,
  Clock,
  Award,
  HelpCircle,
} from "lucide-react";

const Pricing = () => {
  const [billing, setBilling] = useState("oneTime"); // "oneTime" or "monthly"

  // ====== PRICING HERO ======
  const PricingHero = () => {
    return (
      <section className="sec1 w-full h-fit pt-[20%] sm:pt-[10%] pb-[25%] sm:pb-[15%] flex justify-center items-center bg-gradient-to-br from-black/85 via-black/70 to-red-900/70 relative overflow-hidden">
        {/* Decorative animated elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-96 h-96 border border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] border border-white/5 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-20 w-40 h-40 bg-red-500 rounded-full blur-3xl"
        />

        <div className="flex justify-center text-center items-center w-[90%] h-full relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-y-4 items-center"
          >
            <h3 className="uppercase font-semibold text-red-400 tracking-widest [text-shadow:1px_1px_2px_#000]">
              Pricing Plans
            </h3>
            <h2 className="font-bold text-3xl sm:text-5xl max-w-[600px] [text-shadow:1px_1px_2px_#000] text-white">
              Honest pricing. No hidden fees. Just great service.
            </h2>
            <p className="text-white max-w-[550px] text-[13px] sm:text-[15px] [text-shadow:1px_1px_2px_#000]">
              Choose the plan that fits your needs. Whether it's a quick fix or
              a full installation, we have transparent pricing with no
              surprises.
            </p>
            <div className="flex gap-x-3 flex-wrap gap-y-3 justify-center mt-2">
              <Link
                to=""
                className="text-white bg-red-700 w-fit pt-2 pb-2 pl-8 pr-8 rounded hover:bg-red-600 transition duration-300 flex items-center gap-x-2"
              >
                Get Started <ArrowRight size={16} />
              </Link>
              <Link
                to=""
                className="text-white bg-transparent border-2 border-white w-fit pt-2 pb-2 pl-8 pr-8 rounded hover:bg-white hover:text-black transition duration-300 flex items-center gap-x-2"
              >
                <Phone size={16} /> Talk to Sales
              </Link>
            </div>
          </motion.span>
        </div>
      </section>
    );
  };

  // ====== PRICING CARDS ======
  const PricingCards = () => {
    const plans = [
      {
        name: "Basic",
        icon: <Zap size={28} color="white" />,
        tagline: "For small fixes & emergencies",
        oneTime: { price: 39, cents: 99, label: "Per Session" },
        monthly: { price: 19, cents: 99, label: "Per Month" },
        featured: false,
        color: "gray-400",
        description:
          "Perfect for homeowners who need quick electrical fixes, repairs, or simple installations.",
        features: [
          { text: "1 service call per month", included: true },
          { text: "Standard response time", included: true },
          { text: "Basic safety inspection", included: true },
          { text: "Email support", included: true },
          { text: "Priority booking", included: false },
          { text: "Free emergency calls", included: false },
        ],
      },
      {
        name: "Pro",
        icon: <Crown size={28} color="white" />,
        tagline: "Most popular choice",
        oneTime: { price: 89, cents: 99, label: "Per Session" },
        monthly: { price: 49, cents: 99, label: "Per Month" },
        featured: true,
        color: "red-600",
        description:
          "Our most popular plan for active homeowners and small businesses needing regular electrical care.",
        features: [
          { text: "5 service calls per month", included: true },
          { text: "Same-day response", included: true },
          { text: "Full safety inspection", included: true },
          { text: "24/7 phone support", included: true },
          { text: "Priority booking", included: true },
          { text: "Free emergency calls", included: false },
        ],
      },
      {
        name: "Enterprise",
        icon: <Shield size={28} color="white" />,
        tagline: "For large properties & businesses",
        oneTime: { price: 149, cents: 99, label: "Per Session" },
        monthly: { price: 99, cents: 99, label: "Per Month" },
        featured: false,
        color: "gray-700",
        description:
          "Comprehensive electrical care for commercial properties, large homes, and multi-site operations.",
        features: [
          { text: "Unlimited service calls", included: true },
          { text: "Immediate emergency response", included: true },
          { text: "Quarterly safety audits", included: true },
          { text: "Dedicated account manager", included: true },
          { text: "Priority booking", included: true },
          { text: "Free emergency calls", included: true },
        ],
      },
    ];

    const cardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    };

    return (
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center">
        <div className="flex justify-center flex-col gap-y-10 items-center w-[90%] h-full">
          {/* Section header */}
          <div className="flex md:justify-between w-full flex-col md:flex-row sm:justify-center gap-y-7 sm:items-center">
            <span className="flex flex-col gap-y-6 md:justify-start justify-center items-center md:items-start">
              <h3 className="uppercase font-semibold text-red-500">
                Pricing Plan
              </h3>
              <h2 className="text-black/89 md:text-3xl xl:text-4xl md:text-left text-center md:max-w-[400px] font-bold max-w-[500px]">
                Serving you 24 hours a day, 365 days a year.
              </h2>
            </span>
            <span className="flex flex-col gap-y-6 sm:justify-center w-full md:w-fit md:items-start items-center">
              <p className="text-black/70 xl:max-w-[500px] text-center md:text-left text-[13px] md:text-[14px] md:max-w-[400px]">
                Pick the plan that matches your needs. All plans include our
                100% satisfaction guarantee, certified electricians, and
                workmanship warranty. No hidden fees, ever.
              </p>
              <Link
                to=""
                className="bg-red-500 md:text-[14px] hover:bg-red-600 transition duration-300 pl-7 pr-7 pt-2 pb-2 font-semibold text-white w-fit"
              >
                Discover More
              </Link>
            </span>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center gap-x-4 bg-white shadow-lg p-2 border border-gray-100">
            <button
              onClick={() => setBilling("oneTime")}
              className={`px-6 py-2 font-semibold text-[14px] transition duration-300 ${
                billing === "oneTime"
                  ? "bg-red-500 text-white shadow-md"
                  : "text-black/70 hover:text-red-500"
              }`}
            >
              One-Time Service
            </button>
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 font-semibold text-[14px] transition duration-300 flex items-center gap-x-2 ${
                billing === "monthly"
                  ? "bg-red-500 text-white shadow-md"
                  : "text-black/70 hover:text-red-500"
              }`}
            >
              Monthly Plan
              <span className="bg-yellow-400 text-black text-[10px] px-2 py-0.5 font-bold">
                SAVE 30%
              </span>
            </button>
          </div>

          {/* Pricing Cards Grid */}
          <div className="flex justify-center w-full items-stretch flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.15 }}
                className={`relative w-full md:w-[33%] flex flex-col shadow-xl bg-white transition-all duration-500 ${
                  plan.featured
                    ? "md:scale-105 md:-mt-4 md:mb-4 ring-2 ring-red-500 z-10"
                    : "hover:scale-[1.02]"
                }`}
              >
                {/* Popular badge */}
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[11px] font-bold px-4 py-1 flex items-center gap-x-1 shadow-lg">
                    <Sparkles size={12} /> MOST POPULAR
                  </div>
                )}

                {/* Header */}
                <span
                  className={`gap-y-2 flex flex-col justify-center items-center w-full pt-7 pb-7 ${
                    plan.featured ? "bg-red-600" : "bg-gray-400"
                  }`}
                >
                  <div className="bg-white/20 p-3 rounded-full mb-1">
                    {plan.icon}
                  </div>
                  <h2 className="text-white font-bold text-xl">{plan.name}</h2>
                  <p className="text-white/90 text-[13px]">{plan.tagline}</p>
                </span>

                {/* Price (animated when billing changes) */}
                <div className="flex gap-y-1 pt-7 pb-5 flex-col w-full justify-center items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={billing}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex w-full justify-center items-center"
                    >
                      <sup className="font-bold text-[14px] text-red-700">
                        $
                      </sup>
                      <h2 className="font-bold text-5xl text-red-700">
                        {plan[billing].price}
                      </h2>
                      <sup className="font-bold text-[14px] text-red-700">
                        {plan[billing].cents}
                      </sup>
                    </motion.span>
                  </AnimatePresence>
                  <p className="text-black/60 text-[13px]">
                    {plan[billing].label}
                  </p>
                </div>

                {/* Description */}
                <p className="text-black/70 max-w-[260px] mx-auto text-center text-[13px] leading-7 px-5">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-y-3 px-7 py-7">
                  {plan.features.map((f, fi) => (
                    <li
                      key={fi}
                      className={`flex items-center gap-x-3 text-[13px] ${
                        f.included
                          ? "text-black/80"
                          : "text-black/30 line-through"
                      }`}
                    >
                      {f.included ? (
                        <span className="bg-red-100 rounded-full p-0.5 flex-shrink-0">
                          <Check size={13} color="red" strokeWidth={3} />
                        </span>
                      ) : (
                        <span className="bg-gray-100 rounded-full p-0.5 flex-shrink-0">
                          <X size={13} color="gray" />
                        </span>
                      )}
                      {f.text}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="px-7 pb-7 mt-auto">
                  <Link
                    to=""
                    className={`w-full pt-3 pb-3 font-semibold transition duration-300 flex items-center justify-center gap-x-2 ${
                      plan.featured
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-white border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                    }`}
                  >
                    Get Started <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust note */}
          <p className="text-black/50 text-[13px] flex items-center gap-x-2">
            <Shield size={14} color="red" />
            All plans include workmanship warranty and 100% satisfaction
            guarantee
          </p>
        </div>
      </section>
    );
  };

  // ====== COMPARISON TABLE ======
  const ComparisonTable = () => {
    const features = [
      {
        name: "Service calls per month",
        basic: "1",
        pro: "5",
        enterprise: "Unlimited",
      },
      {
        name: "Response time",
        basic: "48 hours",
        pro: "Same day",
        enterprise: "Immediate",
      },
      {
        name: "Safety inspection",
        basic: "Basic",
        pro: "Full",
        enterprise: "Quarterly audit",
      },
      {
        name: "Phone support",
        basic: "Business hours",
        pro: "24/7",
        enterprise: "24/7 priority",
      },
      { name: "Priority booking", basic: false, pro: true, enterprise: true },
      {
        name: "Free emergency calls",
        basic: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "Dedicated account manager",
        basic: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "Workmanship warranty",
        basic: "1 year",
        pro: "2 years",
        enterprise: "Lifetime",
      },
    ];

    const renderCell = (val) => {
      if (val === true)
        return (
          <span className="bg-red-100 rounded-full p-1 inline-flex">
            <Check size={14} color="red" strokeWidth={3} />
          </span>
        );
      if (val === false)
        return (
          <span className="bg-gray-100 rounded-full p-1 inline-flex">
            <X size={14} color="gray" />
          </span>
        );
      return (
        <span className="text-black/80 text-[13px] font-medium">{val}</span>
      );
    };

    return (
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center bg-black/2">
        <div className="flex flex-col gap-y-8 items-center w-[90%] h-full">
          <div className="flex flex-col gap-y-2 w-full justify-center items-center">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999]">
              compare plans
            </h3>
            <h2 className="font-bold text-2xl sm:text-4xl text-black/92 max-w-[550px] text-center">
              See exactly what's included
            </h2>
          </div>

          <div className="w-full overflow-x-auto shadow-xl bg-white">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  <th className="text-left p-5 font-bold text-black/85 text-[14px]">
                    Features
                  </th>
                  <th className="text-center p-5 font-bold text-black/85 text-[14px]">
                    Basic
                  </th>
                  <th className="text-center p-5 font-bold text-white text-[14px] bg-red-600 relative">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5">
                      POPULAR
                    </span>
                    Pro
                  </th>
                  <th className="text-center p-5 font-bold text-black/85 text-[14px]">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 hover:bg-red-50/30 transition duration-200 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="p-5 text-black/75 text-[13px]">{f.name}</td>
                    <td className="text-center p-5">{renderCell(f.basic)}</td>
                    <td className="text-center p-5 bg-red-50/30">
                      {renderCell(f.pro)}
                    </td>
                    <td className="text-center p-5">
                      {renderCell(f.enterprise)}
                    </td>
                  </tr>
                ))}
                {/* CTA row */}
                <tr className="bg-gray-50">
                  <td className="p-5"></td>
                  <td className="p-5 text-center">
                    <Link
                      to=""
                      className="inline-block bg-white border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-5 py-2 font-semibold text-[13px] transition duration-300"
                    >
                      Choose Basic
                    </Link>
                  </td>
                  <td className="p-5 text-center bg-red-50/30">
                    <Link
                      to=""
                      className="inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 font-semibold text-[13px] transition duration-300"
                    >
                      Choose Pro
                    </Link>
                  </td>
                  <td className="p-5 text-center">
                    <Link
                      to=""
                      className="inline-block bg-white border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-5 py-2 font-semibold text-[13px] transition duration-300"
                    >
                      Choose Enterprise
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  };

  // ====== ADD-ONS SECTION ======
  const AddOns = () => {
    const [addons] = useState([
      {
        icon: <Clock size={28} color="red" />,
        h2Val: "Emergency Response",
        pVal: "60-minute guaranteed response time for true emergencies, day or night.",
        price: "$49",
        unit: "/month",
      },
      {
        icon: <Shield size={28} color="red" />,
        h2Val: "Extended Warranty",
        pVal: "Add 3 extra years of workmanship warranty for complete peace of mind.",
        price: "$199",
        unit: "/year",
      },
      {
        icon: <Award size={28} color="red" />,
        h2Val: "Annual Inspection",
        pVal: "Yearly comprehensive safety inspection with detailed report and recommendations.",
        price: "$129",
        unit: "/year",
      },
      {
        icon: <Tag size={28} color="red" />,
        h2Val: "Family & Friends Plan",
        pVal: "Add up to 3 additional properties under one plan at a discounted rate.",
        price: "$29",
        unit: "/property",
      },
    ]);

    return (
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center">
        <div className="flex flex-col gap-y-8 items-center w-[90%] h-full">
          <div className="flex flex-col gap-y-2 w-full justify-center items-center">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999]">
              optional add-ons
            </h3>
            <h2 className="font-bold text-2xl sm:text-4xl text-black/92 max-w-[550px] text-center">
              Customize your plan with extras
            </h2>
            <p className="text-black/60 max-w-[600px] text-center text-[14px] mt-2">
              Mix and match add-ons to build the perfect plan for your needs.
              Add or remove anytime.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
            {addons.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:border-red-500 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-y-3 group"
              >
                <div className="bg-red-50 w-fit p-3 rounded group-hover:bg-red-500 transition duration-300">
                  <div className="group-hover:[&>svg]:stroke-white transition duration-300">
                    {a.icon}
                  </div>
                </div>
                <h2 className="font-bold text-[16px] text-black/85">
                  {a.h2Val}
                </h2>
                <p className="text-black/60 text-[13px] leading-7">{a.pVal}</p>
                <div className="flex items-baseline gap-x-1 mt-auto pt-2 border-t border-gray-100">
                  <span className="font-bold text-2xl text-red-500">
                    {a.price}
                  </span>
                  <span className="text-black/50 text-[13px]">{a.unit}</span>
                </div>
                <button className="text-red-500 font-semibold text-[13px] flex items-center gap-x-2 hover:gap-x-3 transition-all duration-300 mt-1">
                  <Plus size={14} /> Add to plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // ====== TESTIMONIAL ======
  const PricingTestimonial = () => {
    return (
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center bg-black/2">
        <div className="w-[90%] max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white shadow-2xl p-8 sm:p-12 flex flex-col items-center gap-y-5 text-center border-b-4 border-red-500"
          >
            <Quote size={45} color="red" className="opacity-30" />
            <div className="flex gap-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#facc15" stroke="#facc15" />
              ))}
            </div>
            <p className="text-black/75 text-[15px] sm:text-[18px] leading-8 italic max-w-[700px]">
              The Pro plan has been a lifesaver for our restaurant. Whenever
              something electrical goes wrong, they're here the same day. No
              haggling, no surprise charges, just quality work and peace of
              mind.
            </p>
            <div className="flex flex-col items-center gap-y-1 pt-3 border-t border-gray-100 w-full">
              <h2 className="font-bold text-black/85">Chioma Adeleke</h2>
              <p className="text-black/55 text-[13px]">
                Restaurant Owner, Pro Plan Subscriber
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  // ====== FAQ SECTION ======
  const PricingFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
      {
        q: "Can I change or cancel my plan anytime?",
        a: "Yes, you can upgrade, downgrade, or cancel your plan at any time with no cancellation fees. Changes take effect at the start of your next billing cycle.",
      },
      {
        q: "Do you offer custom plans for large properties?",
        a: "Absolutely. For properties with unique needs, we offer custom enterprise plans tailored to your specific requirements. Contact our sales team for a personalized quote.",
      },
      {
        q: "What's covered under the workmanship warranty?",
        a: "Our workmanship warranty covers any defects in the work we perform. If something we installed or repaired fails due to our work, we'll fix it free of charge within the warranty period.",
      },
      {
        q: "Are there any hidden fees or extra charges?",
        a: "No hidden fees, ever. The price you see is the price you pay. Any additional materials or services outside your plan are quoted upfront before any work begins.",
      },
      {
        q: "How does the monthly plan billing work?",
        a: "Monthly plans are billed automatically on the same date each month. You can pay with credit card, debit card, or bank transfer. Cancel anytime with no penalties.",
      },
      {
        q: "Do you offer payment plans for larger projects?",
        a: "Yes, for projects over $1,000 we offer flexible payment plans with 0% interest for qualified customers. Speak with our team to learn more about your options.",
      },
    ];

    return (
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between gap-x-10 gap-y-8 w-[90%] h-full">
          <div className="md:w-[40%] flex flex-col gap-y-4 md:sticky md:top-24 md:self-start">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999]">
              pricing questions
            </h3>
            <h2 className="font-bold text-2xl sm:text-4xl text-black/92">
              Common questions about our plans
            </h2>
            <p className="text-black/60 text-[14px] leading-7">
              Still have questions? We're here to help. Reach out to our team
              and get answers to anything that's on your mind.
            </p>
            <Link
              to=""
              className="bg-red-500 hover:bg-red-600 transition duration-300 text-white pt-2 pb-2 pl-7 pr-7 w-fit mt-2 flex items-center gap-x-2"
            >
              <HelpCircle size={16} /> Get Help
            </Link>
          </div>

          <div className="md:w-[60%] flex flex-col gap-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: false, amount: 0.3 }}
                className="border border-gray-200 shadow-md hover:shadow-lg transition duration-300 bg-white"
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
  const PricingCTA = () => {
    return (
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center">
        <div className="flex pl-10 pr-10 p-7 flex-col sm:flex-row justify-between bg-gradient-to-r from-yellow-600 to bg-red-700 gap-y-8 items-center w-[90%] h-full">
          <h2 className="text-black/92 font-bold text-[17px] max-w-[200px] sm:text-2xl sm:max-w-[400px] md:max-w-[500px] md:text-3xl xl:text-4xl xl:max-w-[600px]">
            Ready to choose your plan? Let's power up your space.
          </h2>
          <div className="flex gap-x-3 flex-wrap gap-y-3">
            <Link
              to=""
              className="pt-2 pb-2 pl-7 pr-7 bg-yellow-400 hover:bg-yellow-600 transition duration-300 font-semibold flex items-center gap-x-2"
            >
              <Phone size={16} /> Talk to Sales
            </Link>
            <Link
              to=""
              className="pt-2 pb-2 pl-7 pr-7 bg-black hover:bg-gray-800 transition duration-300 font-semibold text-white flex items-center gap-x-2"
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    );
  };

  // ====== RENDER ======
  return (
    <>
      <PricingHero />
      <PricingCards />
      <ComparisonTable />
      <AddOns />
      <PricingTestimonial />
      <PricingFAQ />
      <PricingCTA />
    </>
  );
};

export default Pricing;
