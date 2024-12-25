import { useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";

const RequestMyFood = () => {
  const [foods, setFoods] = useState([]);
  const axiosBase = useAxios();
  const { user } = useContext(AuthContext);
  const email = user.email;

  useEffect(() => {
    axiosBase
      .post("/foods/requested-foods", { email })
      .then((res) => {
        setFoods(res.data);
      })
      .catch(() => {
        toast.error("Something went Wrong!");
      });
  }, []);
  return (
    <div className="container w-10/12 mx-auto mb-20 mt-10 bg-pink-100 px-14 py-5 rounded-2xl">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold text-base text-black/70 mb-5">
              <th></th>
              <th>Food Name</th>
              <th>PickUp Location</th>
              <th>Note</th>
              <th>Donner Name</th>
              <th>Expire Date</th>
              <th>Request Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {foods?.map((food, index) => {
              return (
                <tr className="hover" key={food._id}>
                  <th>{index + 1}</th>
                  <td>{food.foodName}</td>
                  <td>{food.location}</td>
                  <td>{food.note}</td>
                  <td>{food.donner}</td>
                  <td>{food.exDate}</td>
                  <td>{food.currentDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestMyFood;
