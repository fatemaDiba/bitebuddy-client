import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Usection from "./unique/Usection";
import FoodLove from "./unique/FoodLove";

const Home = () => {
  return (
    <div>
      <Helmet>Home-BiteBuddy</Helmet>
      <div>
        <Banner></Banner>
        <FoodLove></FoodLove>
        <Usection></Usection>
      </div>
    </div>
  );
};

export default Home;
