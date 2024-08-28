import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Index } from "./layouts/Index";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import Loading from "./components/Loading";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: `/products/:id`,
          element: <Detail />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/loading",
          element: <Loading />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
