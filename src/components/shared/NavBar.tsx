import { useState, useEffect } from "react";
import { Link } from "react-router";
import DesktopMenu from "../Nav-menus/DesktopMenu";
import MobileMenus from "../Nav-menus/MobileMenus";
import MobileMenuIcons from "../Nav-menus/MobileMenuIcons";
import MobileAvatar from "../Nav-menus/MobileAvatar";

const NavBar = () => {
  // State to handle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("mobile-menu"); // Get the menu
      if (sidebar && !sidebar.contains(event.target as Node)) {
        setIsMobileMenuOpen(false); // Close menu if clicked outside
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="py-4 w-full sticky top-0 z-50 bg-black">
      <div className="flex justify-between items-center max-w-[1170px] px-6 mx-auto">
        <div>
          <Link to="/">
            <h1 className="text-3xl dancing font-bold">Akash Roy</h1>
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
            to={"/contact"}
            className="btn btn-md btn-outline hover:bg-white hover:text-[#323232] text-white rounded-2xl"
          >
            Let's talk
          </Link>
        </div>
      </div>

      {/* Mobile Menu (visible when state is true) */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-0 left-0 h-full bg-[#0F0F0F] text-white w-64 md:w-[500px] z-50 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <MobileAvatar />
        <MobileMenus setIsMobileMenuOpen={setIsMobileMenuOpen}  /> {/* mobile menu items */}
      </div>
    </nav>
  );
};

export default NavBar;
