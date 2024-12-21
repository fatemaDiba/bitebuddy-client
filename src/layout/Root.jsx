import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
