import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  CheckCircle2,
  Plus,
  Minus,
  AlertCircle,
  Headphones,
  Briefcase,
  Loader2,
} from "lucide-react";

const Contact = () => {
  // ====== CONTACT HERO ======
  const ContactHero = () => {
    return (
      <section className="sec1 w-full h-fit pt-[20%] sm:pt-[10%] pb-[25%] sm:pb-[15%] flex justify-center items-center bg-gradient-to-br from-black/85 via-black/70 to-red-900/70 relative overflow-hidden">
        {/* Decorative animated elements */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-10 right-10 w-52 h-52 bg-red-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"
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
              Contact Us
            </h3>
            <h2 className="font-bold text-3xl sm:text-5xl max-w-[600px] [text-shadow:1px_1px_2px_#000] text-white">
              Let's get in touch and power your next project
            </h2>
            <p className="text-white max-w-[500px] text-[13px] sm:text-[15px] [text-shadow:1px_1px_2px_#000]">
              Have a question, need a quote, or facing an emergency? Our team is
              ready to help. Reach out through any channel and we'll get back to
              you within 24 hours.
            </p>
            <div className="flex gap-x-3 flex-wrap gap-y-3 justify-center sm:justify-start">
              <a
                href="tel:+15551234567"
                className="text-white bg-red-700 w-fit pt-2 pb-2 pl-8 pr-8 rounded hover:bg-red-600 transition duration-300 flex items-center gap-x-2"
              >
                <Phone size={16} /> Call Now
              </a>
              <a
                href="mailto:support@electiz.com"
                className="text-white bg-transparent border-2 border-white w-fit pt-2 pb-2 pl-8 pr-8 rounded hover:bg-white hover:text-black transition duration-300 flex items-center gap-x-2"
              >
                <Mail size={16} /> Email Us
              </a>
            </div>
          </motion.span>
        </div>
      </section>
    );
  };

  // ====== CONTACT INFO CARDS ======
  const ContactCards = () => {
    const [cards] = useState([
      {
        icon: <Phone size={28} color="white" />,
        h2Val: "Phone",
        pVal: "Available 24/7 for emergencies",
        info: "+1 (555) 123-4567",
        link: "tel:+15551234567",
        action: "Call now",
      },
      {
        icon: <Mail size={28} color="white" />,
        h2Val: "Email",
        pVal: "We reply within 24 hours",
        info: "support@electiz.com",
        link: "mailto:support@electiz.com",
        action: "Send email",
      },
      {
        icon: <MapPin size={28} color="white" />,
        h2Val: "Office",
        pVal: "Visit us during business hours",
        info: "123 Lekki Phase 1, Lagos",
        link: "#map",
        action: "Get directions",
      },
      {
        icon: <Clock size={28} color="white" />,
        h2Val: "Working Hours",
        pVal: "Mon - Sat",
        info: "8:00 AM - 8:00 PM",
        link: "#hours",
        action: "View schedule",
      },
    ]);

    return (
      <section className="w-full h-fit pb-[4%] flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 w-[90%] sm:mt-[-5em] mt-9">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white shadow-2xl p-7 flex flex-col gap-y-3 group hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Hover red bar */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-red-500 group-hover:w-full transition-all duration-500"></div>

              <div className="bg-red-500 w-fit p-3 rounded-full group-hover:rotate-12 transition duration-300">
                {card.icon}
              </div>
              <h2 className="font-bold text-xl text-black/85">{card.h2Val}</h2>
              <p className="text-black/55 text-[13px]">{card.pVal}</p>
              <p className="font-semibold text-black/85 text-[14px]">
                {card.info}
              </p>
              <a
                href={card.link}
                className="flex items-center gap-x-2 text-red-500 font-semibold text-[13px] mt-auto pt-3 hover:gap-x-3 transition-all duration-300"
              >
                {card.action} <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

  // ====== CONTACT FORM + INFO ======
  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle, sending, success

    const services = [
      "Residential Wiring",
      "Commercial Services",
      "Emergency Repairs",
      "Lighting Solutions",
      "Panel Upgrades",
      "EV Charger Installation",
      "Other",
    ];

    const validate = () => {
      const e = {};
      if (!formData.name.trim()) e.name = "Please enter your name";
      if (!formData.email.trim()) e.email = "Please enter your email";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        e.email = "Please enter a valid email";
      if (!formData.message.trim()) e.message = "Please enter a message";
      setErrors(e);
      return Object.keys(e).length === 0;
    };

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      if (errors[e.target.name]) {
        setErrors({ ...errors, [e.target.name]: "" });
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!validate()) return;

      setStatus("sending");
      // Simulate API call
      setTimeout(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        // Reset success state after 4 seconds
        setTimeout(() => setStatus("idle"), 4000);
      }, 1500);
    };

    return (
      <section className="w-full h-fit pt-[5%] pb-[5%] flex justify-center items-center">
        <div className="flex justify-center flex-col md:flex-row items-stretch w-[90%] gap-x-0 gap-y-8">
          {/* Left side — info panel */}
          <div className="w-full md:w-[40%] bg-gradient-to-br from-red-600 to-red-800 p-8 sm:p-10 text-white flex flex-col gap-y-5 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/5 rounded-full"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>

            <div className="relative z-10 flex flex-col gap-y-5">
              <h3 className="uppercase font-semibold text-red-200 tracking-widest text-[13px]">
                Get in touch
              </h3>
              <h2 className="font-bold text-2xl sm:text-3xl">
                Send us a message and we'll respond shortly
              </h2>
              <p className="text-white/80 text-[14px] leading-7">
                Fill out the form and our team will reach out within 24 hours.
                For urgent matters, please call our 24/7 emergency line.
              </p>

              <div className="flex flex-col gap-y-4 mt-4 pt-5 border-t border-white/20">
                <div className="flex items-start gap-x-3">
                  <div className="bg-white/20 p-2 rounded-full flex-shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-white/70 text-[12px]">Phone</p>
                    <p className="font-semibold text-[14px]">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-x-3">
                  <div className="bg-white/20 p-2 rounded-full flex-shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-white/70 text-[12px]">Email</p>
                    <p className="font-semibold text-[14px]">
                      support@electiz.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-x-3">
                  <div className="bg-white/20 p-2 rounded-full flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-white/70 text-[12px]">Address</p>
                    <p className="font-semibold text-[14px]">
                      123 Lekki Phase 1, Lagos
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-5 border-t border-white/20 mt-2">
                <p className="text-[13px] text-white/70 mb-3">Follow us</p>
                <div className="flex gap-x-3">
                  {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="bg-white/10 hover:bg-white hover:text-red-600 p-2 rounded-full transition duration-300"
                      >
                        <Icon size={16} />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right side — form */}
          <div className="w-full md:w-[60%] bg-white p-8 sm:p-10 shadow-xl">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999] text-[13px] mb-2">
              contact form
            </h3>
            <h2 className="font-bold xl:text-3xl text-2xl text-black/90 mb-6">
              How can we help you today?
            </h2>

            {/* Success message */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-green-50 border-l-4 border-green-500 p-4 mb-5 flex items-center gap-x-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-green-600 flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-green-800 text-[14px]">
                      Message sent successfully!
                    </p>
                    <p className="text-green-700 text-[13px]">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col gap-y-5">
              {/* Name & Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-y-1">
                  <label className="text-[13px] font-semibold text-black/75 flex items-center gap-x-2">
                    <User size={14} /> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`border-2 ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    } p-3 text-[14px] focus:outline-none focus:border-red-500 transition duration-200`}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-[12px] flex items-center gap-x-1">
                      <AlertCircle size={12} /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-y-1">
                  <label className="text-[13px] font-semibold text-black/75 flex items-center gap-x-2">
                    <Mail size={14} /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`border-2 ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } p-3 text-[14px] focus:outline-none focus:border-red-500 transition duration-200`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-[12px] flex items-center gap-x-1">
                      <AlertCircle size={12} /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Phone & Service row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-y-1">
                  <label className="text-[13px] font-semibold text-black/75 flex items-center gap-x-2">
                    <Phone size={14} /> Phone Number{" "}
                    <span className="text-black/40 text-[11px]">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="border-2 border-gray-200 p-3 text-[14px] focus:outline-none focus:border-red-500 transition duration-200"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <label className="text-[13px] font-semibold text-black/75 flex items-center gap-x-2">
                    <Briefcase size={14} /> Service Type
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="border-2 border-gray-200 p-3 text-[14px] focus:outline-none focus:border-red-500 transition duration-200 bg-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-y-1">
                <label className="text-[13px] font-semibold text-black/75 flex items-center gap-x-2">
                  <MessageSquare size={14} /> Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your project or question..."
                  className={`border-2 ${
                    errors.message ? "border-red-500" : "border-gray-200"
                  } p-3 text-[14px] focus:outline-none focus:border-red-500 transition duration-200 resize-none`}
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-[12px] flex items-center gap-x-1">
                    <AlertCircle size={12} /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit button */}
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="bg-red-500 hover:bg-red-600 disabled:bg-red-400 transition duration-300 text-white font-semibold pt-3 pb-3 px-7 w-fit flex items-center gap-x-2 hover:gap-x-3"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>

              <p className="text-black/50 text-[12px] flex items-center gap-x-2">
                <CheckCircle2 size={12} color="red" />
                Your information is secure and never shared with third parties
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // ====== MAP SECTION ======
  const MapSection = () => {
    return (
      <section
        id="map"
        className="w-full h-fit pt-[5%] pb-[5%] flex justify-center items-center bg-black/2"
      >
        <div className="flex flex-col gap-y-8 items-center w-[90%]">
          <div className="flex flex-col gap-y-2 w-full justify-center items-center">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999]">
              find us
            </h3>
            <h2 className="font-bold text-2xl sm:text-4xl text-black/92 max-w-[550px] text-center">
              Visit our office
            </h2>
            <p className="text-black/60 max-w-[600px] text-center text-[14px] mt-2">
              Stop by our office for a face-to-face consultation, or contact us
              to schedule an on-site visit at your location.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full h-[25em] sm:h-[30em] shadow-2xl overflow-hidden relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.123456789!2d3.4720!3d6.4474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnNTAuNiJOIDPCsDI4JzE5LjIiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office location"
            ></iframe>

            {/* Floating address card */}
            <div className="absolute top-5 left-5 bg-white shadow-2xl p-5 max-w-[280px] hidden sm:block">
              <div className="flex items-start gap-x-3">
                <div className="bg-red-500 p-2 rounded-full flex-shrink-0">
                  <MapPin size={16} color="white" />
                </div>
                <div>
                  <h2 className="font-bold text-black/85 text-[14px]">
                    Electiz HQ
                  </h2>
                  <p className="text-black/60 text-[12px] mt-1">
                    123 Lekki Phase 1
                    <br />
                    Lagos, Nigeria
                  </p>
                  <a
                    href="#"
                    className="text-red-500 font-semibold text-[12px] mt-2 flex items-center gap-x-1 hover:gap-x-2 transition-all duration-300"
                  >
                    Get directions <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  // ====== OFFICE HOURS + DEPARTMENTS ======
  const OfficeInfo = () => {
    const [hours] = useState([
      { day: "Monday - Friday", time: "8:00 AM - 8:00 PM", emergency: false },
      { day: "Saturday", time: "9:00 AM - 6:00 PM", emergency: false },
      { day: "Sunday", time: "Emergency only", emergency: true },
      { day: "Public Holidays", time: "Emergency only", emergency: true },
    ]);

    const [departments] = useState([
      {
        icon: <Headphones size={28} color="red" />,
        h2Val: "General Inquiries",
        pVal: "Questions about our services, pricing, or scheduling",
        contact: "support@electiz.com",
      },
      {
        icon: <Briefcase size={28} color="red" />,
        h2Val: "Sales & Quotes",
        pVal: "Get a custom quote or speak to our sales team",
        contact: "sales@electiz.com",
      },
      {
        icon: <AlertCircle size={28} color="red" />,
        h2Val: "Emergency Line",
        pVal: "24/7 emergency electrical response",
        contact: "+1 (555) 911-HELP",
      },
    ]);

    return (
      <section
        id="hours"
        className="w-full h-fit pt-[5%] pb-[5%] flex justify-center items-center"
      >
        <div className="flex flex-col md:flex-row gap-x-8 gap-y-8 w-[90%]">
          {/* Office hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="md:w-[40%] bg-white shadow-xl p-7 border-b-4 border-red-500"
          >
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999] text-[13px] mb-2">
              office hours
            </h3>
            <h2 className="font-bold text-2xl text-black/90 mb-5">
              When you can reach us
            </h2>
            <div className="flex flex-col gap-y-4">
              {hours.map((h, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-black/75 text-[14px] font-medium">
                    {h.day}
                  </span>
                  <span
                    className={`text-[13px] font-semibold ${
                      h.emergency ? "text-red-500" : "text-black/85"
                    }`}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-5">
              <p className="text-black/75 text-[13px] flex items-start gap-x-2">
                <AlertCircle
                  size={16}
                  color="red"
                  className="flex-shrink-0 mt-0.5"
                />
                <span>
                  <strong>Emergency service available 24/7</strong> for power
                  outages, electrical hazards, and urgent repairs.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Departments */}
          <div className="md:w-[60%] flex flex-col gap-y-4">
            <div className="mb-2">
              <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999] text-[13px] mb-2">
                departments
              </h3>
              <h2 className="font-bold text-2xl text-black/90">
                Reach the right team
              </h2>
            </div>
            {departments.map((dept, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white shadow-lg p-5 flex items-start gap-x-4 group hover:shadow-xl hover:translate-x-2 transition-all duration-300 cursor-pointer border-l-4 border-red-500"
              >
                <div className="bg-red-50 p-3 rounded-full group-hover:bg-red-500 transition duration-300 flex-shrink-0">
                  <div className="group-hover:[&>svg]:stroke-white transition duration-300">
                    {dept.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-black/85 mb-1">{dept.h2Val}</h2>
                  <p className="text-black/60 text-[13px] mb-2">{dept.pVal}</p>
                  <p className="text-red-500 font-semibold text-[14px]">
                    {dept.contact}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="text-red-500 mt-2 group-hover:translate-x-1 transition duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // ====== FAQ SECTION ======
  const ContactFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
      {
        q: "How quickly do you respond to inquiries?",
        a: "We respond to all email inquiries within 24 hours during business days. For phone calls, you'll typically reach a real person right away during office hours.",
      },
      {
        q: "Can I schedule a free consultation?",
        a: "Yes, we offer free on-site consultations for most projects. Just give us a call or fill out the contact form and we'll arrange a convenient time to visit.",
      },
      {
        q: "Do you offer emergency services after hours?",
        a: "Absolutely. Our 24/7 emergency line is always staffed. For genuine electrical emergencies, we typically arrive within 60 to 90 minutes.",
      },
      {
        q: "What information should I include in my message?",
        a: "Briefly describe your project, location, and timeline. If possible, include photos and any specific concerns. The more details you provide, the better we can prepare.",
      },
      {
        q: "Do you serve locations outside Lagos?",
        a: "Our primary service area covers Lagos and surrounding regions. For projects further out, please contact us directly to discuss feasibility and travel arrangements.",
      },
    ];

    return (
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center bg-black/2">
        <div className="flex flex-col md:flex-row justify-between gap-x-10 gap-y-8 w-[90%] h-full">
          <div className="md:w-[40%] flex flex-col gap-y-4 md:sticky md:top-24 md:self-start">
            <h3 className="uppercase font-bold text-red-500 [text-shadow:1px_1px_1px_#999]">
              quick answers
            </h3>
            <h2 className="font-bold text-2xl sm:text-4xl text-black/92">
              Common questions before reaching out
            </h2>
            <p className="text-black/60 text-[14px] leading-7">
              Take a look at the most common questions we receive. If you can't
              find what you need, don't hesitate to send us a message.
            </p>
            <Link
              to=""
              className="bg-red-500 hover:bg-red-600 transition duration-300 text-white pt-2 pb-2 pl-7 pr-7 w-fit mt-2 flex items-center gap-x-2"
            >
              <MessageSquare size={16} /> Send a Message
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
  const ContactCTA = () => {
    return (
      <section className="w-full h-fit pb-[5%] pt-[5%] flex justify-center items-center">
        <div className="flex pl-10 pr-10 p-7 flex-col sm:flex-row justify-between bg-gradient-to-r from-yellow-600 to bg-red-700 gap-y-8 items-center w-[90%] h-full">
          <h2 className="text-black/92 font-bold text-[17px] max-w-[200px] sm:text-2xl sm:max-w-[400px] md:max-w-[500px] md:text-3xl xl:text-4xl xl:max-w-[600px]">
            Got an electrical emergency? We're here 24/7.
          </h2>
          <div className="flex gap-x-3 flex-wrap gap-y-3">
            <a
              href="tel:+15551234567"
              className="pt-2 pb-2 pl-7 pr-7 bg-yellow-400 hover:bg-yellow-600 transition duration-300 font-semibold flex items-center gap-x-2"
            >
              <Phone size={16} /> Call Emergency Line
            </a>
            <a
              href="mailto:support@electiz.com"
              className="pt-2 pb-2 pl-7 pr-7 bg-black hover:bg-gray-800 transition duration-300 font-semibold text-white flex items-center gap-x-2"
            >
              <Mail size={16} /> Email Us
            </a>
          </div>
        </div>
      </section>
    );
  };

  // ====== RENDER ======
  return (
    <>
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <MapSection />
      <OfficeInfo />
      <ContactFAQ />
      <ContactCTA />
    </>
  );
};

export default Contact;
