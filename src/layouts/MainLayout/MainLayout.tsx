import { Footer, Header } from "@components/common";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="app">
      <Header />
      <div className="wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
