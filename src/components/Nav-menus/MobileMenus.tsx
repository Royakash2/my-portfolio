import { FaEnvelope, FaHome, FaProjectDiagram } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { NavLink } from "react-router";

interface MobileMenusProps {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenus: React.FC<MobileMenusProps> = ({ setIsMobileMenuOpen }) => {
  return (
    <div className="flex flex-col items-center text-2xl gap-5">
      <NavLink
        to="/"
        end
        onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
        className={({ isActive }) =>
          isActive
            ? "py-2 text-[#ffff] font-bold"
            : "py-2 text-[#61DBFB] hover:text-[#00D1A0] hover:underline hover:decoration-2 hover:underline-offset-4"
        }
      >
       <span className="flex gap-2 justify-center items-center"> Home <FaHome/></span>
      </NavLink>

      <NavLink
        to="/about"
        onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
        className={({ isActive }) =>
          isActive
            ? "py-2 text-[#ffff] font-bold"
            : "py-2 text-[#61DBFB] hover:text-[#00D1A0] hover:underline hover:decoration-2 hover:underline-offset-4"
        }
      >
        <span className="flex gap-2 justify-center items-center">About <FiInfo/> </span>
      </NavLink>

      <NavLink
        to="/portfolio"
        onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
        className={({ isActive }) =>
          isActive
            ? "py-2 text-[#ffff] font-bold"
            : "py-2 text-[#61DBFB] hover:text-[#00D1A0] hover:underline hover:decoration-2 hover:underline-offset-4"
        }
      >
         <span className="flex gap-2 justify-center items-center">Projects <FaProjectDiagram/> </span>
      </NavLink>

      <NavLink
        to="/contact"
        onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
        className={({ isActive }) =>
          isActive
            ? "py-2 text-[#ffff] font-bold"
            : "py-2 text-[#61DBFB] hover:text-[#00D1A0] hover:underline hover:decoration-2 hover:underline-offset-4"
        }
      >
         <span className="flex gap-2 justify-center items-center">Contact <FaEnvelope/></span>
      </NavLink>
    </div>
  );
};

export default MobileMenus;
