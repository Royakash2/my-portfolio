import React from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import react-icons

interface MobileMenuIconsProps {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
}

const MobileMenuIcons: React.FC<MobileMenuIconsProps> = ({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
}) => {
  return (
    <div className="lg:hidden">
      <button
        onClick={() => {
          setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle menu state
        }}
        className="transition-transform duration-1000 ease-in transform"
      >
        {!isMobileMenuOpen ? (
          // ☰ Hamburger Icon (Open menu)
          <FaBars
            className="text-5xl text-white transform transition-transform duration-1000 ease-in-out"
            style={{
              transform: isMobileMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
            }}
          />
        ) : (
          //  Cross Icon (Close menu)
          <FaTimes
            className="text-5xl transform transition-transform duration-1000 ease-in-out"
            style={{
              transform: isMobileMenuOpen ? "rotate(40deg)" : "rotate(0deg)",
            }}
          />
        )}
      </button>
    </div>
  );
};

export default MobileMenuIcons;
