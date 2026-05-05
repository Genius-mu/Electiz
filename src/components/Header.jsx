import {
  Menu,
  X,
  Phone,
  Mail,
  Zap,
  Search,
  ChevronDown,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Home,
  Building2,
  Lightbulb,
  Wrench,
  ShieldCheck,
  Plug,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const location = useLocation();
  const searchInputRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect scroll for shrink + progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrolled(scrollTop > 30);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setSearchOpen(false);
    setMobileSubmenu(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu / search open
  useEffect(() => {
    document.body.style.overflow = isOpen || searchOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, searchOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  // ESC key closes search/menu
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // ===== Nav structure with dropdowns =====
  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "Our Story", path: "/about", desc: "Learn how we started" },
        { name: "Leadership", path: "/about", desc: "Meet our team" },
        { name: "Careers", path: "/about", desc: "Join our crew" },
      ],
    },
    {
      name: "Service",
      path: "/service",
      megaMenu: [
        {
          icon: <Home size={20} color="red" />,
          name: "Residential",
          desc: "Home wiring & repairs",
          path: "/service",
        },
        {
          icon: <Building2 size={20} color="red" />,
          name: "Commercial",
          desc: "Office & retail spaces",
          path: "/service",
        },
        {
          icon: <Lightbulb size={20} color="red" />,
          name: "Lighting",
          desc: "LED & smart lighting",
          path: "/service",
        },
        {
          icon: <Wrench size={20} color="red" />,
          name: "Repairs",
          desc: "24/7 emergency fixes",
          path: "/service",
        },
        {
          icon: <ShieldCheck size={20} color="red" />,
          name: "Safety Audits",
          desc: "Code compliance checks",
          path: "/service",
        },
        {
          icon: <Plug size={20} color="red" />,
          name: "EV Chargers",
          desc: "Level 2 installations",
          path: "/service",
        },
      ],
    },
    { name: "Project", path: "/project" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  // Search suggestions
  const popularSearches = [
    "Emergency electrician",
    "EV charger installation",
    "Panel upgrade cost",
    "Smart home setup",
    "Lighting installation",
  ];

  // Animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.07 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* ===== TOP UTILITY BAR (hidden on mobile) ===== */}
      <div
        className={`hidden md:flex w-full bg-gradient-to-r from-red-700 to-red-800 text-white text-[12px] justify-center items-center transition-all duration-500 overflow-hidden ${
          scrolled ? "h-0 opacity-0" : "h-[2.4em] opacity-100"
        }`}
      >
        <div className="w-[90%] flex justify-between items-center">
          <div className="flex gap-x-5 items-center">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-x-2 hover:text-yellow-300 transition duration-200"
            >
              <Phone size={13} />
              <span>+1 (555) 123-4567</span>
            </a>
            <a
              href="mailto:support@electiz.com"
              className="flex items-center gap-x-2 hover:text-yellow-300 transition duration-200"
            >
              <Mail size={13} />
              <span>support@electiz.com</span>
            </a>
            <span className="hidden lg:flex items-center gap-x-2">
              <MapPin size={13} />
              <span>Lekki Phase 1, Lagos</span>
            </span>
          </div>
          <div className="flex items-center gap-x-5">
            <span className="hidden lg:flex items-center gap-x-2">
              <Clock size={13} />
              <span>Mon-Sat: 8AM - 8PM</span>
            </span>
            <span className="font-semibold tracking-wider flex items-center gap-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              24/7 Emergency Service
            </span>
            <div className="flex items-center gap-x-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-yellow-300 transition duration-200"
                >
                  <Icon size={12} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <header
        className={`w-full sticky top-0 z-50 flex justify-center items-center transition-all duration-300 ${
          scrolled
            ? "h-[3.8em] bg-white/95 backdrop-blur-md shadow-lg"
            : "h-[4.5em] bg-white shadow-xl"
        }`}
      >
        <div className="flex justify-between items-center w-[90%] h-full">
          {/* ===== LOGO ===== */}
          <Link to="/" className="flex items-center gap-x-2 group">
            <span className="bg-red-600 p-1.5 rounded group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 relative">
              <Zap size={20} color="white" fill="white" />
              <span className="absolute inset-0 bg-red-600 rounded blur-md opacity-0 group-hover:opacity-50 transition duration-300 -z-10"></span>
            </span>
            <h2 className="uppercase font-bold text-2xl [text-shadow:1px_1px_3px_#888] group-hover:text-red-600 transition-colors duration-300">
              electiz
            </h2>
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <nav className="hidden md:flex justify-center items-center gap-x-1">
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              const hasMega = !!link.megaMenu;
              const hasDropdown = !!link.dropdown;
              const hasMenu = hasMega || hasDropdown;

              return (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => hasMenu && setActiveDropdown(link.name)}
                  onMouseLeave={() => hasMenu && setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`relative font-semibold transition duration-200 group flex items-center gap-x-1 px-3 py-2 ${
                      isActive
                        ? "text-red-500"
                        : "text-black/80 hover:text-red-500"
                    }`}
                  >
                    {link.name}
                    {hasMenu && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    <span
                      className={`absolute -bottom-0 left-3 right-3 h-[2px] bg-red-500 transition-all duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      } origin-left`}
                    ></span>
                  </Link>

                  {/* ===== MEGA MENU ===== */}
                  <AnimatePresence>
                    {activeDropdown === link.name && hasMega && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-2xl border border-gray-100 w-[600px] p-6 grid grid-cols-2 gap-3"
                      >
                        {link.megaMenu.map((item, mi) => (
                          <Link
                            key={mi}
                            to={item.path}
                            className="flex items-start gap-x-3 p-3 hover:bg-red-50 transition duration-200 group rounded"
                          >
                            <div className="bg-red-50 group-hover:bg-red-500 p-2 rounded transition duration-300 flex-shrink-0">
                              <div className="group-hover:[&>svg]:stroke-white transition duration-300">
                                {item.icon}
                              </div>
                            </div>
                            <div>
                              <h3 className="font-bold text-black/85 text-[14px] group-hover:text-red-500 transition duration-200">
                                {item.name}
                              </h3>
                              <p className="text-black/55 text-[12px] mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                        <div className="col-span-2 mt-2 pt-4 border-t border-gray-100 flex justify-between items-center">
                          <span className="text-black/60 text-[13px]">
                            View all our services
                          </span>
                          <Link
                            to="/service"
                            className="text-red-500 font-semibold text-[13px] flex items-center gap-x-2 hover:gap-x-3 transition-all duration-300"
                          >
                            Browse all <ArrowRight size={14} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* ===== SIMPLE DROPDOWN ===== */}
                  <AnimatePresence>
                    {activeDropdown === link.name && hasDropdown && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute top-full left-0 mt-2 bg-white shadow-2xl border border-gray-100 w-[260px] py-2"
                      >
                        {link.dropdown.map((item, di) => (
                          <Link
                            key={di}
                            to={item.path}
                            className="block px-4 py-3 hover:bg-red-50 transition duration-200 group"
                          >
                            <h3 className="font-semibold text-black/85 text-[14px] group-hover:text-red-500 transition duration-200">
                              {item.name}
                            </h3>
                            <p className="text-black/55 text-[12px] mt-0.5">
                              {item.desc}
                            </p>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* ===== DESKTOP RIGHT ACTIONS ===== */}
          <div className="hidden md:flex items-center gap-x-3">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="text-black/70 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition duration-200"
            >
              <Search size={18} />
            </button>

            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold pl-5 pr-5 pt-2 pb-2 transition duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-x-2"
            >
              <Phone size={15} />
              Get Quote
            </Link>
          </div>

          {/* ===== MOBILE ACTIONS ===== */}
          <div className="md:hidden flex items-center gap-x-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="text-black/70 hover:text-red-500 p-1 rounded transition duration-200"
            >
              <Search size={22} />
            </button>
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 p-1 rounded transition duration-200"
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
        </div>

        {/* ===== SCROLL PROGRESS BAR ===== */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-100 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-500 to-yellow-400 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </header>

      {/* ===== SEARCH OVERLAY ===== */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60]"
            />
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 right-0 bg-white z-[61] shadow-2xl"
            >
              <div className="w-[90%] max-w-[800px] mx-auto py-8">
                <div className="flex items-center gap-x-3 border-b-2 border-red-500 pb-3">
                  <Search size={24} color="red" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services, articles, FAQs..."
                    className="flex-1 text-lg outline-none bg-transparent text-black/85"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    aria-label="Close search"
                    className="text-black/50 hover:text-red-500 transition duration-200"
                  >
                    <X size={22} />
                  </button>
                </div>

                <div className="mt-6">
                  <p className="text-black/50 text-[12px] uppercase tracking-wider font-semibold mb-3">
                    Popular Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((term, i) => (
                      <button
                        key={i}
                        onClick={() => setSearchQuery(term)}
                        className="bg-gray-100 hover:bg-red-500 hover:text-white text-black/75 transition duration-200 px-4 py-2 text-[13px] rounded-full"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-black/40 text-[12px] flex items-center gap-x-2">
                    <kbd className="bg-gray-100 px-2 py-1 rounded text-[11px] font-mono">
                      ESC
                    </kbd>
                    Press to close
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ===== MOBILE MENU OVERLAY + DRAWER ===== */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-[4.5em] left-0 w-full bg-white shadow-2xl md:hidden flex flex-col items-center py-6 gap-1 z-40 max-h-[calc(100vh-4.5em)] overflow-y-auto"
            >
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                const hasSubmenu = link.dropdown || link.megaMenu;
                const submenu = link.dropdown || link.megaMenu;
                const isSubOpen = mobileSubmenu === link.name;

                return (
                  <motion.div
                    key={index}
                    variants={mobileLinkVariants}
                    className="w-[90%]"
                  >
                    {hasSubmenu ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileSubmenu(isSubOpen ? null : link.name)
                          }
                          className={`flex justify-between items-center w-full text-left py-3 font-semibold border-b border-gray-100 transition-colors duration-200 px-3 ${
                            isActive
                              ? "text-red-600 bg-red-50"
                              : "text-black/80 hover:text-red-600"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${
                              isSubOpen ? "rotate-180 text-red-500" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isSubOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden bg-red-50/30"
                            >
                              {submenu.map((item, si) => (
                                <Link
                                  key={si}
                                  to={item.path}
                                  onClick={() => setIsOpen(false)}
                                  className="px-6 py-2.5 text-[14px] text-black/70 hover:text-red-500 hover:bg-red-50 transition duration-200 border-b border-gray-100 last:border-b-0 flex items-center gap-x-3"
                                >
                                  {item.icon && (
                                    <span className="flex-shrink-0">
                                      {item.icon}
                                    </span>
                                  )}
                                  <span>{item.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block w-full py-3 font-semibold border-b border-gray-100 transition-colors duration-200 px-3 ${
                          isActive
                            ? "text-red-600 bg-red-50"
                            : "text-black/80 hover:text-red-600 hover:bg-red-50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                );
              })}

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

              <motion.div
                variants={mobileLinkVariants}
                className="w-[90%] pt-4 flex flex-col gap-y-2 text-center text-[13px] text-black/60"
              >
                <a
                  href="tel:+15551234567"
                  className="flex items-center justify-center gap-x-2 hover:text-red-500 transition duration-200"
                >
                  <Phone size={13} color="red" />
                  +1 (555) 123-4567
                </a>
                <a
                  href="mailto:support@electiz.com"
                  className="flex items-center justify-center gap-x-2 hover:text-red-500 transition duration-200"
                >
                  <Mail size={13} color="red" />
                  support@electiz.com
                </a>
              </motion.div>

              <motion.div
                variants={mobileLinkVariants}
                className="w-[90%] pt-4 flex justify-center gap-x-3"
              >
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-gray-100 hover:bg-red-500 hover:text-white p-2 rounded-full transition duration-200"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
