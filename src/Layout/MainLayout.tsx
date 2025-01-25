import { Outlet } from "react-router";
import NavBar from "../components/shared/NavBar";
import FooterMain from "../components/shared/FooterMain";
import Loader from "../components/loader/Loader";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 900, 
      once: true
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate 3-second loader
    return () => clearTimeout(timer); // Cleanup
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <NavBar />
      <Outlet />
      <FooterMain />
    </div>
  );
};

export default MainLayout;
