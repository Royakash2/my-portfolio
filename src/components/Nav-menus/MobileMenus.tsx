
import { NavLink } from 'react-router';

const MobileMenus = () => {
    return (
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
          to="/portfolio"
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
    );
};

export default MobileMenus;