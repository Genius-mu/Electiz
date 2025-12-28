import { LocationEditIcon, Mail, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-fit pt-[5%] bg-black/90 pb-[5%] flex justify-center items-center">
        <div className="flex justify-between w-[90%] gap-y-9 h-full md:flex-row flex-wrap md:flex-nowrap">
          <div className="flex flex-col gap-y-5">
            <h2 className="lowercase font-bold text-2xl text-white">Electiz</h2>
            <p className="text-white max-w-[300px]">
              Lorem ipsum dolor sit amet elit. Eaque, adipisci nam illo unde
              fugit saepe cumque voluptates, deleniti sint officia eos dicta
              alias, cum harum minus praesentium!
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <h2 className="font-bold text-2xl text-white">Company</h2>
            <nav className="flex flex-col gap-y-1">
              <Link
                to=""
                className="text-white hover:text-yellow-300 transition duration-200"
              >
                About Us
              </Link>
              <Link
                to=""
                className="text-white hover:text-yellow-300 transition duration-200"
              >
                Leadership
              </Link>
              <Link
                to=""
                className="text-white hover:text-yellow-300 transition duration-200"
              >
                Careers
              </Link>
              <Link
                to=""
                className="text-white hover:text-yellow-300 transition duration-200"
              >
                Article and News
              </Link>
              <Link
                to=""
                className="text-white hover:text-yellow-300 transition duration-200"
              >
                Legal Notice
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-y-3">
            <h2 className="font-bold text-2xl text-white">Support</h2>
            <nav className="flex flex-col gap-y-1">
              <Link
                to=""
                className="text-white hover:text-yellow-300 transition duration-200"
              >
                Service Request
              </Link>
              <Link
                to=""
                className="text-white hover:text-yellow-300 transition duration-200"
              >
                FAQ
              </Link>
              <Link
                to=""
                className="text-white hover:text-yellow-300 transition duration-200"
              >
                Consultations
              </Link>
              <Link
                to=""
                className="text-white hover:text-yellow-300 transition duration-200"
              >
                Ticket Support
              </Link>
              <Link
                to=""
                className="text-white hover:text-yellow-300 transition duration-200"
              >
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-y-3">
            <h2 className="font-bold text-2xl text-white">Contact Us</h2>
            <nav className="flex flex-col justify-start gap-y-2">
              <span className="flex gap-x-2">
                <LocationEditIcon size={20} color="yellow" />
                <Link
                  to="mailto:adegbitemustapha73@gmail.com"
                  className="text-white hover:text-yellow-300 transition duration-200"
                >
                  Abule-Egba, Lagos, Nigeria
                </Link>
              </span>
              <span className="flex gap-x-2">
                <Mail size={20} color="yellow" />
                <Link
                  to="mailto:adegbitemustapha73@gmail.com"
                  className="text-white hover:text-yellow-300 transition duration-200"
                >
                  mustapha@gmail.com
                </Link>
              </span>
              <span className="flex gap-x-2">
                <Phone size={20} color="yellow" />
                <Link
                  to="08020666256"
                  className="text-white hover:text-yellow-300 transition duration-200"
                >
                  08020666256
                </Link>
              </span>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
