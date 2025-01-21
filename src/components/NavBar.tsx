import { useState } from "react";
import { Link } from "react-router";

const NavBar = () => {
  // State to handle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
  
    <nav className="py-4 w-full fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center max-w-[1170px] px-4 mx-auto">
        <div>
          <Link to={"/"}>
            <h1 className="text-4xl">RoyA</h1>
          </Link>
        </div>
        {/* desktop menu items */}
        <div className="hidden lg:flex space-x-10 font-semibold">
          <Link to={"/"}>Home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Projects"}>Projects</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>

        {/* mobile menu icons with open and close logic by use useState hook */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
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
                className="size-10"
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
          <button className="btn w-32 bg-[#323232] text-white rounded-2xl">
            Let s talk
          </button>
        </div>
        {/* mobile menu items */}
        <div className="lg:hidden">

        </div>

      </div>
    </nav>
  );
};

export default NavBar;
