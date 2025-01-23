import { NavLink } from "react-router";

const DesktopMenu = () => {
  return (
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
        to="/portfolio"
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
  );
};

export default DesktopMenu;
