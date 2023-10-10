import Footer from "./HomePage/components/Footer/Footer";
import Header from "./HomePage/components/Header/Header";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
