import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./components/Categories/Categories.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import MapView from "./components/MapView/MapView.jsx";
import UserProfile from "./components/ProfileDetails/UserProfile.jsx";
import Registration from "./components/Registration/Registration.jsx";
import Root from "./components/Root/Root.jsx";

import EditAddress from "./components/EditAddress/UpdateAddress.jsx";
import MyLocation from "./components/MyLocation/MyLocation.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { MapProvider } from "./context/mapContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/mylocation",
        element: <MyLocation></MyLocation>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/login:id",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/signup",
        element: <Registration></Registration>,
      },
      {
        path: "/userprofile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/updateaddress",
        element: <EditAddress></EditAddress>,
      },

      // {
      //   path: "/mapview",
      //   element: <MapView></MapView>,
      // },
      {
        path: "/mapview/:category",
        element: <MapView></MapView>,
      },
      {
        path: "/category",
        element: <Categories></Categories>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <MapProvider>
        <RouterProvider router={router} />
      </MapProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
