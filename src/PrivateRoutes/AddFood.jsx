import { useContext } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const axiosBase = useAxios();
  const navigate = useNavigate();

  const handleAddFoodBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImg = form.foodImg.value;
    const location = form.location.value;
    const quantity = form.quantity.value;
    const exDate = form.date.value;
    const note = form.note.value;
    const userEmail = user.email;
    const userName = user.displayName;
    const userUrl = user.photoURL;

    if (!foodName || foodName.length < 2) {
      toast.error("Please give valid name!");
      return;
    }

    if (!note || note.length < 10) {
      toast.error("Please give a Summary at least 10 character!");
      return;
    }
    const foodAddFormData = {
      foodName,
      foodImg,
      location,
      quantity,
      exDate,
      note,
      userEmail,
      userName,
      userUrl,
    };

    axiosBase
      .post("/foods/add-food", foodAddFormData)
      .then((res) => console.log(res.data))
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Add food-BiteBuddy</title>
      </Helmet>
      <div className="container md:w-11/12 mx-auto mb-20">
        <div className="card bg-base-100 w-[70%] md:w-[50%] mx-auto shrink-0 shadow-2xl">
          <div className="card-body dark:text-white">
            <h2 className="font-bold text-center text-base md:text-xl">
              Add Your Food Information Now
            </h2>
            <form onSubmit={handleAddFoodBtn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  dark:text-white">Food Name</span>
                </label>
                <input
                  type="text"
                  name="foodName"
                  placeholder="Food name"
                  className="input input-bordered mb-5"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Food Image</span>
                </label>
                <input
                  type="url"
                  name="foodImg"
                  placeholder="food url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  dark:text-white">Food Name</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Pick up location"
                  className="input input-bordered mb-5"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Quantity</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="quantity of food"
                  required
                  className="input input-bordered mb-5"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">
                    Expire Date
                  </span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="expire date and time"
                  required
                  className="input input-bordered mb-5"
                />
              </div>
              <textarea
                placeholder="additional notes"
                name="note"
                className="textarea textarea-bordered textarea-base w-full mt-3"
                required
              ></textarea>

              <div className="form-control mt-6 mb-4">
                <button className="btn bg-purple-500 hover:bg-purple-600 text-white">
                  Add Food
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
