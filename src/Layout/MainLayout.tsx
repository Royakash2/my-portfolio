import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import FooterMain from "../components/FooterMain";
import Loader from "../components/loader/Loader";
import { useEffect, useState } from "react";

const MainLayout = () => {
  
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1000); // Simulate 3-second loader
      return () => clearTimeout(timer); // Cleanup
    }, []);
  
    if (loading) {
      return <Loader />;
    }
  return (
    <div>
      <NavBar />
      <Outlet />
      <FooterMain />
    </div>
  );
};

export default MainLayout;
