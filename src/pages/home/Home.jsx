import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FoodLove from "./unique/FoodLove";
import FeaturedFoods from "./FeaturedFoods";
import DonationSection from "./unique/DonationSection";

const Home = () => {
  return (
    <div>
      <Helmet>Home-BiteBuddy</Helmet>
      <div>
        <Banner></Banner>
        <FeaturedFoods></FeaturedFoods>
        <FoodLove></FoodLove>
        <DonationSection></DonationSection>
      </div>
    </div>
  );
};

export default Home;
