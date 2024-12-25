import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Error from "../error/Error";
import Login from "../pages/logReg/Login";
import Register from "../pages/logReg/Register";
import AddFood from "../PrivateRoutes/AddFood";
import RequestMyFood from "../PrivateRoutes/RequestMyFood";
import ManageMyFoods from "../PrivateRoutes/ManageMyFoods";
import AvailableFoods from "../pages/AvailableFoods";
import PrivateRoute from "../PrivateRoutes/private/PrivateRoute";
import PrivateRegLog from "../PrivateRoutes/private/PrivateRegLog";
import FoodDetails from "../pages/FoodDetails";
import UpdateFood from "../PrivateRoutes/UpdateFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/available-foods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/login",
        element: (
          <PrivateRegLog>
            <Login></Login>
          </PrivateRegLog>
        ),
      },
      {
        path: "/register",
        element: (
          <PrivateRegLog>
            <Register></Register>
          </PrivateRegLog>
        ),
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/request-myfood",
        element: (
          <PrivateRoute>
            <RequestMyFood></RequestMyFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-myfoods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/food-details/:id",
        element: <FoodDetails></FoodDetails>,
      },
      {
        path: "/update-food/:id",
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
