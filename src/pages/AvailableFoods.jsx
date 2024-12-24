import { Helmet } from "react-helmet-async";
import Card from "../foodCard/Card";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";
import Loading from "../loading/Loading";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const axiosBase = useAxios();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosBase
      .get("/foods/available-foods")
      .then((res) => {
        setFoods(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Available foods-BiteBuddy</title>
      </Helmet>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="container w-9/12 mx-auto mb-20 mt-10">
          <div className="flex flex-col justify-center items-center mb-10 dark:text-white">
            <h1 className="text-xl md:text-4xl font-bold mb-2 ">
              Available Foods
            </h1>
            <p className="text-center text-sm md:text-base w-[80%]">
              Explore a variety of available food donations ready for pickup!
              Whether you're looking for homemade meals, fresh bread, or
              delicious fruits, we've got you covered. Check the details, pickup
              locations, and expiration times to claim your food before it's
              gone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {foods?.map((food) => {
              return <Card key={food._id} data={food}></Card>;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableFoods;
