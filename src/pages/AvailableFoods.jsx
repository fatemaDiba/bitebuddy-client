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
  const [query, setQuery] = useState("");
  const [grid, setGrid] = useState(true);

  const handleSearch = (e) => {
    const query = e.target.value;
    setQuery(query);
  };

  const handleLayout = () => {
    setGrid(!grid);
  };

  const filteredFood = foods.filter((food) => {
    return food.foodName.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    setLoading(true);
    axiosBase
      .get("/foods/available-foods")
      .then((res) => {
        setFoods(res.data);
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
          <div className="flex md:flex-row flex-col gap-10 items-center justify-center mb-14">
            {/* search bar */}
            <div className="w-[70%] md:w-[40%]">
              <label className="input input-bordered dark:border-white/50 flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Search"
                  onChange={handleSearch}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <div>
              <button
                onClick={handleLayout}
                className="btn bg-gradient-to-b from-purple-300 to-pink-200"
              >
                Change Layout
              </button>
            </div>
          </div>
          <div
            className={`grid grid-cols-1 ${
              grid ? "md:grid-cols-3" : "md:grid-cols-2"
            } gap-6`}
          >
            {filteredFood?.map((food) => {
              return <Card key={food._id} data={food}></Card>;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableFoods;
