import { useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";
import { AuthContext } from "../Auth/AuthProvider";

const ManageMyFoods = () => {
  const [foods, setFoods] = useState([]);
  const axiosBase = useAxios();
  const { user } = useContext(AuthContext);
  const email = user.email;
  useEffect(() => {
    axiosBase
      .post("/foods/manage-myfoods", { email })
      .then((res) => {
        console.log(res.data);
        setFoods(res.data);
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  }, []);
  return (
    <div className="container w-9/12 mx-auto mb-20 mt-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Food Name</th>
              <th>Quantity</th>
              <th>PickUp Location</th>
              <th>Expire Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {foods.map((food, index) => {
              return (
                <tr className="hover" key={food._id}>
                  <th>{index + 1}</th>
                  <td>{food.foodName}</td>
                  <td>{food.quantity}</td>
                  <td>{food.location}</td>
                  <td>{food.exDate}</td>

                  <td>
                    <div className="flex flex-row gap-3">
                      <button className="btn">Update</button>
                      <button className="btn">Delete</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyFoods;
