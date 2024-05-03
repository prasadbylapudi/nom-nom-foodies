import React, { lazy, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
// import RestrauntCard from "./components/RestrauntCard";
import About from "./components/About";
import Contact from "./components/Contact";
// import Cards from "./components/Cards";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
const Cards = lazy(() => import("./components/Cards"));
import UserContext from "./utils/userContext";
import { useContext } from "react";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

function App() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //making
    const userData = {
      name: "prasad",
    };
    setUserName(userData.name);
  }, [userName]);

  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
