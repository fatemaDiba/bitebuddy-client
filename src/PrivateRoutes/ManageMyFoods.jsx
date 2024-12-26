import { useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";
import { AuthContext } from "../Auth/AuthProvider";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "../loading/Loading";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageMyFoods = () => {
  // const [foods, setFoods] = useState([]);
  const axiosBase = useAxios();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const email = user.email;

  const queryClient = useQueryClient();

  const {
    data: foods = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["manageMyFoods", email],
    queryFn: async () => {
      const response = await axiosSecure.post("/foods/manage-myfoods", {
        email,
      });
      return response.data;
    },
  });

  const deleteFood = async (id) => {
    const response = await axiosSecure.delete(`/foods/available-foods/${id}`);
    return response.data;
  };

  const deleteMutation = useMutation({
    mutationFn: deleteFood,
    onSuccess: (data, id) => {
      toast.success("Successfully deleted food!");
      queryClient.setQueryData(["manageMyFoods", email], (oldFoods = []) =>
        oldFoods.filter((food) => food._id !== id)
      );
    },
    onError: () => {
      toast.error("Failed to delete food!");
    },
  });

  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(
  //         `https://visa-navigator-fawn.vercel.app/application/my-applications/${id}`,
  //         {
  //           method: "DELETE",
  //         }
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.deletedCount) {
  //             Swal.fire({
  //               title: "Deleted!",
  //               text: "Your Application has been Canceled.",
  //               icon: "success",
  //             });
  //             const remApplications = applications.filter(
  //               (item) => item._id !== id
  //             );
  //             setApplications(remApplications);
  //           }
  //         })
  //         .catch((err) => toast.error("Something Went Wrong!"));
  //     }
  //   });
  // };

  const handleDeleteBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
      }
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="text-center mt-10">
        <p>Failed to load foods!</p>
      </div>
    );
  }

  // const handleDeleteBtn = (id) => {
  //   axiosBase
  //     .delete(`/foods/available-foods/${id}`)
  //     .then((res) => {
  //       if (res.data.deletedCount) {
  //         const remainingFoods = foods.filter((food) => food._id !== id);
  //         setFoods(remainingFoods);
  //         toast.success("Successfully deleted food");
  //       }
  //     })
  //     .catch(() => {
  //       toast.error("Something went wrong");
  //     });
  // };

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
