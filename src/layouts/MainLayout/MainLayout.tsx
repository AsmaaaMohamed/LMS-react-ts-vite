import { Footer, Header } from "@components/common";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";

const { wrapper } = styles;
const MainLayout = () => {
  return (
    <div className="app">
      <Header />
      <div className={wrapper}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
