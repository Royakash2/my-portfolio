
import NavBar from "../components/shared/NavBar";
import FooterMain from "../components/shared/FooterMain";
import Loader from "../components/loader/Loader";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../utils/ScrollToTop";
import { Outlet } from "react-router";
 // Add this import

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      initClassName: "aos-init",
       // Required for proper initialization
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      AOS.refresh(); // Refresh AOS after loader finishes
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Add scroll restoration fix
  useEffect(() => {
    if (!loading) {
      window.history.scrollRestoration = "manual";
    }
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-screen-2xl mx-auto relative">
      <ScrollToTop />
      <NavBar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <FooterMain />
    </div>
  );
};

export default MainLayout;