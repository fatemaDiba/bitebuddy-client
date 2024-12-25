import { useEffect, useState } from "react";
import Card from "../../foodCard/Card";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {
  const [foods, setFoods] = useState([]);
  const axiosBase = useAxios();

  useEffect(() => {
    axiosBase
      .get("/foods/featured-foods")
      .then((res) => setFoods(res.data))
      .catch(() => {
        toast.error("Something Went Wrong");
      });
  }, []);

  return (
    <div className="w-10/12 mx-auto mb-10">
      <div className="mb-10 w-[90%] md:w-[70%] mx-auto text-center ">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center">
          Share a Meal, Share the Love
        </h2>
        <p lassName="text-base w-[70%] mx-auto text-center">
          Your small act of kindness can bring a big smile. Explore our featured
          dishes and contribute to providing meals for those in need. Together,
          we can make a difference, one plate at a time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {foods?.map((food) => {
          return <Card key={food._id} data={food}></Card>;
        })}
      </div>
      <div className="text-center">
        <Link
          to="/available-foods"
          className="btn bg-gradient-to-b from-purple-300 to-pink-300"
        >
          Show All Foods
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFoods;
