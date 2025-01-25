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
              : "py-2 text-[#61DBFB] hover:text-[#00D1A0] hover:underline hover:decoration-2 hover:underline-offset-4" // Default style
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "py-2 text-[#ffff] font-bold"
            : "py-2 text-[#61DBFB] hover:text-[#00D1A0] hover:underline hover:decoration-2 hover:underline-offset-4"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          isActive
            ? "py-2 text-[#ffff] font-bold"
            : "py-2 text-[#61DBFB] hover:text-[#00D1A0] hover:underline hover:decoration-2 hover:underline-offset-4"
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "py-2 text-[#ffff] font-bold"
            : "py-2 text-[#61DBFB] hover:text-[#00D1A0] hover:underline hover:decoration-2 hover:underline-offset-4"
        }
      >
        Contact
      </NavLink>
    </div>
  );
};

export default DesktopMenu;
