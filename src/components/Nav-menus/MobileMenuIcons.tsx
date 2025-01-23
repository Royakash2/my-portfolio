import React from 'react';

// Define types for the props
interface MobileMenuIconsProps {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
}

const MobileMenuIcons: React.FC<MobileMenuIconsProps> = ({ setIsMobileMenuOpen, isMobileMenuOpen }) => {
  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle logic
        className="transition-transform duration-300 ease-in-out"
      >
        {isMobileMenuOpen ? ( // Conditional rendering based on the state
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 transform transition-transform duration-200 ease-in-out rotate-0"
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
            className="size-10 transform transition-transform duration-300 ease-in-out rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default MobileMenuIcons;
