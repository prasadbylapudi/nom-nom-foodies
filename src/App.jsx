import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
// import RestrauntCard from "./components/RestrauntCard";
import About from "./components/About";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Cards />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu  />,
      },
    ],
  },
]);

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
