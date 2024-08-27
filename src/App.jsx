import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Index } from "./layouts/Index";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
