import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Addcoffe from "./components/Addcoffe.js";
import Updatecoffe from "./components/Updatecoffe.js";
import ErroPage from "./components/ErroPage.js";
import Viewcard from "./components/Viewcard.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage />,
    loader: () => fetch("http://localhost:5000/coffes"),
  },
  {
    path: "/addcoffe",
    element: <Addcoffe />,
  },
  {
    path: "/updatecoffe/:id",
    element: <Updatecoffe />,
    loader: ({ params }) => fetch(`http://localhost:5000/coffes/${params.id}`),
  },
  {
    path: "/coffe/:id",
    element: <Viewcard />,
    loader: ({ params }) => fetch(`http://localhost:5000/coffes/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
