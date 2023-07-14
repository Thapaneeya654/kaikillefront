import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Loginpage";
import Register from "../pages/Registerpage";
import Addplace from "../pages/Addplacepage";
import Homepage from "../pages/Homepage";
//import Favoriteplace from "../pages/Favoriteplacepage";
//import Detailplace from "../pages/Detailplacepage";
import Rankingplace from "../pages/Rankingplacepage";
import Editinfouser from "../pages/Editinfouserpage";
import Layout from "../components/layout/Layout";
import ProtectedRoute from "../components/layout/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",

    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/homepage",
        element: <Homepage />,
      },
      {
        path: "/addplace",
        element: <Addplace />,
      },

      {
        path: "/rankingplace",
        element: <Rankingplace />,
      },
      {
        path: "/editinfomation",
        element: <Editinfouser />,
      },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
