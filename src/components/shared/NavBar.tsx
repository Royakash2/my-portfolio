import { useState } from "react";
import { Link } from "react-router";
import DesktopMenu from "../Nav-menus/DesktopMenu";
import MobileMenus from "../Nav-menus/MobileMenus";
import MobileMenuIcons from "../Nav-menus/MobileMenuIcons";

const NavBar = () => {
  // State to handle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="py-4 w-full sticky top-0 z-50 bg-black">
      <div className="flex justify-between items-center max-w-[1170px] px-4 mx-auto">
        <div>
          <Link to="/">
            <h1 className="text-3xl dancing font-bold text-[#FFC107]">Akash Roy</h1>
          </Link>
        </div>
        <DesktopMenu /> {/* desktop menu items */}
        {/* mobile menu icons with open and close logic by use useState hook */}
        <MobileMenuIcons
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        {/* desktop lets talk nav bar button */}
        <div className="hidden lg:block">
          <Link
            to={"/about"}
            className="btn btn-md btn-outline hover:bg-white hover:text-[#323232] text-white rounded-2xl"
          >
            Let s talk
          </Link>
        </div>
      </div>

      {/* Mobile Menu (visible when state is true) */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full bg-[#0F0F0F] text-white w-64 md:w-[500px] z-50 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <MobileMenus /> {/* mobile menu items */}
      </div>
    </nav>
  );
};

export default NavBar;