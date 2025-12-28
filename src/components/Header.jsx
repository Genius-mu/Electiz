import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="w-full h-[4em] flex justify-center items-center shadow-xl">
        <div className="flex justify-between items-center w-[90%] h-full">
          <h2 className="uppercase font-bold text-2xl [text-shadow:1px_1px_3px_#888]">
            electiz
          </h2>
          <nav className="hidden md:flex justify-center items-center gap-x-5">
            <Link
              to=""
              className="font-semibold hover:text-red-500 transition duration-200"
            >
              Home
            </Link>
            <Link
              to=""
              className="font-semibold hover:text-red-500 transition duration-200"
            >
              About
            </Link>
            <Link
              to=""
              className="font-semibold hover:text-red-500 transition duration-200"
            >
              Service
            </Link>
            <Link
              to=""
              className="font-semibold hover:text-red-500 transition duration-200"
            >
              Project
            </Link>
            <Link
              to=""
              className="font-semibold hover:text-red-500 transition duration-200"
            >
              Pricing
            </Link>
            <Link
              to=""
              className="font-semibold hover:text-red-500 transition duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-red-600 focus:outline-none"
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-[4.5em] left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 gap-4 text-sm font-medium z-40">
            {["Home", "About", "Service", "Project", "Pricing", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-black hover:text-red-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)} // close menu when clicked
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
