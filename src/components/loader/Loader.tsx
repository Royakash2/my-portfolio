import React from "react";
import "./Loader.css"; // Add custom loader styles

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="flex w-[50%] h-[50%] flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
        <div className="skeleton h-32 w-full"></div>
      </div>
      <div className="spinner"></div>
      <h2 className="mt-3">Wait a sec ....</h2>
    </div>
  );
};

export default Loader;
