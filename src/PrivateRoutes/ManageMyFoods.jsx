import { useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";
import { AuthContext } from "../Auth/AuthProvider";
import { Link } from "react-router-dom";

const ManageMyFoods = () => {
  const [foods, setFoods] = useState([]);
  const axiosBase = useAxios();
  const { user } = useContext(AuthContext);
  const email = user.email;
  useEffect(() => {
    axiosBase
      .post("/foods/manage-myfoods", { email })
      .then((res) => {
        setFoods(res.data);
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  }, []);

  const handleDeleteBtn = (id) => {
    axiosBase
      .delete(`/foods/available-foods/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          const remainingFoods = foods.filter((food) => food._id !== id);
          setFoods(remainingFoods);
          toast.success("Successfully deleted food");
        }
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="container w-10/12 mx-auto mb-20 mt-10  bg-pink-100 px-14 py-5 rounded-2xl">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold text-base text-black/70 mb-5">
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
                      <Link
                        to={`/update-food/${food._id}`}
                        className="btn bg-blue-200 border border-black/50"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDeleteBtn(food._id)}
                        className="btn  bg-blue-200 border border-black/50"
                      >
                        Delete
                      </button>
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
