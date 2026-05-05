import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  Zap,
  ArrowUp,
  Shield,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show "back to top" button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <>
      {/* ============ NEWSLETTER STRIP ============ */}
      <section className="w-full bg-gradient-to-r from-red-600 to-red-800 py-10 flex justify-center items-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-yellow-400/10 rounded-full blur-3xl"></div>

        <div className="w-[90%] flex flex-col md:flex-row justify-between items-center gap-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center md:text-left"
          >
            <h2 className="font-bold text-2xl md:text-3xl text-white mb-1">
              Stay charged with our newsletter
            </h2>
            <p className="text-white/80 text-[14px]">
              Get tips, special offers, and electrical safety updates delivered
              to your inbox.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-y-2 w-full md:w-auto"
          >
            <div className="flex w-full md:w-[400px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-[14px] focus:outline-none bg-white text-black/80"
              />
              <button
                onClick={handleSubscribe}
                className="bg-yellow-400 hover:bg-yellow-500 transition duration-300 px-5 font-semibold text-black flex items-center gap-x-2"
              >
                <Send size={16} />{" "}
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </div>
            <AnimatePresence>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-yellow-300 text-[13px] flex items-center gap-x-2"
                >
                  <CheckCircle2 size={14} /> Thanks for subscribing! Check your
                  inbox.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ============ MAIN FOOTER ============ */}
      <footer className="w-full h-fit pt-[5%] bg-black/95 pb-[3%] flex justify-center items-center relative overflow-hidden">
        {/* Background decorative gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-[90%] gap-y-10 gap-x-8 h-full relative z-10">
          {/* ===== Column 1: Brand ===== */}
          <div className="flex flex-col gap-y-5">
            <Link to="/" className="flex items-center gap-x-2 group w-fit">
              <span className="bg-red-600 p-1.5 rounded group-hover:rotate-12 transition-transform duration-300">
                <Zap size={20} color="white" fill="white" />
              </span>
              <h2 className="lowercase font-bold text-2xl text-white">
                Electiz
              </h2>
            </Link>
            <p className="text-white/70 max-w-[300px] text-[14px] leading-7">
              Powering homes and businesses with reliable, code-compliant
              electrical services for over 25 years. Your trusted local
              electrical experts.
            </p>

            {/* Certifications */}
            <div className="flex flex-col gap-y-2 pt-3 border-t border-white/10">
              <p className="text-white/50 text-[12px] uppercase tracking-wider font-semibold">
                Certified & Trusted
              </p>
              <div className="flex gap-x-3">
                <div className="bg-white/10 hover:bg-white/20 transition duration-300 p-2 rounded flex items-center gap-x-2">
                  <Shield size={16} color="#facc15" />
                  <span className="text-white/80 text-[11px] font-semibold">
                    Licensed
                  </span>
                </div>
                <div className="bg-white/10 hover:bg-white/20 transition duration-300 p-2 rounded flex items-center gap-x-2">
                  <Award size={16} color="#facc15" />
                  <span className="text-white/80 text-[11px] font-semibold">
                    Insured
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col gap-y-2 pt-2">
              <p className="text-white/50 text-[12px] uppercase tracking-wider font-semibold">
                Follow Us
              </p>
              <div className="flex gap-x-2">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Youtube, label: "YouTube" },
                ].map(({ Icon, label }, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={label}
                    className="bg-white/10 hover:bg-red-600 hover:scale-110 transition-all duration-300 p-2.5 rounded-full"
                  >
                    <Icon size={15} color="white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ===== Column 2: Company ===== */}
          <div className="flex flex-col gap-y-3">
            <h2 className="font-bold text-xl text-white relative pb-3 mb-2">
              Company
              <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-red-500"></span>
            </h2>
            <nav className="flex flex-col gap-y-3">
              {[
                "About Us",
                "Leadership",
                "Careers",
                "Article and News",
                "Legal Notice",
              ].map((item, i) => (
                <Link
                  key={i}
                  to=""
                  className="text-white/70 hover:text-yellow-300 hover:translate-x-1 transition-all duration-200 text-[14px] flex items-center gap-x-2 group"
                >
                  <ArrowRight
                    size={12}
                    className="text-red-500 opacity-0 group-hover:opacity-100 transition duration-200"
                  />
                  <span className="-ml-5 group-hover:ml-0 transition-all duration-200">
                    {item}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* ===== Column 3: Support ===== */}
          <div className="flex flex-col gap-y-3">
            <h2 className="font-bold text-xl text-white relative pb-3 mb-2">
              Support
              <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-red-500"></span>
            </h2>
            <nav className="flex flex-col gap-y-3">
              {[
                "Service Request",
                "FAQ",
                "Consultations",
                "Ticket Support",
                "Contact Us",
              ].map((item, i) => (
                <Link
                  key={i}
                  to=""
                  className="text-white/70 hover:text-yellow-300 hover:translate-x-1 transition-all duration-200 text-[14px] flex items-center gap-x-2 group"
                >
                  <ArrowRight
                    size={12}
                    className="text-red-500 opacity-0 group-hover:opacity-100 transition duration-200"
                  />
                  <span className="-ml-5 group-hover:ml-0 transition-all duration-200">
                    {item}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Business Hours */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-white/50 text-[12px] uppercase tracking-wider font-semibold flex items-center gap-x-2 mb-2">
                <Clock size={12} /> Business Hours
              </p>
              <p className="text-white/70 text-[12px]">Mon-Sat: 8AM - 8PM</p>
              <p className="text-red-400 text-[12px] font-semibold">
                24/7 Emergency Service
              </p>
            </div>
          </div>

          {/* ===== Column 4: Contact ===== */}
          <div className="flex flex-col gap-y-3">
            <h2 className="font-bold text-xl text-white relative pb-3 mb-2">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-red-500"></span>
            </h2>
            <nav className="flex flex-col gap-y-4">
              <div className="flex gap-x-3 items-start group">
                <div className="bg-white/10 group-hover:bg-red-600 transition duration-300 p-2 rounded flex-shrink-0">
                  <MapPin size={16} color="#facc15" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/50 text-[11px] uppercase tracking-wider">
                    Address
                  </span>
                  <a
                    href="#"
                    className="text-white/80 hover:text-yellow-300 transition duration-200 text-[13px]"
                  >
                    Abule-Egba, Lagos, Nigeria
                  </a>
                </div>
              </div>

              <div className="flex gap-x-3 items-start group">
                <div className="bg-white/10 group-hover:bg-red-600 transition duration-300 p-2 rounded flex-shrink-0">
                  <Mail size={16} color="#facc15" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/50 text-[11px] uppercase tracking-wider">
                    Email
                  </span>
                  <a
                    href="mailto:adegbitemustapha73@gmail.com"
                    className="text-white/80 hover:text-yellow-300 transition duration-200 text-[13px] break-all"
                  >
                    mustapha@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-x-3 items-start group">
                <div className="bg-white/10 group-hover:bg-red-600 transition duration-300 p-2 rounded flex-shrink-0">
                  <Phone size={16} color="#facc15" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/50 text-[11px] uppercase tracking-wider">
                    Phone
                  </span>
                  <a
                    href="tel:08020666256"
                    className="text-white/80 hover:text-yellow-300 transition duration-200 text-[13px]"
                  >
                    08020666256
                  </a>
                </div>
              </div>
            </nav>

            {/* Quick CTA */}
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 transition duration-300 text-white font-semibold py-2.5 px-5 mt-3 w-fit flex items-center gap-x-2 text-[13px]"
            >
              Get a Free Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </footer>

      {/* ============ BOTTOM BAR ============ */}
      <div className="w-full bg-black border-t border-white/10 py-5 flex justify-center items-center">
        <div className="w-[90%] flex flex-col md:flex-row justify-between items-center gap-y-3 text-center md:text-left">
          <p className="text-white/50 text-[13px]">
            © {new Date().getFullYear()} Electiz. All rights reserved. Built
            with passion in Lagos.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[13px]">
            <Link
              to=""
              className="text-white/50 hover:text-yellow-300 transition duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to=""
              className="text-white/50 hover:text-yellow-300 transition duration-200"
            >
              Terms of Service
            </Link>
            <Link
              to=""
              className="text-white/50 hover:text-yellow-300 transition duration-200"
            >
              Cookie Policy
            </Link>
            <Link
              to=""
              className="text-white/50 hover:text-yellow-300 transition duration-200"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* ============ BACK TO TOP BUTTON ============ */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-2xl z-50 hover:scale-110 transition-all duration-300"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
