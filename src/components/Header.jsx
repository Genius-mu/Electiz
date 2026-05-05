import { Menu, X, Phone, Mail, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect scroll to add background blur / shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Project", path: "/project" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  // Animation for mobile menu container
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.07 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  // Animation for individual mobile links
  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* ===== TOP UTILITY BAR (hidden on mobile) ===== */}
      <div
        className={`hidden md:flex w-full bg-red-700 text-white text-[12px] justify-center items-center transition-all duration-500 overflow-hidden ${
          scrolled ? "h-0 opacity-0" : "h-[2.2em] opacity-100"
        }`}
      >
        <div className="w-[90%] flex justify-between items-center">
          <div className="flex gap-x-5 items-center">
            <span className="flex items-center gap-x-2">
              <Phone size={13} />
              <span>+1 (555) 123-4567</span>
            </span>
            <span className="flex items-center gap-x-2">
              <Mail size={13} />
              <span>support@electiz.com</span>
            </span>
          </div>
          <span className="font-semibold tracking-wider">
            24/7 Emergency Service Available
          </span>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <header
        className={`w-full sticky top-0 z-50 flex justify-center items-center transition-all duration-300 ${
          scrolled
            ? "h-[3.5em] bg-white/95 backdrop-blur-md shadow-lg"
            : "h-[4.5em] bg-white shadow-xl"
        }`}
      >
        <div className="flex justify-between items-center w-[90%] h-full">
          {/* ===== LOGO ===== */}
          <Link to="/" className="flex items-center gap-x-2 group">
            <span className="bg-red-600 p-1.5 rounded group-hover:rotate-12 transition-transform duration-300">
              <Zap size={20} color="white" fill="white" />
            </span>
            <h2 className="uppercase font-bold text-2xl [text-shadow:1px_1px_3px_#888] group-hover:text-red-600 transition-colors duration-300">
              electiz
            </h2>
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <nav className="hidden md:flex justify-center items-center gap-x-6">
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={i}
                  to={link.path}
                  className={`relative font-semibold transition duration-200 group ${
                    isActive
                      ? "text-red-500"
                      : "text-black/80 hover:text-red-500"
                  }`}
                >
                  {link.name}
                  {/* Animated underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-red-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* ===== DESKTOP CTA BUTTON ===== */}
          <Link
            to="/contact"
            className="hidden md:flex bg-red-600 hover:bg-red-700 text-white font-semibold pl-5 pr-5 pt-2 pb-2 transition duration-300 hover:shadow-lg hover:scale-105 items-center gap-x-2"
          >
            <Phone size={15} />
            Get Quote
          </Link>

          {/* ===== MOBILE HAMBURGER ===== */}
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 p-1 rounded transition duration-200"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* ===== MOBILE MENU OVERLAY + DRAWER ===== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Mobile Drawer */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-[4.5em] left-0 w-full bg-white shadow-2xl md:hidden flex flex-col items-center py-8 gap-2 z-40"
            >
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={index}
                    variants={mobileLinkVariants}
                    className="w-[90%]"
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block w-full text-center py-3 font-semibold border-b border-gray-100 transition-colors duration-200 ${
                        isActive
                          ? "text-red-600 bg-red-50"
                          : "text-black/80 hover:text-red-600 hover:bg-red-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile CTA */}
              <motion.div
                variants={mobileLinkVariants}
                className="w-[90%] pt-4"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 transition duration-300 flex items-center justify-center gap-x-2 w-full"
                >
                  <Phone size={16} />
                  Get a Free Quote
                </Link>
              </motion.div>

              {/* Mobile Contact Info */}
              <motion.div
                variants={mobileLinkVariants}
                className="w-[90%] pt-4 flex flex-col gap-y-2 text-center text-[13px] text-black/60"
              >
                <span className="flex items-center justify-center gap-x-2">
                  <Phone size={13} color="red" />
                  +1 (555) 123-4567
                </span>
                <span className="flex items-center justify-center gap-x-2">
                  <Mail size={13} color="red" />
                  support@electiz.com
                </span>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
