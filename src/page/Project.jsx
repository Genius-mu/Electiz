import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Calendar,
  Tag,
  Award,
  CheckCircle2,
  Quote,
  Star,
  Eye,
  Phone,
  Building2,
  Home,
  Factory,
  Lightbulb,
} from "lucide-react";

const Project = () => {
  // ====== PROJECT HERO ======
  const ProjectHero = () => {
    return (
      <section className="sec1 w-full h-fit pt-[20%] sm:pt-[10%] pb-[25%] sm:pb-[15%] flex justify-center items-center bg-gradient-to-br from-black/85 via-black/70 to-red-900/70 relative overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-20 w-32 h-32 bg-red-500/20 rounded-full blur-2xl"
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
              Our Projects
            </h3>
            <h2 className="font-bold text-3xl sm:text-5xl max-w-[600px] [text-shadow:1px_1px_2px_#000] text-white">
              Powering homes, businesses, and dreams since 1999
            </h2>
            <p className="text-white max-w-[500px] text-[13px] sm:text-[15px] [text-shadow:1px_1px_2px_#000]">
              Take a look at some of our recent work — from residential rewires
              to large-scale commercial fit-outs. Every project is a story of
              trust, precision, and craftsmanship.
            </p>
            <div className="flex gap-x-3 flex-wrap gap-y-3 justify-center sm:justify-start">
              <Link
                to=""
                className="text-white bg-red-700 w-fit pt-2 pb-2 pl-8 pr-8 rounded hover:bg-red-600 transition duration-300 flex items-center gap-x-2"
              >
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link
                to=""
                className="text-white bg-transparent border-2 border-white w-fit pt-2 pb-2 pl-8 pr-8 rounded hover:bg-white hover:text-black transition duration-300"
              >
                View Gallery
              </Link>
            </div>
          </motion.span>
        </div>
      </section>
    );
  };

  // ====== STATS BAR (overlaps hero) ======
  const ProjectStats = () => {
    const [stats] = useState([
      {
        icon: <Award size={28} color="red" />,
        value: "10K+",
        label: "Projects Completed",
      },
      {
        icon: <Home size={28} color="red" />,
        value: "5K+",
        label: "Residential Jobs",
      },
      {
        icon: <Building2 size={28} color="red" />,
        value: "1.2K+",
        label: "Commercial Builds",
      },
      {
        icon: <Star size={28} color="red" />,
        value: "4.9/5",
        label: "Client Rating",
      },
    ]);

    return (
      <section className="w-full h-fit pb-[4%] z-30 flex justify-center items-center">
        <div className="bg-white shadow-2xl z-30 w-[90%] sm:mt-[-5em] mt-9 grid grid-cols-2 md:grid-cols-4 gap-0 overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`flex flex-col items-center justify-center gap-2 p-7 ${
                i < stats.length - 1 ? "md:border-r border-gray-200" : ""
              } ${i < 2 ? "border-b md:border-b-0 border-gray-200" : ""}`}
            >
              {s.icon}
              <h2 className="font-bold text-2xl sm:text-3xl text-red-500">
                {s.value}
              </h2>
              <p className="text-black/60 text-[13px] text-center">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

  // ====== FILTERABLE PORTFOLIO GALLERY ======
  const ProjectGallery = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = [
      "All",
      "Residential",
      "Commercial",
      "Industrial",
      "Smart Home",
    ];

    const projects = [
      {
        category: "Residential",
        title: "Modern Family Home Rewire",
        location: "Maple Avenue, Lagos",
        date: "March 2025",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        tag: "Full Rewire",
      },
      {
        category: "Commercial",
        title: "Downtown Office Fit-Out",
        location: "Victoria Island",
        date: "February 2025",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
        tag: "Fit-Out",
      },
      {
        category: "Industrial",
        title: "Warehouse Power Upgrade",
        location: "Apapa Industrial Zone",
        date: "January 2025",
        img: "https://images.unsplash.com/photo-1565891741441-64926e441838?w=800",
        tag: "Power Upgrade",
      },
      {
        category: "Smart Home",
        title: "Luxury Smart Villa",
        location: "Banana Island",
        date: "December 2024",
        img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800",
        tag: "Smart Integration",
      },
      {
        category: "Residential",
        title: "Heritage Home Restoration",
        location: "Ikoyi",
        date: "November 2024",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        tag: "Restoration",
      },
      {
        category: "Commercial",
        title: "Retail Chain Lighting",
        location: "Lekki Phase 1",
        date: "October 2024",
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
        tag: "LED Upgrade",
      },
      {
        category: "Industrial",
        title: "Factory Floor Wiring",
        location: "Ogun State",
        date: "September 2024",
        img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
        tag: "Industrial Wiring",
      },
      {
        category: "Smart Home",
        title: "EV Charging Station Install",
        location: "Lekki",
        date: "August 2024",
        img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800",
        tag: "EV Charger",
      },
    ];

    const filtered =
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter);

    return (
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center">
        <div className="flex justify-center flex-col gap-y-8 items-center w-[90%] h-full">
          <div className="flex flex-col gap-y-2 w-full justify-center items-center">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999]">
              recent work
            </h3>
            <h2 className="font-bold text-2xl sm:text-4xl text-black/92 max-w-[600px] text-center">
              A portfolio built on quality and trust
            </h2>
            <p className="text-black/60 max-w-[600px] text-center text-[14px] mt-2">
              Browse some of our latest projects across residential, commercial,
              and industrial sectors.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 font-semibold text-[14px] transition duration-300 ${
                  activeFilter === filter
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-white text-black/70 border border-gray-200 hover:border-red-500 hover:text-red-500"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full"
          >
            <AnimatePresence>
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 cursor-pointer bg-white"
                >
                  {/* Image */}
                  <div className="w-full h-[20em] overflow-hidden relative">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-700"
                    />
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-95 transition duration-500"></div>

                    {/* Tag (top-left) */}
                    <span className="absolute top-4 left-4 bg-red-500 text-white text-[11px] font-semibold px-3 py-1 flex items-center gap-x-1">
                      <Tag size={11} /> {project.tag}
                    </span>

                    {/* View icon (top-right, appears on hover) */}
                    <div className="absolute top-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={16} color="red" />
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-2 group-hover:translate-y-0 transition duration-500">
                      <p className="text-red-400 text-[12px] font-semibold uppercase tracking-wider mb-1">
                        {project.category}
                      </p>
                      <h2 className="font-bold text-xl mb-2 leading-tight">
                        {project.title}
                      </h2>
                      <div className="flex flex-col gap-y-1 text-[12px] text-white/80 max-h-0 group-hover:max-h-[100px] overflow-hidden transition-all duration-500">
                        <span className="flex items-center gap-x-2">
                          <MapPin size={12} /> {project.location}
                        </span>
                        <span className="flex items-center gap-x-2">
                          <Calendar size={12} /> {project.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-black/60 py-10">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>
    );
  };

  // ====== FEATURED CASE STUDY ======
  const FeaturedProject = () => {
    return (
      <section className="w-full h-fit pt-[5%] pb-[5%] flex justify-center items-center bg-black/2">
        <div className="flex justify-center flex-col sm:flex-row items-center w-[90%] h-full gap-x-0">
          <div className="w-full sm:w-[50%] h-[32em] overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200"
              alt="Featured Project"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute top-5 left-5 bg-red-500 text-white px-4 py-2 font-semibold text-[13px] flex items-center gap-x-2">
              <Award size={14} /> CASE STUDY
            </div>
          </div>
          <div className="w-full z-30 sm:w-[50%] flex flex-col gap-y-4 pt-5 sm:p-9 bg-white h-full sm:mt-[5em] sm:ml-[-4em] shadow-xl">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999]">
              featured project
            </h3>
            <h2 className="font-bold xl:text-4xl text-black/90">
              Tech HQ complete electrical overhaul
            </h2>
            <p className="text-black/60 text-[13px] sm:text-[15px]">
              When a leading tech firm needed a complete electrical overhaul of
              their 12,000 sq ft headquarters, they trusted us to deliver
              on-time and on-budget. We installed smart panels, LED lighting,
              backup generators, and a fully integrated EV charging network.
            </p>

            {/* Project specs */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { label: "Duration", value: "8 weeks" },
                { label: "Team Size", value: "12 electricians" },
                { label: "Square Footage", value: "12,000 sq ft" },
                { label: "Completion", value: "On-time" },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-red-500 pl-3 py-1">
                  <p className="text-[11px] uppercase text-black/50 font-semibold tracking-wider">
                    {item.label}
                  </p>
                  <p className="font-bold text-black/85">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-y-2 mt-2">
              <span className="flex items-center gap-x-2 text-[14px] text-black/70">
                <CheckCircle2 size={15} color="red" /> Smart panel integration
              </span>
              <span className="flex items-center gap-x-2 text-[14px] text-black/70">
                <CheckCircle2 size={15} color="red" /> 200+ LED fixtures
                installed
              </span>
              <span className="flex items-center gap-x-2 text-[14px] text-black/70">
                <CheckCircle2 size={15} color="red" /> Zero downtime during
                install
              </span>
            </div>

            <Link
              to=""
              className="text-white text-[13px] sm:text-[15px] bg-red-500 w-fit pt-2 pb-2 pl-8 pr-8 hover:bg-red-600 transition duration-300 mt-3 flex items-center gap-x-2"
            >
              Read Case Study <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    );
  };

  // ====== CLIENT TESTIMONIALS CAROUSEL ======
  const ProjectTestimonials = () => {
    const [active, setActive] = useState(0);

    const testimonials = [
      {
        quote:
          "The team rewired our entire home in record time. Professional, clean, and the lights have never worked better. Worth every penny.",
        name: "Adaeze Okonkwo",
        role: "Homeowner, Ikoyi",
        rating: 5,
      },
      {
        quote:
          "Our office fit-out was complex, but Electiz handled it like pros. Zero downtime during the switch-over. Genuinely impressed.",
        name: "Marcus Chen",
        role: "Operations Director, TechFirm Ltd",
        rating: 5,
      },
      {
        quote:
          "From the first call to the final inspection, everything was transparent and on schedule. They saved us from a major safety hazard.",
        name: "Tunde Bakare",
        role: "Restaurant Owner, Lekki",
        rating: 5,
      },
    ];

    return (
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center">
        <div className="flex flex-col gap-y-8 items-center w-[90%] h-full">
          <div className="flex flex-col gap-y-2 w-full justify-center items-center">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999]">
              client voices
            </h3>
            <h2 className="font-bold text-2xl sm:text-4xl text-black/92 max-w-[550px] text-center">
              What our clients say about their projects
            </h2>
          </div>

          <div className="w-full max-w-[800px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-2xl p-8 sm:p-12 flex flex-col items-center gap-y-5 text-center border-b-4 border-red-500"
              >
                <Quote size={45} color="red" className="opacity-30" />

                <div className="flex gap-x-1">
                  {[...Array(testimonials[active].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#facc15" stroke="#facc15" />
                  ))}
                </div>

                <p className="text-black/75 text-[15px] sm:text-[17px] leading-8 italic max-w-[600px]">
                  {testimonials[active].quote}
                </p>

                <div className="flex flex-col items-center gap-y-1 pt-3 border-t border-gray-100 w-full">
                  <h2 className="font-bold text-black/85">
                    {testimonials[active].name}
                  </h2>
                  <p className="text-black/55 text-[13px]">
                    {testimonials[active].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-x-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === i ? "w-8 bg-red-500" : "w-2 bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // ====== INDUSTRIES WE SERVE ======
  const IndustriesServed = () => {
    const [industries] = useState([
      {
        icon: <Home size={35} color="red" />,
        h2Val: "Residential",
        pVal: "Single-family homes, apartments, and luxury villas with full electrical solutions.",
        count: "5,000+",
      },
      {
        icon: <Building2 size={35} color="red" />,
        h2Val: "Commercial",
        pVal: "Offices, retail stores, restaurants, and hospitality venues across the region.",
        count: "1,200+",
      },
      {
        icon: <Factory size={35} color="red" />,
        h2Val: "Industrial",
        pVal: "Factories, warehouses, and heavy-duty industrial sites with high-power requirements.",
        count: "800+",
      },
      {
        icon: <Lightbulb size={35} color="red" />,
        h2Val: "Smart Home",
        pVal: "Modern automated homes with integrated lighting, security, and energy management.",
        count: "600+",
      },
    ]);

    return (
      <section className="w-full h-fit bg-black/2 pb-[5%] pt-[5%] flex justify-center items-center">
        <div className="flex flex-col gap-y-8 items-center w-[90%]">
          <div className="flex flex-col gap-y-2 w-full justify-center items-center">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999]">
              industries we power
            </h3>
            <h2 className="font-bold text-2xl sm:text-4xl text-black/92 max-w-[550px] text-center">
              Trusted across every sector
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-7 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col gap-y-3 group cursor-pointer relative overflow-hidden"
              >
                {/* Hover red bar */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-red-500 group-hover:w-full transition-all duration-500"></div>

                {ind.icon}
                <h2 className="font-bold text-xl text-black/85 group-hover:text-red-500 transition duration-300">
                  {ind.h2Val}
                </h2>
                <p className="text-black/60 text-[14px] leading-7">
                  {ind.pVal}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                  <span className="font-bold text-2xl text-red-500">
                    {ind.count}
                  </span>
                  <span className="text-[12px] text-black/50">
                    Projects done
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // ====== CTA BANNER ======
  const ProjectCTA = () => {
    return (
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center">
        <div className="flex pl-10 pr-10 p-7 flex-col sm:flex-row justify-between bg-gradient-to-r from-yellow-600 to bg-red-700 gap-y-8 items-center w-[90%] h-full">
          <h2 className="text-black/92 font-bold text-[17px] max-w-[200px] sm:text-2xl sm:max-w-[400px] md:max-w-[500px] md:text-3xl xl:text-4xl xl:max-w-[600px]">
            Have a project in mind? Let's bring it to life together.
          </h2>
          <div className="flex gap-x-3 flex-wrap gap-y-3">
            <Link
              to=""
              className="pt-2 pb-2 pl-7 pr-7 bg-yellow-400 hover:bg-yellow-600 transition duration-300 font-semibold flex items-center gap-x-2"
            >
              <Phone size={16} /> Get a Quote
            </Link>
            <Link
              to=""
              className="pt-2 pb-2 pl-7 pr-7 bg-black hover:bg-gray-800 transition duration-300 font-semibold text-white flex items-center gap-x-2"
            >
              <Eye size={16} /> View More
            </Link>
          </div>
        </div>
      </section>
    );
  };

  // ====== RENDER ======
  return (
    <>
      <ProjectHero />
      <ProjectStats />
      <ProjectGallery />
      <FeaturedProject />
      <ProjectTestimonials />
      <IndustriesServed />
      <ProjectCTA />
    </>
  );
};

export default Project;
