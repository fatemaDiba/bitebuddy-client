import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Usection from "./unique/Usection";
import FoodLove from "./unique/FoodLove";
import FeaturedFoods from "./FeaturedFoods";

const Home = () => {
  return (
    <div>
      <Helmet>Home-BiteBuddy</Helmet>
      <div>
        <Banner></Banner>
        <FeaturedFoods></FeaturedFoods>
        <FoodLove></FoodLove>
        <Usection></Usection>
      </div>
    </div>
  );
};

export default Home;
