import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArtWorkPage from "@pages/ArtWorkPage/ArtWorkPage";
import FavoritesPage from "@pages/FavoritesPage/FavoritesPage";
import HomePage from "@pages/HomePage/HomePage";
import Layout from "@pages/Layout/Layout";
import NotFound from "@pages/NotFound/NotFound";
import { FavoritesProvider } from "./context/FavoritesContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFound />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
        errorElement: <NotFound />,
      },
      {
        path: "artworks/:id",
        element: <ArtWorkPage />,
        errorElement: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  );
}

export default App;
