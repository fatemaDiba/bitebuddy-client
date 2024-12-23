import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Helmet>Home-BiteBuddy</Helmet>
      <div>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
