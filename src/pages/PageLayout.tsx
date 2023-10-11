import Footer from "./HomePage/components/Footer/Footer";
import Header from "./HomePage/components/Header/Header";
import { Outlet } from "react-router-dom";

const PageLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default PageLayout;
