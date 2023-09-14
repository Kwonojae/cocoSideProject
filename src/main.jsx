import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Introduction from "./pages/Introduction.jsx";
import DessertRanking from "./pages/DessertRanking.jsx";
import InteriorRanking from "./pages/InteriorRanking.jsx";
import DessertDetail from "./pages/DessertDetail.jsx";
import MyPage from "./pages/mypage/MyPage.jsx";
import FavoriteItems from "./pages/FavoriteItems.jsx";
import UnDevelop from "./components/UnDevelop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/introduction", element: <Introduction /> },
      { path: "/dessertranking", element: <DessertRanking /> },
      { path: "/interiorranking", element: <InteriorRanking /> },
      { path: "/dessertdetail/:id", element: <DessertDetail /> },
      { path: "/mypage", element: <MyPage /> },
      { path: "/favorititems", element: <FavoriteItems /> },
      { path: "/undevelop", element: <UnDevelop /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
