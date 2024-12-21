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
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-food",
        element: <AddFood></AddFood>,
      },
      {
        path: "/request-myfood",
        element: <RequestMyFood></RequestMyFood>,
      },
      {
        path: "/manage-myfoods",
        element: <ManageMyFoods></ManageMyFoods>,
      },
    ],
  },
]);
export default router;
