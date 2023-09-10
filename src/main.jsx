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
import SignUpChoiceModal from "./components/modal/SignUpChoiceModal.jsx";
import SignUpModal from "./components/modal/SignUpModal.jsx";
import MyPage from "./pages/mypage/MyPage.jsx";

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
      { path: "/signupchoice", element: <SignUpChoiceModal /> },
      { path: "/signup", element: <SignUpModal /> },
      { path: "/mypage", element: <MyPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
