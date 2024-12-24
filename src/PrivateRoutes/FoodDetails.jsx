import { Helmet } from "react-helmet-async";

const FoodDetails = () => {
  return (
    <div>
      <Helmet>
        <title>Food Details-BiteBuddy</title>
      </Helmet>
      <div className="container w-10/12 mx-auto mb-20">
        <div className="p-10 bg-base-200 rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              src="https://i.ibb.co.com/tpScG1F/t.png"
              className="w-[50%] rounded-lg shadow-2xl"
            />
            <div className="space-y-3  dark:text-white">
              <h1 className="text-xl md:text-3xl text-black  dark:text-white font-bold mb-5">
                Fresh Bread
              </h1>
              <p className=" text-base md:text-lg font-semibold">
                Food Id:
                <span className="font-semibold ml-2 text-sm md:text-base">
                  101
                </span>
              </p>
              <ul>
                <p className="text-base md:text-lg font-semibold">Donner:</p>
                <li className="font-semibold ml-2 text-sm md:text-base">
                  janesmith@example.com
                </li>
                <li className="font-semibold ml-2 text-sm md:text-base">
                  Jane Smith
                </li>
              </ul>
              <p className="text-base md:text-lg font-semibold">
                User Email:
                <span className="font-semibold ml-2  text-sm md:text-base">
                  fatematabassum@gmail.com
                </span>
              </p>
              <p className="text-base md:text-lg font-semibold">
                Request Time:
                <span className="font-semibold ml-2  text-sm md:text-base">
                  2024-12-25T15:00:00
                </span>
              </p>
              <p className="text-base md:text-lg font-semibold">
                PickUp Location:
                <span className="font-semibold ml-2  text-sm md:text-base">
                  45 Market Lane, Townville
                </span>
              </p>
              <p className="text-base md:text-lg font-semibold">
                Expire Date:
                <span className="font-semibold ml-2  text-sm md:text-base">
                  2024-12-25T15:00:00
                </span>
              </p>
              <p className="text-base md:text-lg font-semibold">
                Note:
                <span className="font-semibold ml-2 text-sm md:text-base">
                  Homemade sourdough. Best before tomorrow.
                </span>
              </p>
              <div className="flex flex-col md:flex-row gap-5 flex-wrap pt-10 ">
                <button className="btn btn-primary  dark:text-white">
                  Request Food
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
