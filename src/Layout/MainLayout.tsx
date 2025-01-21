import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import FooterMain from "../components/FooterMain";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <FooterMain />
    </div>
  );
};

export default MainLayout;
