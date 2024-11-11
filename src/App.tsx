import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArtWorkPage from "@pages/ArtWorkPage/ArtWorkPage";
import FavoritesPage from "@pages/FavoritesPage/FavoritesPage";
import HomePage from "@pages/HomePage/HomePage";
import Layout from "@pages/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "artworks/:id",
        element: <ArtWorkPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
