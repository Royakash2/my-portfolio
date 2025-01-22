import { useState } from "react";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  // State to handle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="py-4 w-full sticky top-0 z-50 bg-black">
      <div className="flex justify-between items-center max-w-[1170px] px-4 mx-auto">
        <div>
          <Link to={"/"}>
            <h1 className="text-3xl dancing font-bold">Akash Roy</h1>
          </Link>
        </div>
        {/* desktop menu items */}
        <div className="hidden lg:flex space-x-10 font-semibold">
          <NavLink
            to="/"
            end
            className={
              ({ isActive }) =>
                isActive
                  ? "py-2 text-[#ffff] font-bold" // Active style
                  : "py-2 text-[#484646] hover:text-[#ffff]" // Default style
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "py-2 text-[#ffff] font-bold"
                : "py-2 text-[#484646] hover:text-[#ffff]"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "py-2 text-[#ffff] font-bold"
                : "py-2 text-[#484646] hover:text-[#ffff]"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "py-2 text-[#ffff] font-bold"
                : "py-2 text-[#484646] hover:text-[#ffff]"
            }
          >
            Contact
          </NavLink>
        </div>
        {/* mobile menu icons with open and close logic by use useState hook */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="transition-transform duration-300 ease-in-out"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10 transform transition-transform duration-[800ms] ease-in-out rotate-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10 transform transition-transform duration-[800ms] ease-in-out rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        {/* desktop lets talk nav bar button */}
        <div className="hidden lg:block">
          <Link
            to={"/about"}
            className="btn btn-outline text-sm px-6  hover:bg-white hover:text-[#323232] text-white rounded-2xl"
          >
            Let s talk
          </Link>
        </div>
        {/* mobile menu items */}
        {/* Mobile Menu (visible when state is true) */}
      </div>
      <div
        className={`lg:hidden fixed top-0 left-0 h-full bg-[#0F0F0F] text-white w-64 z-50 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center pt-11 text-2xl gap-5">
          <NavLink
            to="/"
            end
            className={
              ({ isActive }) =>
                isActive
                  ? "py-2 text-[#ffff] font-bold" // Active style
                  : "py-2 text-[#646463] hover:text-[#ffff]" // Default style
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "py-2 text-[#ffff] font-bold"
                : "py-2 text-[#646463] hover:text-[#ffff]"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "py-2 text-[#ffff] font-bold"
                : "py-2 text-[#646463] hover:text-[#ffff]"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "py-2 text-[#ffff] font-bold"
                : "py-2 text-[#646463] hover:text-[#ffff]"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
